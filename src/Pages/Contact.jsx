// REACT
import { useRef, useState } from "react";

// MOTION
import { motion } from "framer-motion";

// email js
import emailjs from "@emailjs/browser";

// TOAST
import toast, { Toaster } from "react-hot-toast";

// IMAGES
import logo from "../Assets/Branding/logo-green.png";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  // STYLES
  const layoutStyles = {
    background: "bg-white h-full w-screen z-0 pb-12",
    textContainer: "relative mx-10 z-30",
    button:
      "bg-green text-white text-center text-sm px-16 py-4 mt-8 rounded-md hover:bg-accent ",
    contactContainer: "hidden",
    formContainer: "flex flex-col justify-center items-center w-full mb-12",
    input: "my-2 py-2 pl-2 border-4 border-green rounded-md lg:w-2/6 w-4/6",
    phoneSVG: "text-accent absolute m-auto z-10",
    logo: "flex flex-col justify-center items-center pt-24 lg:pt-40",
  };

  const textStyles = {
    title: "text-green text-2xl pb-8 text-center text-5xl",
    desc: "text-black text-base text-center mb-8 mx-10",
  };

  const ref = useRef();

  // CLEAR FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // EMAIL JS
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm("service_iu43dpl", "template_8nfaaha", formRef.current, {
        publicKey: "CLllgrNb6UYby4AOj",
      })
      .then(
        () => {
          toast.success(
            `Thanks for your email ${name}! We'll be in touch soon!`,
          );
        },
        (e) => {
          toast.error(
            `Oh no! There's been an error! If the problem persists, please contact hello@jorvikweb.dev`,
          );
        },
      );
  };

  return (
    <motion.div
      ref={ref}
      className={layoutStyles.background}
      variants={variants}
      initial="initial"
      whileInView="animate"
      id="contact">
      <div className={layoutStyles.logo}>
        <img
          src={logo}
          alt="jorvik web dev logo in green"
          className="w-1/5 m-auto mb-4 lg:hidden"
        />{" "}
        <motion.h1
          variants={variants}
          className="text-green text-5xl lg:text-4xl leading-snug font-bold mb-8 text-center ">
          Contact
        </motion.h1>
        <motion.h2 variants={variants} className={textStyles.desc}>
          Please get in touch if you&apos;re interested in working together or
          have any questions. <br />
          We&apos;re happy to hear from you!
        </motion.h2>
      </div>

      {/* FORM */}
      <div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={layoutStyles.formContainer}
          id="form">
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={layoutStyles.input}
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={layoutStyles.input}
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={layoutStyles.input}
          />
          <button className={layoutStyles.button}>Submit</button>
          <Toaster />
        </motion.form>
      </div>

      <div className="footer"></div>
    </motion.div>
  );
};

export default Contact;
