/* eslint-disable */

// REACT
import { useState } from "react";

// ICONS

// FILES
// import topTips from "../Assets/PDFs/TopTips.pdf";

const FetchPdf = ({ pdfUrl, filename }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch pdf
  const onButtonClick = () => {
    setIsLoading(true);
    setError(null);

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], filename, {
          type: "application/pdf",
        });
        const fileURL = URL.createObjectURL(file);

        // temporary link
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();

        // remove file from cache
        document.body.removeChild(link);
        URL.revokeObjectURL(fileURL);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <button onClick={onButtonClick}>
        {
          <p className="text-white bg-blue p-4 tracking-widest text-center mx-20 mt-8 hover:bg-accent">
            DOWNLOAD FOR FREE
          </p>
        }
      </button>
    </div>
  );
};

export default FetchPdf;
