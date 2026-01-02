/**
 * React Hook for Meta Conversions
 * 
 * This hook provides a convenient way to track conversions in React components.
 * It integrates with the ConversionTracker utility and provides React-specific
 * functionality like automatic cleanup and state management.
 */

import { useCallback, useEffect, useRef } from 'react';
import { getConversionTracker, type ConversionTracker } from '@/utils/conversionTracker';
import type { MetaUserData, MetaCustomData } from '@/services/api/metaConversions';

interface UseMetaConversionsConfig {
  enabled?: boolean;
  debug?: boolean;
  autoTrackPageView?: boolean;
}

interface UseMetaConversionsReturn {
  // Tracking methods
  trackPageView: (userData?: Partial<MetaUserData>, customData?: MetaCustomData) => Promise<void>;
  trackLead: (userData: MetaUserData, customData?: MetaCustomData) => Promise<void>;
  trackPurchase: (userData: MetaUserData, value: number, currency?: string, customData?: MetaCustomData) => Promise<void>;
  trackContact: (userData: MetaUserData, customData?: MetaCustomData) => Promise<void>;
  trackViewContent: (userData?: Partial<MetaUserData>, contentData?: any) => Promise<void>;
  trackSearch: (userData?: Partial<MetaUserData>, searchString?: string, customData?: MetaCustomData) => Promise<void>;
  trackInitiateCheckout: (userData: MetaUserData, value?: number, currency?: string, customData?: MetaCustomData) => Promise<void>;
  trackAddPaymentInfo: (userData: MetaUserData, customData?: MetaCustomData) => Promise<void>;
  trackCustomEvent: (eventName: string, userData: MetaUserData, customData?: MetaCustomData) => Promise<void>;
  trackFormSubmission: (
    formElement: HTMLFormElement,
    eventName?: string,
    additionalUserData?: Partial<MetaUserData>,
    customData?: MetaCustomData
  ) => Promise<void>;

  // Utility methods
  generateEventId: () => string;
  isEnabled: () => boolean;
  setEnabled: (enabled: boolean) => void;

  // State
  tracker: ConversionTracker;
}

/**
 * React hook for Meta Conversions tracking
 */
export function useMetaConversions(config: UseMetaConversionsConfig = {}): UseMetaConversionsReturn {
  const trackerRef = useRef<ConversionTracker | null>(null);
  const hasTrackedPageView = useRef(false);
  // Initialize tracker
  if (!trackerRef.current) {
    trackerRef.current = getConversionTracker({
      enabled: config.enabled,
      debug: config.debug,
    });
  }

  const tracker = trackerRef.current;

  // Auto-track page view on mount (if enabled)
  useEffect(() => {
    if (config.autoTrackPageView && !hasTrackedPageView.current) {
      hasTrackedPageView.current = true;
      tracker.trackPageView().catch(console.error);
    }
  }, [config.autoTrackPageView, tracker]);

  // Tracking methods with useCallback for performance
  const trackPageView = useCallback(
    (userData?: Partial<MetaUserData>, customData?: MetaCustomData) =>
      tracker.trackPageView(userData, customData),
    [tracker]
  );

  const trackLead = useCallback(
    (userData: MetaUserData, customData?: MetaCustomData) =>
      tracker.trackLead(userData, customData),
    [tracker]
  );

  const trackPurchase = useCallback(
    (userData: MetaUserData, value: number, currency?: string, customData?: MetaCustomData) =>
      tracker.trackPurchase(userData, value, currency, customData),
    [tracker]
  );

  const trackContact = useCallback(
    (userData: MetaUserData, customData?: MetaCustomData) =>
      tracker.trackContact(userData, customData),
    [tracker]
  );

  const trackViewContent = useCallback(
    (userData?: Partial<MetaUserData>, contentData?: any) =>
      tracker.trackViewContent(userData, contentData),
    [tracker]
  );

  const trackSearch = useCallback(
    (userData?: Partial<MetaUserData>, searchString?: string, customData?: MetaCustomData) =>
      tracker.trackSearch(userData, searchString, customData),
    [tracker]
  );

  const trackInitiateCheckout = useCallback(
    (userData: MetaUserData, value?: number, currency?: string, customData?: MetaCustomData) =>
      tracker.trackInitiateCheckout(userData, value, currency, customData),
    [tracker]
  );

  const trackAddPaymentInfo = useCallback(
    (userData: MetaUserData, customData?: MetaCustomData) =>
      tracker.trackAddPaymentInfo(userData, customData),
    [tracker]
  );

  const trackCustomEvent = useCallback(
    (eventName: string, userData: MetaUserData, customData?: MetaCustomData) => {

      const result = tracker.trackCustomEvent(eventName, userData, customData);

      return result;
    },
    [tracker]
  );

  const trackFormSubmission = useCallback(
    (
      formElement: HTMLFormElement,
      eventName?: string,
      additionalUserData?: Partial<MetaUserData>,
      customData?: MetaCustomData
    ) => tracker.trackFormSubmission(formElement, eventName, additionalUserData, customData),
    [tracker]
  );

  // Utility methods
  const generateEventId = useCallback(() => tracker.generateEventId(), [tracker]);
  const isEnabled = useCallback(() => tracker.isEnabled(), [tracker]);
  const setEnabled = useCallback((enabled: boolean) => tracker.setEnabled(enabled), [tracker]);

  return {
    trackPageView,
    trackLead,
    trackPurchase,
    trackContact,
    trackViewContent,
    trackSearch,
    trackInitiateCheckout,
    trackAddPaymentInfo,
    trackCustomEvent,
    trackFormSubmission,
    generateEventId,
    isEnabled,
    setEnabled,
    tracker,
  };
}

