import React, { useState } from "react";
import data from "./data";
const Accordian = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [multiSelection, setMultiSelection] = useState([]);
  const [isMultipleAllowed, setIsMultipleAllowed] = useState(false);

  const handleToggle = (itemID) => {
    setIsOpen(itemID === isOpen ? null : itemID);
  };

  const handleSelection = () => {
    setIsOpen(null);
    setMultiSelection([]);
    setIsMultipleAllowed(!isMultipleAllowed);
  };

  const handleMultipleSelection = (itemID) => {
    let newArray = [...multiSelection];
    let index = newArray.findIndex((item) => item === itemID);
    if (index === -1) {
      newArray.push(itemID);
    } else {
      newArray.splice(index, 1);
    }
    setMultiSelection(newArray);
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen gap-5">
      <h1
        className="text-3xl font-bold bg-gray-400 py-3 px-4 w-[600px] cursor-pointer text-center rounded-md"
        onClick={handleSelection}
      >
        {isMultipleAllowed
          ? "Enable Single Selection"
          : "Enable multiselection"}
      </h1>
      <div>
        {data?.length &&
          data.map((dataItem) => (
            <div className=" w-[1000px]" key={dataItem.id}>
              <div
                onClick={
                  isMultipleAllowed
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleToggle(dataItem.id)
                }
                className="flex gap-4 text-2xl bg-gray-300 py-2 px-3 mb-1 cursor-pointer hover:bg-gray-400"
              >
                <div>{dataItem.question}</div>
                <div className="ml-auto">
                  {isMultipleAllowed
                    ? multiSelection.findIndex(
                        (item) => item === dataItem.id
                      ) === -1
                      ? "+"
                      : "-"
                    : isOpen === dataItem.id
                    ? "-"
                    : "+"}
                </div>
              </div>
              <p
                className={`text-l py-2 px-3 bg-gray-200 mb-1 ${
                  isMultipleAllowed
                    ? multiSelection.findIndex(
                        (item) => item === dataItem.id
                      ) !== -1
                      ? null
                      : `hidden`
                    : isOpen !== dataItem.id
                    ? `hidden`
                    : null
                }`}
              >
                {dataItem.answer}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordian;
