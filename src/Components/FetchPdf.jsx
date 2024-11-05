// REACT ROUTER DOM
import { Link } from "react-router-dom";

// FILES
import topTips from "../Assets/PDFs/TopTips.pdf";

const FetchPdf = () => {
  const onButtonClick = () => {
    const url = { topTips };
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], "seo-top-tips.pdf", {
          type: "application/pdf",
        });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <Link
        to=""
        className="text-white bg-blue p-4 tracking-widest text-center mx-20 mt-8 hover:bg-accent"
        onClick={onButtonClick}>
        DOWNLOAD FOR FREE
      </Link>
    </div>
  );
};

export default FetchPdf;
