// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import { FaArrowAltCircleRight } from "react-icons/fa";

const FastTrack = () => {
  return (
    <div id="fast-track" className="pt-40 mx-12 lg:mx-28">
      <img
        src="./FastTrack.webp"
        alt="computer with clocks to show fast track build"
        className="w-48 m-auto"
      />
      <h1 className="text-black font-bold text-3xl lg:text-2xl mt-6 text-center ">
        FastTrack Build
      </h1>

      <p className="mt-6 text-base text-center text-black">
        Below is a detailed list of what sort of things you can expect in our
        FastTrack website
      </p>

      <p className="mt-6 text-base text-center text-black lg:mb-12">
        Display your services, allow clients to meet their goals by contacting
        you directly through your website
      </p>
      {/* IN THIS PACKAGE */}
      <div id="package" className="my-8 lg:flex lg:ml-32 lg:mb-12">
        <ul>
          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Up to 6 pages or sections
            </li>{" "}
          </div>

          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Modern, responsive design
            </li>{" "}
          </div>

          <div className="flex flex-row items-start mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Up to 5 stock photos can be used
            </li>{" "}
          </div>

          <div className="flex flex-row items-start mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Desktop and mobile navigation
            </li>{" "}
          </div>

          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Contact form
            </li>{" "}
          </div>

          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Professional email address
            </li>{" "}
          </div>

          <div className="flex flex-row items-start mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              On-page SEO and use of keywords and phrases
            </li>{" "}
          </div>

          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Domain set-up
            </li>{" "}
          </div>

          <div className="flex flex-row items-start mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              One year FREE hosting service
            </li>{" "}
          </div>
        </ul>
      </div>

      {/* C2A*/}
      <div className="w-full flex justify-center mb-40">
        <Link to="../book">
          <p className="bg-green text-white text-center sm:text-md lg:text-sm px-6 sm:px-28 lg:px-12 py-4 rounded-md hover:bg-accent my-4">
            BOOK
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FastTrack;
