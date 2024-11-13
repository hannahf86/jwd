// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="pt-24 lg:pt-40 mx-6 sm:mx-16 lg:mx-20">
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        Services
      </h1>
      <h2 className="text-base text-center mx-2 xl:mx-20 mb-12">
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

      <div className=" flex flex-col  ">
        {/* POPULAR*/}
        <h2 className="text-2xl md:text-xl font-bold text-black text-left mb-12 ">
          Popular Packages
        </h2>

        <div className="flex flex-wrap gap-4 lg:gap-28 xl:gap-40 justify-center">
          {/* #01 - FAST TRACK */}
          <div
            id="fasttrack"
            className="border-4 border-green p-6 sm:p-12 rounded-md mb-20 lg:w-[40%]">
            <h2 className="text-green font-bold text-3xl lg:text-2xl text-center mb-4">
              FastTrack Website Build
            </h2>
            <small className="text-black text-center lg:my-4 lg:text-md text-sm my-2 italic">
              from £195
            </small>

            {/* THIS IS FOR YOU IF... */}
            <div id="for-you">
              <h3 className="text-black font-bold text-md my-4 sm:text-base sm:-ml-5">
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
                    Traditionally, this website package is known as a Brochure
                    website. This means you do not require a booking system,
                    calendar, blog, e-store etc etc.
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
              className="flex flex-col items-center justify-center mt-12">
              <Link
                to="book"
                className="bg-green text-white text-center text-sm sm:text-md lg:text-sm px-28 py-4 rounded-md hover:bg-accent my-4">
                <p>BOOK</p>
              </Link>

              <p className=" text-sm my-2 ">Not quite sure?</p>
              <Link
                to="../fast-track"
                className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                <p>More Info</p>
              </Link>
            </div>
          </div>

          {/* #02 - SMALL BUSINESS */}
          <div
            id="small"
            className="border-4 border-green p-6 sm:p-12 rounded-md mb-20 lg:w-[40%]">
            <h2 className="text-green font-bold text-3xl lg:text-2xl text-center mb-4">
              StartUp Website Build
            </h2>
            <small className="text-black lg:my-4 lg:text-md text-sm my-2 italic">
              from £1500
            </small>

            {/* THIS IS FOR YOU IF... */}
            <div id="for-you-start">
              <h3 className="text-black font-bold text-md my-4 sm:text-base sm:-ml-5">
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
                    Using our SEO tools and UX research, we will build a top
                    spec website to fulfil Google&apos;s criteria to improve
                    your rankings. We will also guide you with optimal content
                    to keep your page active.
                  </p>
                </div>
              </ul>
            </div>

            {/* C2A */}
            <div
              id="c2a"
              className="flex flex-col items-center justify-center mt-12">
              <Link
                to="book"
                className="bg-green text-white text-center text-sm sm:text-md lg:text-sm px-28 py-4 rounded-md hover:bg-accent my-4">
                <p>BOOK</p>
              </Link>

              <p className=" text-sm my-2 ">Not quite sure?</p>
              <Link
                to="../start-up"
                className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                <p>More Info</p>
              </Link>
            </div>
          </div>
        </div>

        {/* ALL */}
        <div>
          <h2 className="text-2xl md:text-xl font-bold text-black text-left mb-12 ">
            All Packages
          </h2>

          <div className="flex flex-wrap gap-4 lg:gap-x-28 xl:gap-x-40 justify-center">
            {/* UI & DEV */}
            <div
              id="small"
              className="border-4 border-green p-6 sm:p-12 lg:p-8 rounded-md mb-12 md:mb-20 lg:w-[38%]">
              <h2 className="text-green font-bold text-3xl lg:text-xl text-center mb-4">
                UI Design & Development
              </h2>
              <small className="text-black/50 lg:my-4 lg:text-md text-sm my-2 italic">
                from £195
              </small>

              {/* DESCRIPTION */}
              <div id="for-you-start">
                <h3 className="text-md mt-8 ">
                  UI design and web development work hand-in-hand to create
                  visually appealing, functional, and user-centered websites.
                </h3>
              </div>

              {/* C2A */}
              <div
                id="c2a"
                className="flex flex-col items-center justify-center mt-12">
                <Link
                  to="../ui-dev"
                  className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                  <p>More Info</p>
                </Link>
              </div>
            </div>

            {/* UX & SEO*/}
            <div
              id="small"
              className="border-4 border-green p-6 sm:p-12 lg:p-8 rounded-md mb-12 md:mb-20 lg:w-[38%]">
              <h2 className="text-green font-bold text-3xl lg:text-xl text-center mb-4">
                UX Research & SEO
              </h2>
              <small className="text-black/50 lg:my-4 lg:text-md text-sm my-2 italic">
                from £250 per month x 6
              </small>

              {/* DESCRIPTION */}
              <div id="for-you-start">
                <h3 className="text-md mt-8 ">
                  UX research and SEO services work together to build websites
                  that are both user-centric and search-optimized, leveraging
                  competitive analysis and keyword strategy for greater impact.
                </h3>
              </div>

              {/* C2A */}
              <div
                id="c2a"
                className="flex flex-col items-center justify-center mt-12">
                <Link
                  to="../ux-seo"
                  className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                  <p>More Info</p>
                </Link>
              </div>
            </div>

            {/* HOSTING */}
            <div
              id="hosting"
              className="border-4 border-green p-6 sm:p-12 lg:p-8 rounded-md mb-12 md:mb-20 lg:w-[38%]">
              <h2 className="text-green font-bold text-3xl lg:text-xl text-center mb-4">
                Website Hosting
              </h2>
              <small className="text-black/50 lg:my-4 lg:text-md text-sm my-2 italic">
                from £5 per month, billed monthly or annually
              </small>

              {/* DESCRIPTION */}
              <div id="for-you-start">
                <h3 className="text-md mt-8 ">
                  We offer clients a one-stop solution for maintaining their
                  websites, combining reliable uptime, security, and performance
                  optimisation.
                </h3>
              </div>

              {/* C2A */}
              <div
                id="c2a"
                className="flex flex-col items-center justify-center mt-12">
                <Link
                  to="../hosting"
                  className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                  <p>More Info</p>
                </Link>
              </div>
            </div>

            {/* AFTERCARE */}
            <div
              id="aftercare"
              className="border-4 border-green p-6 sm:p-12 lg:p-8 rounded-md mb-20 lg:w-[38%]">
              <h2 className="text-green font-bold text-3xl lg:text-xl text-center mb-4">
                Aftercare
              </h2>
              <small className="text-black/50 lg:my-4 lg:text-md text-sm my-2 italic">
                from £8 per month, billed monthly or annually
              </small>

              {/* DESCRIPTION */}
              <div id="for-you-start">
                <h3 className="text-md mt-8 ">
                  After finishing a website project, we don&apos;t just walk
                  away — we&apos;re here to support you at every step
                </h3>
              </div>

              {/* C2A */}
              <div
                id="c2a"
                className="flex flex-col items-center justify-center mt-12">
                <Link
                  to="../aftercare"
                  className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                  <p>More Info</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
