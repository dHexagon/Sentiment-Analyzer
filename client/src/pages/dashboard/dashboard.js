import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  SideBar,
  HeaderMenu,
  AdminDashboard,
  EmployeeDashboard,
  MyLoader
} from "../../components";
import { useLevelContext } from "../../utils/context";

const Dashboard = () => {
  const navigate = useNavigate();
  const { level, setLevel } = useLevelContext();
  const {loading,setLoading} = useLevelContext();
  const [adminUn, setAdminUn] = useState("Admin");
  const [employeeUn, setEmployeeUn] = useState("Employee");
  const [toPass, setToPass] = useState("username");
  const [responseArray, setResponseArray] = useState([32, 36, 32]);
  const [starValue, setStarValue] = useState(0);
  const [nCalls, setNCalls] = useState(-1);
  const [nEmployees, setNEmployees] = useState(-1);
  const [top3, setTop3] = useState([]);
  const [totalCalls, setTotalCalls] = useState(-1);

  useEffect(() => {
    //admin
    if (level === 0) {
      //username
      axios
        .get("/admin/admin_profile", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            navigate("/login", { replace: true });
          } else {
            setAdminUn(res.data.username);
            setToPass(res.data.username)
            setEmployeeUn("");
          }
        })
        .catch((err) => {
          console.log("Error fetching admin profile ", err.message, err);
        });
      //number of calls, number of employees for sidebar and response graph and top 3 employees list
      axios
        .get("/admin/dashboard", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            const array = [
              res.data[1].Admin_Ratings.average_positive_percent,
              res.data[1].Admin_Ratings.average_neutral_percent,
              res.data[1].Admin_Ratings.average_negative_percent,
            ];
            setNCalls(res.data[1].Admin_Ratings.num_calls_today);
            setNEmployees(res.data[1].Admin_Ratings.num_employees);
            setResponseArray(array);

            let top3Array = [];
            for (let i = 0; i < res.data[0].top_employees.length; i++) {
              const object = {
                name: null,
                percent: -1,
                noCalls: -1,
                rating: -1,
              };
              object.name = res.data[0].top_employees[i].employee_name;
              object.percent = res.data[0].top_employees[i].positive_rating;
              object.noCalls = res.data[0].top_employees[i].num_calls;
              object.rating = res.data[0].top_employees[i].average_rating;

              top3Array.push(object);
            }
            setTop3(top3Array);
          }
        })
        .catch((err) => {
          console.log("Error fetching admin dashboard items ", err.message, err);
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
            setAdminUn(res.data.admin);
            setEmployeeUn(res.data.username);
            setToPass(res.data.username);

          }
        })
        .catch((err) => {
          console.log("Error fetching employee profile ", err.message, err);
        });
      //response graph
      axios
        .get("/employee/response_graph", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            const newArray = [
              res.data.positive_percent,
              res.data.neutral_percent,
              res.data.negative_percent,
            ];
            setResponseArray(newArray);
          }
        })
        .catch((err) => {
          console.log("Error fetching response graph (employee) ", err.message, err);
        });
      //rating
      axios
        .get("/employee/rating", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            setStarValue(res.data.employee_rating);
          }
        })
        .catch((err) => {
          console.log("Error fetching employee rating ", err.message, err);
        });
      //number of calls and total calls for sidebar
      axios
        .get("/employee/employee_calls", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            setNCalls(res.data.employee_calls_count);
            setTotalCalls(res.data.employee_total_call_count);
          }
        })
        .catch((err) => {
          console.log("Error fetching employee's calling ", err.message, err);
        });
    }

    //not logged in, or invalid level
    else {
      setLevel(0);
      // navigate("/login", { replace: true });
    }

    }, [level]);

  return (
    <MyLoader active={loading} >
    <div>
      <div className="flex h-screen w-screen justify-around items-center bg-[url('../public/assets/landing/frame2/frame2Bg.webp')]  bg-repeat overflow-x-hidden ">
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
              <div className="w-[75%] text-left text-3xl font-josefinSans font-bold flex justify-center h-[10%] flex-col">
                <div className="h-3/5"></div>
                <span className="h-1/5">Dashboard</span>
              </div>
              {level === 0 ? (
                <div className="h-[80%] w-full">
                  <AdminDashboard
                    details={{
                      username: adminUn,
                      array: responseArray,
                      top3: top3,
                    }}
                  />
                </div>
              ) : (
                <div className="h-[80%] w-full">
                  <EmployeeDashboard
                    details={{
                      username: employeeUn,
                      adminUsername: adminUn,
                      array: responseArray,
                      rating: starValue,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </MyLoader>
  );
};

export default Dashboard;
