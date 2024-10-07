import { useState } from "react";
import CV from "./components/CV";
import PersonalDetails from "./components/PersonalDetails";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";
import CustomSectionForm from "./components/CustomSectionForm";

interface DataProps {
  startDate: string;
  endDate: string;
  location: string;
  title: string;
  subTitle: string;
}

function App() {
  const [personal, setPersonal] = useState({
    fullName: "Szymon Grysiewicz",
    email: "szymongrysiewicz@gmail.com",
    phone: "727720971",
    location: "Gdańsk, Poland",
  });

  const [education, setEducation] = useState<DataProps[]>([
    {
      startDate: "08/2020",
      endDate: "present",
      location: "Gdańsk, Poland",
      subTitle: "Computer Science",
      title: "Uniwersytet Gdański",
    },
  ]);

  const [experience, setExperience] = useState<DataProps[]>([
    {
      startDate: "04/2023",
      endDate: "present",
      location: "Warsaw, Poland",
      title: "Google",
      subTitle: "Developer",
    },
  ]);

  function handleEducation(data: DataProps[]) {
    setEducation(data);
  }

  function handleExperience(data: DataProps[]) {
    setExperience(data);
  }

  function handleType(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPersonal((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="h-full p-0 bg-bg flex flex-col lg:flex-row justify-center">
      <div className="flex flex-col items-center gap-5 my-10 mx-5 lg:w-1/4">
        <PersonalDetails handleType={handleType} />
        <CustomSectionForm
          setData={handleEducation}
          text="Education"
          dataList={education}
          icon={<FaGraduationCap />}
        />
        <CustomSectionForm
          setData={handleExperience}
          text="Experience"
          dataList={experience}
          icon={<FaBriefcase />}
        />
      </div>
      <CV personal={personal} education={education} experience={experience} />
    </div>
  );
}

export default App;
