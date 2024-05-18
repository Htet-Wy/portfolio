import React, { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen((prev) => !prev);
  };

  const handleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <nav className="sticky top-0 left-0 z-20 bg-light-white flex items-center justify-between w-full px-4 py-6 border-b border-b-gray-200 dark:bg-almost-black dark:border-b-deep-black">
      <a href="#home" className="flex items-center gap-2">
        <FaCode className="text-2xl" />
        <span className="hidden text-lg md:block font-raleway font-semibold">
          Htet Wai Yan
        </span>
      </a>
      <a href="#home" className="text-lg md:hidden font-raleway font-semibold">
        Htet Wai Yan
      </a>
      <ul className="hidden justify-center items-center gap-8 md:flex">
        <li>
          <a
            href="#home"
            className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#skill"
            className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
          >
            Skill
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
          >
            Contact Me
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {dark ? (
          <button className="text-2xl" onClick={handleDarkMode}>
            <CiLight />
          </button>
        ) : (
          <button className="text-2xl" onClick={handleDarkMode}>
            <CiDark />
          </button>
        )}
        <div
          className="cursor-pointer transition-all duration-150 hover:scale-110 md:hidden"
          onClick={handleNavbar}
        >
          <div
            className={`w-5 h-[2px] bg-deep-black dark:bg-light-white transition-all duration-700 ease-in-out ${
              open ? "rotate-45 translate-y-[7px]" : "rotate-0 translate-y-0"
            }`}
          ></div>
          <div
            className={`w-5 h-[2px] bg-deep-black dark:bg-light-white my-1 transition-all duration-1000 ease-in-out ${
              open ? "opacity-0" : "opacity-1"
            }`}
          ></div>
          <div
            className={`w-5 h-[2px] bg-deep-black dark:bg-light-white transition-all duration-700 ease-in-out ${
              open ? "-rotate-45 -translate-y-[5px]" : "rotate-0"
            }`}
          ></div>
        </div>
      </div>
      {open && (
        <div className="absolute top-[77px] left-0 w-full h-screen py-8 px-4 z-10 bg-light-white dark:bg-almost-black">
          <ul className="flex flex-col justify-center items-center gap-8">
            <li>
              <a
                href="#home"
                className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
                onClick={handleNavbar}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
                onClick={handleNavbar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
                onClick={handleNavbar}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
                onClick={handleNavbar}
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-500 hover:text-midnight-slate hover:text-lg transition-all ease-in duration-150 dark:text-light-gray dark:hover:text-light-white"
                onClick={handleNavbar}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
