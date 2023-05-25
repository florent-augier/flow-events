"use client";

import dynamic from "next/dynamic";

import React, { useState, useContext } from "react";
import "./navigation.scss";
import { motion, AnimatePresence } from "framer-motion";

import { Menu } from "@styled-icons/material-rounded/Menu";
import { Close } from "@styled-icons/material-rounded/Close";
import { styled, useTheme } from "styled-components";
import Switcher from "./../../components/switch/switchTheme";

const Logo = dynamic(() => import("./../../components/logo/logo.js"));

import { CustomThemeContext } from "./../../context/WrapperContext";

// import Logo from "./../../components/logo/logo";

function Navigation() {
  const currentTheme = useContext(CustomThemeContext);

  const { theme, switchTheme } = currentTheme;

  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const links = [
    {
      name: "accueil",
      path: "/",
    },
    {
      name: "nos photobooth",
      path: "nos-photobooth",
    },
    {
      name: "contact",
      path: "contact",
    },
  ];

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  const transitionDelay = 0.8;

  const transitionIndex = (index) => Math.round(index * 2);

  const exitDelay = 1;

  return (
    <>
      <header>
        <Logo />
        <Switcher onClick={() => switchTheme()} theme={theme} />
        <div className="menu" onClick={isOpen}>
          <Menu />
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div className="btn_close" onClick={closeMenu}>
              <Close />
            </div>

            {links.map((link, i) => (
              <motion.a
                key={link.path}
                href={link.path}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: transitionDelay - `0.${i}`,
                }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: exitDelay - `0.${i + 1}`,
                  },
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
