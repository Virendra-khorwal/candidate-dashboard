import Card from "../components/Card";
import UserCard from "../components/UserCard";
import image from '../images/user.jpg';
import dribbble from '../images/dribbble.png';
import google from '../images/google.png';
import microsoft from '../images/microsoft.png';

const Home = () => {
    const userData = {
        image: image,
        name: 'Alice',
        role: 'Front-End Developer',
        skills: ['React Js', 'Javascript', 'TailWindCSS', 'MUI'],
        location: 'India',
    }
    const list = [
      {
        name: "Dribbble",
        role: "Front End Intern",
        status: "accepted",
        location: ["Remote", "England"],
        appliedOn: "24/09/2022",
        interviewTime: "10 PM IST",
        interviewDate: "26/09/2022",
        companyLogo: dribbble,
      },
      {
        name: "Mircosoft",
        role: "Front-End React Js Intern",
        status: "rejected",
        location: ["Delhi", "New York"],
        appliedOn: "20/09/2022",
        interviewTime: "",
        interviewDate: "",
        companyLogo: microsoft,
      },
      {
        name: "Google",
        role: "Frontend Developer Intern",
        status: "pending",
        location: ["London", "New York"],
        appliedOn: "21/09/2022",
        interviewTime: "",
        interviewDate: "",
        companyLogo: google,
      },
    ];

    return <div className="text-white p-4 px-12 pt-12">
        <UserCard user={userData} />
        <div>
            {
                list.map((item) => (
                    <Card details={item}/>
                ))
            }
        </div>
    </div>
}

export default Home;