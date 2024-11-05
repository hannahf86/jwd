// CALENDLY
import { InlineWidget } from "react-calendly";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Book = () => {
  return (
    <div
      id="book"
      className="mx-4 pt-32 lg:mt-20 lg:mb-12 xl:mt-20 xl:mb-20 md:mx-16">
      <div className="lg:grid grid-cols-2 lg:gap-20">
        {/* INFO */}
        <div className="bg-green lg:col-start-1 p-8 lg:px-6 pt-12 lg:pt-40 xl:pb-44 mb-8 md:px-12 ">
          <h1 className="text-4xl sm:text-3xl leading-tight text-white font-bold mb-6">
            Book an appointment
          </h1>
          <h2 className="text-lg md:text-base text-white ">
            Schedule a free, no obligation, no pressure, all chill phone call or
            DM chat to find out how we can help you
          </h2>
        </div>

        {/* WIDGET */}
        <div className="col-start-1 md:col-start-2 sm:-mt-12 lg:mt-3 xl:mt-20">
          <InlineWidget url="https://calendly.com/jorvikwebdev" />
        </div>

        {/* SOCIALS */}
        <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center text-white my-8 lg:mb-12 lg:col-start-1 lg:col-span-2 lg:-m-8">
          <div className="flex items-center bg-green px-8 py-4 xl:px-20 xl:py-6 xl:my-16 rounded-md ">
            <p className="md:text-md">
              Feel free to DM us on either of our socials
            </p>
            <Link
              to="https://www.facebook.com/profile.php?id=61562515362932"
              target="_blank">
              <FaFacebookSquare size={35} className="ml-6 hover:text-accent" />
            </Link>
            <Link to="https://www.instagram.com/jorvikwebdev/" target="_blank">
              <FaInstagramSquare
                size={35}
                className="mx-6 hover:text-accent "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
