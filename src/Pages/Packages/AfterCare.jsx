// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaArrowLeft, FaArrowAltCircleRight } from "react-icons/fa";

// IMAGES
import logo from "../../Assets/Branding/logo-green.png";

const AfterCare = () => {
  return (
    <div id="aftercare" className="pt-20 lg:pt-40 mx-6 lg:mx-40">
      <img
        src={logo}
        alt="jorvik web dev logo in green"
        className="w-1/5 m-auto mb-4 lg:hidden"
      />
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        Aftercare
      </h1>
      <h2 className="text-base text-black text-center mb-12 lg:mx-32 font-bold">
        After finishing a website project, we don&apos;t just walk away —
        we&apos;re here to support you at every step
      </h2>
      <p className="text-black text-md leading-loose lg:mb-20 text-center">
        It’s all about making sure your website continues to look great, work
        perfectly, and meet your evolving needs. <br />
        We offer a monthly subscription services to suit your project needs.
      </p>
      {/* PACKAGES */}
      <div className="lg:grid grid-cols-3 gap-12">
        {/* SILVER */}
        <div className="mt-12">
          <h2 className="text-2xl lg:text-xl font-bold text-center text-blue mb-2 ">
            Silver
          </h2>

          <p className="text-md italic text-black text-center my-4">£15</p>
          <h3 className="text-grey text-md italic text-center lg:mx-20">
            Perfect for small businesses or individuals needing essential web
            design aftercare
          </h3>
          <ul className="text-black text-md lg:mx-20 mt-8">
            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md">
                <b>Basic Support:</b> Email support with a 24-48 hour response
                time
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md">
                <b>Security updates:</b> Monthly checks and updates to themes
                and software
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md">
                <b>Performance monitoring:</b> Basic uptime and site speed
                tracking
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md">
                <b>Content edits</b> Up to 2 small changes or updates every
                month
              </li>{" "}
            </div>
          </ul>
        </div>

        {/* GOLD */}
        <div className="mt-12">
          <h2 className="text-2xl lg:text-xl font-bold text-center text-blue mb-2 ">
            Gold
          </h2>
          <p className="text-md italic text-black text-center my-4">£20</p>
          <h3 className="text-grey text-md italic text-center lg:mx-20">
            Designed for growing businesses looking for more robust support.
          </h3>
          <ul className="text-black text-md lg:mx-20 mt-8">
            <div className="flex flex-row items-center mb-5">
              <li className=" text-black sm:text-md ">
                <b>All Silver Plan features, plus...</b>
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md">
                <b>Priority support:</b> Email and chat support with a 12-hour
                response time
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md">
                <b>Advanced security:</b> Weekly malware scans and enhanced
                protection
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>Content edits:</b> Up to 5 content updates per month
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>Backups:</b> Automatic weekly backups with one-click restore
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>SEO tweaks:</b> Quarterly keyword optimization for better
                search rankings
              </li>{" "}
            </div>
          </ul>
        </div>

        {/* PLATINUM */}
        <div className="mt-12">
          <h2 className="text-2xl lg:text-xl font-bold text-center text-blue mb-2">
            Platinum
          </h2>
          <p className="text-md italic text-black text-center my-4">£35</p>
          <h3 className="text-grey text-md italic text-center lg:mx-20">
            Ideal for businesses requiring comprehensive, hands-on support and
            enhancements.
          </h3>
          <ul className="text-black text-md lg:mx-20 mt-8">
            <div className="flex flex-row items-center mb-5">
              <li className=" text-black sm:text-md ">
                <b>All Gold Plan features, plus...</b>
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md">
                <b>Dedicated account manager:</b> Personalised service for your
                unique needs
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>Unlimited edits:</b> No cap on content changes or updates
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>Proactive monitoring:</b> Immediate fixes for downtime or
                performance issues
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>Advanced SEO strategy: </b> Monthly SEO optimisations and
                reports
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>Custom features:</b> First look at new features (e.g., new
                pages, integrations)
              </li>{" "}
            </div>

            <div className="flex flex-row items-center mb-5">
              <FaArrowAltCircleRight className="text-green w-10 mr-4" />
              <li className=" text-black sm:text-md mb-4">
                <b>Quarterly strategy sessions:</b> Regular check-ins to align
                web goals with your business objectives
              </li>{" "}
            </div>
          </ul>
        </div>
      </div>
      {/* C2A */}
      <div
        id="c2a-start"
        className="flex flex-col items-center justify-center my-16 bg-green p-12 rounded-md">
        <h3 className="text-white text-base text-center mb-4">
          We&apos;re here to help with any project you have in mind.
        </h3>
        <div className="flex flex-col lg:flex-row items-center">
          <Link
            to="../book"
            className="bg-white text-green text-center text-sm font-bold sm:text-md lg:text-sm px-8 sm:px-28 lg:px-32 py-4 md:mr-32 rounded-md hover:bg-accent hover:text-white mt-4 mb-8">
            <p>START A PROJECT</p>
          </Link>

          <Link
            to="../contact"
            className=" bg-green flex text-white border-white text-center text-sm px-4 py-2 sm:px-6 lg:px-24 sm:py-3 rounded-md border-4  hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
            <p>Find out more</p>
          </Link>
        </div>
      </div>{" "}
      <div className="flex items-center text-black/50 hover:text-accent">
        <FaArrowLeft className="mr-2 " />
        <Link to="../services" className=" text-sm tracking-widest capitalise">
          Back to Services
        </Link>
      </div>
    </div>
  );
};

export default AfterCare;
