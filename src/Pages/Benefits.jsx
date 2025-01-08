// IMAGES
import fees from "../Assets/fees.png";
import efficient from "../Assets/efficient.png";
import peace from "../Assets/peace.png";

const Benefits = () => {
  return (
    <div id="benefits" className="bg-white p-8 lg:p-12">
      <h2 className="text-center text-green font-bold text-4xl lg:text-3xl my-8">
        The benefits of working with us
      </h2>

      <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-12 lg:mt-32 mb-12">
        <div className="col-start-1 flex flex-col justify-start items-center border-4 border-green rounded-md">
          <img
            src={fees}
            alt="a british pound sign representing no hidden fees"
            className=" xs:w-40 self-center"
          />
          <h2 className="text-2xl lg:text-xl font-bold text-center text-blue mb-4">
            No Hidden Fees
          </h2>
          <p className="text-black text-center text-md mb-12 sm:mx-16 lg:mx-2">
            Through our own experience as customers, we hate it when fees are
            added at the end or they&apos;re not displayed on the website.{" "}
            <br />
            <br /> We don&apos;t do that here.
            <br />
            <br /> We believe in transparency and clear communication. No smoke
            and mirrors here - just honest work!
          </p>
        </div>

        <div className="md:col-start-2 flex flex-col justify-start items-center border-4 border-green rounded-md">
          <img
            src={efficient}
            alt="a clock representing efficient use of time"
            className=" xs:w-40 self-center"
          />

          <h2 className="text-2xl lg:text-xl font-bold text-center text-blue mb-4 ">
            Efficient Service
          </h2>
          <p className="text-black text-center text-md mb-12 sm:mx-16 lg:mx-2">
            We make web development a breeze with a fast and efficient service.
            <br />
            <br /> Using the latest productivity tools and workflow methods, we
            ensure your project will not take months and months, with no updates
            and added costs, but instead literally a couple of weeks, project
            size depending of course!
          </p>
        </div>

        <div className="md:col-start-3 flex flex-col justify-start items-center border-4 border-green rounded-md">
          <img
            src={peace}
            alt="a peace sign representing peace of mind"
            className=" xs:w-40 self-center"
          />
          <h2 className="text-2xl lg:text-xl font-bold text-center text-blue mb-4 ">
            Peace of Mind
          </h2>
          <p className="text-black text-center text-md mb-12 sm:mx-16 lg:mx-2">
            Join our ever growing list of happy clients and like them, trust us
            to take care of this section of your business. <br />
            <br /> We work quickly and with empathy, providing you with top
            quality websites, knowing how important your online presence is for
            every business, especially in this financial climate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
