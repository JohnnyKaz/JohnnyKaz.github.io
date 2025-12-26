import { motion } from "motion/react";
import { Sun, Moon, Languages } from "lucide-react";
import {
  Language,
  getTranslation,
} from "../utils/translations";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  language: Language;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
}

export function Navigation({
  currentPage,
  onPageChange,
  language,
  theme,
  onToggleTheme,
  onToggleLanguage,
}: NavigationProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) =>
    getTranslation(language, key);
  const pages = [
    { key: "About", label: t("about") },
    { key: "Resume", label: t("resume") },
    { key: "Portfolio", label: t("portfolio") },
    { key: "Contact", label: t("contact") },
  ];

  return (
    <nav className="mb-6 lg:mb-8">
      <div className="flex items-center justify-between gap-4">
        {/* Page Navigation */}
        <div className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto overflow-y-hidden pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide flex-1 scroll-smooth touch-pan-x">
          {pages.map((page, index) => (
            <motion.button
              key={page.key}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onPageChange(page.key)}
              className={`relative px-3 sm:px-4 py-2 rounded-xl transition-all whitespace-nowrap flex-shrink-0 ${
                currentPage === page.key
                  ? "bg-card text-primary border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {page.label}
            </motion.button>
          ))}
        </div>

        {/* Theme & Language Toggles */}
        <div className="flex gap-2 flex-shrink-0">
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={onToggleTheme}
            className="p-2 sm:px-3 sm:py-2 bg-card hover:bg-primary/20 rounded-xl transition-colors text-muted-foreground hover:text-primary border border-border"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            onClick={onToggleLanguage}
            className="p-2 sm:px-3 sm:py-2 bg-card hover:bg-primary/20 rounded-xl transition-colors text-muted-foreground hover:text-primary border border-border flex items-center gap-2"
            aria-label="Toggle language"
          >
            <Languages className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">
              {language === "en" ? "GR" : "EN"}
            </span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}