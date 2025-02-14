import React, { useEffect, useState } from "react";

const Colorgenerator = () => {
  const [isHex, setIsHex] = useState(true);
  const [color, setColor] = useState("#ffffff");

  function RandomNumber(num) {
    return Math.floor(Math.random() * num);
  }

  function Generate() {
    if (isHex) {
      let temp = "#";
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      for (let i = 0; i < 6; i++) {
        temp = temp + arr[RandomNumber(16)];
      }
      setColor(temp);
    } else {
      let temp = `rgb(${RandomNumber(256)},${RandomNumber(256)},${RandomNumber(
        256
      )})`;
      setColor(temp);
    }
  }

  useEffect(() => {
    Generate();
  }, [isHex]);

  return (
    <div className={`min-h-screen flex justify-center items-center`}>
      <div>
        <div className="bg-gray-600 text-center p-2 rounded-lg text-3xl mb-5">
          {color}{" "}
        </div>
        <div className="flex gap-5">
          <div
            onClick={() => {
              setIsHex(false);
              Generate();
            }}
            className="hover:cursor-pointer bg-amber-200 p-3 rounded-lg"
          >
            Generate RGB
          </div>
          <div
            onClick={() => {
              Generate();
              setIsHex(true);
            }}
            className=" hover:cursor-pointer bg-amber-200 p-3 rounded-lg"
          >
            Generate Hex
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colorgenerator;
