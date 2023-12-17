import {SideBar, HeaderMenu, TopThree, ResponseGraph, Inputs} from "./../../components"

const AdminDashboard = () => {
    return ( <div className="h-full w-full flex flex-col justify-around items-center">
        <div className="h-[50%] w-[80%]">
        <TopThree/>
        </div>
        <div className="flex w-[90%] h-2/5 justify-around" >
            <div className="h-full w-2/5">    
            <ResponseGraph/>
            </div>
            <div className="h-full w-2/5">
            <Inputs/>
            </div>

        </div>
    </div>);
}
 
export default AdminDashboard;