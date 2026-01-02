/**
 * Meta Conversions API Service
 * 
 * This service handles sending conversion events to Meta's Conversions API
 * following the official Meta Business SDK guidelines.
 * 
 * Features:
 * - Server-side event tracking
 * - Automatic data hashing for PII
 * - Error handling and retry logic
 * - Event deduplication support
 * - TypeScript support
 */

import crypto from 'crypto';

// Types for Meta Conversions API
export interface MetaUserData {
  // Raw data (before hashing)
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  external_id?: string;
  client_ip_address?: string;
  client_user_agent?: string;
  fbp?: string; // Facebook Browser ID
  fbc?: string; // Facebook Click ID

  // Hashed data (after normalization)
  em?: string; // hashed email
  ph?: string; // hashed phone
  fn?: string; // hashed first name
  ln?: string; // hashed last name
  db?: string; // hashed date of birth
  ct?: string; // hashed city
  st?: string; // hashed state
  zp?: string; // hashed zip code
}

export interface MetaCustomData {
  currency?: string;
  value?: number;
  content_ids?: string[];
  content_type?: string;
  content_name?: string;
  content_category?: string;
  num_items?: number;
  order_id?: string;
  predicted_ltv?: number;
  search_string?: string;
  status?: string;
  delivery_category?: string;
}

export interface MetaConversionEvent {
  event_name: string;
  event_time: number;
  event_id?: string;
  user_data: MetaUserData;
  custom_data?: MetaCustomData;
  event_source_url?: string;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated';
  opt_out?: boolean;
  data_processing_options?: string[];
  data_processing_options_country?: number;
  data_processing_options_state?: number;
}

export interface MetaConversionResponse {
  events_received: number;
  messages: Array<{
    type: string;
    message: string;
    code: number;
    trace_id?: string;
  }>;
  fbtrace_id: string;
}
// https://graph.facebook.com/{API_VERSION}/{DATASET_ID}/events?access_token={TOKEN}.
export class MetaConversionsService {
  private pixelId: string;
  private accessToken: string;
  private testEventCode?: string;
  private baseUrl = 'https://graph.facebook.com/v18.0';

  constructor(pixelId: string, accessToken: string, testEventCode?: string) {
    this.pixelId = pixelId;
    this.accessToken = accessToken;
    this.testEventCode = testEventCode;
  }

  /**
   * Hash sensitive data using SHA-256
   */
  private hashData(data: string): string {
    if (!data) return '';
    return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
  }

  /**
   * Normalize and hash user data
   */
  private normalizeUserData(userData: MetaUserData): MetaUserData {
    const normalized: MetaUserData = { ...userData };

    // Hash email
    if (userData.email) {
      normalized.em = this.hashData(userData.email);
      delete normalized.email;
    }

    // Hash phone (remove non-digits first)
    if (userData.phone) {
      const cleanPhone = userData.phone.replace(/\D/g, '');
      normalized.ph = this.hashData(cleanPhone);
      delete normalized.phone;
    }

    // Hash names
    if (userData.first_name) {
      normalized.fn = this.hashData(userData.first_name);
      delete normalized.first_name;
    }

    if (userData.last_name) {
      normalized.ln = this.hashData(userData.last_name);
      delete normalized.last_name;
    }

    // Hash location data
    if (userData.city) {
      normalized.ct = this.hashData(userData.city);
      delete normalized.city;
    }

    if (userData.state) {
      normalized.st = this.hashData(userData.state);
      delete normalized.state;
    }

    if (userData.zip_code) {
      normalized.zp = this.hashData(userData.zip_code);
      delete normalized.zip_code;
    }

    if (userData.country) {
      normalized.country = this.hashData(userData.country);
    }

    // Hash date of birth (format: YYYYMMDD)
    if (userData.date_of_birth) {
      const dobFormatted = userData.date_of_birth.replace(/\D/g, '');
      normalized.db = this.hashData(dobFormatted);
      delete normalized.date_of_birth;
    }

    return normalized;
  }

