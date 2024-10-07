import { useState } from "react";
import CustomLabel from "./CustomLabel";

interface DataProps {
  startDate: string;
  endDate: string;
  location: string;
  title: string;
  subTitle: string;
}

interface CustomSectionFormProps {
  dataList: DataProps[];
  setData: (data: DataProps[]) => void;
  text: string;
  icon: React.ReactNode;
}

export default function CustomSectionForm({
  dataList,
  setData,
  text,
  icon,
}: CustomSectionFormProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<DataProps | null>(null);

  function handleClick(index: number) {
    setSelectedIndex(index);
    setFormData(dataList[index]);
    setIsFormOpen(true);
  }

  function handleAddNew() {
    setSelectedIndex(null);
    setFormData({
      startDate: "",
      endDate: "",
      location: "",
      title: "",
      subTitle: "",
    });
    setIsFormOpen(true);
  }

  function handleType(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (formData) {
      setFormData((prevState) => ({
        ...prevState!,
        [name]: value,
      }));
    }
  }

  function handleSave() {
    if (formData) {
      if (selectedIndex !== null) {
        const updatedData = [...dataList];
        updatedData[selectedIndex] = formData;
        setData(updatedData);
      } else {
        setData([...dataList, formData]);
      }
      setIsFormOpen(false);
    }
  }

  function handleCancel() {
    setIsFormOpen(false);
    setFormData(null);
  }

  function isFormValid() {
    return (
      formData?.startDate.trim() &&
      formData?.endDate.trim() &&
      formData?.location.trim() &&
      formData?.title.trim() &&
      formData?.subTitle.trim()
    );
  }

  const labelProps =
    text === "Education"
      ? { title: "School", subTitle: "Degree" }
      : { title: "Company", subTitle: "Position" };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-5 bg-white">
        <div className="flex items-center gap-2 text-xl font-bold">
          {icon} {text}
        </div>
        <button onClick={handleAddNew}>Add New</button>
      </div>

      {dataList.map((data, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`p-4 bg-white my-2  ${
            isFormOpen ? "hidden" : `hover:bg-slate-200 cursor-pointer`
          } `}
        >
          {data.title}
        </div>
      ))}

      {isFormOpen && formData && (
        <div className="p-4 bg-white my-4 rounded-md">
          <form className="flex flex-col gap-3">
            <CustomLabel
              name="title"
              handleType={handleType}
              value={formData.title}
            >
              {labelProps.title}
            </CustomLabel>
            <CustomLabel
              name="subTitle"
              handleType={handleType}
              value={formData.subTitle}
            >
              {labelProps.subTitle}
            </CustomLabel>
            <CustomLabel
              name="startDate"
              handleType={handleType}
              value={formData.subTitle}
            >
              Start Date
            </CustomLabel>
            <CustomLabel
              name="endDate"
              handleType={handleType}
              value={formData.subTitle}
            >
              End Date
            </CustomLabel>
            <CustomLabel
              name="location"
              handleType={handleType}
              value={formData.subTitle}
            >
              Location
            </CustomLabel>
          </form>

          <div className="flex justify-end gap-2 mt-3">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 bg-green-500 text-white rounded-md ${
                !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSave}
              disabled={!isFormValid()}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
