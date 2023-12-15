import MainFooter from "../mainFooter";

const Frame2 = () => {
  return (
    <div className=" min-h-screen w-full relative flex flex-col justify-center items-center bg-[url('../public/assets/landing/frame2/frame2Bg.webp')]  bg-repeat overflow-x-hidden">
      <div className="bg-white/[0.90] min-h-screen h-full w-full">
        <div className="h-screen flex flex-col justify-evenly items-center bg-gradient-to-b from-white to-transparent to-[10%]">
          <div className="h-4/5 w-4/5 text-center flex flex-col justify-around">
            <span className="text-6xl w-full  font-alumniSans font-bold">
              What can you do with dHexagon?
            </span>
            <div className="flex w-full h-2/5">
              <div className="w-1/4 h-full flex flex-col justify-evenly items-center text-center">
                <img src="/assets/landing/frame2/iconAlgo.svg" alt="icon" />
                <span className="text-2xl font-lato font-bold">
                  Advanced Sentiment analysis algorithm
                </span>
              </div>
              <div className="w-1/4 h-full flex flex-col justify-evenly items-center text-center">
                <img src="/assets/landing/frame2/iconMl.svg" alt="icon" />
                <span className="text-2xl font-lato font-bold">
                  Feedback-based ML model
                </span>
              </div>
              <div className="w-1/4 h-full flex flex-col justify-evenly items-center text-center">
                <img src="/assets/landing/frame2/iconEar.svg" alt="icon" />
                <span className="text-2xl font-lato font-bold">
                  Keyword Listening
                </span>
              </div>
              <div className="w-1/4 h-full flex flex-col justify-evenly items-center text-center">
                <img src="/assets/landing/frame2/iconEmployee.svg" alt="icon" />
                <span className="text-2xl font-lato font-bold">
                  Keep track with an employee list
                </span>
              </div>
            </div>
            <div className="flex w-full h-2/5 justify-around">
              <div className="w-1/4 h-full flex flex-col justify-evenly items-center text-center">
                <img src="/assets/landing/frame2/iconAdmin.svg" alt="icon" />
                <span className="text-2xl font-lato font-bold">
                  Add Multiple admins
                </span>
              </div>
              <div className="w-1/4 h-full flex flex-col justify-evenly items-center text-center">
                <img src="/assets/landing/frame2/iconLang.svg" alt="icon" />
                <span className="text-2xl font-lato font-bold">
                  Multilingual data collection
                </span>
              </div>
              <div className="w-1/4 h-full flex flex-col justify-evenly items-center text-center">
                <img src="/assets/landing/frame2/iconEmotion.svg" alt="icon" />
                <span className="text-2xl font-lato font-bold">
                  Emotion & Toxicity detection
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-72 flex flex-col justify-center items-center text-5xl font-josefinSans font-bold">
          <button className="bg-mainPink h-20 w-80 rounded-xl">
            Get Started
          </button>
        </div>
        <MainFooter />
      </div>
    </div>
  );
};

export default Frame2;
