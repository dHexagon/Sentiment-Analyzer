import { useEffect, useState } from "react";
import { SideBar, HeaderMenu, CallHistory } from "../../components";
import { useLevelContext } from "../../utils/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CallHistoryList = () => {
  const navigate = useNavigate();
  const { level, setLevel } = useLevelContext();
  const [toPass, setToPass] = useState("username");
  const [adminUn, setAdminUn] = useState("Admin");
  const [employeeUn, setEmployeeUn] = useState("Employee");
  const [nCalls, setNCalls] = useState(-1);
  const [nEmployees, setNEmployees] = useState(-1);
  const [totalCalls, setTotalCalls] = useState(-1);
  const [callList, setCallList] = useState([]);

  useEffect(() => {
    //admin
    if (level === 0) {
      //username
      axios
        .get("/admin/profile", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            navigate("/login", { replace: true });
          } else {
            setLevel(0);
            setAdminUn(res.data.username);
            setToPass(res.data.username)
            setEmployeeUn("");
          }
        })
        .catch((err) => {
          console.log("Error fetching admin profile ", err.message, err);
        });
      //number of calls, and number of employees sidebar
      axios
        .get("/admin/dashboard", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            setNCalls(res.data[1].Admin_Ratings.num_calls_today);
            setNEmployees(res.data[1].Admin_Ratings.num_employees);
          }
        })
        .catch((err) => {
          console.log("Error fetching admin dashboard items ", err.message, err);
        });
      //call history list
      axios
        .get("/admin/callhistory", { withCredentials: true })
        .then((res) => {
          const callArray = [];
          for (let i = 0; i < res.data.all_calls.length; i++) {
            const object = { id:"",employee: "", duration: "", rating: "" };
            object.id=res.data.all_calls[i]._id;
            object.employee = res.data.all_calls[i].employeename;
            object.duration = res.data.all_calls[i].duration;
            object.rating = res.data.all_calls[i].rating;
            console.log(object.id)
            callArray.push(object);
          }
          setCallList(callArray);
        })
        .catch((err) => {
          console.log("Error fetching call history (admin) ", err.message, err);
        });
    }

    //employee
    else if (level === 1) {
      //username
      axios
        .get("/employee/profile", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            navigate("/login", { replace: true });
          } else {
            setLevel(1);
            setAdminUn(res.data.admin);
            setEmployeeUn(res.data.username);
            setToPass(res.data.username)
          }
        })
        .catch((err) => {
          console.log("Error fetching employee profile ", err.message, err);
        });
      //calls today and total calls for sidebar and calls history list
      axios
        .get("/employee/employee_calls", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            setNCalls(res.data.employee_calls_count);
            const callArray = [];
            for (let i = 0; i < res.data.employee_calls.length; i++) {
              const object = { id:"", employee: "", duration: "", rating: "" };
              object.id=res.data.all_calls[i]._id;
              object.employee = res.data.employee_calls[i].employeename;
              object.duration = res.data.employee_calls[i].duration;
              object.rating = res.data.employee_calls[i].rating;
              callArray.push(object);
            }
            setCallList(callArray);
            setTotalCalls(res.data.employee_total_call_count);
          }
        })
        .catch((err) => {
          console.log("Error fetching employee calls ", err.message, err);
        });
    }

    //not logged in or invalid level
    else {
      setLevel(0);
      // navigate("/login", { replace: true });
    }

  }, []);

  return (
    <div className="flex h-screen w-screen justify-around items-center bg-[url('../public/assets/landing/frame2/frame2Bg.webp')]  bg-repeat overflow-x-hidden">
      <div className="bg-white/[0.90] min-h-screen h-full w-full">
        <div className="h-screen w-full flex justify-around items-center bg-[url('../public/assets/main/dashBg.png')] bg-no-repeat p-5">
          <SideBar
            details={{
              username: toPass,
              numberCalls: nCalls,
              numberEmp: nEmployees,
              totalCalls: totalCalls,
            }}
          />
          <div className="flex flex-col w-[100%] h-[100%] justify-around items-center">
            <HeaderMenu />
            <CallHistory details={{ calls: callList }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallHistoryList;
