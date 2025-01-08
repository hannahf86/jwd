// REACT ROUTER DOM
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="lg:pt-40 mx-6 sm:mx-16 lg:mx-20">
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        Services
      </h1>
      <h2 className="text-base text-center mx-2 xl:mx-96 mb-12">
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
        {/* ALL */}
        <div>
          <div className="flex flex-wrap gap-4 lg:gap-x-28 xl:gap-x-40 justify-center">
            {/* UI & DEV */}
            <div
              id="small"
              className="border-4 border-green p-6 sm:p-12 lg:p-8 rounded-md mb-12 md:mb-20 lg:w-[38%]">
              <h2 className="text-green font-bold text-3xl lg:text-xl text-center mb-4">
                UI Design & Development
              </h2>

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
                  <p>Start your journey</p>
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
                  <p>Let&apos;s get to work</p>
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

              {/* DESCRIPTION */}
              <div id="for-you-start">
                <h3 className="text-md mt-8 ">
                  At JWD we operate with sustainability in mind. As a result we
                  offer green web hosting without sacrificing on quality and
                  stability.
                </h3>
              </div>

              {/* C2A */}
              <div
                id="c2a"
                className="flex flex-col items-center justify-center mt-12">
                <Link
                  to="../hosting"
                  className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                  <p>Make a good decision </p>
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

              {/* DESCRIPTION */}
              <div id="for-you-start">
                <h3 className="text-md mt-8 ">
                  After finishing a website project, we don&apos;t just walk
                  away — we&apos;re here to support you at every step including
                  technical support, security updates and accessibility
                  implementation.
                </h3>
              </div>

              {/* C2A */}
              <div
                id="c2a"
                className="flex flex-col items-center justify-center mt-12">
                <Link
                  to="../aftercare"
                  className=" bg-white flex text-black text-center text-sm px-4 py-1 rounded-md border-4 border-green hover:bg-accent hover:border-accent hover:text-white cursor-pointer">
                  <p>We&apos;re here to help</p>
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
