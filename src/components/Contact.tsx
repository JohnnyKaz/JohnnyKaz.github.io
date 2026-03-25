import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Language, getTranslation } from "../utils/translations";

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) =>
    getTranslation(language, key);

  const contactInfo = [
    {
      icon: Mail,
      label: t("email"),
      value: "johnnykaziales@gmail.com",
      href: "mailto:johnnykaziales@gmail.com",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+44 7386432585",
      href: "tel:+447386432585",
      // value: "+30 6984562882",
      // href: "tel:+306984562882",
    },
    {
      icon: MapPin,
      label: t("location"),
      value: t("my_location"),
      href: "https://www.google.com/maps/place/Cambridge,+Cambridgeshire,+England",
      // href: "https://www.google.com/maps/place/Heraklion,+Greece",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="bg-card border border-border rounded-3xl p-6 lg:p-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          {t("contact")}
        </h2>
        <p className="text-muted-foreground">
          {t("contactIntro")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-3xl p-6 lg:p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Send className="w-6 h-6 text-primary" />
            {t("getInTouch")}
          </h3>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.icon === MapPin ? "_blank" : undefined}
                  rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="text-base font-medium break-words group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-3xl overflow-hidden"
        >
          <div className="h-full min-h-[400px] lg:min-h-[600px]">
            <iframe
              src="https://maps.google.com/maps?hl=en&q=Cambridge&t=&z=12&ie=UTF8&iwloc=B&output=embed"
              // src="https://maps.google.com/maps?hl=en&q=Heraklion&t=&z=12&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Heraklion, Crete, Greece Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