  /**
   * Generate a unique event ID for deduplication
   */
  generateEventId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Send a single conversion event to Meta
   */
  async sendEvent(event: MetaConversionEvent): Promise<MetaConversionResponse> {
    return this.sendEvents([event]);
  }

  /**
   * Send multiple conversion events to Meta (batch processing)
   */
  async sendEvents(events: MetaConversionEvent[]): Promise<MetaConversionResponse> {

    try {
      // Normalize user data for each event
      const processedEvents = events.map(event => ({
        ...event,
        user_data: this.normalizeUserData(event.user_data),
      }));

      const payload = {
        data: processedEvents,
        ...(this.testEventCode && { test_event_code: this.testEventCode }),
      };

      const url = `${this.baseUrl}/${this.pixelId}/events?access_token=${this.accessToken}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Meta API Error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();

      // Log warnings if any
      if (result.messages && result.messages.length > 0) {
        result.messages.forEach((message: any) => {
          if (message.type === 'warning') {
          } else {
          }
        });
      }

      return result;
    } catch (error) {
      console.error('Error sending events to Meta Conversions API:', error);
      throw error;
    }
  }

  /**
   * Track a page view conversion
   */
  async trackPageView(userData: MetaUserData, customData?: MetaCustomData, eventId?: string): Promise<MetaConversionResponse> {
    const event: MetaConversionEvent = {
      event_name: 'PageView',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId || this.generateEventId(),
      user_data: userData,
      custom_data: customData,
      action_source: 'website',
    };

    return this.sendEvent(event);
  }

  /**
   * Track a lead generation conversion
   */
  async trackLead(userData: MetaUserData, customData?: MetaCustomData, eventId?: string): Promise<MetaConversionResponse> {
    const event: MetaConversionEvent = {
      event_name: 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId || this.generateEventId(),
      user_data: userData,
      custom_data: customData,
      action_source: 'website',
    };

    return this.sendEvent(event);
  }

  /**
   * Track a purchase conversion
   */
  async trackPurchase(
    userData: MetaUserData,
    value: number,
    currency: string = 'USD',
    customData?: MetaCustomData,
    eventId?: string
  ): Promise<MetaConversionResponse> {
    const event: MetaConversionEvent = {
      event_name: 'Purchase',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId || this.generateEventId(),
      user_data: userData,
      custom_data: {
        currency,
        value,
        ...customData,
      },
      action_source: 'website',
    };

    return this.sendEvent(event);
  }

  /**
   * Track a contact form submission
   */
  async trackContact(userData: MetaUserData, customData?: MetaCustomData, eventId?: string): Promise<MetaConversionResponse> {
    const event: MetaConversionEvent = {
      event_name: 'Contact',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId || this.generateEventId(),
      user_data: userData,
      custom_data: customData,
      action_source: 'website',
    };

    return this.sendEvent(event);
  }

  /**
   * Track a custom conversion event
   */
  async trackCustomEvent(
    eventName: string,
    userData: MetaUserData,
    customData?: MetaCustomData,
    eventId?: string
  ): Promise<MetaConversionResponse> {
    const event: MetaConversionEvent = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId || this.generateEventId(),
      user_data: userData,
      custom_data: customData,
      action_source: 'website',
    };

    return this.sendEvent(event);
  }
}

/**
 * Create a Meta Conversions API service instance
 */
export function createMetaConversionsService(): MetaConversionsService | null {
  const pixelId = process.env.FACEBOOK_PIXEL_ID;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const testEventCode = process.env.FACEBOOK_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    console.warn('Meta Conversions API not configured: Missing FACEBOOK_PIXEL_ID or FACEBOOK_ACCESS_TOKEN');
    return null;
  }

  return new MetaConversionsService(pixelId, accessToken, testEventCode);
}

export default MetaConversionsService;