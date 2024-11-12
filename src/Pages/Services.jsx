// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { BsClipboard2DataFill } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { FaServer } from "react-icons/fa6";

const Services = () => {
  return (
    <div id="services" className="pt-24 lg:pt-40 mx-6 sm:mx-16 lg:mx-20">
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        Services
      </h1>
      <h2 className="text-base text-center mx-2 lg:mx-20 mb-12">
        Here you can find a detailed look at our most common packages. <br />
        <br />
        However, if you cannot find what you&apos;re looking for or you&apos;re
        unsure which package would suit your business, we encourage you to book
        a free consultation for a no obligation chat.
        <br />
        <br />
        Prices are ballparks; they are not set in stone, so there is wiggle room
        depending on your needs. <br />
        <br />
        All packages can be paid in a way that suits you and your business in
        the best way, but an up-front deposit is required before we can begin.
      </h2>

      <div className="xs:mx-4 sm:mx-8 lg:mx-2 lg:grid grid-cols-2 gap-x-12 xl:gap-x-32 xl:mx-24 justify-start ">
        {/* #01 - FAST TRACK */}
        <div
          id="fasttrack"
          className="border-4 border-green p-6 sm:p-12 rounded-md mb-20">
          <img
            src="./FastTrack.webp"
            alt="computer with clocks to show fast track build"
            className="w-48 m-auto"
          />
          <h2 className="text-green font-bold text-3xl lg:text-2xl mt-6 text-center ">
            FastTrack Build
          </h2>
          <small className="text-black flex justify-end lg:my-4 lg:text-md text-sm my-2 italic">
            from £195
          </small>

          {/* THIS IS FOR YOU IF... */}
          <div id="for-you">
            <h3 className="text-black font-bold text-md mt-8 mb-2 sm:text-base sm:-ml-5">
              This is for you, if...
            </h3>
            <ul className="disc-none">
              <div className="flex flex-col mb-4">
                <div className="flex flex-row items-center">
                  <FaArrowAltCircleRight className="text-green" />
                  <li className="ml-2 font-bold text-green sm:text-md">
                    You need a website, now!
                  </li>{" "}
                </div>
                <p className="italic text-sm my-2">
                  You are looking to establish an online presence to get you
                  started.
                </p>
              </div>

              <div className="flex flex-col mb-4">
                <div className="flex flex-row items-center">
                  <FaArrowAltCircleRight className="text-green" />
                  <li className="ml-2 font-bold text-green sm:text-md">
                    Your needs are simple
                  </li>{" "}
                </div>
                <p className="italic text-sm my-2">
                  This means you do not require a booking system, calendar,
                  blog, e-store etc etc.
                </p>
              </div>

              <div className="flex flex-col mb-4">
                <div className="flex flex-row items-center">
                  <FaArrowAltCircleRight className="text-green" />
                  <li className="ml-2 font-bold text-green sm:text-md">
                    You have a basic logo
                  </li>{" "}
                </div>
                <p className="italic text-sm my-2">
                  To create an entirely new brand does cost extra, but we can
                  work with a simple logo and create the look of the website
                  from that.
                </p>
              </div>
            </ul>
          </div>

          {/* C2A */}
          <div
            id="c2a"
            className="flex flex-col items-center justify-center my-4">
            <Link
              to="../fast-track"
              className="bg-green text-white text-center text-sm sm:text-md lg:text-sm px-16 sm:px-28 lg:px-12 py-4 rounded-md hover:bg-accent my-4">
              <p>MORE INFO</p>
            </Link>

            <p className="lg:hidden text-md my-2 sm:mt-8">Not quite sure?</p>
            <Link
              to="contact"
              className="lg:hidden bg-white flex text-black text-center text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
              <p> Get in touch</p>
            </Link>
          </div>
        </div>

        {/* #02 - SMALL BUSINESS */}
        <div
          id="fasttrack"
          className="border-4 border-green p-6 rounded-md mb-20 sm:p-12">
          <img
            src="StartUp.webp"
            alt="computer with clocks to show fast track build"
            className="w-48 m-auto"
          />
          <h2 className="text-green font-bold text-3xl lg:text-2xl mt-6 text-center ">
            StartUp <br />
            Build
          </h2>
          <small className="text-black flex justify-end lg:my-4 lg:text-md text-sm my-2 italic">
            from £1500
          </small>

          {/* THIS IS FOR YOU IF... */}
          <div id="for-you-start">
            <h3 className="text-black font-bold text-md mt-8 mb-2 sm:-ml-5 sm:text-base">
              This is for you, if...
            </h3>
            <ul className="disc-none">
              <div className="flex flex-col mb-4">
                <div className="flex flex-row items-start">
                  <div>
                    <FaArrowAltCircleRight className="text-green mt-2" />
                  </div>
                  <li className="ml-2 font-bold text-green sm:text-md">
                    You are looking to grow your business
                  </li>{" "}
                </div>
                <p className="italic text-sm my-2">
                  You want to start climbing the search rankings in order to
                  increase sales.
                </p>
              </div>

              <div className="flex flex-col mb-4">
                <div className="flex flex-row items-start">
                  <div>
                    <FaArrowAltCircleRight className="text-green mt-2 " />
                  </div>
                  <li className="ml-2 font-bold text-green sm:text-md">
                    Your website requires extra features
                  </li>{" "}
                </div>
                <p className="italic text-sm my-2">
                  This could include a booking system or a blog to keep your
                  page active, for example.
                </p>
              </div>

              <div className="flex flex-col mb-4">
                <div className="flex flex-row items-start">
                  <div>
                    <FaArrowAltCircleRight className="text-green mt-2" />
                  </div>
                  <li className="ml-2 font-bold text-green sm:text-md">
                    You want to challenge your local and national competitors
                  </li>{" "}
                </div>
                <p className="italic text-sm my-2">
                  Using our SEO tools, we will build a top spec website to
                  fulfil Google&apos;s criteria to improve your rankings. We
                  will also guide you with optimal content to keep your page
                  active.
                </p>
              </div>
            </ul>
          </div>

          {/* C2A */}
          <div
            id="c2a-start"
            className="flex flex-col items-center justify-center my-4">
            <Link
              to="../book"
              className="bg-green text-white text-center text-sm sm:text-md lg:text-sm px-16 sm:px-28 lg:px-12 py-4 rounded-md hover:bg-accent my-4">
              <p>MORE INFO</p>
            </Link>

            <p className="lg:hidden text-md my-2 sm:mt-8">Not quite sure?</p>
            <Link
              to="contact"
              className="lg:hidden bg-white flex text-black text-center text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
              <p> Get in touch</p>
            </Link>
          </div>
        </div>

        {/* SERVICES */}
        <div className="lg:col-start-1 lg:row-start-2 lg:col-span-2 ">
          <h2 className="text-3xl font-bold text-green mb-8 text-left">
            Other Services
          </h2>

          <p className="text-black text-base text-left mb-12">
            Below is a complete list of our current services. <br />
            <br />
            Select any to find out more details.
          </p>

          <div className="list-none flex flex-wrap justify-center border-4 border-green rounded-md py-2 mb-12 xs:mx-4 lg:mx-0">
            <Link
              to="../ui-design"
              className="text-green rounded-md hover:bg-green hover:text-white">
              <div className="flex items-center mx-8 ">
                <MdDraw size={28} className="mr-2" />
                <li className="text-md my-3 font-bold ">UI Design</li>
              </div>
            </Link>

            <Link
              to="../ux-research"
              className="text-green rounded-md hover:bg-green hover:text-white">
              <div className="flex items-center mx-8">
                <BsClipboard2DataFill size={23} className="mr-2" />
                <li className="text-md my-3 font-bold ">UX Research</li>
              </div>
            </Link>

            <Link
              to="../hosting"
              className="text-green rounded-md hover:bg-green hover:text-white">
              <div className="flex items-center mx-8">
                <FaServer size={23} className="mr-2" />
                <li className="text-md my-3 font-bold ">Hosting</li>
              </div>{" "}
            </Link>

            <Link
              to="../development"
              className="text-green rounded-md hover:bg-green hover:text-white">
              <div className="flex items-center mx-8">
                <HiDesktopComputer size={28} className="mr-2 " />
                <li className="text-md my-3 font-bold ">Development</li>
              </div>{" "}
            </Link>

            <Link
              to="../seo-services"
              className="text-green rounded-md hover:bg-green hover:text-white">
              <div className="flex items-center mx-8">
                <HiMiniPresentationChartBar size={25} className="mr-2 " />
                <li className="text-md my-3 font-bold">SEO Services</li>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
