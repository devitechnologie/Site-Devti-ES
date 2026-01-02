"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  Checkbox,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/devtiai"
import { Send, CheckCircle } from "lucide-react";
import { useDevtiAIForm } from "@/services/api/submitForm";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-toastify";

const industriesFR = [
  "E-commerce",
  "Santé",
  "Finance",
  "Éducation",
  "Technologie",
  "Industrie manufacturière",
  "Immobilier",
  "Tourisme",
  "Commerce de détail",
  "Conseil",
  "Agroalimentaire",
  "Transports & Logistique",
  "Énergie",
  "Télécommunications",
  "Administration publique",
  "Médias & Divertissement",
  "Assurance",
  "Pharmaceutique",
  "Construction",
  "Services juridiques",
  "Environnement",
];

const servicesFR = [
  { id: "web-dev", label: "Développement Web" },
  { id: "mobile-dev", label: "Applications Mobile" },
  { id: "ai-integration", label: "Intégration IA" },
  { id: "consulting", label: "Conseil Technique" },
  { id: "maintenance", label: "Maintenance & Support" },
];

const officesFR = [
  { value: "tanger", label: "Tanger" },
  { value: "casablanca", label: "Casablanca" },
];

const industriesEN = [
  "E-commerce",
  "Healthcare",
  "Finance",
  "Education",
  "Technology",
  "Manufacturing",
  "Real Estate",
  "Tourism",
  "Retail",
  "Consulting",
  "Agri-food",
  "Transport & Logistics",
  "Energy",
  "Telecommunications",
  "Public Administration",
  "Media & Entertainment",
  "Insurance",
  "Pharmaceuticals",
  "Construction",
  "Legal Services",
  "Environment",
];

const servicesEN = [
  { id: "web-dev", label: "Web Development" },
  { id: "mobile-dev", label: "Mobile Applications" },
  { id: "ai-integration", label: "AI Integration" },
  { id: "consulting", label: "Technical Consulting" },
  { id: "maintenance", label: "Maintenance & Support" },
];

const officesEN = [
  { value: "tanger", label: "Tangier" },
  { value: "casablanca", label: "Casablanca" },
];

const useFormSchema = () => {
  const formSchemaEN = z.object({
    fullName: z.string().min(2, "Full name is required"),
    companyName: z.string().min(2, "Company name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Invalid phone number"),
    industry: z.string().min(1, "Please select an industry"),
    services: z
      .array(z.string())
      .min(1, "Please select at least one service"),
    office: z.string().min(1, "Please select an office"),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters long"),
  });

  const formSchemaFR = z.object({
    fullName: z.string().min(2, "Le nom complet est requis"),
    companyName: z.string().min(2, "Le nom de l'entreprise est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    industry: z.string().min(1, "Veuillez sélectionner une industrie"),
    services: z
      .array(z.string())
      .min(1, "Veuillez sélectionner au moins un service"),
    office: z.string().min(1, "Veuillez sélectionner un bureau"),
    message: z
      .string()
      .min(10, "Le message doit contenir au moins 10 caractères"),
  });

  const locale = useLocale();
  return locale === "fr" ? formSchemaFR : formSchemaEN;
};

export type FormDevtiAi = z.infer<typeof useFormSchema>;

const ContactForm = () => {
  const formSchema = useFormSchema();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { mutateAsync: submitForm } = useDevtiAIForm()
  const t = useTranslations();
  const locale = useLocale();
  const industries = locale === "fr" ? industriesFR : industriesEN;
  const services = locale === "fr" ? servicesFR : servicesEN;
  const offices = locale === "fr" ? officesFR : officesEN;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      industry: "",
      services: [],
      office: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = {
      ...values,
      fromPage: "devti AI",
      _cc: "contact@devtigroup.com"
    }

    submitForm(formData).then(() => {
      toast.success(t('forms.successMessage'))
      setIsSubmitted(true);
    }).catch((e) => {
      console.log(e)
      toast.error(t('forms.errorMessage'))
    })
  };

  if (isSubmitted) {
    return (
      <section className="py-32 px-6 bg-gradient-to-br from-green-50 via-white to-emerald-50/30 relative overflow-hidden">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-light text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Message envoyé avec succès !
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Merci pour votre intérêt. Notre équipe vous contactera dans les plus
            brefs délais.
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-6 px-6 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
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
            {t('devti_ai.contactForm.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('devti_ai.contactForm.description')}
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200/60 shadow-xl shadow-purple-500/10"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut", type: "spring", stiffness: 80 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileFocus={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          {t('devti_ai.contactForm.fullName')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('devti_ai.contactForm.fullNamePlaceholder')}
                            {...field}
                            className="bg-white border-slate-300 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileFocus={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          {t('devti_ai.contactForm.companyName')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('devti_ai.contactForm.companyNamePlaceholder')}
                            {...field}
                            className="bg-white border-slate-300 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          {t('devti_ai.contactForm.email')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ex@email.com"
                            {...field}
                            className="bg-white border-slate-300 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          {t('devti_ai.contactForm.phone')}
                        </FormLabel>
                        <FormControl>
                          <div className="flex">
                            <div className="flex items-center px-3 bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl">
                              <span className="text-sm text-slate-600">+212</span>
                            </div>
                            <Input
                              placeholder="6 XX XX XX XX"
                              {...field}
                              className="bg-white border-slate-300 focus:border-purple-500 focus:ring-purple-500/20 rounded-l-none rounded-r-xl h-12 transition-all duration-300"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          {t('devti_ai.contactForm.industry')}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white border-slate-300 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 transition-all duration-300">
                              <SelectValue placeholder={t('devti_ai.contactForm.industryPlaceholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="office"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">
                          {t('devti_ai.contactForm.office')}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white border-slate-300 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 transition-all duration-300">
                              <SelectValue placeholder={t('devti_ai.contactForm.officePlaceholder')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {offices.map((office) => (
                              <SelectItem key={office.value} value={office.value}>
                                {office.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">
                        {t('devti_ai.contactForm.services')}
                      </FormLabel>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5, scale: 1.02 }}
                          >
                            <FormField
                              control={form.control}
                              name="services"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(service.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                              ...field.value,
                                              service.id,
                                            ])
                                            : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== service.id
                                              )
                                            );
                                        }}
                                        className="data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal text-slate-700">
                                      {service.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-medium">
                        {t('devti_ai.contactForm.message')}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('devti_ai.contactForm.messagePlaceholder')}
                          {...field}
                          className="bg-white border-slate-300 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl min-h-[120px] resize-none transition-all duration-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                className="flex justify-center pt-6"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    className="w-full px-8 py-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                    disabled={form.formState.isSubmitting}
                  >
                    <motion.div
                      animate={form.formState.isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 1, repeat: form.formState.isSubmitting ? Infinity : 0, ease: "linear" }}
                    >
                      <Send className="mr-3 w-5 h-5" />
                    </motion.div>
                    <span>
                      {form.formState.isSubmitting
                        ? t('devti_ai.contactForm.sending')
                        : t('devti_ai.contactForm.send')}
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;