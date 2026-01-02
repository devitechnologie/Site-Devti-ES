'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/devtiai"
import { faqsEN, faqsFR } from '@/utils/data';
import { useLocale, useTranslations } from 'next-intl';

const Faq = () => {
  const t = useTranslations("devti_ai")
  const currentLocale = useLocale();

  const faqs = currentLocale === 'fr' ? faqsFR : faqsEN;

  return (
    <section
      id="faq"
      className="py-32 px-6 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-light text-slate-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {t("faq.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {t("faq.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.2,
                  ease: 'easeOut',
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 hover:border-slate-300/60 transition-all duration-300 hover:shadow-lg px-6 data-[state=open]:shadow-xl data-[state=open]:shadow-purple-500/10"
                >
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-slate-900 hover:text-purple-700 transition-colors duration-300">
                      <motion.span
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {faq.question}
                      </motion.span>
                    </AccordionTrigger>
                  </motion.div>

                  <AccordionContent className="pb-6 text-slate-600 leading-relaxed text-base overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
