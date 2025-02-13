import React, { useState } from "react";
import data from "./data";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multi, setMulti] = useState([]);
  const [enable, setEnable] = useState(false);
  function handleClick(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMulti(id) {
    let arr = [...multi];
    let ind = arr.indexOf(id);
    if (ind === -1) {
      arr.push(id);
    } else {
      arr.splice(ind, 1);
    }
    setMulti(arr);
  }
  console.log(multi);
  return (
    <div className="container bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <div
          onClick={() => setEnable(!enable)}
          className="text-center mb-2 text-2xl bg-white rounded-lg hover:cursor-pointer"
        >
          Enable Multiselection
        </div>
        <div className="accordian bg-white rounded-xl p-3 ">
          {data?.map((item) => (
            <div className="">
              <div
                key={item.id}
                className="flex justify-between bg-gray-400 p-2 m-2 hover:cursor-pointer"
                onClick={
                  enable
                    ? () => handleMulti(item.id)
                    : () => handleClick(item.id)
                }
              >
                <div>{item.question}</div>
                <div>+</div>
              </div>
              <div
                className={
                  enable
                    ? multi.indexOf(item.id) === -1
                      ? "hidden"
                      : null
                    : selected !== item.id
                    ? "hidden"
                    : null
                }
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
