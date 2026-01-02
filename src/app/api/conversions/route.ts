/**
 * Meta Conversions API Route
 * 
 * Next.js API route to handle conversion events from the frontend
 * and send them to Meta's Conversions API.
 * 
 * POST /api/conversions
 */

import { NextRequest, NextResponse } from 'next/server';
import { createMetaConversionsService, type MetaConversionEvent } from '@/services/api/metaConversions';

export async function POST(request: NextRequest) {

  try {
    // Initialize the Meta Conversions service
    const metaService = createMetaConversionsService();

    if (!metaService) {
      console.error('❌ API Route: Meta Conversions service not configured');
      return NextResponse.json(
        {
          error: 'Meta Conversions API not configured',
          message: 'Missing required environment variables'
        },
        { status: 500 }
      );
    }


    // Parse the request body
    const body = await request.json();

    const { events, event } = body;

    // Validate request
    if (!events && !event) {
      return NextResponse.json(
        {
          error: 'Bad Request',
          message: 'Either "events" array or single "event" object is required'
        },
        { status: 400 }
      );
    }

    // Handle single event or multiple events
    const eventsToSend: MetaConversionEvent[] = events || [event];

    // Validate each event
    for (const evt of eventsToSend) {
      if (!evt.event_name || !evt.user_data || !evt.action_source) {
        console.error('❌ API Route: Invalid event data:', evt);
        return NextResponse.json(
          {
            error: 'Bad Request',
            message: 'Each event must have event_name, user_data, and action_source'
          },
          { status: 400 }
        );
      }
    }

    // Add server-side data enrichment
    const enrichedEvents = eventsToSend.map(evt => ({
      ...evt,
      event_time: evt.event_time || Math.floor(Date.now() / 1000),
      event_id: evt.event_id || metaService.generateEventId(),
      user_data: {
        ...evt.user_data,
        client_ip_address: evt.user_data.client_ip_address || getClientIP(request),
        client_user_agent: evt.user_data.client_user_agent || request.headers.get('user-agent') || undefined,
      },
      event_source_url: evt.event_source_url || request.headers.get('referer') || undefined,
    }));

    // Send events to Meta
    const result = await metaService.sendEvents(enrichedEvents);

    // Return success response
    return NextResponse.json({
      success: true,
      events_received: result.events_received,
      fbtrace_id: result.fbtrace_id,
      messages: result.messages,
    });

  } catch (error) {
    console.error('Error in conversions API route:', error);

    return NextResponse.json(
      {
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

/**
 * Extract client IP address from request
 */
function getClientIP(request: NextRequest): string {
  // Check various headers for IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, get the first one
    return forwarded.split(',')[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback - this might not be accurate in production
  return request.ip || '127.0.0.1';
}

// Only allow POST method
export async function GET() {
  return NextResponse.json(
    {
      error: 'Method Not Allowed',
      message: 'This endpoint only accepts POST requests'
    },
    { status: 405 }
  );
}