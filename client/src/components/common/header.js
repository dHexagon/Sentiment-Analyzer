import { Link } from "react-router-dom";
import { useLevelContext } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { level, setLevel } = useLevelContext();
  const homePage = () => {
    if (level === -1) {
      navigate('/')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="h-20 flex justify-between absolute w-screen z-[1]">
      <div className="w-[12vw] flex justify-evenly ml-3">
        <div className="w-10 flex flex-col justify-center cursor-pointer">
          <img src="/assets/main/dHexagon.svg" alt="Logo" onClick={homePage} />
        </div>
        <span className="text-4xl cursor-pointer font-alumniSans font-bold flex flex-col justify-center" onClick={homePage}>
          dHexagon
        </span>
      </div>
      <div className="w-[40vw] flex justify-evenly">
        <span className="text-2xl font-bebasNeue font-normal flex flex-col justify-center">
          <Link to="/">HOME</Link>
        </span>
        <span className="text-2xl font-bebasNeue font-normal flex flex-col justify-center">
          ABOUT US
        </span>
        <span className="text-2xl font-bebasNeue font-normal flex flex-col justify-center">
          CONTACT
        </span>
        <span className="text-2xl font-bebasNeue font-normal flex flex-col justify-center">
          <Link to="/login">LOGIN</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
