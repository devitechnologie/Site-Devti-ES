import {
  Header,
  HeroSection,
  Services,
  WhyChooseUs,
  Cta,
  Faq,
  ContactForm,
  Footer
} from "@/components/devtiai"
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const page = () => {
  return (
    <Theme>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden flex flex-col gap-12">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-400/15 via-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
        <Header />
        <HeroSection />
        <Services />
        <WhyChooseUs />
        <Cta />
        <Faq />
        <ContactForm />
        <Footer />
      </main>
    </Theme>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()

  return {
    title: t('devti_ai.ai_meta.title'),
    description: t('devti_aiai_meta.description'),
  };
}
export default page