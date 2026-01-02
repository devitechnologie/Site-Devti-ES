"use client";

import {
  Clock,
  Code,
  FileText,
  Mail,
  MapPin,
  Network,
  Phone,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("devti_ai")

  return (
    <footer className="py-20 px-6 border-t border-slate-200 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <Image
                src="/images/devti_ai_logo.png"
                alt="devti technologie"
                height={250}
                width={250}
                className="block w-[150px]"
              />
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
              {t("footer.description")}
            </p>

          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              {t("footer.contact")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                  Technopark Tanger, Maroc
                </p>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <a
                  href="tel:+212663282554"
                  className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300 hover:underline">
                  +212 663-282554
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-slate-200">
          <div className="mb-8 lg:mb-0">
            <p className="text-sm text-slate-500 mb-2">
              © {
                new Date().getFullYear()
              } {t("footer.rights")}
            </p>
            <p className="text-sm text-slate-400 flex items-center">
              {t("footer.madeWith")}{" "}
              <span className="mx-2 text-red-500 animate-pulse">❤️</span>
            </p>
          </div>

          <div className="text-center lg:text-right">
            <div className="text-3xl font-light bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              {t("footer.locale")}
            </div>
            <div className="text-sm text-slate-500 flex items-center justify-center lg:justify-end">
              <Clock className="w-4 h-4 mr-2 text-purple-500" />
              GMT+1
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="text-center">
            <h2 className="text-[6rem] lg:text-[12rem] xl:text-[16rem] font-black bg-gradient-to-r from-purple-200/100 via-blue-200/100 to-pink-200/100 bg-clip-text text-transparent leading-none tracking-tighter opacity-50">
              devti AI
            </h2>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
