// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { HiDesktopComputer } from "react-icons/hi";
import { TiStarFullOutline } from "react-icons/ti";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

// IMAGES
import matthew from "../Assets/mattAvatar.png";
import mick from "../Assets/mickAvatar.png";
import isaac from "../Assets/IsaacWebsite.webp";

// COMPONENTS

const Projects = () => {
  return (
    <div id="reviews-full" className="pt-24 lg:pt-40 mx-6 sm:mx-16 lg:mx-20">
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-12 text-center ">
        Latest Projects
      </h1>

      <h2 className="text-base text-center mb-12">
        Take a look at our projects from October 2024.
      </h2>

      {/* PROJECT #01 */}
      <div className="bg-green p-12 flex flex-col mx-2 lg:mx-20 xl:mx-80 md:grid grid-cols-2 gap-x-8 rounded-md">
        {/* COL 01 */}
        <div className="cols-start-1">
          <div className="mb-4 rounded-md ">
            <h2 className="text-white uppercase font-bold text-xl text-center md:text-left ">
              Isaac Cardow
            </h2>
            <h3 className="text-white treacking-widest text-base py-2">
              Classical Guitarist
            </h3>
          </div>

          <div>
            <img src={isaac} alt="" className="w-60 mb-2 " />
          </div>

          <div className="flex items-center text-md text-white p-3 rounded-md hover:bg-accent cursor-pointer mr-36">
            <div className="mr-3">
              <HiDesktopComputer />
            </div>
            <Link to="https://www.isaaccardow.com" target="_blank">
              <small>LIVE WEBSITE</small>
            </Link>
          </div>
        </div>

        {/* COL 02 */}
        <div className="col-start-2">
          <p className="text-white text-md ">
            <strong className="text-accent text-md">CHALLENGE:</strong> Isaac is
            a rising star in the classical guitar world. He started at The Royal
            Academy of Music in September and wanted a website to demonstrate
            his skills and eventually, start playing at weddings when he finally
            graduates.
          </p>
          <div className="mt-6 flex flex-col bg-accent px-6 py-3 rounded-md justify-center">
            <div className="flex flex-row">
              <FaQuoteLeft size={20} className="mr-3 text-white" />
              <h3 className="text-white text-center rounded-md font-bold text-base">
                Super happy! Amazing website, thanks very much!
              </h3>
              <FaQuoteRight size={20} className="ml-2 text-white" />
            </div>
            <div className="flex justify-center mt-4 text-yellow-500 bg-white p-2 rounded-md mx-12">
              <TiStarFullOutline size={30} className="mx-1" />
              <TiStarFullOutline size={30} className="mx-1" />
              <TiStarFullOutline size={30} className="mx-1" />
              <TiStarFullOutline size={30} className="mx-1" />
              <TiStarFullOutline size={30} className="mx-1" />
            </div>
            <small className="text-white text-right text-sm mt-2">
              Isaac, Oct 2024
            </small>
          </div>
        </div>
      </div>

      <h2 className="text-base text-center mb-12">More coming soon! </h2>
    </div>
  );
};

export default Projects;
