import { useState, useContext } from "react";
import { SideBar, HeaderMenu, AdminDashboard, EmployeeDashboard} from "../../components";
import { useLevelContext } from "../../utils/context";
const Dashboard = () => {
    const {level, setLevel} = useLevelContext();
    console.log(level)
    return (  <div>
        <div className="flex h-screen w-screen justify-around items-center bg-[url('../public/assets/landing/frame2/frame2Bg.webp')]  bg-repeat overflow-x-hidden">
                   <div className="bg-white/[0.90] min-h-screen h-full w-full">
                       <div className="h-screen w-full flex justify-around items-center bg-[url('../public/assets/main/dashBg.png')] bg-no-repeat p-5">
                           <SideBar />
                           <div className="flex flex-col w-[100%] h-[100%] justify-around items-center">
                               <HeaderMenu />
                               <div className="w-[75%] text-left text-3xl font-josefinSans font-bold flex justify-center h-[10%] flex-col">
                                    <div className="h-3/5"></div>
                                    <span className="h-1/5">
                                    Dashboard
                                    </span>
                               
                               </div>
                                {(level===0)?(
                               <div className="h-[80%] w-full">
                                   <AdminDashboard/>
                               </div>
                                
                                
                                ):(
                                    <div className="h-[80%] w-full">
                                        <EmployeeDashboard/>
                                    </div>

                                )}
                           </div>
                       </div>
                   </div>
               </div>
           </div>  );
}
 
export default Dashboard;