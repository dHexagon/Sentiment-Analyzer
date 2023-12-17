const TopThree = () => {
  return (
    // 35 of screen, 80 of 80 (h,w)
    <div className="h-full w-full flex justify-around items-center">
      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="h-[90%] w-[85%] flex justify-center items-center">
          <div className="w-[80%] h-[80%] rounded-2xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)]   bg-white flex items-center justify-center ">
            <div className="h-[90%] w-[90%] flex flex-col justify-around">
              <span className="text-2xl font-lato font-bold">
                {" "}
                Chloe Smith{" "}
              </span>
              <div className="flex flex-col justify-around">
                <span className="text-4xl font-lato font-bold">250+</span>
                <span className="text-base font-lato font-medium">
                  positive responses
                </span>
              </div>
              <div className="flex h-1/4 w-[35%] justify-around">
                <div className="text-center">
                  <img src="/assets/dashboard/blackHeart.svg" alt="" />
                  <span>7.2</span>
                </div>
                <div className="text-center">
                  <img src="/assets/dashboard/blackStar.svg" alt="" />
                  <span>4.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="h-[90%] w-[85%] bg-gradient-to-bl from-[#FFC0C6] from-[22.17%] via-[#FF599D] via-[48.3%] to-[#FFBECF] to-[91.03%] rounded-2xl flex  justify-center items-center">
          <div className="h-[80%] w-[90%] flex flex-col justify-around">
            <span className="text-4xl text-white font-lato font-bold">
              {" "}
              Chloe Smith{" "}
            </span>
            <div className="flex flex-col justify-around">
              <span className="text-7xl text-white font-lato font-bold">
                250+
              </span>
              <span className="text-base text-white font-lato font-medium">
                positive responses
              </span>
            </div>
            <div className="flex h-1/4 w-[35%] justify-around">
              <div className="text-center">
                <img src="/assets/dashboard/whiteHeart.svg" alt="" />
                <span>7.2</span>
              </div>
              <div className="text-center">
                <img src="/assets/dashboard/whiteStar.svg" alt="" />
                <span>4.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="h-[90%] w-[85%] flex justify-center items-center">
          <div className="w-[80%] h-[80%] rounded-2xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)]  flex items-center justify-center bg-white">
            <div className="h-[90%] w-[90%] flex flex-col justify-around">
              <span className="text-2xl font-lato font-bold">
                {" "}
                Chloe Smith{" "}
              </span>
              <div className="flex flex-col justify-around">
                <span className="text-4xl font-lato font-bold">250+</span>
                <span className="text-base font-lato font-medium">
                  positive responses
                </span>
              </div>
              <div className="flex h-1/4 w-[35%] justify-around">
                <div className="text-center">
                  <img src="/assets/dashboard/blackHeart.svg" alt="" />
                  <span>7.2</span>
                </div>
                <div className="text-center">
                  <img src="/assets/dashboard/blackStar.svg" alt="" />
                  <span>4.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopThree;
