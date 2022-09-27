import { IoEllipse } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";


const Card = ({ details }) => {
    let statusColor;
    if (details.status === "pending") {
      statusColor = "text-yellow";
    } else if (details.status === "rejected") {
      statusColor = "text-red";
    }
    else if (details.status ==='accepted'){
        statusColor = "text-green"
    }


  return (
    <div className="flex justify-between bg-secondary-color p-4 mt-4 rounded-md sm:flex-col">
      <div className="flex gap-x-8">
        <div className="w-12">
          <img src={details.companyLogo} alt="Logo" />
        </div>
        <div>
          <h1 className="font-bold">{details.role}</h1>
          <p className="text-light-gray">{details.name}</p>
          <div className="flex gap-x-4 text-light-gray items-center">
            <IoIosPin />
            {details.location.map((loc) => (
              <p>{loc}</p>
            ))}
          </div>

          {details.appliedOn && (
            <div className="flex gap-x-8 md:flex-col">
              <p>Applied On: {details.appliedOn}</p>
              {details.status === "accepted" && details.interviewDate && (
                <p className="text-green">
                  Interview Scheduled On : {details.interviewDate}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      {details.status && (
        <div className={`flex items-center gap-x-2 mt-2 ${statusColor}`}>
          <IoEllipse />
          <p>{details.status}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
