"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Zap, Users } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    {
      value: "2+",
      label: t("about.stats.experience"),
      icon: <Code className="w-5 h-5 text-primary" />,
    },
    {
      value: "7",
      label: t("about.stats.projects"),
      icon: <Zap className="w-5 h-5 text-primary" />,
    },
    {
      value: "10+",
      label: t("about.stats.clients"),
      icon: <Users className="w-5 h-5 text-primary" />,
    },
  ]

  return (
    <section id="about" className="section-spacing">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>

              {/* Main image container with enhanced styling */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl z-10"></div>

                {/* The image */}
                <Image
                  src="/images/profile-illustration.png"
                  alt="Developer illustration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay rounded-2xl"></div>
              </div>

              {/* Code snippet decoration */}
              <div className="absolute -bottom-2 -left-2 bg-background/90 backdrop-blur-sm p-3 rounded-lg border shadow-md transform rotate-3 hidden md:block">
                <code className="text-xs text-primary font-mono">const developer = 'passionate';</code>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-editorial-lg mb-6">{t("about.title")}</h2>

            <div className="space-y-6">
              <p className="text-editorial-body">{t("about.paragraph1")}</p>

              <p className="text-editorial-body">{t("about.paragraph2")}</p>

              <p className="text-editorial-body">{t("about.paragraph3")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-secondary/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
