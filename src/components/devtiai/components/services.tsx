"use client";

import { motion } from "framer-motion";
import { servicesFR, servicesEN } from "@/utils/data";
import { CheckCircle, Target } from 'lucide-react'
import { useLocale, useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("devti_ai")
  const currentLocale = useLocale();

  // Use the appropriate services based on the language
  const currentServices = currentLocale === 'fr' ? servicesFR : servicesEN

  return (
    <section id="services" className="py-6 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-light text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("services.description")}
          </motion.p>
        </motion.div>

        <div className="grid gap-8">
          {currentServices.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-200/60 hover:border-slate-300/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <motion.div
                  className="flex items-start justify-between mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-6">
                    <motion.span
                      className="text-lg font-bold text-slate-400"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      ({service.number})
                    </motion.span>
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2 + 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ rotate: 360 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full`}
                    ></div>
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-lg text-slate-600 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div className="space-y-4">
                    <motion.h4
                      className="text-sm font-bold text-slate-900 mb-4 flex items-center uppercase tracking-wider"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.8, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </motion.div>
                      Avantages
                    </motion.h4>
                    <ul className="space-y-3">
                      {service.advantages.map((advantage, i) => (
                        <motion.li
                          key={i}
                          className="text-slate-600 flex items-start group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.9 + i * 0.1 }}
                            viewport={{ once: true }}
                          />
                          <span className="leading-relaxed group-hover/item:text-slate-800 transition-colors duration-300">
                            {advantage}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div className="space-y-4">
                    <motion.h4
                      className="text-sm font-bold text-slate-900 mb-4 flex items-center uppercase tracking-wider"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.8, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <Target className="w-4 h-4 text-blue-600" />
                      </motion.div>
                      Impact client
                    </motion.h4>
                    <ul className="space-y-3">
                      {service.impact.map((impact, i) => (
                        <motion.li
                          key={i}
                          className="text-slate-600 flex items-start group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.8 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.9 + i * 0.1 }}
                            viewport={{ once: true }}
                          />
                          <span className="leading-relaxed group-hover/item:text-slate-800 transition-colors duration-300">
                            {impact}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services