'use client'

import { useTranslations } from "next-intl";

import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappButton = () => {
  const t = useTranslations()

  return (
    <FloatingWhatsApp
      accountName="DEVTI TECHNOLOGIE"
      phoneNumber="+212663282554"
      avatar={'/images/devtilogo-white.png'}
      style={{
        color: "black",
      }}
      allowEsc={true}
      allowClickAway={false}
      placeholder={t("whatsapp.placeholder")}
      chatMessage={t("whatsapp.chatMessage")}
      statusMessage={t("whatsapp.status")}
    />
  )
}

export default WhatsappButton