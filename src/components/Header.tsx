import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

interface HeaderProps {
  fullName: string;
  email: string;
  phone: string;
  location: string;
}

export default function Header({
  fullName,
  email,
  phone,
  location,
}: HeaderProps) {
  return (
    <div className="bg-header w-full gap-2 text-white p-5 flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">{fullName}</h1>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 items-center justify-center">
        <div className="flex gap-2 items-center">
          <IoMdMail />
          <p>{email}</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaPhoneAlt />
          <p>{phone}</p>
        </div>

        <div className="flex gap-2 items-center">
          <FaLocationDot />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