/**
 * Hook specifically for form tracking
 */
export function useFormTracking() {
  const { trackFormSubmission, trackLead, trackContact } = useMetaConversions();

  const trackForm = useCallback(
    async (
      form: HTMLFormElement | React.FormEvent<HTMLFormElement>,
      eventName = 'Lead',
      additionalData?: {
        userData?: Partial<MetaUserData>;
        customData?: MetaCustomData;
      }
    ) => {
      const formElement = 'currentTarget' in form ? form.currentTarget as HTMLFormElement : form as HTMLFormElement;

      await trackFormSubmission(
        formElement,
        eventName,
        additionalData?.userData,
        additionalData?.customData
      );
    },
    [trackFormSubmission]
  );

  return {
    trackForm,
    trackFormAsLead: (form: HTMLFormElement | React.FormEvent<HTMLFormElement>, additionalData?: any) =>
      trackForm(form, 'Lead', additionalData),
    trackFormAsContact: (form: HTMLFormElement | React.FormEvent<HTMLFormElement>, additionalData?: any) =>
      trackForm(form, 'Contact', additionalData),
  };
}

/**
 * Hook for e-commerce tracking
 */
export function useEcommerceTracking() {
  const {
    trackViewContent,
    trackInitiateCheckout,
    trackAddPaymentInfo,
    trackPurchase
  } = useMetaConversions();

  return {
    // Product/content viewing
    viewProduct: (productId: string, productName?: string, category?: string, value?: number, currency = 'USD') =>
      trackViewContent({}, {
        content_ids: [productId],
        content_name: productName,
        content_category: category,
        content_type: 'product',
        value,
        currency,
      }),

    // Checkout process
    startCheckout: (userData: MetaUserData, value: number, currency = 'USD', items?: any[]) =>
      trackInitiateCheckout(userData, value, currency, {
        num_items: items?.length,
      }),

    addPaymentMethod: (userData: MetaUserData) =>
      trackAddPaymentInfo(userData),

    completePurchase: (
      userData: MetaUserData,
      orderId: string,
      value: number,
      currency = 'USD',
      items?: any[]
    ) => trackPurchase(userData, value, currency, {
      order_id: orderId,
      num_items: items?.length,
    }),

    trackViewContent,
    trackInitiateCheckout,
    trackAddPaymentInfo,
    trackPurchase,
  };
}

/**
 * Hook for lead generation tracking
 */
export function useLeadTracking() {
  // Use the direct tracker with debug enabled in development
  const { trackLead, trackContact, trackCustomEvent, tracker } = useMetaConversions({
    debug: true, // Force debug mode for now
    enabled: true
  });

  // Ensure debug and tracking are enabled on the tracker
  useEffect(() => {
    if (tracker) {
      tracker.updateConfig({
        debug: true,
        enabled: true
      });
    }
  }, [tracker]);

  return {
    // page views
    trackPageView: (userData?: Partial<MetaUserData>, customData?: MetaCustomData) => {
      return tracker.trackPageView(userData, customData);
    },

    // Lead generation
    generateLead: (userData: MetaUserData, source?: string, campaign?: string) => {
      return trackLead(userData, {
        content_name: source,
        content_category: campaign,
      });
    },

    // Contact forms
    submitContactForm: (userData: MetaUserData, formType?: string) => {
      return trackContact(userData, {
        content_name: formType,
      });
    },

    // Newsletter signups
    subscribeNewsletter: (userData: MetaUserData) => {
      return trackCustomEvent('Subscribe', userData, {
        content_name: 'newsletter',
      });
    },

    // Quote requests
    requestQuote: async (userData: MetaUserData, service?: string) => {

      // Force enable tracking before each call
      if (tracker) {

        tracker.updateConfig({
          debug: true,
          enabled: true
        });
      }

      try {
        const result = await trackCustomEvent('hqlead', userData, {
          content_name: service,
        });

        return result;
      } catch (error) {
        throw error;
      }
    }, trackLead,
    trackContact,
    trackCustomEvent,
  };
}

export default useMetaConversions;