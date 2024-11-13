// REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

// IMAGES
import cs01 from "../../Assets/UXDesign/cs01.png";
import cs02 from "../../Assets/UXDesign/cs02.png";
import cheque from "../../Assets/UXDesign/cheque.png";

// ICONS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UXResearch = () => {
  const navigate = useNavigate();
  const goBack = navigate(-1);
  return (
    <div id="ux-research" className="pt-40 mx-12 lg:mx-40">
      <div className="flex items-center text-black/50 hover:text-accent">
        <FaArrowLeft className="mr-2 " />
        <Link to={goBack} className=" text-sm tracking-widest capitalise">
          Go Back
        </Link>
      </div>

      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        UX Research
      </h1>

      <h2 className="text-base text-center mb-12 mx-32">
        Gathering insights into user behaviors, needs, and pain points through
        methods like interviews, surveys, and usability testing. These insights
        guide design decisions to create more intuitive and effective digital
        experiences that align with both user expectations and business goals.
      </h2>

      <h4 className="text-green uppercase underline tracking-widest font-thin">
        Case Study #01
      </h4>
      <h3 className="text-xl font-bold text-black mb-6">Cheque Split</h3>

      <div className="md:grid lg:grid-cols-3 gap-16 mb-12">
        <div className="">
          <h4 className="text-green font-bold text-base mb-2">Brief</h4>
          <p>
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
          <p>
            The client wants to appeal to millennials and professionals. To
            ensure future team members were on the same page, I created two very
            quick personas for these two distinctive user groups. <br />
            <br />
            The settings in which each would use the app are quite different,
            i.e. social vs professional, however, both wish to make the process
            of paying simpler when out with friends, colleagues or clients.
          </p>
        </div>
      </div>

      <div className="md:grid grid-cols-3 gap-8 gap-y-20 mb-20">
        <img
          src={cs01}
          alt="UI and brand design for Yum Goods"
          className="col-span-2 col-start-1"
        />

        <img
          src={cs02}
          alt="UI and brand design for Child Invoice Generator"
          className="self-center"
        />

        <img
          src={cheque}
          alt="UI and brand design for Phenomenan Digital"
          className="row-start-2 col-span-3 px-32"
        />
      </div>

      {/* C2A */}
      <div
        id="c2a-start"
        className="flex flex-col md:flex-row items-center justify-center my-32 bg-green">
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
    </div>
  );
};

export default UXResearch;
