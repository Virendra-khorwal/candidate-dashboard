import { BiExclude } from "react-icons/bi";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="bg-secondary-color text-white h-16 flex items-center p-4 justify-between">
      <div>
        <BiExclude className="text-red text-5xl" />
      </div>
      <div>Navbar</div>
      <div className="flex gap-x-6 text-xl">
        <div className="rounded-full bg-dark-gray p-2">
          <IoMdNotifications />
        </div>
        <div className="rounded-full bg-dark-gray p-2">
          <IoMdSettings />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
