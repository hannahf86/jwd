/* eslint-disable react/prop-types */

// REACT
import { useState } from "react";

// REACT ROUTER DOM
import { Link, Outlet } from "react-router-dom";

// MOTION
import { motion } from "framer-motion";

// COMPONENTS
import ToggleButton from "./ToggleButton";
import Footer from "./Footer";

// ICONS
import {
  HiHome,
  HiBriefcase,
  HiBookOpen,
  HiMail,
  HiGift,
} from "react-icons/hi";

// IMAGES
import navLogo from "../Assets/navLogo.webp";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const RootNav = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  // STYLES
  const mobileStyles = {
    container: "fixed lg:hidden w-screen h-20 bg-white z-40",
    fullMenu:
      "bg-white fixed w-screen h-screen p-20 md:p-0 flex flex-col justify-center items-center z-30 ",
    menuItem:
      "bg-green text-white w-60 h-16 rounded-lg flex justify-center items-center my-8 hover:bg-blue ",
    menuIcon: "mr-2 tracking-widest text-md sm:text-md",
  };

  const desktopStyles = {
    header: "hidden lg:block fixed bg-white top-0 w-full py-8 z-[99]",
    link: "text-black hover:bg-accent hover:text-white py-2 px-4 rounded-md mx-8",
    button:
      "bg-green text-white text-center text-sm px-8 py-4 ml-4 rounded-md hover:bg-accent ",
  };

  return (
    <div id="rootNav">
      {/* MOBILE NAV */}
      <motion.div
        id="nav"
        className={mobileStyles.container}
        animate={open ? "open" : "closed"}>
        <motion.div variants={variants} className={mobileStyles.fullMenu}>
          <motion.div onClick={handleNav}>
            <Link to="/">
              <span className={mobileStyles.menuItem}>
                <HiHome className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Home</p>
              </span>
            </Link>

            <Link to="services">
              <span className={mobileStyles.menuItem}>
                <HiBriefcase className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Services</p>
              </span>
            </Link>

            {/* <Link to="about">
              <span className={mobileStyles.menuItem}>
                <HiBookOpen className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Who are we?</p>
              </span>
            </Link> */}

            <Link to="freebies">
              <span className={mobileStyles.menuItem}>
                <HiGift className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Freebies</p>
              </span>
            </Link>

            <Link to="faqs-full">
              <span className={mobileStyles.menuItem}>
                <HiBookOpen className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">FAQs</p>
              </span>
            </Link>

            <Link to="contact">
              <span className={mobileStyles.menuItem}>
                <HiMail className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Contact</p>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <ToggleButton setOpen={setOpen} />
      </motion.div>

      {/* DESKTOP NAV */}
      <nav id="desktop-nav" className={desktopStyles.header}>
        <div className="flex items-center justify-between px-16 shadow-md">
          <div className="flex items-center pb-6">
            <Link to="/">
              <img src={navLogo} width={60} alt="jorvik web dev logo" />
            </Link>
            <small className="pl-4 text-sm text-black">JORVIK WEB DEV</small>
          </div>

          {/* LINKS */}
          <div className="pb-6">
            <Link to="freebies" className={desktopStyles.link}>
              FREEBIES
            </Link>
            <Link to="services" className={desktopStyles.link}>
              SERVICES
            </Link>
            {/* <Link to="blog" className={desktopStyles.link}>
              BLOG
            </Link> */}
            <Link to="faqs-full" className={desktopStyles.link}>
              FAQs
            </Link>

            <Link to="contact" className={desktopStyles.button}>
              BOOK
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootNav;
