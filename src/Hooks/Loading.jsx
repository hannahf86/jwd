// LOTTIE
import { useLottie } from "lottie-react";

// ANIMATION
import neuroAnimation from "../Assets/Animations/neuro.json";

const Loading = () => {
  const options = {
    animationData: neuroAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  return <div>{View}</div>;
};

export default Loading;
