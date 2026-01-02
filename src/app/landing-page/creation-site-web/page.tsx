import { Raleway } from "next/font/google";

import "@/app/globals.css";
import 'react-phone-number-input/style.css'

import WebSiteCreationHero from "@/components/landing-page/website/WebSiteCreationHero";
import WebSiteCreationMiniCtaFeatures from "@/components/landing-page/website/WebSiteCreationMiniCtaFeatures";
import WebSiteCreationPortfolio from "@/components/landing-page/website/WebSiteCreationPortfolio";
import WebSiteCreationTestimonials from "@/components/landing-page/website/WebSiteCreationTestimonials";
import WebSiteCreationFaq from "@/components/landing-page/website/WebSiteCreationFaq";
import WebSiteCreationFooter from "@/components/landing-page/website/WebSiteCreationFooter";
import QueryClientWrapper from "@/components/wrappers/QueryClientWrapper";
import ConversionTrackerProvider from "@/components/ConversionTrackerProvider";

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway',
});

const Page = () => {
  return (
    <ConversionTrackerProvider
      config={{
        enabled: true,
        autoTrackPageViews: true,
        respectCookieConsent: true,
      }}
    >
      <QueryClientWrapper>
        <div className={`min-h-screen ${raleway.className} bg-primary-light-blue`}>
          <div className="overflow-hidden">
            <WebSiteCreationHero />
            <WebSiteCreationMiniCtaFeatures />
          </div>
          <WebSiteCreationPortfolio />
          <WebSiteCreationTestimonials />
          <WebSiteCreationFaq />
          <WebSiteCreationFooter />
        </div>
      </QueryClientWrapper>
    </ConversionTrackerProvider>
  )
}

export const metadata = {
  title: 'Creation de site web',
  description: 'Page de creation de site web',
}

export default Page