import Header from "./Header";
import CustomSection from "./CustomSection";

interface CVProps {
  personal: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
  };
  education: {
    title: string;
    subTitle: string;
    startDate: string;
    endDate: string;
    location: string;
  }[];
  experience: {
    title: string;
    subTitle: string;
    startDate: string;
    endDate: string;
    location: string;
  }[];
}

export default function CV({ personal, education, experience }: CVProps) {
  const { fullName, email, phone, location } = personal;

  return (
    <div className="mx-5 bg-white lg:mt-10 flex flex-col gap-5 lg:w-2/5 mb-4 h-[80vh] md:h-9/10 ">
      <Header
        fullName={fullName}
        email={email}
        phone={phone}
        location={location}
      />
      <CustomSection mainTitle="Education" subSections={education} />
      <CustomSection mainTitle="Experience" subSections={experience} />
    </div>
  );
}
