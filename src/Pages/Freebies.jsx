// COMPONENTS
// import ComingSoon from "./ComingSoon";

// IMAGES
import topTips from "../Assets/topTips.png";

// COMPONENTS
import FetchPdf from "../Components/FetchPdf";

const Freebies = () => {
  return (
    <div id="freebies">
      <h1 className="text-3xl text-green font-bold mb-6 md:mb-8 pt-40 text-center">
        Freebies
      </h1>
      {/* <ComingSoon /> */}
      <div className="lg:mx-40 flex bg-white lg:py-8">
        {/* #01 */}
        <div className="flex flex-col">
          <h3 className="text-blue font-bold text-center text-base mb-2 underline">
            #01
          </h3>
          <h2 className="text-xl font-bold text-green mb-4 text-center">
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
            className="w-80 self-center border-2 border-green"
          />
          <FetchPdf
            pdfUrl={"../Assets/PDFs/TopTips.pdf"}
            filename="top-5-seo-tips.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Freebies;
