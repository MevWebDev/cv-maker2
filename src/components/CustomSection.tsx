import CustomSubSection from "./CustomSubSection";

interface SubSection {
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string;
  location: string;
}

interface CustomSectionProps {
  mainTitle: string;
  subSections: SubSection[];
}
export default function CustomSection({
  mainTitle,
  subSections,
}: CustomSectionProps) {
  return (
    <div className="bg-bg mx-5 flex justify-center flex-col items-center">
      <p className="text-lg  font-bold text-header py-1">{mainTitle}</p>
      {subSections.map((subSection, index) => (
        <CustomSubSection key={index} {...subSection} />
      ))}
    </div>
  );
}
