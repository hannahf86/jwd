// REACT ROUTER DOM
import { Link } from "react-router-dom";

// IMAGES
import contact from "../Assets/support.png";
import code from "../Assets/code.png";
import happy from "../Assets/happy.png";

// ICONS
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";

const Works = () => {
  return (
    <div id="how-it-works" className="mx-8 my-40 md:ml-20 lg:ml-40 md:mr-20">
      <h2 className="text-3xl text-black/80 font-bold mb-12 text-left">
        OK, so how does this work?
      </h2>
      {/* GRID */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-4">
        <div className="col-start-1 md:col-span-2 row-start-1 mb-12">
          <div className="md:hidden col-start-3 self-start">
            <img
              src={contact}
              alt="red haired cartoon woman happily talking on the phone"
              className="w-80 md:w-full m-auto "
            />
          </div>
          <h2 className="text-blue text-xl font-bold">#01</h2>
          <h1 className="text-green text-2xl font-bold mb-6">Get in touch</h1>
          <p className="text-md text-black">
            Book a call or send a message on Facebook or Instagram. The best
            thing to do first is to hash it out and figure out how we can best
            serve you and your business.
            <FaInfinity size={35} className="text-accent mt-6" />
            As neurodiverse people ourselves, we acknowledge a call can be
            intimidating for some folks, which is why we offer the messaging
            service through our social platforms, which you can find below.{" "}
            <br />
            <br />
            You absolutely will NOT be pressured into buying anything you are
            not 100% comfortable with. We&apos;re here to help you, not take
            advantage.
            <FaInfinity size={35} className="text-accent" />{" "}
            <div className="flex text-green mb-8">
              <Link
                to="https://www.facebook.com/profile.php?id=61562515362932"
                target="_blank">
                <FaFacebookSquare size={35} className="mt-6" />
              </Link>
              <Link
                to="https://www.instagram.com/jorvikwebdev/"
                target="_blank">
                <FaInstagramSquare size={35} className="mx-6 mt-6" />
              </Link>
            </div>
          </p>
        </div>
        <div className="hidden md:block md:col-start-3 row-start-1 justify-start mt-20">
          <img
            src={contact}
            alt="red haired cartoon woman happily talking on the phone"
          />
        </div>

        {/* WORK */}
        <div className="grid-start-1 md:col-span-2 mb-12">
          <div className="md:hidden col-start-1 mx-8">
            <img
              src={code}
              alt="some hands typing some code"
              className="w-80 m-auto"
            />
          </div>
          <h2 className="text-blue text-xl font-bold">#02</h2>
          <h1 className="text-green text-2xl font-bold mb-6">We do our jobs</h1>
          <h3 className="text-md text-green/80 mb-2 font-bold">
            UI/UX & WEB DESIGN
          </h3>
          <p className="text-md text-black">
            Once the design is complete, we will send you a link to a prototype
            of the website so you can see how your brand has been applied and
            get a feel for the website on desktop and mobile before we commit
            the time to building. <br />
            <br />
            We work this way to save costs for you, and maintain transparency
            and communication throughout. If you have a change of heart, we
            encourage you to get in touch before the build process begins.
          </p>
          <h3 className="text-md text-green/80 mb-2 mt-8 font-bold">
            SEO SERVICES
          </h3>
          <p className="text-md text-black">
            We being with a thorough &quot;crawl&quot; of your website and
            provide you with an ULTRA geeky report that highlights where we need
            to focus our efforts to help improve those rankings. <br />
            <br />
            Working together, we create a marketing strategy with clear steps
            and deadlines for you to follow, giving you plenty of time to
            acquire any content needed. We then implement it and do our magical
            SEO tricks.
          </p>
        </div>
        <div className="hidden md:block md:col-start-3 row-start-2 justify-start mt-20">
          <img src={code} alt="some hands typing some code" />
        </div>

        <div className="grid-start-1 md:col-span-2 mb-12">
          <div className="md:hidden col-start-1 mx-8 ">
            <img
              src={happy}
              alt="multi racial people cheering at a big complete sign"
            />
          </div>

          {/* HANDOVER */}
          <h2 className="text-blue text-xl font-bold">#03</h2>
          <h1 className="text-green text-2xl font-bold mb-6">
            Handover and everyone is happy
          </h1>

          <p className="text-md text-black">
            Once the project is finished, our support does not stop there!{" "}
            <br />
            <br />
            We will make sure your website is live, working correctly, and we
            will continue to monitor the website for one month after handover to
            make sure the website is stable. <br />
            <br />
            All our website packages come with one year free hosting and a free
            domain, should you need it. <br />
            <br />
            We offer our clients a{" "}
            <strong className="text-green">15% reduction</strong> in any future
            products. For example, a blog or a booking system. Simply drop us a
            line with what you need and we&apos;ll crack right on!
          </p>
        </div>
        <div className="hidden md:block md:col-start-3 row-start-3 justify-start mt-20">
          <img
            src={happy}
            alt="multi racial people cheering at a big complete sign "
            className="w-80 m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
