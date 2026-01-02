"use client"

import { useEffect } from 'react';

/**
 * Debug component to check environment variables
 * Only shows in development mode
 */
const EnvironmentCheck = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {

      // Check if critical environment variables are missing
      const missingVars = [];
      if (!process.env.NEXT_PUBLIC_FB_PIXEL_ID) missingVars.push('NEXT_PUBLIC_FB_PIXEL_ID');
      if (!process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT) missingVars.push('NEXT_PUBLIC_PRISMIC_ENVIRONMENT');

      if (missingVars.length > 0) {
        console.warn('❌ Missing environment variables:', missingVars);
      } else {
      }
    }
  }, []);

  // Don't render anything in production
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px',
        fontSize: '12px',
        maxWidth: '300px'
      }}
    >
      <div><strong>🔧 Dev Environment Check:</strong></div>
      <div>NODE_ENV: {process.env.NODE_ENV}</div>
      <div>FB_PIXEL_ID: {process.env.NEXT_PUBLIC_FB_PIXEL_ID ? '✅ Set' : '❌ Missing'}</div>
      <div>PRISMIC_ENV: {process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT ? '✅ Set' : '❌ Missing'}</div>
    </div>
  );
};

export default EnvironmentCheck;