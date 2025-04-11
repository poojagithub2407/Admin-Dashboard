import { useState } from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import { AiOutlineDashboard, AiOutlineTable } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { FaTableCells, FaRegKeyboard, FaBell, FaFont } from "react-icons/fa6";
import { LiaFonticons } from "react-icons/lia";
import { PiHandPointingBold } from "react-icons/pi";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <AiOutlineDashboard />, label: "Dashboard", count: 5, path: "/", color: "#4d7cfe" },
    { icon: <FaTableCells />, label: "Components", count: 14, path: "/components" },
    { icon: <FaRegKeyboard />, label: "Forms", count: 50, path: "/forms" },
    { icon: <AiOutlineTable />, label: "Tables", count: 6, path: "/tables" },
    { icon: <FaBell />, label: "Notifications", count: 3, path: "/notifications", bgColor: "#59d05d", textColor: "white" },
    { icon: <FaFont />, label: "Typography", count: 25, path: "/typography", bgColor: "#ff646d", textColor: "white" },
    { icon: <LiaFonticons />, label: "Icons", count: 25, path: "/icons" },
  ];

  return (
    <div className="h-screen z-50 fixed top-16 w-64 bg-white border shadow-md">
      {/* Profile Section */}
      <div className="flex items-center py-4 px-4 gap-3">
        <img
          src="https://themewagon.github.io/Ready-Bootstrap-Dashboard/assets/img/profile.jpg"
          className="w-12 h-12 rounded-full"
          alt="Profile"
        />
        <div className="text-xs font-bold flex flex-col">
          <h1 className="text-gray-400">Hizrian</h1>
          <h2 className="text-black">Administrator</h2>
        </div>
        <MdArrowDropDown
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl ml-auto cursor-pointer"
        />
      </div>

      {isOpen && (
        <div className="mt-2 text-gray-600 px-6 text-sm">
          <div className="cursor-pointer py-1">My Profile</div>
          <div className="cursor-pointer py-1">Edit Profile</div>
          <div className="cursor-pointer py-1">Settings</div>
        </div>
      )}

      <div className="border-b mt-1"></div>

      {/* Menu Items */}
      <div className="mt-4 text-sm font-medium text-gray-700">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className="hover:border-l-4 px-4 py-2 my-2 hover:border-[#4d7cfe] flex items-center justify-between hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`text-xl ${item.color ? `text-[${item.color}]` : "text-gray-400"}`}>
                  {item.icon}
                </div>
                <div>{item.label}</div>
              </div>
              <div
                className={`h-6 px-2 text-xs rounded-full border text-center flex items-center justify-center ${item.bgColor ? `bg-[${item.bgColor}]` : ""} ${item.textColor ? `text-${item.textColor}` : ""}`}
              >
                {item.count}
              </div>
            </div>
          </Link>
        ))}

        <div className="px-4 mx-6 my-4 flex justify-center rounded-lg items-center bg-[#4d7cfe] text-white ">
          <PiHandPointingBold />
          <button className="py-4 px-2">Update to Pro</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
