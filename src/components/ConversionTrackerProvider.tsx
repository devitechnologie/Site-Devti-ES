/**
 * Conversion Tracker Provider
 * 
 * React Context provider for Meta Conversions API tracking.
 * This component provides conversion tracking functionality to the entire app
 * and handles global configuration, consent management, and automatic page tracking.
 */

'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { getConversionTracker, type ConversionTracker } from '@/utils/conversionTracker';
import type { MetaUserData, MetaCustomData } from '@/services/api/metaConversions';

// Context configuration interface
interface ConversionTrackerConfig {
  enabled?: boolean;
  debug?: boolean;
  autoTrackPageViews?: boolean;
  respectDoNotTrack?: boolean;
  respectCookieConsent?: boolean;
  cookieConsentKey?: string; // Local storage key for cookie consent
}

// Context value interface
interface ConversionContextValue {
  tracker: ConversionTracker | null;
  config: ConversionTrackerConfig;
  isEnabled: boolean;
  hasConsent: boolean;

  // Configuration methods
  setEnabled: (enabled: boolean) => void;
  setConsent: (consent: boolean) => void;
  updateConfig: (newConfig: Partial<ConversionTrackerConfig>) => void;

  // Tracking methods
  trackPageView: (userData?: Partial<MetaUserData>, customData?: MetaCustomData) => Promise<void>;
  trackLead: (userData: MetaUserData, customData?: MetaCustomData) => Promise<void>;
  trackPurchase: (userData: MetaUserData, value: number, currency?: string, customData?: MetaCustomData) => Promise<void>;
  trackContact: (userData: MetaUserData, customData?: MetaCustomData) => Promise<void>;
  trackCustomEvent: (eventName: string, userData: MetaUserData, customData?: MetaCustomData) => Promise<void>;
}

// Default configuration
const DEFAULT_CONFIG: ConversionTrackerConfig = {
  enabled: true,
  debug: process.env.NODE_ENV === 'development',
  autoTrackPageViews: true,
  respectDoNotTrack: true,
  respectCookieConsent: true,
  cookieConsentKey: 'cookie_consent',
};

// Create context
const ConversionContext = createContext<ConversionContextValue | null>(null);

// Props interface
interface ConversionTrackerProviderProps {
  children: ReactNode;
  config?: Partial<ConversionTrackerConfig>;
  onError?: (error: Error) => void;
}

/**
 * Conversion Tracker Provider Component
 */
