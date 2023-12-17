import { useState } from "react";

const Inputs = () => {
    const [selected, setSelected]=useState(-1);
    //35 of screen, 40 of 80
    return ( <div className="h-full w-full flex flex-col items-center">
        <div className={`flex items-center h-1/2 w-[80%] rounded-xl ${(selected===0?'bg-black text-mainPink':'')}`}
        onMouseEnter={()=>{
            setSelected(0);
        }}
        onMouseLeave={()=>{
            setSelected(-1);
        }}
        >
            <img src="/assets/dashboard/inputUser.svg" alt="" className="ml-10"/>
            <span className="text-2xl font-josefinSans font-medium ml-10">New Employee</span>
        </div>
        <div className={`flex items-center h-1/2 w-[80%] rounded-xl ${(selected===1)?'bg-black text-mainPink':''}`}    

        onMouseEnter={()=>{
            setSelected(1);
        }}
        onMouseLeave={()=>{
            setSelected(-1);
        }}
        >
            <img src="/assets/dashboard/inputAudio.svg" alt="" className="ml-10"/>
            <span className="text-2xl font-josefinSans font-medium ml-10">New Audio Input</span>
        </div>
    </div> );
}
 
export default Inputs;