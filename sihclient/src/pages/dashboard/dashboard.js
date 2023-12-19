import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  SideBar,
  HeaderMenu,
  AdminDashboard,
  EmployeeDashboard,
} from "../../components";
import { useLevelContext } from "../../utils/context";

const Dashboard = () => {
  const navigate = useNavigate();
  const { level, setLevel } = useLevelContext();

  const [adminUn, setAdminUn] = useState("Admin");
  const [employeeUn, setEmployeeUn] = useState("Employee");

  const [toPass, setToPass] = useState("username");
  const [responseArray, setResponseArray] = useState([32, 36, 32]);
  const [starValue, setStarValue] = useState(3.5);
  const [nCalls, setNCalls] = useState(0);
  const [nEmployees, setNEmployees] = useState(0);
  const [top3, setTop3] = useState([]);

  useEffect(() => {
    //not logged in
    if (level === -1) {
      // navigate('/login',{replace:true});
    }

    //admin
    else if (level === 0) {
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
            const array = [
              res.data[1].Admin_Ratings.average_positive_rating,
              res.data[1].Admin_Ratings.neutral_rating,
              res.data[1].Admin_Ratings.negative_rating,
            ];
            setNCalls(res.data[1].Admin_Ratings.num_calls_today);
            setNEmployees(res.data[1].Admin_Ratings.num_employees);
            setResponseArray(array);

            const top3Array = [];
            for (let i = 0; i < res.data[0].top_employees.length; i++) {
              let object = {
                name: null,
                percent: -1,
                noCalls: -1,
                rating: -1,
              };
              object.name = res.data[0].top_employees[i].employee_name;
              object.percent = res.data[0].top_employees[i].positive_rating;
              object.noCalls = res.data[0].top_employees[i].num_calls;
              object.rating = res.data[0].top_employees[i].average_rating;

              top3Array.append(object);
            }
            setTop3(top3Array);
          }
        })
        .catch((err) => {
          console.log("Oops an error occurred! ", err);
        });
    }

    //employee
    else if (level === 1) {
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
        .get("/employee/response_graph", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            const newArray = [
              res.data.positive_percentage,
              res.data.neutral_percentage,
              res.data.negative_percentage,
            ];
            setResponseArray(newArray);
          }
        })
        .catch((err) => {
          console.log("Oops an error occurred! ", err);
        });
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
    <div>
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
  );
};

export default Dashboard;
