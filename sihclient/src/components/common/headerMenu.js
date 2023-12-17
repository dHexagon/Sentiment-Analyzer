import { Menu } from "../../utils";
import { useState } from "react";

const HeaderMenu = () => {
  const [level, setLevel] = useState(1);
  const [active, setActive] = useState(0);

  return (
    <div className="h-[10%] w-[80%] flex justify-around">
      {Menu.map((item) =>
        item.level >= level ? (
          <div
            className={`w-[20%] flex flex-col justify-center items-center font-josefinSans font-semibold text-xl `}
          >
            <button
              className={`rounded-xl ${
                active === item.key
                  ? "bg-mainPink"
                  : "text-[#515151] border border-mainPink"
              } w-[80%] h-1/2`}
            >
              {item.name}
            </button>
          </div>
        ) : null
      )}
    </div>
  );
};

export default HeaderMenu;