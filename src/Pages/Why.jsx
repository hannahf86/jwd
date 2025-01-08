// COMPONENTS
import About from "./About";
import Benefits from "./Benefits";
import Works from "./Works";
import Bookings from "../Components/Bookings";

// ICONS
import { FaArrowAltCircleRight } from "react-icons/fa";

// IMAGES
import web from "../Assets/Services/webDesign.jpeg";

const Why = () => {
  return (
    <div id="why" className="lg:pt-56 mx-6 sm:mx-16 lg:mx-20">
      <h1 className="text-green text-5xl leading-snug font-bold mb-8 text-center ">
        Why work with us?
      </h1>

      {/* --------------------------- QUESTION 01  --------------------------- */}
      <div
        id="tired"
        className="text-center mt-32 md:mb-40 mb-32 mx-8 lg:grid grid-cols-2 gap-12 ">
        <img
          src={web}
          alt="jorvik web dev designers working on a project"
          className="self-start"
        />
        <div className="items-start">
          <div className="flex justify-start items-center">
            <FaArrowAltCircleRight
              size={30}
              className="text-green mr-4 hidden md:block"
            />
            <h3 className="text-start md:text-lg text-black font-bold mb-4 ">
              Are you sick of features on website builder sites being stuck
              behind pay walls??
            </h3>
          </div>
          <div className="flex justify-start items-center ">
            <FaArrowAltCircleRight
              size={30}
              className="text-green mr-4 hidden md:block"
            />
            <h3 className="text-start md:text-lg text-black font-bold my-4 md:my-8">
              Do you find yourself spending too much time learning skills
              you&apos;re not interested in??
            </h3>
          </div>
          <div className="flex justify-start items-center">
            <FaArrowAltCircleRight
              size={30}
              className="text-green mr-4 hidden md:block"
            />
            <h3 className="text-start md:text-lg text-black font-bold my-4 md:my-8">
              Do you feel like you&apos;re working all the time but getting
              nowhere??
            </h3>
          </div>
          <div className="flex justify-start items-center">
            <FaArrowAltCircleRight
              size={30}
              className="text-green mr-4 hidden md:block"
            />
            <h3 className="text-start md:text-lg text-black font-bold my-4 md:my-8">
              Confused by UI, UX, PCP, LCP, INP, CLS and just far too many
              anagrams??
            </h3>
          </div>
        </div>
      </div>
      {/* --------------------------- ABOUT US - SHORT  --------------------------- */}
      <About />
      {/*  --------------------------- BENEFITS  --------------------------- */}
      <Benefits />
      {/*  --------------------------- HOW DOES IT WORK  --------------------------- */}
      <Works />
      {/* BOOKINGS */}
      <Bookings />
    </div>
  );
};

export default Why;
