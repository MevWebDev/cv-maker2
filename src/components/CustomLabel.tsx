import { ReactNode } from "react";

interface CustomLabelProps {
  children: ReactNode;
  handleType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string;
}

export default function CustomLabel({
  children,
  handleType,
  name,
  value,
}: CustomLabelProps) {
  return (
    <label className="flex flex-col gap-1 ">
      <p className="font-bold">{children}</p>
      <input
        className="bg-bg rounded-xl py-1 px-2 "
        type="text"
        name={name}
        onChange={handleType}
        value={value}
      />
    </label>
  );
}
