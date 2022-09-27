import dribbble from "../images/dribbble.png";
import google from "../images/google.png";
import microsoft from "../images/microsoft.png";
import Card from "./Card";

const RecJob = () => {
  const companyList = [
    {
      name: "Dribbble",
      role: "Front End Intern",
      location: ["Remote", "England"],
      companyLogo: dribbble,
    },
    {
      name: "Mircosoft",
      role: "Front-End React Js Intern",
      location: ["Delhi", "New York"],
      companyLogo: microsoft,
    },
    {
      name: "Google",
      role: "Frontend Developer Intern",
      location: ["London", "New York"],
      companyLogo: google,
    },
  ];
  return (
    <div className="text-white p-4">
      <h1>Recommended Jobs</h1>
      {companyList.map((item) => (
        <div className="border-b border-light-gray cursor-pointer">
          <Card details={item} />
        </div>
      ))}
    </div>
  );
};

export default RecJob;
