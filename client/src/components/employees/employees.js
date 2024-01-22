import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

const Employees = ({ details }) => {
  const [empList, setEmpList] = useState([]);
  useEffect(() => {
    setEmpList(details.empList);
  }, [details.empList]);
  return (
    <div className="m-auto w-[80%] h-[80%] p-5 ">
      <div className="font-josefinSans font-semibold text-4xl text-start flex w-full justify-between items-center">
        <p>Employees</p>{" "}
        <span>
          <img
            src="/assets/main/add.svg"
            className=" ml-auto mr-2 "
            alt=""
          ></img>
        </span>
      </div>
      <div className="border-white border-2 p-8 rounded-[4px] mt-4 h-[95.8%] shadow-[4px_4px_8px_0px_rgba(0,0,0,0.25)] overflow-scroll">
        {empList.map((employee, index) => (
          <div
            key={index}
            className="h-20 mb-5 rounded-xl shadow-[4px_4px_8px_0px_rgba(0,0,0,0.50)] flex items-center bg-[rgba(256,256,256,0.55)]"
          >
            <div className="flex items-center justify-around w-[30%] ml-2 font-josefinSans">
              <img src="/assets/main/defaultuser.svg" className="h-12" alt="" />
              <div className="flex ml-2">
                <div className="text-2xl font-semibold">{employee.name}</div>
                <div className="border-l-2 mx-2 border-black"></div>
                <div className="text-2xl">{employee.nCalls} calls</div>
              </div>
            </div>
            <div className="flex items-center ml-auto mr-7">
              <Rating
                name="half-rating-read"
                precision={0.1}
                value={employee.rating}
                size="large"
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
