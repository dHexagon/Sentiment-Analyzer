import { useEffect, useState } from "react";
import { TopThree, ResponseGraph, Inputs} from "./../../components"

const AdminDashboard = ({details}) => {
    const [responseArray, setResponseArray]=useState([34,33,33]);
    const [top3, setTop3]=useState([]);

    useEffect(()=>{
        setResponseArray(details.array)
        setTop3(details.top3)
    },[details.array, details.top3])
    return ( <div className="h-full w-full flex flex-col justify-around items-center">
        <div className="h-[50%] w-[80%]">
        <TopThree details={{top3: top3}}/>
        </div>
        <div className="flex w-[90%] h-2/5 justify-around" >
            <div className="h-full w-2/5">    
            <ResponseGraph details={{array: responseArray}}/>
            </div>
            <div className="h-full w-2/5">
            <Inputs/>
            </div>

        </div>
    </div>);
}
 
export default AdminDashboard;