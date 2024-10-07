interface CustomSubSectionProps {
  startDate: string;
  endDate: string;
  location: string;
  title: string;
  subTitle: string;
}

export default function CustomSubSection({
  startDate,
  endDate,
  location,
  title,
  subTitle,
}: CustomSubSectionProps) {
  return (
    <div className="flex items-center justify-start gap-5   bg-white w-full py-5">
      <div className="flex flex-col items-start ">
        <p>
          {startDate} - {endDate}
        </p>
        <p>{location}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">{title}</p>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
