import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../constants/translations";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Show button when page is scrolled down
  const toggleVisibility = (): void => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#100d25",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-tertiary text-secondary p-3 sm:p-4 rounded-full shadow-lg border border-secondary/20 backdrop-blur-sm hover:text-white transition-colors duration-200"
          aria-label={t.backToTop.title}
          title={t.backToTop.title}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              d="M12 4L4 12L6.83 14.83L11 10.66V20H13V10.66L17.17 14.83L20 12L12 4Z"
              fill="currentColor"
              className="drop-shadow-sm"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
