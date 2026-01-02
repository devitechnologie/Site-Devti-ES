# Meta Conversions API Implementation Guide

This document provides a complete guide for implementing Meta's Conversions API in your Next.js application. The implementation follows Meta's official documentation and best practices for server-side event tracking.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation & Setup](#installation--setup)
4. [Configuration](#configuration)
5. [Basic Usage](#basic-usage)
6. [Advanced Usage](#advanced-usage)
7. [Integration Examples](#integration-examples)
8. [Testing](#testing)
9. [Troubleshooting](#troubleshooting)
10. [Best Practices](#best-practices)

## Overview

The Meta Conversions API allows you to send web events directly from your server to Meta, providing:

- **Better Signal Quality**: More reliable than browser-based tracking
- **Data Control**: Full control over what data you send and when
- **Privacy Compliance**: Proper handling of user consent and data privacy
- **Redundant Tracking**: Works alongside the Meta Pixel for maximum coverage

### Features Implemented

- ✅ Server-side event tracking
- ✅ Automatic data hashing (PII protection)
- ✅ Event deduplication support
- ✅ React hooks for easy integration
- ✅ Context provider for app-wide configuration
- ✅ TypeScript support
- ✅ Error handling and retry logic
- ✅ Cookie consent integration
- ✅ Automatic page view tracking
- ✅ Form tracking utilities

## Prerequisites

Before implementing the Conversions API, ensure you have:

1. **Meta Business Manager Account**
2. **Meta Pixel created and configured**
3. **System User with appropriate permissions**
4. **Access Token** (generated from Business Manager)

### Required Meta Setup

1. Go to [Meta Business Manager](https://business.facebook.com/)
2. Navigate to **System Users** and create a new system user
3. Assign permissions:
   - `ads_management` or `business_management`
   - `pages_read_engagement`
   - `ads_read`
4. Generate an access token for your pixel
5. Note your Pixel ID from Events Manager

## Installation & Setup

### 1. Environment Configuration

Copy the environment variables from `.env.example`:

```bash
# Copy example environment file
cp .env.example .env.local
```

Update `.env.local` with your Meta credentials:

```bash
# Required: Your Meta Pixel ID
FACEBOOK_PIXEL_ID=your_pixel_id_here

# Required: System User Access Token
FACEBOOK_ACCESS_TOKEN=your_access_token_here

# Optional: Test Event Code (for testing)
FACEBOOK_TEST_EVENT_CODE=TEST12345

# Public Pixel ID (same as FACEBOOK_PIXEL_ID)
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id_here
```

### 2. App Integration

Wrap your app with the ConversionTrackerProvider:

```tsx
// app/layout.tsx or pages/_app.tsx
import { ConversionTrackerProvider } from "@/components/ConversionTrackerProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConversionTrackerProvider
          config={{
            enabled: true,
            debug: process.env.NODE_ENV === "development",
            autoTrackPageViews: true,
            respectCookieConsent: true,
          }}
        >
          {children}
        </ConversionTrackerProvider>
      </body>
    </html>
  );
}
```

## Configuration

### ConversionTrackerProvider Options

```tsx
interface ConversionTrackerConfig {
  enabled?: boolean; // Enable/disable tracking (default: true)
  debug?: boolean; // Debug logging (default: dev mode)
  autoTrackPageViews?: boolean; // Auto-track page views (default: true)
  respectDoNotTrack?: boolean; // Respect DNT header (default: true)
  respectCookieConsent?: boolean; // Respect cookie consent (default: true)
  cookieConsentKey?: string; // LocalStorage key for consent (default: 'cookie_consent')
}
```

## Basic Usage

### Using React Hooks

```tsx
import { useMetaConversions } from "@/hooks/useMetaConversions";

function MyComponent() {
  const { trackLead, trackPurchase, trackContact } = useMetaConversions();

  const handleFormSubmit = async (formData) => {
    // Track a lead conversion
    await trackLead({
      email: formData.email,
      phone: formData.phone,
      first_name: formData.firstName,
      last_name: formData.lastName,
    });
  };

  const handlePurchase = async (orderData) => {
    // Track a purchase conversion
    await trackPurchase(
      {
        email: orderData.customerEmail,
        phone: orderData.customerPhone,
      },
      orderData.total,
      "USD",
      {
        order_id: orderData.orderId,
        num_items: orderData.items.length,
      }
    );
  };

  return (
    <div>
      <button onClick={handleFormSubmit}>Submit Lead Form</button>
      <button onClick={handlePurchase}>Complete Purchase</button>
    </div>
  );
}
```

### Using Specialized Hooks

```tsx
import {
  useLeadTracking,
  useEcommerceTracking,
} from "@/hooks/useMetaConversions";

function LeadForm() {
  const { generateLead, requestQuote } = useLeadTracking();

  const handleSubmit = async (data) => {
    await generateLead(
      {
        email: data.email,
        phone: data.phone,
      },
      "website_form",
      "homepage"
    );
  };
}

function ProductPage() {
  const { viewProduct, startCheckout } = useEcommerceTracking();

  useEffect(() => {
    // Track product view
    viewProduct("product_123", "Awesome Product", "Electronics", 99.99);
  }, []);
}
```

### Direct API Usage

```tsx
import { getConversionTracker } from "@/utils/conversionTracker";

const tracker = getConversionTracker();

// Track custom events
await tracker.trackCustomEvent(
  "Newsletter_Signup",
  {
    email: "user@example.com",
  },
  {
    content_name: "monthly_newsletter",
  }
);
```

## Advanced Usage

### Context Provider Usage

```tsx
import { useConversionContext } from "@/components/ConversionTrackerProvider";

function MyComponent() {
  const { isEnabled, hasConsent, setConsent, trackLead } =
    useConversionContext();

  const handleConsentChange = (consent: boolean) => {
    setConsent(consent);
  };

  if (!isEnabled || !hasConsent) {
    return <div>Tracking disabled</div>;
  }

  return <div>Tracking enabled</div>;
}
```

### Cookie Consent Integration

```tsx
import { CookieConsentManager } from "@/components/ConversionTrackerProvider";

function App() {
  return (
    <ConversionTrackerProvider>
      <CookieConsentManager
        onAccept={() => console.log("Consent accepted")}
        onDecline={() => console.log("Consent declined")}
      />
      <YourAppContent />
    </ConversionTrackerProvider>
  );
}
```

### Server-Side Usage

```tsx
// pages/api/custom-conversion.ts
import { createMetaConversionsService } from "@/services/api/metaConversions";

export default async function handler(req, res) {
  const metaService = createMetaConversionsService();

  if (!metaService) {
    return res.status(500).json({ error: "Service not configured" });
  }

  await metaService.trackLead({
    email: req.body.email,
    phone: req.body.phone,
  });

  res.json({ success: true });
}
```

## Integration Examples

### Contact Form

```tsx
import { useFormTracking } from "@/hooks/useMetaConversions";

function ContactForm() {
  const { trackFormAsLead } = useFormTracking();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Track the form submission
    await trackFormAsLead(e, {
      userData: {
        /* additional data */
      },
      customData: { content_name: "contact_form" },
    });

    // Submit form normally
    // ... your form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <input name="phone" type="tel" />
      <input name="firstName" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### E-commerce Integration

```tsx
import { useEcommerceTracking } from "@/hooks/useMetaConversions";

function CheckoutPage() {
  const { startCheckout, completePurchase } = useEcommerceTracking();

  const handleInitiateCheckout = async () => {
    await startCheckout(
      {
        email: user.email,
        phone: user.phone,
      },
      cart.total,
      "USD",
      cart.items
    );
  };

  const handleCompletePurchase = async (orderId: string) => {
    await completePurchase(
      {
        email: user.email,
        phone: user.phone,
      },
      orderId,
      order.total,
      "USD",
      order.items
    );
  };

  return (
    <div>
      <button onClick={handleInitiateCheckout}>Start Checkout</button>
      <button onClick={() => handleCompletePurchase("ORDER_123")}>
        Complete Purchase
      </button>
    </div>
  );
}
```

### Page View Tracking

```tsx
import { useEffect } from "react";
import { useMetaConversions } from "@/hooks/useMetaConversions";

function ProductDetailPage({ product }) {
  const { trackViewContent } = useMetaConversions();

  useEffect(() => {
    trackViewContent(
      {},
      {
        content_ids: [product.id],
        content_name: product.name,
        content_category: product.category,
        content_type: "product",
        value: product.price,
        currency: "USD",
      }
    );
  }, [product, trackViewContent]);

  return <div>Product details...</div>;
}
```

## Testing

### Using Test Events

1. Set your test event code in `.env.local`:

   ```bash
   FACEBOOK_TEST_EVENT_CODE=TEST12345
   ```

2. Generate test events:

   ```tsx
   const { trackLead } = useMetaConversions();

   // This will appear in Meta Events Manager > Test Events
   await trackLead({
     email: "test@example.com",
     first_name: "John",
     last_name: "Doe",
   });
   ```

3. Monitor events in Meta Events Manager > Your Pixel > Test Events

### Debugging

Enable debug mode for detailed logging:

```tsx
<ConversionTrackerProvider
  config={{
    debug: true, // Enable detailed console logs
  }}
>
```

### API Endpoint Testing

Test the API endpoint directly:

```bash
curl -X POST http://localhost:3000/api/conversions \
  -H "Content-Type: application/json" \
  -d '{
    "event": {
      "event_name": "Lead",
      "user_data": {
        "email": "test@example.com",
        "phone": "+1234567890"
      },
      "action_source": "website"
    }
  }'
```

## Troubleshooting

### Common Issues

1. **Events not appearing in Meta**

   - Check your Pixel ID and Access Token
   - Verify the token has correct permissions
   - Ensure events are being sent to the correct endpoint

2. **TypeScript Errors**

   - Ensure all required fields are provided
   - Check that email/phone data is properly formatted

3. **Cookie Consent Issues**

   - Verify localStorage is available
   - Check consent key configuration
   - Ensure consent is set before tracking

4. **Rate Limiting**
   - Meta has rate limits for API calls
   - Implement proper batching for high-volume sites
   - Use the built-in queue system

### Error Handling

The implementation includes comprehensive error handling:

```tsx
const { trackLead } = useMetaConversions({
  onError: (error) => {
    console.error("Conversion tracking error:", error);
    // Handle error (e.g., send to error reporting service)
  },
});
```

## Best Practices

### Data Privacy & Compliance

1. **Always Hash PII**: The service automatically hashes sensitive data
2. **Respect User Consent**: Use the cookie consent integration
3. **Honor Do Not Track**: Enabled by default
4. **Minimal Data**: Only send necessary user data

### Performance Optimization

1. **Batch Events**: Use the batching features for multiple events
2. **Async Tracking**: All tracking methods are asynchronous
3. **Error Boundaries**: Wrap tracking calls in try-catch blocks
4. **Debounce**: Avoid sending duplicate events in quick succession

### Event Quality

1. **Consistent Event IDs**: Use the built-in ID generation for deduplication
2. **Complete User Data**: Include as much identifying information as possible
3. **Accurate Timestamps**: Use server-side timestamps when possible
4. **Proper Action Source**: Always specify the correct action_source

### Testing Strategy

1. **Use Test Events**: Always test with the test event code first
2. **Monitor Event Quality**: Check the Events Manager for warnings
3. **Validate Data**: Ensure user data matches expected formats
4. **Cross-Browser Testing**: Test consent flows across different browsers

## API Reference

### Core Service Methods

- `trackPageView(userData, customData)` - Track page views
- `trackLead(userData, customData)` - Track lead generation
- `trackPurchase(userData, value, currency, customData)` - Track purchases
- `trackContact(userData, customData)` - Track contact form submissions
- `trackCustomEvent(eventName, userData, customData)` - Track custom events

### Hook Methods

- `useMetaConversions()` - Main conversion tracking hook
- `useFormTracking()` - Specialized form tracking
- `useLeadTracking()` - Lead generation tracking
- `useEcommerceTracking()` - E-commerce event tracking

### Context Methods

- `useConversionContext()` - Access global conversion state
- `setConsent(boolean)` - Manage cookie consent
- `setEnabled(boolean)` - Enable/disable tracking

---

For more information, refer to the [Meta Conversions API documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/).
