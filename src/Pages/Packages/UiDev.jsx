// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import yum from "../../Assets/UIDesign/yumGoods.png";
import pfMusic from "../../Assets/UIDesign/pfMusic.png";
import about from "../../Assets/UIDesign/aboutUs.png";
import cig from "../../Assets/UIDesign/cig.png";

// ICONS
import { FaArrowLeft } from "react-icons/fa";

const UiDev = () => {
  return (
    <div id="ui-dev" className="pt-40 mx-12 lg:mx-40">
      {" "}
      <div>
        <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold text-center mb-4">
          UI Design & Development
        </h1>
        <h3 className="text-center text-md text-black/50 mb-8 italic">
          from £195
        </h3>
      </div>
      <div>
        <h2 className="text-lg text-center mb-12 mx-40">
          UI design and web development work hand-in-hand to create visually
          appealing, functional, and user-centered websites.
        </h2>

        <p className="text-black text-base mb-12">
          UI design focuses on the look and feel of the site, crafting
          interfaces that are both aesthetically pleasing and intuitive,
          ensuring that users can navigate and interact with ease. <br />
          <br />
          Web development, on the other hand, brings these designs to life,
          translating the UI into responsive, high-performing, and secure
          websites using front-end and back-end technologies. <br />
          <br />
          Together, these services enable us to deliver seamless digital
          experiences that align with your goals and provide an engaging journey
          for own clients.
        </p>
      </div>
      <h2 className="text-xl uppercase text-black underline text-center mb-12 mx-40 ">
        Sample work
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

export default UiDev;
