"use client"

import { ToastContainer } from "react-toastify";

import CookiesNotification from "../CookiesNotification";
import WhatsappButton from "../WhatsappButton";
import { ConversionTrackerProvider } from "../ConversionTrackerProvider";
import EnvironmentCheck from "../debug/EnvironmentCheck";

type ClientWrapperProps = {
  children?: React.ReactNode
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
  // Ensure environment variables are properly loaded
  const isDevelopment = process.env.NODE_ENV === 'development'

  return (
    <ConversionTrackerProvider
      config={{
        enabled: true,
        debug: isDevelopment,
        autoTrackPageViews: true,
        respectDoNotTrack: false, // Disable Do Not Track for business conversion tracking
        respectCookieConsent: true,
      }}
    >
      <div>
        {children}
        <ToastContainer />
        <CookiesNotification />
        <WhatsappButton />
      </div>
    </ConversionTrackerProvider>
  )
}

export default ClientWrapper