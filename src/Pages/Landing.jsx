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

// IMAGES
import webDesign from "../Assets/web-design.webp";
import faces from "../Assets/reviews.png";
import navLogo from "../Assets/navLogo.webp";

// COMPONENTS
import Bookings from "../Components/Bookings";
import Faqs from "../Components/FAQs";
import About from "./About";
import Benefits from "./Benefits";
import Works from "./Works";
import Reviews from "./Reviews";

const Landing = () => {
  return (
    <div id="/">
      {/* --------------------------- LANDING  --------------------------- */}
      <div id="landing" className="mx-6 md:mx-12 lg:mx-16 pt-28">
        {/* MOBILE & TABLET */}
        <div className="lg:hidden mb-44">
          {/* LOGO */}
          <div className=" flex flex-col justify-center items-center">
            <img src={navLogo} alt="jorvik web dev logo" className="mx-20" />
            <p className="text-grey tracking-wider text-base">JORVIK WEB DEV</p>
          </div>

          {/* TITLES */}
          <h1 className="text-green text-5xl leading-snug font-bold my-8 text-center md:text-left ">
            Building high performance, custom websites
          </h1>

          <h2 className="text-blue font-bold text-xl mb-8 text-center md:text-left ">
            Giving you peace of mind from a service you can trust
          </h2>

          {/* SALES POINT */}
          <div className="flex flex-col items-center md:flex-row md:items-between mb-8">
            <div className="flex items-center mb-3 md:mx-4">
              <FaCheck className="mr-2 text-green" />
              <h3 className="text-lg md:text-md uppercase">
                Increase visibility
              </h3>
            </div>

            <div className="flex items-center mb-3 md:mx-4">
              <FaCheck className="mr-2 text-green" />
              <h3 className="text-lg md:text-md uppercase">Engage customers</h3>
            </div>

            <div className="flex items-center mb-3 md:mx-4">
              <FaCheck className="mr-2 text-green" />
              <h3 className="text-lg md:text-md uppercase">
                Drive more sales{" "}
              </h3>
            </div>
          </div>

          {/* SERVICES */}
          <div className="list-none flex flex-wrap justify-center border-4 border-green rounded-md py-1 mb-12 xs:mx-4">
            <Link
              to="../ui-design"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8 ">
                <MdDraw size={28} className="mr-2" />
                <li className="text-sm my-3 font-bold ">UI Design</li>
              </div>
            </Link>

            <Link
              to="../ux-research"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <BsClipboard2DataFill size={23} className="mr-2" />
                <li className="text-sm my-3 font-bold ">UX Research</li>
              </div>
            </Link>

            <Link
              to="../hosting"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <FaServer size={23} className="mr-2" />
                <li className="text-sm my-3 font-bold ">Hosting</li>
              </div>{" "}
            </Link>

            <Link
              to="../development"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <HiDesktopComputer size={28} className="mr-2 " />
                <li className="text-sm my-3 font-bold ">Development</li>
              </div>{" "}
            </Link>

            <Link
              to="../seo-services"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <HiMiniPresentationChartBar size={25} className="mr-2 " />
                <li className="text-sm my-3 font-bold">SEO Services</li>
              </div>
            </Link>
          </div>

          {/* REVIEWS */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src={faces}
              className="w-28 mb-4 md:w-40"
              alt="collection of client review avatars from Google reviews"
            />
            <div className="flex flex-col justify-center text-yellow-500 ml-6">
              <div>
                <Link to="reviews" className="">
                  <h3 className="text-sm md:text-md font-bold text-black mb-4 underline">
                    Happy customer stories this way...
                  </h3>
                </Link>
              </div>
              <div className="flex justify-center">
                <TiStarFullOutline size={40} />
                <TiStarFullOutline size={40} />
                <TiStarFullOutline size={40} />
                <TiStarFullOutline size={40} />
                <TiStarFullOutline size={40} />
              </div>
            </div>

            {/* DESKTOP C2A BUTTONS */}
            <div className="hidden lg:block lg:flex lg:flex-row my-8 lg:justify-end xl:justify-center xl:">
              <div className="bg-green text-white flex self-center text-center text-sm px-20 lg:px-8 py-2 rounded-md hover:bg-accent cursor-pointer">
                <Link to="appointments">
                  <p>
                    BOOK A FREE <br />
                    CONSULTATION
                  </p>
                </Link>
              </div>

              <div className="bg-white flex self-center text-black text-center lg:ml-6 mt-6 lg:mt-0 text-sm px-20 lg:px-8 py-4 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                <Link to="appointments">
                  <p>LEARN MORE</p>
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE C2A BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center mt-8">
            <div className="bg-green text-white flex self-center text-center text-sm px-12 py-2 mx-6 rounded-md hover:bg-accent cursor-pointer">
              <Link to="book">
                <p>
                  BOOK A FREE <br />
                  CONSULTATION
                </p>
              </Link>
            </div>

            <div className="bg-white flex self-center text-black text-center mt-6 sm:mt-0 text-sm px-12 py-4 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
              <Link to="services">
                <p>LEARN MORE</p>
              </Link>
            </div>
          </div>
        </div>

        {/* ------------- DESKTOP ------------- */}
        <div id="landing-grid" className="hidden lg:grid lg:grid-cols-2  ">
          {/* COL 01 */}
          <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold my-8 text-center md:text-left lg:col-start-1 lg:row-start-1 ">
            High performance, business websites
          </h1>

          <h2 className="text-blue font-bold text-lg mb-8 text-center md:text-left lg:col-start-1 lg:row-start-2 ">
            Giving you peace of mind from a service you can trust
          </h2>

          {/* SALES POINTS, REVIEWS & DESKTOP C2A */}
          <div className="xs:flex xs:flex-col xs:items-center md:items-start text-md lg:text-base lg:col-start-1 lg:row-start-2 mt-28">
            <div className="flex justify-self-start items-center mb-3">
              <FaCheck className="mr-2 text-green" />
              <h3 className="text-lg lg:text-base uppercase">
                Increase visibility
              </h3>
            </div>

            <div className="flex justify-self-start items-center mb-3">
              <FaCheck className="mr-2 text-green" />
              <h3 className="text-lg lg:text-base uppercase">
                Engage customers
              </h3>
            </div>

            <div className="flex justify-self-start items-center mb-3">
              <FaCheck className="mr-2 text-green" />
              <h3 className="text-lg lg:text-base uppercase">
                Drive more sales{" "}
              </h3>
            </div>

            {/* REVIEWS */}
            <div className="flex flex-col mb-8 lg:col-start-1 ">
              <div className="flex items-center mt-4">
                <img
                  src={faces}
                  className="w-40"
                  alt="collection of client review avatars from Google reviews"
                />
                <div className="flex flex-col text-yellow-500 ml-6">
                  <div>
                    <Link to="reviews-full">
                      <h3 className="text-sm font-bold text-black">
                        Happy customer stories this way...
                      </h3>
                    </Link>
                  </div>
                  <div className="flex">
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                    <TiStarFullOutline size={40} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="list-none col-start-1 col-span-2 row-start-3 flex justify-between border-4 border-green rounded-md p-4">
            {/* 01 */}
            <Link
              to="../ui-design"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8 ">
                <MdDraw size={28} className="mr-2" />
                <li className="text-sm my-3 font-bold ">UI Design</li>
              </div>
            </Link>

            <Link
              to="../ux-research"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <BsClipboard2DataFill size={23} className="mr-2" />
                <li className="text-sm my-3 font-bold ">UX Research</li>
              </div>
            </Link>

            <Link
              to="../hosting"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <FaServer size={23} className="mr-2" />
                <li className="text-sm my-3 font-bold ">Hosting</li>
              </div>{" "}
            </Link>

            <Link
              to="../development"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <HiDesktopComputer size={28} className="mr-2 " />
                <li className="text-sm my-3 font-bold ">Development</li>
              </div>{" "}
            </Link>

            <Link
              to="../seo-services"
              className="text-green rounded-md hover:bg-accent hover:text-white">
              <div className="flex items-center mx-8">
                <HiMiniPresentationChartBar size={25} className="mr-2 " />
                <li className="text-sm my-3 font-bold">SEO Services</li>
              </div>
            </Link>
          </div>

          {/* COL 02 */}
          <div
            id="col-02"
            className="hidden lg:block col-start-2 row-start-1 row-span-2 lg:mt-20 xl:mt-6">
            <img
              src={webDesign}
              alt="image of a local business website on different screen sizes with responsive design"
              className="ml-8 xl:w-5/6 xl:ml-40"
            />
          </div>
          {/* DESKTOP C2A BUTTONS */}
          <div className="hidden lg:flex lg:flex-row col-start-2 row-start-2 pt-60 my-8 lg:justify-end ">
            <div className="bg-green text-white flex self-center text-center text-sm px-20 lg:px-8 py-2 rounded-md hover:bg-accent cursor-pointer">
              <Link to="book">
                <p>
                  BOOK A FREE <br />
                  CONSULTATION
                </p>
              </Link>
            </div>

            <div className="bg-white flex self-center text-black text-center lg:ml-6 mt-6 lg:mt-0 text-sm px-20 lg:px-8 py-4 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
              <Link to="services">
                <p>LEARN MORE</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------- QUESTION 01  --------------------------- */}
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
            Are you sick of features on website builder sites being stuck behind
            pay walls??
          </h2>
        </div>

        <div className="flex justify-center items-center ">
          <FaArrowAltCircleRight
            size={30}
            className="text-green mr-4 hidden md:block"
          />
          <h2 className="text-base md:text-lg text-black font-bold my-4 md:my-8">
            Do you find yourself spending too much time learning skills
            you&apos;re not interested in??
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <FaArrowAltCircleRight
            size={30}
            className="text-green mr-4 hidden md:block"
          />
          <h2 className="text-base md:text-lg text-black font-bold my-4 md:my-8">
            Do you feel like you&apos;re working all the time but getting
            nowhere??
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

      {/* --------------------------- ABOUT US - SHORT  --------------------------- */}
      <About />

      {/*  --------------------------- BENEFITS  --------------------------- */}
      <Benefits />

      {/*  --------------------------- HOW DOES IT WORK  --------------------------- */}
      <Works />

      {/*  --------------------------- REVIEWS  --------------------------- */}
      <Reviews />

      {/*  --------------------------- FAQs  --------------------------- */}
      <div id="faqs-five" className="mx-8 md:mx-20 lg:mx-60 my-40">
        <h1 className="text-3xl text-green font-bold mb-12 text-center">
          FAQs
        </h1>
        <h2 className="text-base text-center mb-12">
          Tap on one of our FAQs to reveal the answer
        </h2>
        <Faqs />
        <div className="mt-12 text-right w-fit">
          <Link to="faqs-full">
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
