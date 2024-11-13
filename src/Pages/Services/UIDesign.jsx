// REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

// IMAGES
import yum from "../../Assets/UIDesign/yumGoods.png";
import pfMusic from "../../Assets/UIDesign/pfMusic.png";
import about from "../../Assets/UIDesign/aboutUs.png";
import cig from "../../Assets/UIDesign/cig.png";

// ICONS
import { FaArrowLeft } from "react-icons/fa";

const UIDesign = () => {
  const navigate = useNavigate();
  const goBack = navigate(-1);

  return (
    <div id="ui-design" className="pt-40 mx-12 lg:mx-40">
      <div className="flex items-center text-black/50 hover:text-accent">
        <FaArrowLeft className="mr-2 " />
        <Link to={goBack} className=" text-sm tracking-widest capitalise">
          Go Back
        </Link>
      </div>
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        UI Design
      </h1>

      <h2 className="text-base text-center mb-12 mx-32">
        Balancing visually appealing aesthetics with functionality that enhance
        the user experience and ensure seamless interaction with a website.
      </h2>

      <div className="md:grid grid-cols-3 gap-8 gap-y-20 mb-20">
        <img
          src={yum}
          alt="UI and brand design for Yum Goods"
          className="col-span-2 col-start-1"
        />

        <img
          src={cig}
          alt="UI and brand design for Child Invoice Generator"
          className="self-center"
        />

        <img
          src={about}
          alt="UI and brand design for Phenomenan Digital"
          className="col-start-2 col-span-2"
        />
        <img
          src={pfMusic}
          alt="UI and brand design for PF Music Publishing"
          className="col-start-1 row-start-2 self-center "
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

export default UIDesign;
