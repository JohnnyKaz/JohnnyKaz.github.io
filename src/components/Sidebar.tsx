import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Language, getTranslation } from "../utils/translations";
import { getImageUrl, IMAGE_PATHS } from "../utils/assets";

interface SidebarProps {
  language: Language;
}

export function Sidebar({ language }: SidebarProps) {
  // Set initial state based on screen size
  const [showContacts, setShowContacts] = useState(false);
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  useEffect(() => {
    // On mount, check if we're on desktop and set showContacts accordingly
    const isDesktop = window.innerWidth >= 1024;
    setShowContacts(isDesktop);

    // Optional: handle window resize to auto-expand on desktop
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop) {
        setShowContacts(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: t('email'),
      value: "johnnykaziales@gmail.com",
    },
    {
      icon: Phone,
      label: t('phone'),
      value: "+44 7386432585",
      // value: "+30 6984562882",
    },
    {
      icon: MapPin,
      label: t('location'),
      value: t('my_location'),
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/johnny-kaz/" },
    { icon: Github, href: "https://github.com/JohnnyKaz" },
    { icon: Instagram, href: "https://www.instagram.com/kazjohnny/" },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full lg:w-80 bg-card border border-border rounded-3xl p-6 lg:p-8 lg:sticky lg:top-8 h-fit"
    >
      {/* Header Section - Always Visible */}
      <div className="flex items-center gap-4 lg:flex-col lg:items-center mb-6 lg:mb-8 relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          // className="w-20 h-20 lg:w-40 lg:h-40 rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-0.5 lg:p-1 flex-shrink-0"
          className="w-20 h-20 lg:w-40 lg:h-40 rounded-2xl lg:rounded-3xl overflow-hidden bg-secondary p-0.5 lg:p-1 flex-shrink-0"
        >
          <ImageWithFallback
            src={getImageUrl(IMAGE_PATHS.PROFILE)}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
          />
        </motion.div>

        <div className="flex-1 lg:flex-none lg:w-full">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl lg:text-3xl lg:text-center mb-1 lg:mb-2"
          >
            {t('my_name')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-secondary px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg inline-block lg:block lg:text-center"
          >
            <p className="text-muted-foreground text-sm">
              {t('computerScientist')}
            </p>
          </motion.div>
        </div>

        {/* Toggle Button for Mobile/Tablet */}
        <button
          onClick={() => setShowContacts(!showContacts)}
          className="lg:hidden absolute top-8 right-0 px-3 py-1.5 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm text-primary flex items-center gap-1"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showContacts ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Contacts Section - Collapsible on Mobile/Tablet, Always Visible on Desktop */}
      <div className="hidden lg:block w-full h-px bg-border mb-8" />

      <AnimatePresence>
        {(showContacts || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="lg:hidden w-full h-px bg-border my-6" />

            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 lg:gap-4"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-secondary/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm break-words">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="w-full h-px bg-border mb-6" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-4 mb-6"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 transition-colors flex items-center justify-center text-muted-foreground hover:text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="pt-6 border-t border-border"
            >
              <p className="text-xs text-muted-foreground text-center">
                {t('last_updated')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}
