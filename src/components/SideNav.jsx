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
    <div className="bg-secondary-color text-white flex flex-col justify-between  p-4 text-2xl pt-12">
      <ul className="flex flex-col gap-y-6 ">
        <li className="flex items-center gap-x-4 p-4 bg-red rounded-lg cursor-pointer">
          <IoMdHome /> Home
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer">
          <IoMdPerson /> Profile
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer">
          <IoIosChatbubbles /> Message
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer">
          <IoIosListBox /> Schedule
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer">
          <IoMdStats /> Reports
        </li>
        <li className="flex items-center gap-x-4 p-4 cursor-pointer">
          <IoIosHelpCircle /> Help
        </li>
      </ul>
      <div className="flex items-center justify-between bg-dark-gray p-4 rounded-lg">
        <div className="flex gap-x-4">
          <div className="w-12 rounded-md overflow-hidden">
            <img src={user} alt="user" />
          </div>
          <h3>Alice</h3>
        </div>
        <IoIosArrowDown/>
      </div>
    </div>
  );
};

export default SideNav;
