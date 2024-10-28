// CALENDLY

const Bookings = () => {
  return (
    <div id="bookings" className="my-40 mx-16">
      <div className="grid grid-cols-2 gap-20">
        {/* INFO */}
        <div className="bg-green col-start-1 px-12 py-32">
          <h1 className="text-3xl text-white font-bold mb-6">Sound good?</h1>
          <h2 className="text-lg text-white mb-6">
            Schedule a free, no obligation, no pressure, all chill phone call or
            DM to find out how we can help you
          </h2>
          <button className="bg-blue text-white flex self-center text-center text-sm px-8 py-2 rounded-md hover:bg-accent cursor-pointer">
            Email Us
          </button>
        </div>

        {/* WIDGET */}
        <div></div>
      </div>
    </div>
  );
};

export default Bookings;
