import { PieChart } from "react-minimal-pie-chart";
import { useEffect, useState } from "react";

const ResponseGraph = ({ details }) => {
  const [values, setValues] = useState([34, 33, 33]);

  useEffect(() => {
    setValues(details.array);
  }, [details.array]);

  //35 of screen, 40 of 80
  return (
    <div className="drop-shadow-[-9px_9px_21.5px_rgba(0,0,0,0.25)] w-full h-full">
      <div className="shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)] h-full w-full border flex justify-around items-center rounded-xl bg-white/[0.2]">
        <div className="w-60 h-60">
          <PieChart
            data={[
              { title: "Positive", value: values[0], color: "#62E000" },
              { title: "Neutral", value: values[1], color: "#12C2E8" },
              { title: "Negative", value: values[2], color: "#FF3636" },
            ]}
            lineWidth={8}
            paddingAngle={8}
            rounded
            animate
            animationEasing="ease-in-out"
            startAngle={0}
          />
        </div>
        <div className="min-w-[40%] h-[90%] flex flex-col justify-around items-center">
          <div className="h-1/4 w-[90%] flex justify-between">
            <div className="w-[10%]">
              <div className="w-5 h-5 rounded-[0.625rem] bg-[#62E000] mt-2"></div>
            </div>
            <div className="w-[80%] flex flex-col">
              <span className="font-lato font-normal">Positive Response</span>
              <span className="font-ubuntu font-bold"> {values[0]}%</span>
            </div>
          </div>
          <div className="h-1/4 w-[90%] flex justify-between">
            <div className="w-[10%]">
              <div className="w-5 h-5 rounded-[0.625rem] bg-[#12C2E8] mt-2"></div>
            </div>
            <div className="w-[80%] flex flex-col">
              <span className="font-lato font-normal">Neutral Response</span>
              <span className="font-ubuntu font-bold"> {values[1]}%</span>
            </div>
          </div>
          <div className="h-1/4 w-[90%] flex justify-between">
            <div className="w-[10%]">
              <div className="w-5 h-5 rounded-[0.625rem] bg-[#FF3636] mt-2"></div>
            </div>
            <div className="w-[80%] flex flex-col">
              <span className="font-lato font-normal">Negative Response</span>
              <span className="font-ubuntu font-bold"> {values[2]}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseGraph;
