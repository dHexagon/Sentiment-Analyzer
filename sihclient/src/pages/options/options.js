import Header from "../../components/common/header";

const Options = () => {
  return (
    <div className="h-screen bg-[#D9D9D9] bg-[url('../public/assets/options/options.webp')] bg-cover bg-center bg-no-repeat">
      <div className=" h-screen bg-gradient-to-b from-[#FFF] from-15% to-[rgba(255,255,255,0)] to-100%">
        <Header />
        <div className="flex absolute m-auto w-screen t-[25vh] justify-evenly mt-[25vh] ">
          <div className="flex transition duration-300 shadow-[-8px_10px_14.1px_0px_rgba(0,0,0,0.55)] w-[40vh] h-[45vh] rounded-[28px] bg-white flex-col items-center justify-evenly hover:bg-[#18072B] hover:text-white cursor-pointer ">
            <img
              src="/assets/options/admin.webp"
              alt="admin"
              className="h-1/3"
            />
            <div>
              <div className="font-josefinSans text-3xl font-semibold">
                Login as Admin
              </div>
              <div className="font-lato text-center italic">
                Admin ID required
              </div>
            </div>
          </div>
          <div className="flex transition duration-300 shadow-[-8px_10px_14.1px_0px_rgba(0,0,0,0.55)] w-[40vh] h-[45vh] rounded-[28px] bg-white flex-col items-center justify-evenly hover:bg-[#18072B] hover:text-white cursor-pointer">
            <img
              src="/assets/options/employee.webp"
              alt="admin"
              className="h-1/3"
            />
            <div>
              <div className="font-josefinSans text-3xl font-semibold">
                Login as Employee
              </div>
              <div className="font-lato text-center italic">
                Employee ID required
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
