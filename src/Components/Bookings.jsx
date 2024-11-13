// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import contact from "../Assets/support.png";

const Bookings = () => {
  return (
    <div id="bookings" className="mx-4 md:my-40 md:mx-16">
      <div className="">
        {/* INFO */}
        <div className="bg-green col-start-1 px-8 py-12 mb-20 lg:pt-20 xl:pb-0 md:px-20 self-center">
          <h2 className="text-3xl text-white font-bold mb-6">Sound good?</h2>
          <h3 className="text-lg md:text-base text-white mb-6">
            Schedule a free, no obligation, no pressure, all chill phone call or
            DM to find out how we can help you.
          </h3>
          <div className="flex flex-col items-start justify-start lg:ml-12 xl:ml-32 ">
            <div className="flex flex-col justify-center lg:mt-8">
              <Link
                to="book"
                className="bg-blue font-bold text-white text-center text-sm px-6 lg:px-8 py-5 rounded-md hover:bg-accent cursor-pointer">
                BOOK A NO OBLIGATION CHAT
              </Link>
              <Link
                to="services"
                className="bg-white font-bold text-green text-center mt-4 text-sm px-20 py-4 rounded-md border-4 border-blue hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                MORE INFO
              </Link>
            </div>
            <img
              src={contact}
              alt="cartoon of jorvik web dev's director, Hannah, on the phone chatting"
              className="hidden lg:block w-80 flex self-end -mt-48 xl:mr-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
