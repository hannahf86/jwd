// IMAGES
import { FaArrowAltCircleRight } from "react-icons/fa";

const StartUp = () => {
  return (
    <div>
      StartUp {/* IN THIS PACKAGE */}
      <div id="package-start">
        <h3 className="text-black font-bold text-md mt-8 mb-2 sm:-ml-5 sm:text-base">
          Included in this package...
        </h3>
        <ul>
          <div className="flex flex-row items-start mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Unlimited amount of pages or sections
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

          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green " />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Unlimited stock photo useage
            </li>{" "}
          </div>

          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Desktop and mobile navigation
            </li>{" "}
          </div>

          <div className="flex flex-row items-center mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green " />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Contact form
            </li>{" "}
          </div>

          <div className="flex flex-row items-center mb-2">
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

          <div className="flex flex-row items-start mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              Technical SEO included behind the scenes
            </li>{" "}
          </div>

          <div className="flex flex-row items-center lg:items-start mb-5">
            <div>
              <FaArrowAltCircleRight className="text-green lg:mt-2" />
            </div>
            <li className="ml-2 font-bold text-green sm:text-md">
              SEO &quot;crawl&quot; reports for 2 months
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

          <div className="flex flex-row items-start lg:items-center mb-2">
            <div>
              <FaArrowAltCircleRight className="text-green" />
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

export default StartUp;
