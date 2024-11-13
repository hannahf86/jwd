// REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

// ICONS
import { FaArrowLeft, FaArrowAltCircleRight } from "react-icons/fa";

const AfterCare = () => {
  return (
    <div id="aftercare" className="pt-40 mx-12 lg:mx-40">
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        Aftercare
      </h1>
      <h3 className="text-center text-md text-black/50 mb-8 italic">
        from £8 per month, billed monthly or annually
      </h3>
      <h2 className="text-base text-black text-center mb-12 mx-32">
        After finishing a website project, we don&apos;t just walk away —
        we&apos;re here to support you at every step
      </h2>
      <p className="text-black text-md leading-loose mb-6">
        We offer a monthly subscription service in exhcange for...
      </p>
      <ul className="text-black text-md ml-12">
        <div className="flex flex-row items-center mb-5">
          <FaArrowAltCircleRight className="text-green" />
          <li className="ml-2 text-black sm:text-md">Security updates</li>{" "}
        </div>

        <div className="flex flex-row items-center mb-5">
          <FaArrowAltCircleRight className="text-green" />
          <li className="ml-2 text-black sm:text-md">
            Accessibility updates
          </li>{" "}
        </div>

        <div className="flex flex-row items-center mb-5">
          <FaArrowAltCircleRight className="text-green" />
          <li className="ml-2 text-black sm:text-md">Content updates</li>{" "}
        </div>

        <div className="flex flex-row items-center mb-5">
          <FaArrowAltCircleRight className="text-green" />
          <li className="ml-2 text-black sm:text-md">
            Maintaining existing site optimisation
          </li>{" "}
        </div>

        <div className="flex flex-row items-center mb-5">
          <FaArrowAltCircleRight className="text-green" />
          <li className="ml-2 text-black sm:text-md">
            Server maintenance
          </li>{" "}
        </div>
      </ul>
      <p className="text-black text-md leading-loose my-6">
        It’s all about making sure your website continues to look great, work
        perfectly, and meet your evolving needs.
      </p>
      {/* C2A */}
      <div
        id="c2a-start"
        className="flex flex-col items-center justify-center my-32 bg-green py-12 rounded-md">
        <h3 className="text-white text-base text-center mb-4">
          We&apos;re here to help with any project you have in mind.
        </h3>
        <div className="flex items-center">
          <Link
            to="../book"
            className="bg-white text-green text-center text-sm font-bold sm:text-md lg:text-sm px-16 sm:px-28 lg:px-32 py-4 md:mr-32 rounded-md hover:bg-accent hover:text-white my-4">
            <p>BOOK</p>
          </Link>

          <Link
            to="../contact"
            className=" bg-green flex text-white border-white text-center text-sm px-4 py-2 sm:px-6 lg:px-24 sm:py-3 rounded-md border-4  hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
            <p> Get in touch</p>
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
