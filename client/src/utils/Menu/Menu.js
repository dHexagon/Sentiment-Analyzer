import dashboardIcon from "../menuIcons/dashboard.svg";
import employeesIcon from "../menuIcons/employees.svg";
import historyIcon from "../menuIcons/history.svg";
import settingsIcon from "../menuIcons/setting.svg";

const Menu = [
  {
    name: "Dashboard",
    action: "/dashboard",
    key: 0,
    toolTip: "Dashboard",
    level: 1,
    icon: dashboardIcon,
  },
  {
    name: "Employees",
    action: "/employees",
    key: 1,
    toolTip: "Employees",
    level: 0,
    icon: employeesIcon,
  },
  {
    name: "Call History",
    action: "/history",
    key: 2,
    toolTip: "callHistory",
    level: 1,
    icon: historyIcon,
  },
  {
    name: "Settings",
    action: "/settings",
    key: 3,
    toolTip: "settings",
    level: 1,
    icon: settingsIcon,
  },
];

export default Menu;