export function ConversionTrackerProvider({
  children,
  config: initialConfig = {},
  onError,
}: ConversionTrackerProviderProps) {
  const [config, setConfig] = useState<ConversionTrackerConfig>({
    ...DEFAULT_CONFIG,
    ...initialConfig,
  });

  const [tracker, setTracker] = useState<ConversionTracker | null>(null);
  const [isEnabled, setIsEnabledState] = useState(true);
  const [hasConsent, setHasConsent] = useState(true);

  const pathname = usePathname();

  // Initialize tracker
  useEffect(() => {
    try {
      const newTracker = getConversionTracker({
        enabled: config.enabled,
        debug: config.debug,
      });
      setTracker(newTracker);
    } catch (error) {
      console.error('Failed to initialize conversion tracker:', error);
      if (onError) {
        onError(error as Error);
      }
    }
  }, [config.enabled, config.debug, onError]);

  // Check Do Not Track setting
  useEffect(() => {
    if (config.respectDoNotTrack && typeof navigator !== 'undefined') {
      const doNotTrack = navigator.doNotTrack === '1' ||
        (window as any).doNotTrack === '1' ||
        (navigator as any).msDoNotTrack === '1';

      if (doNotTrack) {
        setIsEnabledState(false);
        if (config.debug) {
          console.log('Conversion tracking disabled due to Do Not Track setting');
        }
      }
    }
  }, [config.respectDoNotTrack, config.debug]);

  // Check cookie consent
  useEffect(() => {
    if (config.respectCookieConsent && typeof localStorage !== 'undefined') {
      const consentKey = config.cookieConsentKey || 'cookie_consent';
      const consent = localStorage.getItem(consentKey);

      // If consent is explicitly set to false, disable tracking
      if (consent === 'false') {
        setHasConsent(false);
        if (config.debug) {
          console.log('Conversion tracking disabled due to cookie consent');
        }
      } else if (consent === 'true') {
        setHasConsent(true);
      }
      // If no consent preference is set, assume consent (GDPR requires explicit handling)
    }
  }, [config.respectCookieConsent, config.cookieConsentKey, config.debug]);

  // Auto-track page views on route changes
  useEffect(() => {
    if (config.autoTrackPageViews && tracker && isEnabled && hasConsent && pathname) {
      // Small delay to ensure page is fully loaded
      const timeoutId = setTimeout(() => {
        tracker.trackPageView().catch((error) => {
          console.error('Failed to track page view:', error);
          if (onError) {
            onError(error as Error);
          }
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname, config.autoTrackPageViews, tracker, isEnabled, hasConsent, onError]);

  // Update tracker enabled state
  useEffect(() => {
    if (tracker) {
      const shouldBeEnabled = Boolean(config.enabled && isEnabled && hasConsent);
      tracker.setEnabled(shouldBeEnabled);

      if (config.debug) {
        console.log('Conversion tracking state:', {
          configEnabled: config.enabled,
          isEnabled,
          hasConsent,
          finalState: shouldBeEnabled,
        });
      }
    }
  }, [config.enabled, isEnabled, hasConsent, tracker, config.debug]);

  // Configuration methods
  const setEnabled = useCallback((enabled: boolean) => {
    setIsEnabledState(enabled);
  }, []);

  const setConsent = useCallback((consent: boolean) => {
    setHasConsent(consent);

    // Store consent preference
    if (config.respectCookieConsent && typeof localStorage !== 'undefined') {
      const consentKey = config.cookieConsentKey || 'cookie_consent';
      localStorage.setItem(consentKey, consent.toString());
    }
  }, [config.respectCookieConsent, config.cookieConsentKey]);

  const updateConfig = useCallback((newConfig: Partial<ConversionTrackerConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  // Tracking methods with error handling
  const createTrackingMethod = useCallback(
    <T extends any[]>(method: (...args: T) => Promise<void>) => {
      return async (...args: T) => {
        if (config.debug) {
        }

        if (!tracker || !isEnabled || !hasConsent) {
          if (config.debug) {
          }
          return;
        }

        if (config.debug) {
        }

        try {
          await method.apply(tracker, args);
          if (config.debug) {
          }
        } catch (error) {
          if (onError) {
            onError(error as Error);
          }
        }
      };
    },
    [tracker, isEnabled, hasConsent, config.debug, onError]
  );

  // Create wrapped tracking methods
  const trackPageView = createTrackingMethod(
    (userData?: Partial<MetaUserData>, customData?: MetaCustomData) =>
      tracker!.trackPageView(userData, customData)
  );

  const trackLead = createTrackingMethod(
    (userData: MetaUserData, customData?: MetaCustomData) =>
      tracker!.trackLead(userData, customData)
  );

  const trackPurchase = createTrackingMethod(
    (userData: MetaUserData, value: number, currency?: string, customData?: MetaCustomData) =>
      tracker!.trackPurchase(userData, value, currency, customData)
  );

  const trackContact = createTrackingMethod(
    (userData: MetaUserData, customData?: MetaCustomData) =>
      tracker!.trackContact(userData, customData)
  );

  const trackCustomEvent = createTrackingMethod(
    (eventName: string, userData: MetaUserData, customData?: MetaCustomData) =>
      tracker!.trackCustomEvent(eventName, userData, customData)
  );

  const contextValue: ConversionContextValue = {
    tracker,
    config,
    isEnabled: Boolean(config.enabled && isEnabled && hasConsent),
    hasConsent,
    setEnabled,
    setConsent,
    updateConfig,
    trackPageView,
    trackLead,
    trackPurchase,
    trackContact,
    trackCustomEvent,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
}

/**
 * Hook to use the Conversion Context
 */
export function useConversionContext(): ConversionContextValue {
  const context = useContext(ConversionContext);

  if (!context) {
    throw new Error('useConversionContext must be used within a ConversionTrackerProvider');
  }

  return context;
}

/**
 * Higher-order component to wrap components with conversion tracking
 */
export function withConversionTracking<P extends object>(
  Component: React.ComponentType<P>,
  trackingConfig?: Partial<ConversionTrackerConfig>
) {
  const WrappedComponent = (props: P) => (
    <ConversionTrackerProvider config={trackingConfig}>
      <Component {...props} />
    </ConversionTrackerProvider>
  );

  WrappedComponent.displayName = `withConversionTracking(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

/**
 * Component for cookie consent banner integration
 */
interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
  children?: ReactNode;
}

export function CookieConsentManager({ onAccept, onDecline, children }: CookieConsentProps) {
  const { setConsent, hasConsent, config } = useConversionContext();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (config.respectCookieConsent && typeof localStorage !== 'undefined') {
      const consentKey = config.cookieConsentKey || 'cookie_consent';
      const consent = localStorage.getItem(consentKey);

      // Show banner if no consent preference is stored
      if (consent === null) {
        setShowBanner(true);
      }
    }
  }, [config.respectCookieConsent, config.cookieConsentKey]);

  const handleAccept = () => {
    setConsent(true);
    setShowBanner(false);
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    setConsent(false);
    setShowBanner(false);
    if (onDecline) onDecline();
  };

  if (!showBanner) {
    return children ? <>{children}</> : null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies and tracking technologies to improve your experience and analyze our website performance.
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default ConversionTrackerProvider;