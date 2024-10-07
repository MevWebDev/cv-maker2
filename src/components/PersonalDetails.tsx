import CustomLabel from "./CustomLabel";

interface PersonalDetailsProps {
  handleType: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonalDetails({ handleType }: PersonalDetailsProps) {
  return (
    <div className="bg-white p-5 rounded-xl w-full">
      <h1 className="font-bold text-2xl my-2">Personal Details</h1>
      <div>
        <form className="flex flex-col gap-3 my-2">
          <CustomLabel name="fullName" handleType={handleType}>
            Full Name
          </CustomLabel>
          <CustomLabel name="email" handleType={handleType}>
            Email
          </CustomLabel>
          <CustomLabel name="phone" handleType={handleType}>
            Phone number
          </CustomLabel>
          <CustomLabel name="location" handleType={handleType}>
            Address
          </CustomLabel>
        </form>
      </div>
    </div>
  );
}
