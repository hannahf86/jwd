// BACKGROUNDS
import mobile from "../Assets/Backgrounds/mobile.png";
import sm from "../Assets/Backgrounds/sm.png";
import md from "../Assets/Backgrounds/md.png";
import lg from "../Assets/Backgrounds/lg.png";
import xl from "../Assets/Backgrounds/xl.png";
import xxl from "../Assets/Backgrounds/xxl.png";

const Background = () => {
  return (
    <div id="backgrounds" className="relative top-0">
      {/* DEFAULT */}
      <img
        src={mobile}
        alt="grey and white wavy background"
        className="block sm:hidden absolute"
      />

      {/* SMALL */}
      <img
        src={sm}
        alt="grey and white wavy background"
        className="hidden sm:block md:hidden absolute"
      />

      {/* MEDIUM */}
      <img
        src={md}
        alt="grey and white wavy background"
        className="hidden md:block lg:hidden absolute"
      />

      {/* LARGE */}
      <img
        src={lg}
        alt="grey and white wavy background"
        className="hidden lg:block xl:hidden absolute"
      />

      {/* XL */}
      <img
        src={xl}
        alt="grey and white wavy background"
        className="hidden xl:block 2xl:hidden absolute"
      />

      {/* XXL */}
      <img
        src={xxl}
        alt="grey and white wavy background"
        className="hidden 2xl:block  absolute"
      />
    </div>
  );
};

export default Background;
