// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import cs01 from "../../Assets/UXDesign/cs01.png";
import cs02 from "../../Assets/UXDesign/cs02.png";
import cheque from "../../Assets/UXDesign/cheque.png";
import logo from "../../Assets/Branding/logo-green.png";

// ICONS
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const UxSeo = () => {
  return (
    <div id="ux-seo" className="pt-20 lg:pt-40 mx-6 lg:mx-40">
      {" "}
      <div>
        <img
          src={logo}
          alt="jorvik web dev logo in green"
          className="w-1/5 m-auto mb-4 lg:hidden"
        />
        <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold text-center mb-4">
          UX Research & SEO
        </h1>
      </div>
      <div>
        <h2 className="text-lg text-center mb-12 ">
          UX research and SEO services work together to build websites that are
          both user-centric and search-optimized, leveraging competitive
          analysis and keyword strategy for greater impact.
        </h2>

        <p className="text-black text-base mb-12">
          UX research includes competitive analysis to understand how similar
          websites perform and to identify opportunities to enhance user
          experience, guiding design decisions that make the site more engaging
          and intuitive.
          <br />
          <br />
          SEO services focus on optimizing site content, structure, and
          performance to enhance search rankings and attract organic traffic. We
          also incorporate a well-researched keyword strategy, aligning content
          with search terms that target audiences are actively seeking.
          <br />
          <br />
          This combination ensures that the final product is both highly
          discoverable and tailored to your user needs, setting you apart in a
          competitive digital landscape.
        </p>
      </div>
      <div className="flex items-center text-black/50 hover:text-accent mb-12">
        <FaArrowLeft className="mr-2 " />
        <Link to="../services" className=" text-sm tracking-widest capitalise">
          Back to Services
        </Link>
      </div>
      <h4 className="text-green uppercase underline tracking-widest font-thin">
        Example of a UX Case Study
      </h4>
      <h3 className="text-xl font-bold text-black mb-6">Cheque Split</h3>
      <div className="md:grid lg:grid-cols-3 gap-16 mb-12">
        <div className="">
          <h4 className="text-green font-bold text-base mb-2">Brief</h4>
          <p className="text-black">
            Chque Splt are a new company who wish to develop an easy-to-use
            solution to splitting cheques and bills at the end of a social
            ocassion. <br />
            <br />
            They want their users to be able to send billing information to
            contacts, print and share invoices, pay using Google Pay, Apple Pay,
            PayPal or in the venue itself.
          </p>
        </div>

        <div className="list-none">
          <h4 className="text-green font-bold text-base mb-2">Deliverables</h4>
          <div className="flex items-center mb-2">
            <FaArrowRight className="mr-2 text-green" />
            <li>Design System</li>
          </div>
          <div className="flex items-start mb-2">
            <FaArrowRight className="mr-2 mt-1 text-green" />
            <li>Research, including personas and competitive analysis</li>
          </div>
          <div className="flex items-center mb-2">
            <FaArrowRight className="mr-2 text-green" />
            <li>Hi-Fi prototype</li>
          </div>
        </div>
        <div>
          <h4 className="text-green font-bold text-base mb-2">Users</h4>
          <p className="text-black">
            The client wants to appeal to millennials and professionals. To
            ensure future team members were on the same page, we created two
            very quick personas for these two distinctive user groups. <br />
            <br />
            The settings in which each would use the app are quite different,
            i.e. social vs professional, however, both wish to make the process
            of paying simpler when out with friends, colleagues or clients.
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-3 gap-8 lg:gap-y-20 mb-20">
        <img
          src={cs01}
          alt="UI and brand design for Yum Goods"
          className="col-span-2 col-start-1 mb-8"
        />

        <img
          src={cs02}
          alt="UI and brand design for Child Invoice Generator"
          className="self-center mb-8"
        />

        <img
          src={cheque}
          alt="UI and brand design for Phenomenan Digital"
          className="row-start-2 col-span-3 lg:px-32 mb-8"
        />
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
      </div>
      <div>
        {" "}
        <div className="flex items-center text-black/50 hover:text-accent">
          <FaArrowLeft className="mr-2 " />
          <Link
            to="../services"
            className=" text-sm tracking-widest capitalise">
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UxSeo;
