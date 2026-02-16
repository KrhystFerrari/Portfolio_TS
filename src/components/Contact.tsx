import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles/index";
import MatrixGlobe from "./MatrixGlobe";
import { SectionWrapper } from "../hoc";
import { slideIn, staggerContainer } from "../utils/motion";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../constants/translations";
import type { ContactForm, ContactFormEvent, ContactInputEvent } from "../types";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const { language } = useLanguage();
  const t = translations[language];

  // Custom animation variants
  const containerVariants = staggerContainer(0.1, 0.1);

  const titleVariants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  const glitchTitleVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 1.2,
      },
    },
  };

  const formFieldVariants = {
    hidden: {
      x: -50,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 120,
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 300,
        duration: 0.3,
      },
    },
  };

  const contactButtonsVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200,
        duration: 0.3,
      },
    },
  };

  const individualButtonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 300,
        duration: 0.2,
      },
    },
  };

  const handleChange = (e: ContactInputEvent): void => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: ContactFormEvent): void => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tuispio",
        "template_nkseh3r",
        {
          from_name: form.name,
          to_name: "Krhystoferson Ferrari",
          from_email: form.email,
          to_email: "krhystoffersonf@gmail.com",
          message: form.message,
        },
        "puVw9ckTwYGo31G0P"
      )
      .then(
        () => {
          setLoading(false);
          alert(t.contact.alerts.success);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: unknown) => {
          setLoading(false);
          console.error(error);

          alert(t.contact.alerts.error);
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#0d1117] p-8 rounded-2xl border-2 border-[#00ff96]/30 shadow-[0_0_30px_rgba(0,255,150,0.2)]"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Header Section */}
          <motion.p variants={titleVariants} className={`${styles.sectionSubText} text-[#00ff96]`}>
            {t.contact.subtitle}
          </motion.p>
          <motion.h3
            variants={glitchTitleVariants}
            className={`${styles.sectionHeadText} text-white drop-shadow-[0_0_20px_rgba(0,255,150,0.3)]`}
          >
            {t.contact.title}
          </motion.h3>

          {/* Form Section */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
            variants={containerVariants}
          >
            {/* Name Field */}
            <motion.label variants={formFieldVariants} className="flex flex-col">
              <span className="text-[#00ff96] font-medium mb-4 font-mono">
                {t.contact.form.name}
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.form.namePlaceholder}
                className="bg-[#161b22] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-2 border-[#00ff96]/30 focus:border-[#00ff96] font-medium transition-colors duration-300"
              />
            </motion.label>

            {/* Email Field */}
            <motion.label variants={formFieldVariants} className="flex flex-col">
              <span className="text-[#00ff96] font-medium mb-4 font-mono">
                {t.contact.form.email}
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.form.emailPlaceholder}
                className="bg-[#161b22] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-2 border-[#00ff96]/30 focus:border-[#00ff96] font-medium transition-colors duration-300"
              />
            </motion.label>

            {/* Message Field */}
            <motion.label variants={formFieldVariants} className="flex flex-col">
              <span className="text-[#00ff96] font-medium mb-4 font-mono">
                {t.contact.form.message}
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.form.messagePlaceholder}
                className="bg-[#161b22] py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-2 border-[#00ff96]/30 focus:border-[#00ff96] font-medium transition-colors duration-300 resize-none"
              />
            </motion.label>

            {/* Submit Button */}
            <motion.button
              variants={buttonVariants}
              type="submit"
              className="bg-[#0d1117] py-3 px-8 rounded-xl outline-none w-fit text-[#00ff96] font-bold border-2 border-[#00ff96] shadow-[0_0_20px_rgba(0,255,150,0.4)] hover:shadow-[0_0_30px_rgba(0,255,150,0.6)] font-mono"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              disabled={loading}
            >
              {loading ? t.contact.form.sendingButton : t.contact.form.sendButton}
            </motion.button>

            {/* Direct Contact Section */}
            <motion.div
              variants={contactButtonsVariants}
              className="mt-8 pt-6 border-t border-[#00ff96]/30"
            >
              <p className="text-[#00ff96] font-medium mb-4 font-mono text-center">
                {t.contact.directContact.title}
              </p>
              <motion.div className="flex justify-center gap-4" variants={staggerContainer(0.1)}>
                <motion.a
                  variants={individualButtonVariants}
                  href="https://www.linkedin.com/in/krhystofferson-ferrari-011385234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#161b22] py-3 px-6 rounded-xl border-2 border-[#00ff96]/30 hover:border-[#00ff96] text-white hover:text-[#00ff96] font-mono font-medium shadow-[0_0_10px_rgba(0,255,150,0.2)] hover:shadow-[0_0_20px_rgba(0,255,150,0.4)]"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  {t.contact.directContact.linkedin}
                </motion.a>

                <motion.a
                  variants={individualButtonVariants}
                  href="https://wa.me/5517991950659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#161b22] py-3 px-6 rounded-xl border-2 border-[#00ff96]/30 hover:border-[#00ff96] text-white hover:text-[#00ff96] font-mono font-medium shadow-[0_0_10px_rgba(0,255,150,0.2)] hover:shadow-[0_0_20px_rgba(0,255,150,0.4)]"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  {t.contact.directContact.whatsapp}
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center"
      >
        <MatrixGlobe />
      </motion.div>
    </div>
  );
};

const ContactWithWrapper = SectionWrapper(Contact, "contact");

export default ContactWithWrapper;
