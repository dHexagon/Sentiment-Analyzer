import { Frame1, Frame2 } from "../../components";
import { useRef } from "react";

const Landing = () => {
  const scrollDown = () => {
    console.log("called");
    window.scrollTo({
      top: frame2snap.current.offsetTop,
      behavior: "smooth",
    });
  };

  const frame2snap = useRef(null);

  return (
    <div className="overflow-x-hidden">
      <Frame1 scrollDown={scrollDown} />
      <Frame2 ref={frame2snap} />
    </div>
  );
};

export default Landing;
