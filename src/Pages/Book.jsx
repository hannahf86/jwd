// CALENDLY
import { InlineWidget } from "react-calendly";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Book = () => {
  return (
    <div id="book">
      <div id="bookings" className="mx-4 md:my-40 md:mx-16">
        <div className="grid md:grid-cols-2 md:gap-8 lg:gap-20">
          {/* INFO */}
          <div className="bg-green col-start-1 px-8 py-12 mb-8 md:px-12 md:py-32 self-center">
            <h1 className="text-3xl text-white font-bold mb-6">
              Book an appointment
            </h1>
            <h2 className="text-lg md:text-base text-white mb-6">
              Schedule a free, no obligation, no pressure, all chill phone call
              or DM chat to find out how we can help you
            </h2>

            <div className="flex justify-start items-center text-blue mb-8">
              <Link
                to="../contact"
                className="bg-blue text-white flex w-40 text-center text-sm px-12 py-3 rounded-md hover:bg-accent cursor-pointer">
                <p>Email Us</p>
              </Link>
              <div className="flex items-center bg-white px-2 py-1 rounded-md ml-6">
                <p>Feel free to DM us on either of our socials</p>
                <Link
                  to="https://www.facebook.com/profile.php?id=61562515362932"
                  target="_blank">
                  <FaFacebookSquare size={35} className="ml-6" />
                </Link>
                <Link
                  to="https://www.instagram.com/jorvikwebdev/"
                  target="_blank">
                  <FaInstagramSquare size={35} className="mx-6 " />
                </Link>
              </div>
            </div>
          </div>

          {/* WIDGET */}
          <div className="col-start-1 md:col-start-2">
            <InlineWidget url="https://calendly.com/jorvikwebdev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
