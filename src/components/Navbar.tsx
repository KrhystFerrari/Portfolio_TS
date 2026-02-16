import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles/index";
import { getNavLinks } from "../constants/indexMultiLang";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../hooks/useLanguage";
import LanguageSelector from "./LanguageSelector";
import type { NavLink } from "../types";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { language } = useLanguage();

  const navLinks = getNavLinks(language);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const performScroll = (targetElement: HTMLElement) => {
    const navbarHeight = 80;
    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          const section = element.closest("section");
          const targetElement = section || element;

          setTimeout(() => performScroll(targetElement), 50);
        }
      });
    });
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 transition-all duration-300 ease-in-out border-b-2 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md border-[#00ff96] shadow-lg shadow-[#00ff96]/20"
          : "bg-transparent backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-[120px] h-w-[120px] object-contain" />
        </Link>

        <div className="flex items-center gap-4">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav: NavLink) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className={`${
                    active === nav.title
                      ? "text-[#00ff96] drop-shadow-[0_0_8px_rgba(0,255,150,0.8)]"
                      : "text-gray-300"
                  } hover:text-[#00ff96] hover:drop-shadow-[0_0_8px_rgba(0,255,150,0.6)] text-[18px] font-medium cursor-pointer transition-all duration-200`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(nav.title);
                    scrollToSection(nav.id);
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            className={`w-[28px] h-[28px] flex items-center justify-center transition-all duration-200 ${
              toggle
                ? "drop-shadow-[0_0_8px_rgba(0,255,150,0.8)]"
                : "hover:drop-shadow-[0_0_6px_rgba(0,255,150,0.5)]"
            }`}
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-[28px] h-[28px] object-contain ${
                toggle ? "brightness-0 invert-[0.7] hue-rotate-[85deg] saturate-[5]" : ""
              }`}
            />
          </button>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-[#0d1117]/95 backdrop-blur-md border-2 border-[#00ff96]/30 shadow-xl shadow-[#00ff96]/20`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav: NavLink) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`font-poppins font-medium cursor-pointer text-[16px] transition-all duration-200 ${
                      active === nav.title
                        ? "text-[#00ff96] drop-shadow-[0_0_6px_rgba(0,255,150,0.8)]"
                        : "text-gray-300 hover:text-[#00ff96] hover:drop-shadow-[0_0_6px_rgba(0,255,150,0.6)]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle(false);
                      setActive(nav.title);
                      scrollToSection(nav.id);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <LanguageSelector />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
