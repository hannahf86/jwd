// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="pt-24 lg:pt-32 mx-6 sm:mx-16 lg:mx-8">
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        Services
      </h1>
      <h2 className="text-base text-center mx-2 lg:mx-12 mb-12">
        Here you can find a detailed look at our most common packages. <br />
        <br />
        However, if you cannot find what you&apos;re looking for or you&apos;re
        unsure of which package would suit your business, we encourage you to
        get in book a free consultation for a no obligation chat.
        <br />
        <br />
        Prices are ballparks; they are not set in stone, so there is wiggle room
        depending on your needs. <br />
        <br />
        All packages can be paid in a way that suits you and your business needs
        in the best way, but an up-front deposit is required before designing
        can begin.
      </h2>

      <div className="xs:mx-4 sm:mx-8 lg:mx-2 lg:grid grid-cols-2 gap-12 xl:gap-32 xl:mx-24 justify-start">
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

          {/* IN THIS PACKAGE */}
          <div id="package">
            <h3 className="text-black font-bold text-md mt-8 mb-2 sm:-ml-5 sm:text-base">
              Included in this package...
            </h3>
            <ul>
              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Up to 6 pages or sections
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Modern, responsive design
                </li>{" "}
              </div>

              <div className="flex flex-row items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Up to 5 stock photos can be used
                </li>{" "}
              </div>

              <div className="flex flex-row items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Desktop and mobile navigation
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Contact form
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Professional email address
                </li>{" "}
              </div>

              <div className="flex flex-row items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  On-page SEO and use of keywords and phrases
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Domain set-up
                </li>{" "}
              </div>

              <div className="flex flex-row items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  One year FREE hosting service
                </li>{" "}
              </div>
            </ul>
          </div>

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
              to="../book"
              className="bg-green text-white text-center text-sm sm:text-md px-16 sm:px-28 py-4 rounded-md hover:bg-accent my-4">
              <p>BOOK</p>
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
          className="border-4 border-green p-6 rounded-md mb-40 sm:p-12">
          <img
            src="StartUp.webp"
            alt="computer with clocks to show fast track build"
            className="w-48 m-auto"
          />
          <h2 className="text-green font-bold text-3xl lg:text-2xl mt-6 text-center ">
            StartUp Build
          </h2>
          <small className="text-black flex justify-end lg:my-4 lg:text-md text-sm my-2 italic">
            from £1500
          </small>

          {/* IN THIS PACKAGE */}
          <div id="package-start">
            <h3 className="text-black font-bold text-md mt-8 mb-2 sm:-ml-5 sm:text-base">
              Included in this package...
            </h3>
            <ul>
              <div className="flex flex-row items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Unlimited amount of pages or sections
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Modern, responsive design
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green " />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Unlimited stock photo useage
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Desktop and mobile navigation
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green " />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Contact form
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-2">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Professional email address
                </li>{" "}
              </div>

              <div className="flex flex-row items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  On-page SEO and use of keywords and phrases
                </li>{" "}
              </div>

              <div className="flex flex-row items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Technical SEO included behind the scenes
                </li>{" "}
              </div>

              <div className="flex flex-row items-center lg:items-start mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green lg:mt-2" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  SEO &quot;crawl&quot; reports for 2 months
                </li>{" "}
              </div>

              <div className="flex flex-row items-center mb-5">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  Domain set-up
                </li>{" "}
              </div>

              <div className="flex flex-row items-start lg:items-center mb-2">
                <div>
                  <FaArrowAltCircleRight className="text-green" />
                </div>
                <li className="ml-2 font-bold text-green sm:text-md">
                  One year FREE hosting service
                </li>{" "}
              </div>
            </ul>
          </div>

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
              className="bg-green text-white text-center text-sm sm:text-md px-16 sm:px-28 py-4 rounded-md hover:bg-accent my-4">
              <p>BOOK</p>
            </Link>

            <p className="lg:hidden text-md my-2 sm:mt-8">Not quite sure?</p>
            <Link
              to="contact"
              className="lg:hidden bg-white flex text-black text-center text-sm px-4 py-2 sm:px-6 sm:py-3 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
              <p> Get in touch</p>
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP C2A */}
      <div
        id="desktop-c2a"
        className="bg-green p-20 hidden lg:block flex flex-col justify-center items-center">
        <h2 className="text-xl text-accent font-bold mb-8 text-center">
          Not quite sure?
        </h2>
        <p className="text-base text-white text-center mb-6">
          If you don&apos;t know which package your website falls into, or you
          think it falls somewhere in between, please do get in touch. <br />
          <br />
          Prices are ballparks, not set in stone, and can be negotiated
          depending on your needs.
        </p>
        <Link to="../contact">
          <p className="bg-blue text-white text-md text-center px-16 mx-60 xl:mx-80 py-4 mt-12 rounded-md hover:bg-accent">
            Get in touch
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Services;
