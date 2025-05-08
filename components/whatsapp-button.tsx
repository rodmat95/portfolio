"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { PhoneIcon } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export default function WhatsAppButton({
  phoneNumber,
  className,
  size = "lg",
  variant = "default",
}: WhatsAppButtonProps) {
  const { t } = useLanguage()

  // Format the phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "")

  // Create the WhatsApp URL with the predefined message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(t("hero.whatsAppMessage"))}`

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={`group bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800 dark:text-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hidden md:flex ${className || ""}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <PhoneIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
        {t("hero.letsTalkWhatsApp")}
      </a>
    </Button>
  )
}
