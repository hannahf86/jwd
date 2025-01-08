// COMPONENTS
import About from "./About";
import Benefits from "./Benefits";
import Works from "./Works";

// ICONS
import { FaArrowAltCircleRight } from "react-icons/fa";

const Why = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Why;
