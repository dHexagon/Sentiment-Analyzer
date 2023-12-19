import { useEffect, useState } from "react";
import { SideBar, Employees, HeaderMenu } from "../../components";
import { useLevelContext } from "../../utils/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  const { level, setLevel } = useLevelContext();
  const [adminUn, setAdminUn] = useState("Admin");
  const [nCalls, setNCalls] = useState(0);
  const [nEmployees, setNEmployees] = useState(0);
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    //employee, no access to this page
    if (level === 1) {
      navigate("/dashboard", { replace: true });
    }

    //admin
    else if (level === 0) {
      //username
      axios
        .get("/admin/admin_profile", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            navigate("/login", { replace: true });
          } else {
            setLevel(0);
            setAdminUn(res.data.username);
          }
        })
        .catch((err) => {
          console.log("Error fetching admin profile ", err.message, err);
        });
      //number of calls and employees for sidebar
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
      //employees list
      axios
        .get("/admin/employees", { withCredentials: true })
        .then((res) => {
          if (res.data.message === "Not logged in") {
            //won't come here
          } else {
            const employeeArray = [];
            for (let i = 0; i < res.data.employee_ratings.length; i++) {
              const object = { name: "", nCalls: -1, rating: -1 };
              object.name = res.data.employee_ratings[i].employee_name;
              object.nCalls = res.data.employee_ratings[i].num_calls;
              object.rating = res.data.employee_ratings[i].average_rating;
              employeeArray.push(object);
            }
            setEmpList(employeeArray);
          }
        })
        .catch((err) => {
          console.log("Error fetching employee list ", err.message, err);
        });
    }

    //not logged in or invalid level
    else {
      setLevel(0);
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div className="flex h-screen w-screen justify-around items-center bg-[url('../public/assets/landing/frame2/frame2Bg.webp')]  bg-repeat overflow-x-hidden">
      <div className="bg-white/[0.90] min-h-screen h-full w-full">
        <div className="h-screen w-full flex justify-around items-center bg-[url('../public/assets/main/dashBg.png')] bg-no-repeat p-5">
          <SideBar
            details={{
              username: adminUn,
              numberCalls: nCalls,
              numberEmp: nEmployees,
            }}
          />
          <div className="flex flex-col w-[100%] h-[100%] justify-around items-center">
            <HeaderMenu />
            <Employees details={{ empList: empList }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
