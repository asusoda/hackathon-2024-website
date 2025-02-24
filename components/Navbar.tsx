"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "@/styles/navbar.css";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const Navbar = (activeSection: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (isOpen && event.target.closest(".nav-dropdown") === null) {
        setIsOpen(false);
      }
    }
    // console.log(activeSection);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, activeSection]);

  function toggleDropdown(event: any) {
    setIsOpen(!isOpen);
    if (!isOpenMenu) {
      setTimeout(() => {
        setIsOpenMenu(!isOpenMenu);
      }, 500);
    } else {
      setIsOpenMenu(!isOpenMenu);
    }
  }

  return (
    <section id="nav" className="mb-36">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 2000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 2000 }}
          transition={{ duration: 0.5 }}
          className={
            "nav flex py-8 glassy-effect border mt-24 rounded-t-2xl h-screen w-screen fixed md:hidden"
          }
        />
      )}
      <div className="nav flex-row space-x-24 flex py-8 glassy-effect">
        <div className="flex flex-row space-x-4">
          <Image
            src="/assets/images/soda.png"
            alt="SoDA"
            width={100}
            height={100}
          />
          <Image
            src="/assets/images/hackerdevils.png"
            alt="HackerDevils"
            width={50}
            height={50}
          />
        </div>
        <div className="flex space-x-2">
          <div className="hidden md:flex flex-wrap gap-5 text-white">
            <div
              className={`nav-titles nav-titles-ltr ${
                activeSection === "about" ? "before:w-full bg-red-500" : ""
              }`}
            >
              <a href="#about">About</a>
            </div>

            <div
              className={`nav-titles nav-titles-ltr ${
                activeSection === "schedule" ? "before:w-full" : ""
              } `}
            >
              <a href="#schedule">Schedule</a>
            </div>
            <div
              className={`nav-titles nav-titles-ltr ${
                activeSection === "sponsors" ? "before:w-full" : ""
              } `}
            >
              <a href="#sponsors">Sponsors</a>
            </div>
            <div
              className={`nav-titles nav-titles-ltr ${
                activeSection === "faq" ? "before:w-full" : ""
              } `}
            >
              <a href="#faq">FAQs</a>
            </div>
          </div>

          <div className="relative  ml-auto">
            {!isOpenMenu ? (
              <FaBars
                className="dropdown-toggle mt-2 text-3xl md:hidden cursor-pointer"
                onClick={toggleDropdown}
              />
            ) : (
              <IoMdClose
                className="dropdown-toggle text-5xl md:hidden cursor-pointer "
                onClick={toggleDropdown}
              />
            )}
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 2000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2000 }}
            transition={{ duration: 0.5 }}
            className="xl:hidden nav-dropdown rounded-t-2xl bg-transparent md:hidden"
          >
            <h1 className="-mt-40 mb-10 text-sm flex gap-2 items-center" />

            <a
              href="#about"
              className="nav-dropdown-titles hover:scale-20"
              onClick={toggleDropdown}
            >
              About
            </a>
            <a
              href="#schedule"
              className="nav-dropdown-titles hover:scale-20"
              onClick={toggleDropdown}
            >
              Schedule
            </a>
            <a
              href="#sponsors"
              className="nav-dropdown-titles hover:scale-20"
              onClick={toggleDropdown}
            >
              Sponsors
            </a>
            <a
              href="#prizes"
              className="nav-dropdown-titles hover:scale-20"
              onClick={toggleDropdown}
            >
              Prizes
            </a>
            <a
              href="#team"
              className="nav-dropdown-titles hover:scale-20"
              onClick={toggleDropdown}
            >
              Team
            </a>
            <a
              href="#faq"
              className="nav-dropdown-titles hover:scale-20"
              onClick={toggleDropdown}
            >
              FAQs
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
