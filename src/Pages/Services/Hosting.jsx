// REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

// IMAGES
import comingSoon from "../../Assets/comingSoon.webp";

const Hosting = () => {
  return (
    <div id="hosting" className="pt-40 mx-12 lg:mx-40">
      <h1 className="text-green text-5xl lg:text-3xl leading-snug font-bold mb-8 text-center ">
        Hosting
      </h1>

      <h2 className="text-base text-black text-center mb-12 mx-32">
        We offer clients a one-stop solution for maintaining their websites,
        combining <strong>reliable uptime</strong>, <strong>security</strong>,
        and <strong>performance optimisation</strong>. <br />
        <br />
        By handling hosting in-house or ourtrusted partner,{" "}
        <Link
          to="https://vercel.com/"
          target="_blank"
          className="underline text-blue font-bold hover:text-accent">
          Vercel
        </Link>
        , we ensure a seamless integration with design and development
        processes, resulting in fewer technical issues and better support.{" "}
        <br />
        <br />
        This service adds value for you, our clients, as you can rely on us for
        both the creative and technical aspects of your online presence.
      </h2>

      <h3 className="text-xl font-bold text-black mb-6 text-center">
        Why do we use Vercel?
      </h3>
      <p className="text-black text-md mb-12 leading-loose">
        Vercel is the superior choice for hosting because it provides{" "}
        <strong>fast</strong>, <strong>reliable</strong> and{" "}
        <strong>scalable</strong> platform for deploying web applications,
        particularly when using a framework like Next.js, which we use for our{" "}
        <Link
          to="../start-up"
          target="_blank"
          className="underline text-blue font-bold hover:text-accent">
          StartUp Website Build
        </Link>
        .<br />
        <br />
        Its features, like <strong>automatic deployments</strong>,{" "}
        <strong>global edge caching</strong>, and{" "}
        <strong>seamless integration with Git</strong>, streamline our
        development workflow and enable faster iterations on your projects.{" "}
        <br />
        <br />
        This allows us to focus on delivering high-quality user experiences
        without worrying about complex deployment processes, while also ensuring
        quick load times and improved performance for you and your project.
        <br />
        <br />
        Need more proof? Check out this article written by our friend, Sushrit,
        on why Vercel are the developers choice of hosting service...
      </p>
      <Link
        to="https://medium.com/@sushrit.pk21/how-when-and-why-you-should-switch-from-vercel-to-a-different-hosting-provider-especially-for-8ba25e439788"
        target="_blank"
        className="underline text-blue font-bold hover:text-accent">
        How, When, and Why you should switch from Vercel to a different Hosting
        Provider (Especially for Next.js)
      </Link>
    </div>
  );
};

export default Hosting;
