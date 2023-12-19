import { Menu } from "../../utils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLevelContext } from "../../utils/context";
import axios from "axios";

const SideBar = ({details}) => {

  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(-1);
  const { level } = useLevelContext();
  const [nCalls, setNCalls] = useState(0);
  const [nEmployees, setNEmployees] = useState(0);
  const [totalCalls, setTotalCalls] = useState(0);

  useEffect(() => {
    console.log(details.username)
    setNCalls(details.numberCalls);
    setNEmployees(details.numberEmp);
    setTotalCalls(details.totalCalls);
  }, [details.numberCalls, details.numberEmp, details.totalCalls,details.username]);

  const logout = () => {
    if (level === -1) {
      //won't come here
    }

    //admin
    else if (level === 0) {
      axios
        .get("/admin/admin_logout", { withCredentials: true })
        .then((res) => {
          console.log("Logged out successfully");
          navigate("/");
        })
        .catch((err) => {
          console.log("Error while logging out", err.message, err);
        });
    }

    //employee
    else {
      axios
        .get("/employee/logout", { withCredentials: true })
        .then((res) => {
          console.log("Logged out successfully");
          navigate("/");
        })
        .catch((err) => {
          console.log("Error while logging out", err.message, err);
        });
    }
  };

  return (
    <div
      className={`h-full  ${
        expanded === true ? "w-1/4" : "w-[10%]"
      } flex flex-col items-center justify-center transition-all duration-200 `}
    >
      <div className="h-[95%] w-[95%] rounded-md shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)] flex flex-col justify-around items-center relative bg-white">
        <div
          className={`h-14 w-14 absolute top-2 flex items-center justify-center cursor-pointer ${
            expanded === true ? "left-2" : "self-center"
          } `}
        >
          <img
            src="/assets/main/hamburger.svg"
            alt=""
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
        </div>
        <div className="flex justify-center">
          <div
            className={`w-10 flex items-center justify-center ${
              expanded === true ? "" : "mt-10"
            }`}
          >
            <img src="/assets/main/dHexagon.svg" alt="Logo" />
          </div>
          <span
            className={`ml-10 text-4xl font-alumniSans font-bold ${
              expanded === true ? "flex" : "hidden"
            }  flex-col justify-center`}
          >
            dHexagon
          </span>
        </div>
        <div
          className={`w-[80%] min-h-[20%] ${
            expanded === true ? "flex" : "hidden"
          }  flex flex-col justify-around`}
        >
          <div className="flex flex-col">
            <span className="text-xl font-josefinSans font-normal text-[#515151] ">
              Calls Today:
            </span>
            <span className="text-4xl font-josefinSans font-semibold mt-2">
              {nCalls}
            </span>
          </div>
          <div className="h-[0.0625rem] w-full bg-[#FFCFD4]"></div>

          {level === 0 ? (
            <div className="flex flex-col">
              <span className="text-xl font-josefinSans font-normal text-[#515151] ">
                Total employees:
              </span>
              <span className="text-4xl font-josefinSans font-semibold mt-2">
                {nEmployees}
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-xl font-josefinSans font-normal text-[#515151] ">
                Total Calls:
              </span>
              <span className="text-4xl font-josefinSans  font-semibold mt-2">
                {totalCalls}
              </span>
            </div>
          )}
        </div>

        <div
          className={`flex flex-col justify-around w-[80%] ${
            expanded === true ? "min-h-[35%]" : "min-h-[50%]"
          } `}
        >
          <span
            className={`${
              expanded === true ? "" : "hidden"
            } text-3xl font-josefinSans font-normal text-[#515151] h-[10%] mb-2`}
          >
            Quick menu
          </span>
          <div
            className={`flex ${
              expanded === true
                ? "flex-wrap justify-start h-[85%]"
                : "flex-col justify-center items-center h-full"
            }`}
          >
            {Menu.map((item) =>
              item.level >= level ? (
                <div
                  className={`h-1/2 ${
                    expanded === true ? "w-1/2" : "w-full"
                  } flex flex-col justify-center items-center`}
                  key={item.key}
                >
                  <div
                    className={`h-[90%] w-[90%] flex flex-col justify-center items-center rounded-md shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)] ${
                      selected === item.key ? "bg-black" : ""
                    } cursor-pointer`}
                    onMouseEnter={() => {
                      setSelected(item.key);
                    }}
                    onMouseLeave={() => {
                      setSelected(-1);
                    }}
                    onClick={() => {
                      if (item.action !== "/settings") {
                        navigate(item.action);
                      }
                    }}
                  >
                    <img src={item.icon} alt={item.name} />
                    <p
                      className={`${
                        selected === item.key ? "" : "hidden"
                      } text-[#FB9BA4] font-josefinSans font-normal`}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="h-[10%] w-[80%] flex justify-around items-center">
          <div className="w=[10%]">
            <img src="/assets/main/defaultuser.svg" alt="userProfile" />
          </div>
          <div
            className={`w-[80%] ${
              expanded === true ? "flex" : "hidden"
            } flex-col ml-5 justify-around h-[70%] transition-all duration-200`}
          >
            <span className="text-xl font-lato font-bold ">
              {" "}
              {details.username}{" "}
            </span>
            <span
              className="font-lato text-sm font-normal text-mainPink underline cursor-pointer"
              onClick={() => {
                logout();
              }}
            >
              {" "}
              Logout{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
