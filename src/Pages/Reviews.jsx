// IMAGES
import matthew from "../Assets/mattAvatar.png";
import mick from "../Assets/mickAvatar.png";

// ICONS
import { TiStarFullOutline } from "react-icons/ti";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  return (
    <div id="reviews" className="bg-green mx-8 p-8 md:p-12 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-12">
        {/* COL 01 */}
        <div className="col-start-1 md:row-span-2 justify-start content-start md:mt-60">
          <h1 className="text-center text-white font-bold text-3xl my-8">
            Happy Client Reviews
          </h1>
          <p className="text-white text-center text-base mb-12">
            Here are some of our most recent reviews. <br />
            <br /> We&apos;re very proud to say we have 100% client satisfaction
            and 5 star reviews on Google.
            <br />
            <br />
            Thank you to all of our amazing clients!
          </p>
        </div>

        {/* COL 02 */}
        <div className="col-start-1 md:col-start-2 md:row-start-1 ">
          <h2 className="text-white text-center underline mb-8 text-md">
            Review #02 - Matthew, Oct 2024
          </h2>
          {/* REVIEW 01*/}
          <div className="flex text-white justify-center md:mt-20 mt-4 mb-12">
            <FaQuoteLeft size={20} className="mr-2" />
            <h1 className="text-lg text-center font-bold bg-accent ">
              Very friendly and thorough
            </h1>
            <FaQuoteRight size={20} className="ml-2 mt-20" />
          </div>
          <p className="text-white  text-md text-center my-8">
            &quot;Amazing person to work with. Very friendly and thorough. I
            would definitely recommend 😊&quot;
          </p>
          <div className="m-auto flex items-center justify-start ">
            <img
              src={matthew}
              alt="avatar of matthew palmer"
              className="h-16"
            />
            <div className="flex text-yellow-500 ml-4">
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
            </div>
          </div>
        </div>

        {/* REVIEW 02*/}
        <div className="col-start-1 md:col-start-2 row-start-2 py-12 mb-12">
          <h2 className="text-white text-center underline mb-8 text-md">
            Review #01 - Mike, Oct 2024
          </h2>
          <div className="flex text-white justify-center">
            <FaQuoteLeft size={20} className="mr-2" />
            <h1 className="text-lg text-center font-bold bg-accent p-2">
              ... process was really easy ...
            </h1>
            <FaQuoteRight size={20} className="ml-2 mt-20" />
          </div>
          <p className="text-white text-center text-md text-left my-8">
            &quot;Thanks for help with my new website from start to finish
            Hannah was really helpful and made the whole process really easy …
            Would highly recommend&quot;
          </p>
          <div className="m-auto flex items-center justify-start ">
            <img src={mick} alt="avatar of matthew palmer" className="h-16" />
            <div className="flex text-yellow-500 ml-4">
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
              <TiStarFullOutline size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
