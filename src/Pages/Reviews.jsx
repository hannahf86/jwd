// IMAGES
import matthew from "../Assets/mattAvatar.png";
import mick from "../Assets/mickAvatar.png";

// ICONS
import { TiStarFullOutline } from "react-icons/ti";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  return (
    <div id="reviews" className="bg-green mx-8 p-8 md:p-12 lg:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-12">
        {/* COL 01 */}
        <div className="col-start-1 md:row-span-2 justify-start content-start md:mt-60">
          <h1 className="text-center text-white font-bold text-3xl my-8">
            Happy Client Reviews
          </h1>
          <p className="text-white text-center text-base mb-12 lg:mx-28">
            Here are some of our most recent reviews. <br />
            <br /> We&apos;re very proud to say we have 100% client satisfaction
            and 5 star reviews on Google.
            <br />
            <br />
            Thank you to all of our amazing clients!
          </p>
        </div>

        {/* COL 02 */}
        <div className="col-start-1 md:col-start-2 md:row-start-1 lg:pt-32">
          {/* REVIEW 01*/}
          <div className="bg-white rounded-lg p-12 mx-36 mb-12">
            <div className="flex justify-center my-6">
              <FaQuoteLeft size={20} className="mr-2 text-accent" />
              <h2 className="text-lg text-center font-bold bg-accent text-white p-2">
                Very friendly and thorough
              </h2>
              <FaQuoteRight size={20} className="ml-2  text-accent" />
            </div>
            <p className="text-green font-bold text-md text-center my-8 ">
              &quot;Amazing person to work with. Very friendly and thorough. I
              would definitely recommend 😊&quot;
            </p>
            <div className="m-auto flex items-center justify-between">
              <div className="flex items-center">
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
              <p className="text-black">Matthew, Oct 2024</p>
            </div>
          </div>
        </div>

        {/* REVIEW 02*/}
        <div className="bg-white rounded-lg p-12 mx-36">
          <div className="flex justify-center my-6">
            <FaQuoteLeft size={20} className="mr-2 text-accent" />
            <h2 className="text-lg text-center font-bold bg-accent text-white p-2">
              well happy
            </h2>
            <FaQuoteRight size={20} className="ml-2  text-accent" />
          </div>
          <p className="text-green font-bold text-md text-center my-8 ">
            &quot;Thankbyou for all the work you have put in well happy with my
            website&quot;
          </p>
          <div className="m-auto flex items-center justify-between">
            <div className="flex items-center">
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
            <p className="text-black">Dougie, Oct 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
