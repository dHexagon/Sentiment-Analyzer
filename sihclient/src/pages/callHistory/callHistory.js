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

  const [nCalls, setNCalls] = useState(0);
  const [nEmployees, setNEmployees] = useState(0);

  useEffect(() => {
    if (level === -1) {
      // navigate('/login',{replace:true});
    } else if (level === 0) {
      axios
        .get("/admin/profile", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            navigate("/login", { replace: true });
          } else {
            setLevel(0);
            setAdminUn(res.data.username);
            setEmployeeUn("");
          }
        })
        .catch((err) => {
          console.log("Oops an error occurred! ", err);
        });
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
          console.log("Oops an error occurred! ", err);
        });
    } else if (level === 1) {
      axios
        .get("/employee/profile", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            navigate("/login", { replace: true });
          } else {
            setLevel(1);
            setAdminUn(res.data.admin);
            setEmployeeUn(res.data.username);
          }
        })
        .catch((err) => {
          console.log("Oops an error occurred! ", err);
        });
      axios
        .get("/employee/employee_calls", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            setNCalls(res.data.employee_calls_count);
          }
        })
        .catch((err) => {
          console.log("Oopns an error occurred! ", err);
        });
    }

    if (level === 0) {
      setToPass(adminUn);
    } else {
      setToPass(employeeUn);
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
            }}
          />
          <div className="flex flex-col w-[100%] h-[100%] justify-around items-center">
            <HeaderMenu />
            <CallHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallHistoryList;
