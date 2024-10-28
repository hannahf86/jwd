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
import { HiHome, HiBriefcase, HiBookOpen, HiMail } from "react-icons/hi";

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
    container: "fixed md:hidden w-full h-20 bg-white z-40",
    logo: "absolute right-16 z-[99] cursor-pointer",
    fullMenu:
      "bg-white fixed w-full h-screen p-20 md:p-0 flex flex-col justify-center items-center z-30 md:w-2/6",
    menuItem:
      "bg-accent text-white w-60 h-16 rounded-lg flex justify-center items-center my-8 hover:bg-black hover:text-attention",
    menuIcon: "mr-2 tracking-widest text-md sm:text-md",
  };

  const desktopStyles = {
    header:
      "fixed bg-white top-0 w-full flex justify-between items-center py-8 px-16 z-[99]",
    logo: "flex cursor-pointer elf-center",
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
        <div className={mobileStyles.logo}>
          <img src={navLogo} width={91} alt="jorvik web dev logo" />
        </div>

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

            <Link to="about">
              <span className={mobileStyles.menuItem}>
                <HiBookOpen className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Who are we?</p>
              </span>
            </Link>

            <Link to="freebies">
              <span className={mobileStyles.menuItem}>
                <HiBookOpen className={mobileStyles.menuIcon} />
                <p className="text-sm sm:text-md">Freebies</p>
              </span>
            </Link>

            <Link to="faqs">
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
      <nav className={desktopStyles.header}>
        <div className="flex items-center justify-center">
          <img
            src={navLogo}
            width={60}
            alt="jorvik web dev logo"
            className={desktopStyles.logo}
          />
          <small className="pl-4 text-sm text-black">JORVIK WEB DEV</small>
        </div>

        {/* LINKS */}
        <div>
          <Link to="freebies" className={desktopStyles.link}>
            FREEBIES
          </Link>
          <Link to="services" className={desktopStyles.link}>
            SERVICES
          </Link>
          <Link to="faqs" className={desktopStyles.link}>
            FAQs
          </Link>

          <Link to="contact" className={desktopStyles.button}>
            BOOK
          </Link>
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
