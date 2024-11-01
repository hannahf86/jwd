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
import webDesign from "../Assets/web-design.webp";
import reviews from "../Assets/reviews.png";
import hannah from "../Assets/hannah.webp";
import fees from "../Assets/fees.png";
import efficient from "../Assets/efficient.png";
import peace from "../Assets/peace.png";
import contact from "../Assets/support.png";
import code from "../Assets/code.png";
import happy from "../Assets/happy.png";
import matthew from "../Assets/mattAvatar.png";
import mick from "../Assets/mickAvatar.png";
import navLogo from "../Assets/navLogo.webp";

// COMPONENTS
import Bookings from "../Components/Bookings";
import Faqs from "../Components/FAQs";

const Landing = () => {
  const styles = {
    headline: "text-green text-4xl font-bold mb-4 text-center md:text-left",
    subtitle: "text-blue font-bold text-lg mb-4 text-center md:text-left",
    button:
      "bg-green text-white flex self-center text-center text-sm px-8 py-2 rounded-md hover:bg-accent cursor-pointer",
    ghostButton:
      "bg-white flex self-center text-black text-center md:ml-6 mt-6 md:mt-0 text-sm px-10 lg:px-8 py-4 rounded-md border-4 border-green hover:bg-green hover:text-white cursor-pointer",
  };

  return (
    <div id="home">
      {/* LANDING */}
      <div id="landing" className="">
        <div className="mx-6 lg:mx-16 md:grid md:grid-cols-2">
          {/* COL 01 */}
          <div className="pt-20">
            {/* LOGO*/}
            <div className="md:hidden flex flex-col justify-center items-center mb-8">
              <img src={navLogo} alt="jorvik web dev logo" className="mx-20" />
              <p className="text-grey tracking-wider text-base">
                JORVIK WEB DEV
              </p>
            </div>

            {/* TITLE */}
            <h1 className={styles.headline}>
              Building custom, high performance websites that drive results
            </h1>

            <h2 className={styles.subtitle}>
              Giving you peace of mind from a service you can trust
            </h2>

            {/* SALES POINTS */}
            <div className="text-md md:text-base my-8">
              <div className="flex items-center mb-3">
                <FaCheck className="mr-2 text-green" />
                <h3>Increase visibility</h3>
              </div>

              <div className="flex items-center mb-3">
                <FaCheck className="mr-2 text-green" />
                <h3>Engage customers</h3>
              </div>

              <div className="flex items-center mb-3">
                <FaCheck className="mr-2 text-green" />
                <h3>Drive more sales </h3>
              </div>
            </div>

            {/* C2A BUTTONS */}
            <div className="flex flex-col md:flex-row justify-start h-20 pt-4">
              <div className={styles.button}>
                <Link to="appointments">
                  <p>
                    BOOK A FREE <br />
                    CONSULTATION
                  </p>
                </Link>
              </div>

              <div className={styles.ghostButton}>
                <Link to="appointments">
                  <p>LEARN MORE</p>
                </Link>
              </div>
            </div>

            {/* REVIEWS */}
            <Link to="reviews">
              <div className="flex flex-col md:flex-row md:col-start-1 justify-start items-center mt-32 md:pt-12">
                <img
                  src={reviews}
                  className="h-16 hidden md:block"
                  alt="images of google review profiles"
                />
                <div className="flex flex-col md:ml-6 justify-center items-center">
                  <Link to="reviews" className="mb-2">
                    <p className="text-sm text-black font-bold flex items-center text-center md:text-left">
                      Happy customer stories this way...
                    </p>
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

            {/* SERVICES */}
            <div className="hidden md:block md:col-span-2 border-4 border-green rounded-lg p-4 list-none mt-20 ">
              <div className="flex flex-wrap justify-center ">
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
                  <li className=" my-1 font-bold text-black/80">
                    SEO Services
                  </li>
                </div>
                <div className="flex items-center mx-16">
                  <FaServer size={18} className="mr-2 text-green" />
                  <li className=" my-1 font-bold text-black/80">Hosting</li>
                </div>
              </div>
            </div>
          </div>

          {/* COL 02 */}
          <div className="hidden md:block col-start-2 self-center">
            <img
              src={webDesign}
              className="justify-center w-5/6 mt-60 ml-32 mb-20"
            />
          </div>
        </div>
      </div>

      {/* QUESTION 01 */}
      <div
        id="tired"
        className="text-center mt-32 md:mt-56 md:mb-40 mb-32 mx-8">
        <h1 className="text-3xl text-green font-bold mb-6 md:mb-12">
          Tired of tech talk and sneaky fees?
        </h1>
        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight
            size={30}
            className="text-green mr-4 hidden md:block"
          />
          <h2 className="text-base md:text-lg text-black font-bold my-4 md:my-8">
            Sick of features on website builder sites being stuck behind pay
            walls??
          </h2>
        </div>

        <div className="flex justify-center items-center ">
          <FaArrowAltCircleRight
            size={30}
            className="text-green mr-4 hidden md:block"
          />
          <h2 className="text-base md:text-lg text-black font-bold my-4 md:my-8">
            Are you spending too much time learning skills you&apos;re not
            interested in??
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight
            size={30}
            className="text-green mr-4 hidden md:block"
          />
          <h2 className="text-base md:text-lg text-black font-bold my-4 md:my-8">
            You feel like you&apos;re working all the time but getting nowhere??
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight
            size={30}
            className="text-green mr-4 hidden md:block"
          />
          <h2 className="text-base md:text-lg text-black font-bold my-4 md:my-8">
            Confused by UI, UX, PCP, LCP, INP, CLS and just far too many
            anagrams??
          </h2>
        </div>
      </div>

      {/* ABOUT US - SHORT */}
      <div
        id="about-short"
        className="grid grid-cols-1 md:grid-cols-2 mb-40 mx-6">
        <div className="col-start-1 relative hidden md:block">
          <img
            src={hannah}
            alt="picture of director and lead designer Hannah Feehan"
            className="p-16"
          />
        </div>

        <div className="col-start-2 pt-4 md:pt-16 px-4 md:px-12">
          <h1 className="text-green font-bold text-2xl mb-4 text-center md:text-left">
            Hi! We&apos;re Jorvik Web Dev, <br />a small but mighty web design
            agency based in York, UK.
          </h1>
          <p className="text-lg mb-8 text-center md:text-left">
            At our core, we are problem solvers.
          </p>
          <p className="text-base mb-4 text-center md:text-left ">
            Starting your own business is so hard! We know!
            <br />
            <strong className="text-green underline text-center md:text-left">
              We&apos;ve just done it!
            </strong>
          </p>

          <p className="text-md text-center md:text-left">
            There&apos;s far too much to manage and so many new skills to learn.
            If we&apos;re completely honest, we&apos;re not business folks,
            we&apos;re computer folks and we wanted to do what we love.
          </p>

          <h3 className="text-green font-bold text-lg text-center md:text-left mt-6 mb-12">
            And that&apos;s what you should be doing!
          </h3>
        </div>

        <div className="col-start-2 md:grid-col-start-1 md:col-span-2 md:mx-20">
          <p className="text-base text-center md:text-left font-bold text-black ">
            With a collective knowledge base of{" "}
            <strong className="text-accent">12 years</strong> and a{" "}
            <strong className="text-accent">5 star rating</strong> on Google
            reviews, let us handle your online journey so you can focus on what
            matters to you the most!
          </p>
          <Link to="about" className="cursor-point text-right">
            <p className="my-6 underline text-black">Read our full story...</p>
          </Link>
        </div>
      </div>

      {/* BENEFITS */}
      <div id="benefits" className="bg-green mx-8 md:mx-16 p-8 md:p-12">
        <h1 className="text-center text-white font-bold text-3xl my-8">
          The benefits of working with us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-16 mb-12">
          <div className="col-start-1 flex flex-col justify-center">
            <img
              src={fees}
              alt="a british pound sign representing no hidden fees"
              className="m-12 md:m-20"
            />
            <h2 className="text-2xl font-bold text-center text-accent mb-4">
              No Hidden Fees
            </h2>
            <p className="text-white text-center text-md mb-12">
              Through our own experience as customers, we hate it when fees are
              added at the end or they&apos;re not displayed on the website.{" "}
              <br />
              <br /> We don&apos;t do that here.
              <br />
              <br /> We believe in transparency and clear communication. No
              smoke and mirrors here - just honest work!
            </p>
          </div>

          <div className="md:col-start-2 flex flex-col justify-center">
            <img
              src={efficient}
              alt="a clock representing efficient use of time"
              className="m-12 md:m-20"
            />

            <h2 className="text-2xl font-bold text-center text-accent mb-4">
              Efficient Service
            </h2>
            <p className="text-white text-center text-md mb-12">
              We make web development a breeze with a fast and efficient
              service.
              <br />
              <br /> Using the latest productivity tools and workflow methods,
              we ensure your project will not take months and months, with no
              updates and added costs, but instead literally a couple of weeks,
              project size depending of course!
            </p>
          </div>

          <div className="md:col-start-3 flex flex-col justify-center">
            <img
              src={peace}
              alt="a peace sign representing peace of mind"
              className="m-12 md:m-20"
            />
            <h2 className="text-2xl font-bold text-center text-accent mb-4">
              Peace of Mind
            </h2>
            <p className="text-white text-center text-md mb-12">
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
      <div id="how-it-works" className="mx-8 my-40 md:ml-40 md:mr-20">
        <h1 className="text-3xl text-black/80 font-bold mb-12 text-left">
          OK, so how does this work?
        </h1>
        {/* GRID */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-12">
          <div className="col-start-1 md:col-span-2 row-start-1 mb-12">
            <div className="md:hidden col-start-1 mx-8">
              <img
                src={contact}
                alt="red haired cartoon woman happily talking on the phone"
              />
            </div>
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
              not 100% comfortable with. We&apos;re here to help you, not take
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
          <div className="hidden md:block col-start-1 md:col-start-3 row-start-1 m-auto">
            <img
              src={contact}
              alt="red haired cartoon woman happily talking on the phone"
            />
          </div>

          <div className="grid-start-1 md:col-span-2 mb-12">
            <div className="md:hidden col-start-1 mx-8">
              <img src={code} alt="some hands typing some code" />
            </div>
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
              We being with a thorough &quot;crawl&quot; of your website and
              provide you with an ULTRA geeky report that highlights where we
              need to focus our efforts to help improve those rankings. <br />
              <br />
              Working together, we create a marketing strategy with clear steps
              and deadlines for you to follow, giving you plenty of time to
              acquire any content needed. We then implement it and do our
              magical SEO tricks.
            </p>
          </div>
          <div className="hidden md:block md:col-start-3 m-auto">
            <img src={code} alt="some hands typing some code" />
          </div>

          <div className="grid-start-1 md:col-span-2 mb-12">
            <div className="md:hidden col-start-1 mx-8">
              <img
                src={happy}
                alt="multi racial people cheering at a big complete sign"
              />
            </div>
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
              drop us a line with what you need and we&apos;ll crack right on!
            </p>
          </div>
          <div className="hidden md:block md:col-start-3 m-auto">
            <img
              src={happy}
              alt="multi racial people cheering at a big complete sign"
            />
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div id="reviews" className="bg-green mx-8 p-4 md:mx-16 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-20">
          {/* COL 01 */}
          <div className="col-start-1 md:row-span-2 md:p-8 justify-center m-auto">
            <h1 className="text-center text-white font-bold text-3xl my-8">
              Happy Client Reviews
            </h1>
            <p className="text-white text-center text-base">
              Here are some of our most recent reviews. <br />
              <br /> We&apos;re very proud to say we have 100% client
              satisfaction and 5 star reviews on Google.
              <br />
              <br />
              Thank you to all of our amazing clients!
            </p>
          </div>

          {/* COL 02 */}
          <div className="col-start-1 md:col-start-2 md:row-start-1 px-4 md:px-8 ">
            {/* REVIEW 01*/}
            <div className="flex text-white justify-center md:mt-0">
              <FaQuoteLeft size={20} className="mr-2" />
              <h1 className="text-lg font-bold bg-accent ">
                Very friendly and thorough
              </h1>
              <FaQuoteRight size={20} className="ml-2" />
            </div>
            <p className="text-white text-md text-left my-8">
              &quot;Amazing person to work with. Very friendly and thorough. I
              would definitely recommend 😊&quot;
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
            <p className="text-white text-right md:mb-12">Matthew, Oct 2024</p>
          </div>

          {/* REVIEW 02*/}
          <div className="col-start-1 md:col-start-2 row-start-2 px-4 md:px-8 pt-8 mt-20 md:mt-0">
            <div className="flex text-white justify-center">
              <FaQuoteLeft size={20} className="mr-2" />
              <h1 className="text-lg font-bold bg-accent p-2">
                ... process was really easy ...
              </h1>
              <FaQuoteRight size={20} className="ml-2" />
            </div>
            <p className="text-white text-md text-left my-8">
              &quot;Thanks for help with my new website from start to finish
              Hannah was really helpful and made the whole process really easy …
              Would highly recommend&quot;
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
            <p className="text-white text-right mb-12">Mike, Oct 2024</p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs-five" className="mx-8 md:mx-80 my-40">
        <h1 className="text-3xl text-green font-bold mb-12 text-center">
          FAQs
        </h1>
        <Faqs />
        <div className="mt-12 text-right w-fit">
          <Link to="faqs">
            <h3 className="text-white bg-blue p-4 tracking-widest">
              FULL LIST OF FAQs
            </h3>
          </Link>
        </div>
      </div>

      {/* BOOKINGS */}
      <Bookings />
    </div>
  );
};

export default Landing;
