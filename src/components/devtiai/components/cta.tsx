"use client";

import { ArrowRight, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from 'next/link';

const Cta = () => {
  const t = useTranslations("devti_ai")

  return (
    <section className="py-18 px-6 bg-gradient-to-br section-py from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="mb-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8">
            <Rocket className="w-6 h-6 mr-3 text-purple-300" />
            <span className="text-purple-100 font-semibold">
              {t("cta.badge")}
            </span>
          </div>
        </div>

        <h2 className="text-5xl lg:text-7xl font-light mb-8 leading-tight">
          {t("cta.title")}
        </h2>
        <p className="text-xl lg:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t("cta.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="#contact"
            className="px-12 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center group">
            {t("cta.button")}
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Cta;
