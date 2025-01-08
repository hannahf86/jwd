// IMAGES
import hannah from "../Assets/hannah.webp";

const About = () => {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 mb-40 mx-6">
      <div className="col-start-1 relative hidden md:block">
        <img
          src={hannah}
          alt="picture of director and lead designer Hannah Feehan"
          className="p-16"
        />
      </div>

      <div className="col-start-2 pt-4 md:pt-16 px-4 md:px-12">
        <h2 className="text-green font-bold text-2xl mb-4 text-center md:text-left">
          Hi! We&apos;re Jorvik Web Dev, a small but mighty web design agency
          based in York.
        </h2>
        <p className="text-lg mb-8 text-center md:text-left font-bold text-black">
          At our core, we are problem solvers.
        </p>
        <p className="text-base mb-4 text-center md:text-left ">
          Starting your own business is so hard! We know!
          <br />
          <strong className="text-green underline text-center md:text-left">
            We&apos;ve just done it!
          </strong>
        </p>

        <p className="text-md text-center md:text-left text-black">
          There&apos;s far too much to manage and so many new skills to learn.
          If we&apos;re completely honest, we&apos;re not business folks,
          we&apos;re techno nerds who are passionate about helping others.
          <br />
          <br />
          We wanted to crack on with designing, building and planning, i.e.
          doing what love!
        </p>

        <h3 className="text-green font-bold text-lg text-center md:text-left mt-6 mb-12">
          And that&apos;s what you should be doing!
        </h3>
      </div>

      <div className="col-start-2 md:grid-col-start-1 md:col-span-2 md:mx-20">
        <p className="text-base text-center md:text-left font-bold text-black ">
          With a collective knowledge base of{" "}
          <strong className="text-blue">16 years</strong> and a{" "}
          <strong className="text-blue">5 star rating</strong> on Google
          reviews, let us handle your online journey so you can focus on what
          matters to you the most!
        </p>
        {/* <Link to="about" className="cursor-point text-right">
            <p className="my-6 underline text-black">Read our full story...</p>
          </Link> */}
      </div>
    </div>
  );
};

export default About;
