import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles/index";
import { EarthCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
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
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t.contact.subtitle}</p>
        <h3 className={styles.sectionHeadText}>{t.contact.title}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t.contact.form.name}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t.contact.form.namePlaceholder}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t.contact.form.email}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.contact.form.emailPlaceholder}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t.contact.form.message}</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.form.messagePlaceholder}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-purple-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? t.contact.form.sendingButton : t.contact.form.sendButton}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactWithWrapper = SectionWrapper(Contact, "contact");

export default ContactWithWrapper;
