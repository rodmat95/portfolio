"use client"

import { motion } from "framer-motion"
import { Layout, Zap, Smartphone, Users } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Layout className="w-6 h-6 text-primary" />,
      title: t("services.landingPages.title"),
      description: t("services.landingPages.description"),
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: t("services.webSpeed.title"),
      description: t("services.webSpeed.description"),
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: t("services.responsive.title"),
      description: t("services.responsive.description"),
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
    },
  ]

  return (
    <section id="services" className="section-spacing bg-secondary/30">
      <div className="editorial-container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-editorial-lg mb-4">{t("services.title")}</h2>
          <p className="text-editorial-body">{t("services.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg bg-background border hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-editorial-sm mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
