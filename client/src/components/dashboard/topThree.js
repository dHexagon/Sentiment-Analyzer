const TopThree = ({ details }) => {
  console.log(details.top3);
  return (
    // 35 of screen, 80 of 80 (h,w)
    <div className="h-full w-full flex justify-around items-center">
      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="h-[90%] w-[85%] flex justify-center items-center">
          <div className="w-[80%] h-[80%] rounded-2xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)] bg-gradient-to-bl from-gray-300 from-[22.17%] via-gray-400 via-[48.3%] to-gray-300 flex items-center justify-center ">
            {!details.top3[1]? (
              <></>
            ) : (
              <div className="h-[90%] w-[90%] flex flex-col justify-around">
                <span className="text-2xl font-lato font-bold">
                  {details.top3[1].name}
                </span>
                <div className="flex flex-col justify-around">
                  <span className="text-4xl font-lato font-bold">
                    {details.top3[1].rating}
                  </span>
                  <span className="text-base font-lato font-medium">
                   stars in {details.top3[1].noCalls} calls
                  </span>
                </div>
                <div className="flex h-1/4 w-[35%] justify-around">
                  <div className="text-center">
                    <img src="/assets/dashboard/blackHeart.svg" alt="" />
                    <span>{(details.top3[1].percent / 10).toFixed(2)}</span>
                  </div>
                  <div className="text-center">
                    <img src="/assets/dashboard/blackStar.svg" alt="" />
                    <span>{details.top3[1].rating}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="h-[90%] w-[85%] bg-gradient-to-bl from-[#FFC0C6] from-[22.17%] via-[#FF599D] via-[48.3%] to-[#FFBECF] to-[91.03%] rounded-2xl flex  justify-center items-center">
          {!details.top3[0]? (
            <div className="h-[80%] w-[90%] flex flex-col justify-around">
            <span className="text-4xl text-white font-lato font-bold">You have no employees under you :/</span>
            </div>
          ) : (
            <div className="h-[80%] w-[90%] flex flex-col justify-around">
              <span className="text-4xl text-white font-lato font-bold">
                {details.top3[0].name}
              </span>
              <div className="flex flex-col justify-around">
                <span className="text-7xl text-white font-lato font-bold">
                  {details.top3[0].rating}
                </span>
                <span className=" text-white text-2xl font-lato font-medium">
                  stars in {details.top3[0].noCalls} calls
                </span>
              </div>
              <div className="flex h-1/4 w-[35%] justify-around">
                <div className="text-center">
                  <img src="/assets/dashboard/whiteHeart.svg" alt="" />
                  <span>{(details.top3[0].percent / 10).toFixed(2)}</span>
                </div>
                <div className="text-center">
                  <img src="/assets/dashboard/whiteStar.svg" alt="" />
                  <span>{details.top3[0].rating}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="h-[90%] w-[85%] flex justify-center items-center">
          <div className="w-[80%] h-[80%] rounded-2xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)]  bg-white  flex items-center justify-center ">
            {!details.top3[2] ? (
              <></>
            ) : (
              <div className="h-[90%] w-[90%] flex flex-col justify-around">
                <span className="text-2xl font-lato font-bold">
                  {details.top3[2].name}
                </span>
                <div className="flex flex-col justify-around">
                  <span className="text-4xl font-lato font-bold">
                    {details.top3[2].rating}
                  </span>
                  <span className="text-base font-lato font-medium">
                    stars in {details.top3[2].noCalls} calls
                  </span>
                </div>
                <div className="flex h-1/4 w-[35%] justify-around">
                  <div className="text-center">
                    <img src="/assets/dashboard/blackHeart.svg" alt="" />
                    <span>{(details.top3[2].percent / 10).toFixed(2)}</span>
                  </div>
                  <div className="text-center">
                    <img src="/assets/dashboard/blackStar.svg" alt="" />
                    <span>{details.top3[2].rating}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopThree;
