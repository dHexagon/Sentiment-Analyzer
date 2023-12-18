import { useState } from "react";
import Header from "../../components/common/header";
import { Link } from "react-router-dom";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const [displayoptions, setDisplayOptions] = useState(true);
  const [adminLogin, setLoginAdmin] = useState(null);
  return (
    <>
      {(displayoptions === true) ? (
        <div className="h-screen bg-[#D9D9D9] bg-[url('../public/assets/options/options.webp')] bg-cover bg-center bg-no-repeat">
          <div className=" h-screen bg-gradient-to-b from-[#FFF] from-15% to-[rgba(255,255,255,0)] to-100%">
            <Header />
            <div className="flex absolute m-auto w-screen t-[25vh] justify-evenly mt-[25vh] ">
              <div className="flex transition duration-300 shadow-[-8px_10px_14.1px_0px_rgba(0,0,0,0.55)] w-[40vh] h-[45vh] rounded-[28px] bg-white flex-col items-center justify-evenly hover:bg-[#18072B] hover:text-white cursor-pointer " onClick={() => {
                setDisplayOptions(false);
                setLoginAdmin(true);
              }}>
                <img
                  src="/assets/options/admin.webp"
                  alt="admin"
                  className="h-1/3"
                />
                <div>
                  <div className="font-josefinSans text-3xl font-medium" >
                    Login as Admin
                  </div>
                  <div className="font-lato text-center italic">
                    Admin ID required
                  </div>
                </div>
              </div>
              <div className="flex transition duration-300 shadow-[-8px_10px_14.1px_0px_rgba(0,0,0,0.55)] w-[40vh] h-[45vh] rounded-[28px] bg-white flex-col items-center justify-evenly hover:bg-[#18072B] hover:text-white cursor-pointer" onClick={() => {
                setDisplayOptions(false)
                setLoginAdmin(false);
              }}>
                <img
                  src="/assets/options/employee.webp"
                  alt="admin"
                  className="h-1/3"
                />
                <div>
                  <div className="font-josefinSans text-3xl font-medium" >
                    Login as Employee
                  </div>
                  <div className="font-lato text-center italic">
                    Employee ID required
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen overflow-hidden">
          <Header />
          <div className="relative flex">
            <div className="z-[-1]">
              <img src="/assets/login/login.webp" alt="Login" />
            </div>
            <div className="m-auto">
              <div>
                <div className="w-[100%] flex justify-center align-middle font-josefinSans font-semibold text-6xl">
                  Login
                </div>
                {(adminLogin) ? <div className="w-[100%] flex justify-center align-middle font-lato text-1xl mt-2">
                  Don't have an account?
                  <Link to={"/signup"}>
                    <h1 className="text-mainPink underline cursor-pointer text-1xl ml-2">
                      Signup
                    </h1>
                  </Link>
                </div> : null}
                <div className="w-[100%] flex justify-center align-middle font-josefinSans text-mainPink text-4xl font-semibold mt-5">
                  {(adminLogin) ? 'Admin' : 'Employee'}
                </div>
                <form className="w-[100%] flex-col justify-center align-middle mt-10">
                  <label className="font-lato text-[16px]" />
                  {(adminLogin) ? 'Admin ID' : 'Employee ID'}
                  <br />
                  <input
                    type="text"
                    className="w-[470px] h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                  />
                  <br />
                  <br />
                  <label className="font-lato text-[16px]" />
                  Password
                  <br />
                  <input
                    type="password"
                    className="w-[470px] h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                  />
                </form>
                <div className="w-[100%] flex justify-end align-middle font-lato font-medium text-[16px] italic text-mainPink mt-2">
                  Forgot Password?
                </div>
                <div className="w-[100%] flex justify-center align-middle">
                  <button className="text-black text-4xl font-bold font-josefinSans justify-center items-center gap-2.5 pt-4 pb-2.5 px-[83px] rounded-[12px] bg-mainPink mt-8 cursor-pointer hover:bg-[#18072B] hover:text-white transition-all duration-200">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
