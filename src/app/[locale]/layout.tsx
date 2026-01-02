import type { Metadata } from "next";
import { Raleway, Poppins, Lexend } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { PrismicPreview } from "@prismicio/next";
import { GoogleTagManager } from '@next/third-parties/google'
import NextTopLoader from 'nextjs-toploader'
import { headers } from 'next/headers'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'react-toastify/dist/ReactToastify.css'
import 'react-phone-number-input/style.css'
import '@smastrom/react-rating/style.css'
import "/node_modules/flag-icons/css/flag-icons.min.css"

import "../globals.css";

import { createClient, repositoryName } from "@/prismicio";
import Footer from "@/components/Footer";
import NavLayout from "@/components/NavLayout";
import { TLocale, locales } from "@/i18n";
import { getPrismicLocale } from "@/utils/helpers";
import QueryClientWrapper from "@/components/wrappers/QueryClientWrapper";
import { cn } from "@/utils/cn";
import ClientWrapper from "@/components/wrappers/ClientWrapper";

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway',
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})
const lexend = Lexend({
  subsets: ["latin"],
  variable: '--font-lexend',
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
})

export async function generateMetadata({ params: { locale } }: { params: { locale: TLocale } }): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle("settings", { lang: getPrismicLocale(locale) })

  return {
    title: settings.data.default_meta_title || "DEVTI TECHNOLOGIE",
    description: settings.data.default_meta_description || "Agence de développement web et mobile",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
    icons: [
      "/favicon.ico",
    ],
    alternates: {
      canonical: `https://devtitechnologie.com`
    }
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: TLocale };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  // devti-ai is a landing page that does not use the Prismic repository
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || "";
  const isDevtiAi = header_url.includes('/devti-ai');

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DEVTI TECHNOLOGIE",
    "url": "https://devtitechnologie.com",
    "logo": "https://images.prismic.io/devtitechnologie/ZngR9JbWFboweyOT_LogoDEVTITECHNOLOGIE-05.png?auto=format%2Ccompress&fit=max&w=750",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+212663282554",
      "contactType": "customer service",
    }
  };

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="G-G142CRHRER" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5X8TL8FP');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !(function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = "2.0";
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js"
            );
            fbq("init", "888521773213249");
            fbq("track", "PageView");
            `,
          }}
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <meta
          name="google-site-verification"
          content="By8Frc_esh3kXVbv-u3RDPVPBQ3zE6DCircryrb7Fo8"
        />
      </head>
      <body
        className={`${raleway.variable} ${poppins.variable} ${lexend.variable}`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5X8TL8FP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* facebook pixel */}
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=888521773213249&ev=PageView&noscript=1"
          />
        </noscript>

        <NextIntlClientProvider messages={messages}>
          <div
            className="bg-primary-light-blue"
          >
            {
              !isDevtiAi && (
                <NavLayout
                  locale={locale}
                />
              )
            }
            <main className={cn(
              "min-h-screen",
              !isDevtiAi && "pt-[var(--nav-height)]"
            )}>
              <QueryClientWrapper>
                <ClientWrapper>
                  {children}
                </ClientWrapper>
              </QueryClientWrapper>
            </main>
            {!isDevtiAi && (
              <Footer
                locale={locale}
              />
            )}
          </div>
          <PrismicPreview repositoryName={repositoryName} />
        </NextIntlClientProvider>
        <NextTopLoader
          color="#882DFF"
          height={2}
          showSpinner={false}
        />
      </body>
    </html>
  );
}
