import { useNavigate } from "react-router-dom";

const MainFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="h-96 flex justify-around items-center">
      <div className="h-4/5 w-1/5 flex flex-col justify-around">
        <div className="flex justify-center">
          <div className=" w-10 flex items-center justify-center">
            <img src="/assets/main/dHexagon.svg" alt="Logo" />
          </div>
          <span className="ml-10 text-3xl font-alumniSans font-bold flex flex-col justify-center">
            dHexagon
          </span>
        </div>
        <div className="h-3/5 flex flex-col items-center">
          <div className="h-2/5 flex flex-col items-center justify-around">
            <img src="/assets/landing/frame2/appstore.svg" alt="" />
            <img src="/assets/landing/frame2/googleplay.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="h-4/5 w-1/2 flex justify-around">
        <div className="h-full w-1/5 flex flex-col justify-around items-center">
          <span className="text-3xl font-alumniSans font-700 w-full">Help</span>
          <div className="w-full h-3/5 flex flex-col font-ubuntu font-normal">
            <span onClick={()=>{
              navigate('/login');
            }} className="cursor-pointer underline">Signup/Login</span>
            <span>Privacy Center</span>
            <span>Support</span>
            <span>Developer</span>
          </div>
        </div>
        <div className="h-full w-1/5 flex flex-col justify-around items-center">
          <span className="text-3xl font-alumniSans font-700 w-full">
            About
          </span>
          <div className="w-full h-3/5 flex flex-col font-ubuntu font-normal">
            <span>Contact us</span>
            <span>Join our team</span>
            <span>Store</span>
          </div>
        </div>
        <div className="h-full w-1/5 flex flex-col justify-around items-center">
          <span className="text-3xl font-alumniSans font-700 w-full">
            Connect
          </span>
          <div className="w-full h-3/5 flex flex-col font-ubuntu font-normal">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Youtube</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
