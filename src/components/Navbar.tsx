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

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-primary" : "bg-transparent"
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
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
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
            className="w-[28px] h-[28px] flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav: NavLink) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
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
