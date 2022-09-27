import {
  IoIosChatbubbles,
  IoIosHelpCircle,
  IoMdHome,
  IoMdPerson,
  IoMdStats,
  IoIosListBox,
  IoIosArrowDown,
} from "react-icons/io";
import user from "../images/user.jpg";
const SideNav = () => {
  return (
    <div className="bg-secondary-color text-white flex flex-col justify-between  p-4 text-2xl pt-12 lg:text-base">
      <ul className="flex flex-col gap-y-6 ">
        <li className="flex items-center gap-x-4 p-4 bg-red rounded-lg cursor-pointer lg:p-1 md:flex-col">
          <IoMdHome /> Home
        </li>
        <li className="flex items-center gap-x-4 p-4 lg:p-1 cursor-pointer md:flex-col">
          <IoMdPerson /> Profile
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer lg:p-1 md:flex-col">
          <IoIosChatbubbles /> Message
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer lg:p-1 md:flex-col">
          <IoIosListBox /> Schedule
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer lg:p-1 md:flex-col">
          <IoMdStats /> Reports
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer lg:p-1 md:flex-col">
          <IoIosHelpCircle /> Help
        </li>
      </ul>
      <div className="flex items-center justify-between bg-dark-gray p-4 rounded-lg lg:p-x-1">
        <div className="flex gap-x-4 md:flex-col md:gap-y-2">
          <div className="w-12 lg:w-8 rounded-md overflow-hidden">
            <img src={user} alt="user" />
          </div>
          <h3>Alice</h3>
        </div>
        <IoIosArrowDown className="md:hidden" />
      </div>
    </div>
  );
};

export default SideNav;
