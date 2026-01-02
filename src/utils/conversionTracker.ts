/**
 * Conversion Tracker Utilities
 * 
 * Client-side utilities for tracking conversions and sending them to Meta Conversions API
 * via our internal API route. This provides a simple interface for tracking various
 * conversion events throughout the application.
 */

import type { MetaUserData, MetaCustomData, MetaConversionEvent } from '@/services/api/metaConversions';

// Configuration interface
interface ConversionTrackerConfig {
  enabled?: boolean;
  debug?: boolean;
  pixelId?: string;
  apiEndpoint?: string;
}

// Default configuration
const DEFAULT_CONFIG: ConversionTrackerConfig = {
  enabled: true,
  debug: process.env.NODE_ENV === 'development',
  apiEndpoint: '/api/conversions',
  pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
};

class ConversionTracker {
  private config: ConversionTrackerConfig;
  private eventQueue: MetaConversionEvent[] = [];
  private isProcessing = false;

  constructor(config: ConversionTrackerConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };

    if (this.config.debug) {
    }
  }

  /**
   * Extract Facebook Browser ID (fbp) from cookies
   */
  private getFbp(): string | undefined {
    if (typeof document === 'undefined') return undefined;

    const match = document.cookie.match(/_fbp=([^;]*)/);
    return match ? match[1] : undefined;
  }

  /**
   * Extract Facebook Click ID (fbc) from URL parameters or cookies
   */
  private getFbc(): string | undefined {
    if (typeof window === 'undefined') return undefined;

    // First check URL parameters for fbclid
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');

    if (fbclid) {
      const timestamp = Math.floor(Date.now() / 1000);
      return `fb.1.${timestamp}.${fbclid}`;
    }

    // Check cookies for stored fbc
    const match = document.cookie.match(/_fbc=([^;]*)/);
    return match ? match[1] : undefined;
  }

  /**
   * Get common user data automatically (browser info, IDs, etc.)
   */
  private getCommonUserData(): Partial<MetaUserData> {
    const userData: Partial<MetaUserData> = {};

    if (typeof window !== 'undefined') {
      userData.client_user_agent = navigator.userAgent;
      userData.fbp = this.getFbp();
      userData.fbc = this.getFbc();
    }

    return userData;
  }

  /**
   * Generate a unique event ID for deduplication
   */
  generateEventId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Send conversion events to the API
   */
  private async sendToAPI(events: MetaConversionEvent[]): Promise<boolean> {
    if (!this.config.enabled) {
      if (this.config.debug) {
      }
      return true;
    }

    if (this.config.debug) {
    }

    try {
      const payload = { events };

      if (this.config.debug) {
      }

      const response = await fetch(this.config.apiEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (this.config.debug) {
      }

      if (!response.ok) {
        const errorText = await response.text();
        let error;
        try {
          error = JSON.parse(errorText);
        } catch {
          error = { message: errorText };
        }
        return false;
      }

      const result = await response.json();

      if (this.config.debug) {
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Process the event queue
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.eventQueue.length === 0) {
      return;
    }

    this.isProcessing = true;

    try {
      const eventsToSend = [...this.eventQueue];
      this.eventQueue = [];

      if (this.config.debug) {
      }

      const success = await this.sendToAPI(eventsToSend);

      if (!success) {
        // Re-add failed events to the beginning of the queue
        this.eventQueue.unshift(...eventsToSend);

        if (this.config.debug) {
        }
      }
    } catch (error) {
    } finally {
      this.isProcessing = false;
    }
  }

  /**
   * Track a conversion event
   */
  async track(
    eventName: string,
    userData: MetaUserData,
    customData?: MetaCustomData,
    eventId?: string
  ): Promise<void> {
    try {
      const event: MetaConversionEvent = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId || this.generateEventId(),
        user_data: {
          ...this.getCommonUserData(),
          ...userData,
        },
        custom_data: customData,
        action_source: 'website',
      };

      if (typeof window !== 'undefined') {
        event.event_source_url = window.location.href;
      }

      if (this.config.debug) {
      }

      this.eventQueue.push(event);

      // Process queue immediately (you can also implement batching with delays)
      await this.processQueue();
    } catch (error) {
      console.error('Error tracking conversion event:', error);
      throw error;
    }
  }

  /**
   * Track a page view
   */
  async trackPageView(userData: Partial<MetaUserData> = {}, customData?: MetaCustomData): Promise<void> {
    return this.track('PageView', userData as MetaUserData, customData);
  }

  /**
   * Track a lead generation
   */
  async trackLead(userData: MetaUserData, customData?: MetaCustomData): Promise<void> {
    return this.track('Lead', userData, customData);
  }

  /**
   * Track a purchase
   */
  async trackPurchase(
    userData: MetaUserData,
    value: number,
    currency = 'USD',
    customData?: MetaCustomData
  ): Promise<void> {
    const purchaseData: MetaCustomData = {
      currency,
      value,
      ...customData,
    };

    return this.track('Purchase', userData, purchaseData);
  }

  /**
   * Track a contact form submission
   */
  async trackContact(userData: MetaUserData, customData?: MetaCustomData): Promise<void> {
    return this.track('Contact', userData, customData);
  }

  /**
   * Track content view
   */
  async trackViewContent(
    userData: Partial<MetaUserData> = {},
    contentData?: {
      content_name?: string;
      content_category?: string;
      content_ids?: string[];
      content_type?: string;
      value?: number;
      currency?: string;
    }
  ): Promise<void> {
    return this.track('ViewContent', userData as MetaUserData, contentData);
  }

  /**
   * Track when user initiates checkout
   */
  async trackInitiateCheckout(
    userData: MetaUserData,
    value?: number,
    currency = 'USD',
    customData?: MetaCustomData
  ): Promise<void> {
    const checkoutData: MetaCustomData = {
      ...(value && { value, currency }),
      ...customData,
    };

    return this.track('InitiateCheckout', userData, checkoutData);
  }

  /**
   * Track when user adds payment info
   */
  async trackAddPaymentInfo(userData: MetaUserData, customData?: MetaCustomData): Promise<void> {
    return this.track('AddPaymentInfo', userData, customData);
  }

  /**
   * Track search events
   */
  async trackSearch(
    userData: Partial<MetaUserData> = {},
    searchString?: string,
    customData?: MetaCustomData
  ): Promise<void> {
    const searchData: MetaCustomData = {
      ...(searchString && { search_string: searchString }),
      ...customData,
    };

    return this.track('Search', userData as MetaUserData, searchData);
  }

  /**
   * Track custom events
   */
  async trackCustomEvent(
    eventName: string,
    userData: MetaUserData,
    customData?: MetaCustomData
  ): Promise<void> {
    if (this.config.debug) {
    }
    return this.track(eventName, userData, customData);
  }

  /**
   * Track form submissions with automatic data extraction
   */
  async trackFormSubmission(
    formElement: HTMLFormElement,
    eventName = 'Lead',
    additionalUserData?: Partial<MetaUserData>,
    customData?: MetaCustomData
  ): Promise<void> {
    const formData = new FormData(formElement);
    const userData: Partial<MetaUserData> = { ...additionalUserData };

    // Extract common form fields
    const email = formData.get('email')?.toString() || formData.get('mail')?.toString();
    const phone = formData.get('phone')?.toString() || formData.get('telephone')?.toString();
    const firstName = formData.get('firstName')?.toString() || formData.get('first_name')?.toString() || formData.get('prenom')?.toString();
    const lastName = formData.get('lastName')?.toString() || formData.get('last_name')?.toString() || formData.get('nom')?.toString();

    if (email) userData.email = email;
    if (phone) userData.phone = phone;
    if (firstName) userData.first_name = firstName;
    if (lastName) userData.last_name = lastName;

    return this.track(eventName, userData as MetaUserData, customData);
  }

  /**
   * Enable or disable tracking
   */
  setEnabled(enabled: boolean): void {
    this.config.enabled = enabled;

    if (this.config.debug) {
    }
  }

  /**
   * Check if tracking is enabled
   */
  isEnabled(): boolean {
    return this.config.enabled === true;
  }

  /**
   * Update tracker configuration
   */
  updateConfig(newConfig: Partial<ConversionTrackerConfig>): void {
    const oldConfig = { ...this.config };
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current configuration (for debugging)
   */
  getConfig(): ConversionTrackerConfig {
    return { ...this.config };
  }
}

// Create default instance
let defaultTracker: ConversionTracker | null = null;

/**
 * Get or create the default conversion tracker instance
 */
export function getConversionTracker(config?: ConversionTrackerConfig): ConversionTracker {
  if (!defaultTracker) {
    defaultTracker = new ConversionTracker(config);
  } else if (config) {
    // Update existing tracker config if new config is provided
    defaultTracker.updateConfig(config);
  }
  return defaultTracker;
}

/**
 * Convenience functions using the default tracker
 */
export const trackPageView = (userData?: Partial<MetaUserData>, customData?: MetaCustomData) =>
  getConversionTracker().trackPageView(userData, customData);

export const trackLead = (userData: MetaUserData, customData?: MetaCustomData) =>
  getConversionTracker().trackLead(userData, customData);

export const trackPurchase = (userData: MetaUserData, value: number, currency?: string, customData?: MetaCustomData) =>
  getConversionTracker().trackPurchase(userData, value, currency, customData);

export const trackContact = (userData: MetaUserData, customData?: MetaCustomData) =>
  getConversionTracker().trackContact(userData, customData);

export const trackViewContent = (userData?: Partial<MetaUserData>, contentData?: any) =>
  getConversionTracker().trackViewContent(userData, contentData);

export const trackSearch = (userData?: Partial<MetaUserData>, searchString?: string, customData?: MetaCustomData) =>
  getConversionTracker().trackSearch(userData, searchString, customData);

export const trackFormSubmission = (
  formElement: HTMLFormElement,
  eventName?: string,
  additionalUserData?: Partial<MetaUserData>,
  customData?: MetaCustomData
) => getConversionTracker().trackFormSubmission(formElement, eventName, additionalUserData, customData);

export { ConversionTracker };
export default ConversionTracker;