import { IoIosCreate, IoIosPin } from "react-icons/io";

const UserCard = ({ user }) => {
  return (
    <div className="flex bg-secondary-color p-4 rounded-md justify-between ">
      <div className="flex gap-x-6">
        <div className="w-32">
          <img className="rounded" src={user.image} alt="User" />
        </div>
        <div className="flex flex-col gap-y-4">
          <h3>{user.name}</h3>
          <p>{user.role}</p>
          <div className="grid gap-4 grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {user.skills.map((skill) => (
              <p className="p-2 bg-dark-gray rounded-md cursor-pointer">
                {skill}
              </p>
            ))}
          </div>
          <p className="flex items-center gap-x-2">
            <IoIosPin className="text-green" /> {user.location}
          </p>
        </div>
      </div>
      <IoIosCreate className="cursor-pointer text-2xl"/>
    </div>
  );
};

export default UserCard;
