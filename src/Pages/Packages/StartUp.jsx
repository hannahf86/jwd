// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import { FaArrowAltCircleRight } from "react-icons/fa";

const StartUp = () => {
  return (
    <div id="start-up" className="pt-40 mx-12 lg:mx-28">
      {/* IN THIS PACKAGE */}
      <div id="package-start">
        <img
          src="StartUp.webp"
          alt="computer with clocks to show fast track build"
          className="w-48 m-auto"
        />
        <h1 className="text-black font-bold text-3xl lg:text-2xl mt-6 text-center ">
          StartUp
        </h1>

        <small className="text-black flex justify-end lg:my-4 lg:text-md text-sm my-2 italic lg:justify-center lg:mb-12">
          from £1500
        </small>
        <p className="mt-6 text-base text-center text-black">
          Below is a detailed list of what sort of things you can expect in our
          StartUp website
        </p>

        <p className="mt-6 text-base text-center text-black lg:mb-12">
          Display your services and allow clients to book through the website
          directly, rank higher than your competitors, combine all your online
          services and socials in one place, increase your sales
        </p>

        {/* IN THIS PACKAGE */}
        <div className="my-8 lg:flex lg:ml-32 lg:mb-12">
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

        {/* C2A*/}
        <div className="w-full flex justify-center mb-40">
          <Link to="../book">
            <p className="bg-green text-white text-center sm:text-md lg:text-sm px-6 sm:px-28 lg:px-12 py-4 rounded-md hover:bg-accent my-4">
              BOOK
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
