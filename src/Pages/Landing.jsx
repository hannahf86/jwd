// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaCheck } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { MdDraw } from "react-icons/md";
import { BsClipboard2DataFill } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { FaServer } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

// IMAGES
import background from "../Assets/jwdBackground.jpeg";
import webDesign from "../Assets/web-design.webp";
import reviews from "../Assets/reviews.png";
import hannah from "../Assets/profilePic.jpg";
import fees from "../Assets/fees.png";
import efficient from "../Assets/efficient.png";
import peace from "../Assets/peace.png";
import contact from "../Assets/support.png";
import code from "../Assets/code.png";
import happy from "../Assets/happy.png";
import matthew from "../Assets/mattAvatar.png";
import mick from "../Assets/mickAvatar.png";

// COMPONENTS
import Bookings from "../Components/Bookings";

const Landing = () => {
  const styles = {
    headline: "text-green text-2xl font-bold mb-4",
    subtitle: "text-blue font-bold text-lg mb-4",
    button:
      "bg-green text-white flex self-center text-center text-sm px-8 py-2 rounded-md hover:bg-accent cursor-pointer",
    ghostButton:
      "bg-white flex self-center text-black text-center ml-6 text-sm px-8 py-4 rounded-md border-4 border-green hover:bg-green hover:text-white cursor-pointer",
  };

  return (
    <div id="home">
      {/* LANDING */}
      <div id="landing">
        {/* BACKGROUND IMAGE */}
        <img src={background} className="relative w-screen h-screen" />

        <div className="absolute top-40 mx-16 grid grid-cols-2 ">
          {/* COL 01 - REWORD */}
          <div className="col-start-1">
            <h1 className={styles.headline}>
              Building custom, <br />
              high-performance websites that drive results
            </h1>
            <h2 className={styles.subtitle}>
              Giving you peace of mind from a service you can trust
            </h2>
            {/* SALES POINTS */}
            <div className="text-base mb-4">
              <div className="flex items-center">
                <FaCheck className="mr-2 text-green" />
                <h3>Increase visibility</h3>
              </div>

              <div className="flex items-center">
                <FaCheck className="mr-2 text-green" />
                <h3>Engage customers</h3>
              </div>

              <div className="flex items-center">
                <FaCheck className="mr-2 text-green" />
                <h3>Drive more sales with faster load times</h3>
              </div>
            </div>

            {/* C2A BUTTONS */}
            <div className="flex h-20 my-8">
              <div className={styles.button}>
                <Link to="appointments">
                  BOOK A FREE <br />
                  CONSULTATION
                </Link>
              </div>

              <div className={styles.ghostButton}>
                <Link to="appointments">LEARN MORE</Link>
              </div>
            </div>

            {/* REVIEWS */}
            <Link to="reviews">
              <div className="flex">
                <img
                  src={reviews}
                  className="h-16"
                  alt="images of google review profiles"
                />
                <div className="flex flex-col ml-6">
                  <Link className="mb-2">
                    <small className="text-sm text-black font-bold flex items-center">
                      Happy customer stories this way...
                    </small>
                  </Link>
                  <div className="flex text-yellow-500">
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* SERVICES */}
          <div className="col-span-2 flex flex-col border-4 border-green rounded-lg p-4 list-none mt-8 mb-40">
            <div className="flex justify-center ">
              <div className="flex items-center mx-16">
                <MdDraw size={22} className="mr-2 text-green" />
                <li className=" my-1 font-bold text-black/80">UI Design</li>
              </div>
              <div className="flex items-center mx-16">
                <BsClipboard2DataFill size={18} className="mr-2 text-green" />
                <li className=" my-1 font-bold text-black/80">UX Research</li>
              </div>
              <div className="flex items-center mx-16">
                <HiDesktopComputer size={22} className="mr-2 text-green" />
                <li className=" my-1 font-bold text-black/80">Development</li>
              </div>
              <div className="flex items-center  mx-16">
                <HiMiniPresentationChartBar
                  size={20}
                  className="mr-2 text-green"
                />
                <li className=" my-1 font-bold text-black/80">SEO Services</li>
              </div>
              <div className="flex items-center mx-16">
                <FaServer size={18} className="mr-2 text-green" />
                <li className=" my-1 font-bold text-black/80">Hosting</li>
              </div>
            </div>
          </div>

          {/* COL 02 */}
          <div className="col-start-2 row-start-1 self-center">
            <img src={webDesign} className="w-5/6 ml-44" />
          </div>
        </div>
      </div>

      {/* QUESTION 01 */}
      <div id="tired" className="text-center my-32">
        <h1 className="text-3xl text-green font-bold mb-12">
          Tired of tech talk and sneaky fees?
        </h1>
        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight size={30} className="text-green mr-4" />
          <h2 className="text-lg text-black font-bold my-8">
            Sick of features on website builder sites being stuck behind pay
            walls??
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight size={30} className="text-green mr-4" />
          <h2 className="text-lg text-black font-bold my-8">
            Are you spending too much time learning skills you&apos;re not
            interested in??
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight size={30} className="text-green mr-4" />
          <h2 className="text-lg text-black font-bold my-8">
            You feel like you&apos;re working all the time but getting nowhere??
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight size={30} className="text-green mr-4" />
          <h2 className="text-lg text-black font-bold my-8">
            Confused by UI, UX, PCP, LCP, INP, CLS and just far too many
            anagrams??
          </h2>
        </div>
      </div>

      {/* ABOUT US - SHORT */}
      <div id="about-short" className="grid grid-cols-2 mb-40">
        <div className="col-start-1 relative">
          <img
            src={hannah}
            alt="picture of director and lead designer Hannah Feehan"
            className="p-16"
          />
          <h3 className="absolute bottom-24 ml-16 bg-green text-white font-bold p-3">
            Our CEO and Jarl of the land, Hannah
          </h3>
        </div>

        <div className="col-start-2 pt-16 px-12">
          <h1 className="text-green font-bold text-xl mb-4">
            Hi! We&apos;re Jorvik Web Dev, a small but mighty web design agency
            based in York, UK.
          </h1>
          <p className="text-base mb-8">
            At our core, we here at JWD want to help you and your business.
            <br />
          </p>
          <p className="text-md mb-4">
            Starting your own business is SO hard! <br />
            We know!
            <br /> We&apos;ve just done it!
            <br /> <br />
            There's far too much to manage and so many new skills to learn. If
            we're completely honest, we're not business folks, we're computer
            folks and we wanted to do what we love.
            <br />
            <br />
            <h3 className="text-green font-bold text-base">
              And that's what you should be doing!
            </h3>
          </p>
          <p className="text-base text-left font-bold text-black ">
            With a collective knowledge base of 12 years and a 5 star rating on
            Google reviews, let us handle your online journey so you can focus
            on what matters to you the most!
          </p>
          <Link to="about-us" className="cursor-point text-right">
            <p className="my-6 px-20 underline text-black">
              More about us here if you fancy...
            </p>
          </Link>
        </div>
      </div>

      {/* <div className="mb-40">
        <p className="text-base text-center font-bold text-black mx-44">
          With a collective knowledge base of 12 years and a 5 star rating on
          Google reviews, let us handle your online journey so you can focus on
          what matters to you the most!
        </p>
        <Link to="about-us" className="cursor-point text-right">
          <p className="my-6 px-20 underline text-black">
            More about us here if you fancy...
          </p>
        </Link>
      </div> */}

      {/* BENEFITS */}
      <div id="benefits" className="bg-green mx-16 p-12">
        <h1 className="text-center text-white font-bold text-3xl my-8">
          The benefits of working with us
        </h1>

        <div className="grid grid-cols-3 gap-16 mb-12">
          <div className="col-start-1 flex flex-col justify-center">
            <img
              src={fees}
              alt="a british pound sign representing no hidden fees"
              className="m-20"
            />
            <h2 className="text-lg font-bold text-center text-accent mb-4">
              No Hidden Fees
            </h2>
            <p className="text-white text-center text-md">
              Through our own experience as customers, we hate it when fees are
              added at the end or they're not displayed on the website. <br />
              <br /> We don't do that here.
              <br />
              <br /> We believe in transparency and clear communication. No
              smoke and mirrors here - just honest work!
            </p>
          </div>

          <div className="col-start-2 flex flex-col justify-center">
            <img
              src={efficient}
              alt="a clock representing efficient use of time"
              className="m-20"
            />

            <h2 className="text-lg font-bold text-center text-accent mb-4">
              Efficient Service
            </h2>
            <p className="text-white text-center text-md">
              We make web development a breeze with a fast and efficient
              service.
              <br />
              <br /> Using the latest productivity tools and workflow methods,
              we ensure your project will not take months and months, with no
              updates and added costs, but instead literally a couple of weeks,
              project size depending of course!
            </p>
          </div>

          <div className="col-start-3 flex flex-col justify-center">
            <img
              src={peace}
              alt="a peace sign representing peace of mind"
              className="m-20"
            />
            <h2 className="text-lg font-bold text-center text-accent mb-4">
              Peace of Mind
            </h2>
            <p className="text-white text-center text-md">
              Join our ever growing list of happy clients and like them, trust
              us to take care of this section of your business. <br />
              <br /> We work quickly and with empathy, providing you with top
              quality websites, knowing how important your online presence is
              for every business, especially in this financial climate.
            </p>
          </div>
        </div>
      </div>

      {/* HOW DOES IT WORK */}
      <div id="how-it-works" className="my-40 ml-40 mr-20">
        <h1 className="text-3xl text-green font-bold mb-12 text-center">
          OK, so how does this work?
        </h1>
        {/* GRID */}
        <div className="grid grid-cols-3 gap-12">
          <div className="col-start-1 col-span-2 row-start-1 mb-12">
            <h2 className="text-blue text-xl font-bold">#01</h2>
            <h1 className="text-green text-2xl font-bold mb-6">Get in touch</h1>
            <p className="text-md text-black">
              Book a call or send a message on Facebook or Instagram. The best
              thing to do first is to hash it out and figure out how we can best
              serve you and your business.
              <FaInfinity size={35} className="text-accent mt-6" />
              As neurodiverse people ourselves, we acknowledge a call can be
              intimidating for some folks, which is why we offer the messaging
              service through our social platforms, which you can find below.{" "}
              <br />
              <br />
              You absolutely will NOT be pressured into buying anything you are
              not 100% comfortable with. We're here to help you, not take
              advantage.
              <FaInfinity size={35} className="text-accent" />{" "}
              <div className="flex text-green mb-8">
                <Link
                  to="https://www.facebook.com/profile.php?id=61562515362932"
                  target="_blank">
                  <FaFacebookSquare size={35} className="mt-6" />
                </Link>
                <Link
                  to="https://www.instagram.com/jorvikwebdev/"
                  target="_blank">
                  <FaInstagramSquare size={35} className="mx-6 mt-6" />
                </Link>
              </div>
            </p>
          </div>
          <div className="col-start-3 row-start-1 m-auto">
            <img
              src={contact}
              alt="red haired cartoon woman happily talking on the phone"
            />
          </div>

          <div className="grid-start-1 col-span-2 mb-12">
            <h2 className="text-blue text-xl font-bold">#02</h2>
            <h1 className="text-green text-2xl font-bold mb-6">
              We do our jobs
            </h1>
            <h3 className="text-md text-green/80 mb-2 font-bold">
              UI/UX, BRANDING & WEB DESIGN
            </h3>
            <p className="text-md text-black">
              Once the design is complete, we will send you a link to a
              prototype of the website so you can see how your brand has been
              applied and get a feel for the website on desktop and mobile
              before we commit the time to building. <br />
              <br />
              We work this way to save costs for you, and maintain transparency
              and communication throughout. If you have a change of heart, we
              encourage you to get in touch before the build process begins.
            </p>
            <h3 className="text-md text-green/80 mb-2 mt-8 font-bold">
              SEO SERVICES
            </h3>
            <p className="text-md text-black">
              We being with a thorough "crawl" of your website and provide you
              with an ULTRA geeky report that highlights where we need to focus
              our efforts to help improve those rankings. <br />
              <br />
              Working together, we create a marketing strategy with clear steps
              and deadlines for you to follow, giving you plenty of time to
              acquire any content needed. We then implement it and do our
              magical SEO tricks.
            </p>
          </div>
          <div className="col-start-3  m-auto">
            <img src={code} alt="some hands typing some code" />
          </div>

          <div className="grid-start-1 col-span-2 mb-12">
            <h2 className="text-blue text-xl font-bold">#03</h2>
            <h1 className="text-green text-2xl font-bold mb-6">
              Handover and everyone is happy
            </h1>

            <p className="text-md text-black">
              Once the project is finished, our support does not stop there!{" "}
              <br />
              <br />
              We will make sure your website is live, working correctly, and we
              will continue to monitor the website for one month after handover
              to make sure the website is stable. <br />
              <br />
              All our website packages come with one year free hosting and a
              free domain, should you need it. <br />
              <br />
              We offer our clients a{" "}
              <strong className="text-green">15% reduction</strong> in any
              future products. For example, a blog or a booking system. Simply
              drop us a line with what you need and we'll crack right on!
            </p>
          </div>
          <div className="col-start-3 m-auto">
            <img
              src={happy}
              alt="multi racial people cheering at a big complete sign"
            />
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div id="reviews" className="bg-green mx-16 p-12">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-20">
          {/* COL 01 */}
          <div className="col-start-1 row-span-2 p-8 justify-center m-auto">
            <h1 className="text-center text-white font-bold text-3xl my-8">
              Happy Client Reviews
            </h1>
            <p className="text-white text-center text-base">
              Here are some of our most recent reviews. <br />
              <br /> We're very proud to say we have 100% client satisfaction
              and 5 star reviews on Google.
              <br />
              <br />
              Thank you to all of our amazing clients!
            </p>
          </div>

          {/* COL 02 */}
          <div className="col-start-2 row-start-1 px-8 pt-8">
            {/* REVIEW 01*/}
            <div className="flex text-white justify-center">
              <FaQuoteLeft size={20} className="mr-2" />
              <h1 className="text-lg font-bold bg-accent ">
                Very friendly and thorough
              </h1>
              <FaQuoteRight size={20} className="ml-2" />
            </div>
            <p className="text-white text-md text-left my-8">
              "Amazing person to work with. Very friendly and thorough. I would
              definitely recommend 😊"
            </p>
            <div className="m-auto flex items-center justify-start ">
              <img
                src={matthew}
                alt="avatar of matthew palmer"
                className="h-16"
              />
              <div className="flex text-yellow-500 ml-4">
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
              </div>
            </div>
            <p className="text-white text-right">Matthew, Oct 2024</p>
          </div>

          {/* REVIEW 02*/}
          <div className="col-start-2 row-start-2 px-8 pt-8">
            <div className="flex text-white justify-center">
              <FaQuoteLeft size={20} className="mr-2" />
              <h1 className="text-lg font-bold bg-accent ">
                process was really easy
              </h1>
              <FaQuoteRight size={20} className="ml-2" />
            </div>
            <p className="text-white text-md text-left my-8">
              "Thanks for help with my new website from start to finish Hannah
              was really helpful and made the whole process really easy … Would
              highly recommend"
            </p>
            <div className="m-auto flex items-center justify-start ">
              <img src={mick} alt="avatar of matthew palmer" className="h-16" />
              <div className="flex text-yellow-500 ml-4">
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
                <TiStarFullOutline size={30} />
              </div>
            </div>
            <p className="text-white text-right">Mike, Oct 2024</p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs-5"></div>

      {/* BOOKINGS */}
      <Bookings />
    </div>
  );
};

export default Landing;
