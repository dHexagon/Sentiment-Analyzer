import { useState } from "react";
import Header from "../../components/common/header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

const Signup = () => {
  const navigate=useNavigate();
  const [userName, setUserName]=useState('');
  const [passWord, setPassWord]=useState('');
  const [cnfPassWord, setCnfPassWord]=useState('');
  const [orgName, setOrgName]=useState('');

  const signup=(e)=>{ 
    e.preventDefault();
    axios.post("/admin/admin_signup",{username: userName, password: passWord, organisation: orgName, confirm_pwd: cnfPassWord},{withCredentials:true}).then((res)=>{
      if(res.data.message==="User registered successfully"){
        toast.success("Registration successful!")
        console.log("Signup successfull!");
        navigate('/login');
      }
    }).catch((err)=>{
      toast.error(err.message)
      console.log("Error while signing up", err.message, err);
    })
  }


  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex ">
        <div className="m-auto">
          <div>
            <div className="w-[100%] flex justify-center align-middle font-josefinSans font-semibold text-6xl">
              Signup
            </div>
            <div className="w-[100%] flex justify-center align-middle font-lato text-1xl mt-2">
              Already have an account?{" "}
              <Link to={"/login"}>
                <h1 className="text-mainPink underline cursor-pointer text-1xl ml-2">
                  Login
                </h1>
              </Link>
            </div>
            <div className="w-[100%] flex justify-center align-middle font-josefinSans text-mainPink text-4xl font-semibold mt-5">
              Admin
            </div>
            <form className="w-[100%] flex-col justify-center align-middle mt-8">
              <label className="font-lato text-[16px]" />
              Name
              <br />
              <input
                type="text"
                className="w-[470px] h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                onChange={(e)=>{
                  setUserName(e.target.value)
                }}
              />
              <br />
              <br />
              <label className="font-lato text-[16px]" />
              Organisation
              <br />
              <input
                type="text"
                className="w-[470px] h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                onChange={(e)=>{
                  setOrgName(e.target.value);
                }}
              />
              <br />
              <br />
              <label className="font-lato text-[16px]" />
              Password
              <br />
              <input
                type="text"
                className="w-[470px] h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                onChange={(e)=>{
                  setPassWord(e.target.value);
                }}
              />
              <br />
              <br />
              <label className="font-lato text-[16px]" />
              Confirm Password
              <br />
              <input
                type="text"
                className="w-[470px] h-[75px] rounded border-[3px] border-solid border-mainPink cursor-text transition-all duration-300 focus:outline-none focus:border-b-3 focus:border-b-mainPink focus:border-l-0 focus:border-r-0 focus:border-t-0"
                onChange={(e)=>{
                  setCnfPassWord(e.target.value);
                }}
              />
            </form>
            <div className="w-[100%] flex justify-end align-middle font-lato font-medium text-[16px] italic text-mainPink mt-2">
              Forgot Password?
            </div>
            <div className="w-[100%] flex justify-center align-middle">
              <button className="text-black text-4xl font-bold font-josefinSans justify-center items-center gap-2.5 pt-4 pb-2.5 px-[83px] rounded-[12px] bg-mainPink mt-8 cursor-pointer hover:bg-[#18072B] hover:text-white transition-all duration-200" onClick={(e)=>{signup(e)}}>
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className="z-[-1]">
          <img src="/assets/signup/signup.webp" alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
