// IMAGES
import { FaArrowAltCircleRight } from "react-icons/fa";

const FastTrack = () => {
  return (
    <div>
      FastTrack{/* IN THIS PACKAGE */}
      <div id="package">
        <h3 className="text-black font-bold text-md mt-8 mb-2 sm:-ml-5 sm:text-base">
          Included in this package...
        </h3>
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
    </div>
  );
};

export default FastTrack;
