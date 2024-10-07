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
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        <p>{email}</p>
        <p>{phone}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
