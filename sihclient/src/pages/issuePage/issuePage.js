import { Issues, HeaderMenu, SideBar } from "../../components"
import { useEffect, useState } from "react";
import { useLevelContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const IssuePage = () => {
    const navigate = useNavigate();
    const { level, setLevel } = useLevelContext();
    const [adminUn, setAdminUn] = useState("Admin");
    const [employeeUn, setEmployeeUn] = useState("Employee");
    const [toPass, setToPass] = useState("username");
    const [starValue, setStarValue] = useState(0);
    const [nCalls, setNCalls] = useState(-1);
    const [nEmployees, setNEmployees] = useState(-1);
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
            axios.get("/admin/dashboard", { withCredentials: true }).then((res) => {
                if (res.data.message === "Not logged in") {
                    //wont come here
                } else {
                    setNCalls(res.data[1].Admin_Ratings.num_calls_today);
                    setNEmployees(res.data[1].Admin_Ratings.num_employees);
                }
            }).catch((err) => {
                console.log("Error fetching admin dashboard items ", err.message, err);
            });
        } else if (level === 1) {
            axios.get("/employee/profile", { withCredentials: true }).then((res) => {
                if (res.data.message === "Not logged in") {
                    navigate("/login", { replace: true });
                } else {
                    setAdminUn(res.data.admin);
                    setEmployeeUn(res.data.username);
                    setToPass(res.data.username);

                }
            }).catch((err) => {
                console.log("Error fetching employee profile ", err.message, err);
            });
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
            setLevel(-1);
            navigate("/login", { replace: true });
        }
    }, [level]);


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
                        <Issues />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IssuePage