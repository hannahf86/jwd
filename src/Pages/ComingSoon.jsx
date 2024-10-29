// IMAGES
import comingSoon from "../Assets/comingSoon.webp";

const ComingSoon = () => {
  return (
    <div id="coming-soon" className="flex justify-center">
      <img
        src={comingSoon}
        loading="lazy"
        alt="green gradient sign for coming soon"
        className="w-2/6"
      />
    </div>
  );
};

export default ComingSoon;
