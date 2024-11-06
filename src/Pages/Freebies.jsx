// IMAGES
import topTips from "../Assets/topTips.png";
import logo from "../Assets/navLogo.webp";

// COMPONENTS
import FetchPdf from "../Components/FetchPdf";

const Freebies = () => {
  return (
    <div id="freebies" className="mx-8 md:mx-20">
      {/* LOGO */}
      <div className=" flex flex-col justify-center items-center pt-32 xl:pt-40 mb-12">
        <img src={logo} alt="jorvik web dev logo" className="mx-20" />
        <p className="text-grey tracking-wider text-base">JORVIK WEB DEV</p>
      </div>

      <h1 className="text-4xl text-green font-bold mb-6 md:mb-8 text-center">
        Freebies
      </h1>

      {/* #01 */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-blue  font-bold text-base mb-2 underline">#01</h3>
        <h2 className="text-2xl font-bold text-green mb-4 text-center">
          5 TOP TIPS <br />
          FOR LOCAL SEO
        </h2>
        <p className="text-black text-md text-center mb-8">
          Access these simple tips to begin <br />
          your SEO boosting journey!
        </p>
        <img
          src={topTips}
          alt="cover for free pdf with tips on local seo"
          className="w-80 border-2 border-green"
        />
        <FetchPdf
          pdfUrl={"../Assets/PDFs/TopTips.pdf"}
          filename="top-5-seo-tips.pdf"
        />
      </div>
    </div>
  );
};

export default Freebies;
