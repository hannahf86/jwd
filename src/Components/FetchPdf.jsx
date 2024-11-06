/* eslint-disable */

// REACT
import { useState } from "react";

const FetchPdf = ({ pdfUrl, filename }) => {
  // fetch pdf
  const onButtonClick = () => {
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
      <button
        onClick={onButtonClick}
        className="text-white bg-blue p-4 tracking-widest text-center mx-20 mt-8 hover:bg-accent">
        DOWNLOAD FOR FREE
      </button>
    </div>
  );
};

export default FetchPdf;
