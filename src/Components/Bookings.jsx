// CALENDLY
import { InlineWidget } from "react-calendly";

const Bookings = () => {
  return (
    <div id="bookings" className="mx-4 md:my-40 md:mx-16">
      <div className="grid md:grid-cols-2 md:gap-20">
        {/* INFO */}
        <div className="bg-green col-start-1 px-8 py-12 mb-8 md:px-12 md:py-32 self-center">
          <h1 className="text-3xl text-white font-bold mb-6">Sound good?</h1>
          <h2 className="text-lg text-white mb-6">
            Schedule a free, no obligation, no pressure, all chill phone call or
            DM to find out how we can help you
          </h2>
          <button className="bg-blue text-white flex self-center text-center text-sm px-12 py-3 rounded-md hover:bg-accent cursor-pointer">
            Email Us
          </button>
        </div>

        {/* WIDGET */}
        <div className="col-start-1 md:col-start-2">
          <InlineWidget url="https://calendly.com/jorvikwebdev" />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
