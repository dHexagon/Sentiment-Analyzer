import { useNavigate } from "react-router-dom";
import Header from "../common/header";

const Frame1 = ({scrollDown}) => {
  const navigate = useNavigate();


  return (
    <div className="h-screen bg-[#D9D9D9] bg-[url('../public/assets/landing/frame1/frame1Bg.webp')] bg-cover bg-center bg-no-repeat overflow-x-hidden">
      <div className=" h-screen  bg-gradient-to-b from-[#FFF] from-0% via-[#fff]/0 via-40.1% to-[#FFF] to-90%">
        <Header />

        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-4/5 h-3/5 flex justify-around">
          <div className="h-full w-1/2 flex flex-col justify-around">
            <span className="text-9xl font-alumniSans font-bold w-[80%]">
              Keep track like a pro.
            </span>
            <span className="text-xl font-lato font-normal w-[75%]">
              Lorem ipsum dolor sit amet consectetur. Molestie etiam sit lacus
              elit. Accumsan ac turpis dolor risus diam suspendisse. Mi lobortis
              ornare nulla est phasellus pulvinar. Donec pulvinar velit habitant
              amet diam volutpat diam. Lacus pharetra lacus non.
            </span>
            <div className="flex justify-around items-center font-josefinSans font-bold text-2xl w-[90%] h-14 ">
              <button className=" w-2/5 rounded-xl bg-mainPink h-14" onClick={()=>{
                scrollDown();
              }}>
                Get Started
              </button>
              <button className="w-2/5 rounded-xl border-mainPink border-2 h-14" onClick={()=>{
                navigate('/login')
              }}>
                Login
              </button>
            </div>
          </div>
          <div className="h-full w-2/5 flex flex-col justify-around">
            <img
              src="/assets/landing/frame1/landingAsset1.webp"
              alt="A man using a telephone"
              className="h-96 w-96 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
