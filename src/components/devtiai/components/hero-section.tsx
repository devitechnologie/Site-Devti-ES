"use client";

import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("devti_ai")

  return (
    <section className="pt-24 lg:pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="max-w-6xl py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl lg:text-7xl text-slate-900 mb-5 lg:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/*  */}
            {t("hero_section.intro.0")}{' '}
            <motion.span
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("hero_section.intro.1")}
            </motion.span> {t("hero_section.intro.2")}{' '}
            <motion.span
              className="font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent relative"
              initial={{ opacity: 0, backgroundSize: "0% 100%" }}
              whileInView={{ opacity: 1, backgroundSize: "100% 100%" }}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {t("hero_section.intro.3")}
            </motion.span>{' '}
            {t("hero_section.intro.4")}
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-4xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("hero_section.description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero_section.request_demo")}
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ArrowRight className="ml-3 w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;