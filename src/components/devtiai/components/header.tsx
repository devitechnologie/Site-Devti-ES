"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations('devti_ai')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto max-lg:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <Image
              src="/images/devti_ai_logo.png"
              alt="devti technologie"
              height={250}
              width={250}
              className="block w-[150px]"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-slate-600 hover:text-purple-600 transition-all duration-300 font-medium relative group"
            >
              {t("header.services")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="#faq"
              className="text-slate-600 hover:text-pink-600 transition-all duration-300 font-medium relative group"
            >
              {t("header.faq")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("header.demander_une_demo")}
            </Link>
          </div>
          <Link
            href="#contact"
            className="md:hidden px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t("header.demander_une_demo")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
