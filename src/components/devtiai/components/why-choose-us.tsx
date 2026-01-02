"use client";

import { motion } from "framer-motion";
import { philosophyFR, philosophyEN } from "@/utils/data";
import { Brain } from "lucide-react"
import { useLocale, useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("devti_ai")
  const currentLocale = useLocale();
  const philosophy = currentLocale === 'fr' ? philosophyFR : philosophyEN;

  return (
    <section className="py-6 px-6 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-pink-100/40 to-purple-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
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
            {t("why_choose_devti.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("why_choose_devti.description")}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300/60 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                initial={{ opacity: 0, x: -60, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  x: 10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <motion.span
                      className="text-lg font-bold text-slate-400 mb-4 block"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 120
                      }}
                      viewport={{ once: true }}
                    >
                      ({item.number})
                    </motion.span>
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      initial={{ opacity: 0, scale: 0, rotate: -90 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.15 + 0.4,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ rotate: 180, scale: 1.2 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:pl-16">
            <motion.div
              className="sticky top-32"
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 60
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />

                <div className="relative">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-3xl lg:text-4xl font-light mb-8 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    {t("why_choose_devti.philosophy.0")}{" "}
                    <motion.span
                      className="font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      {t("why_choose_devti.philosophy.1")}
                    </motion.span>{" "}
                    {t("why_choose_devti.philosophy.2")}
                  </motion.h3>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { color: "bg-purple-400", text: t("why_choose_devti.philosophy_points.0") },
                      { color: "bg-blue-400", text: t("why_choose_devti.philosophy_points.1") },
                      { color: "bg-pink-400", text: t("why_choose_devti.philosophy_points.2") },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.3 + index * 0.1
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.div
                          className={`w-2 h-2 ${feature.color} rounded-full`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 1.4 + index * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-slate-300">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs