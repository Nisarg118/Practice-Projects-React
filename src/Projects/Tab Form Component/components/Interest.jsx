import React from "react";

const Interest = ({ data, setData, errors }) => {
  const arr = ["coding", "C++", "dancing", "singing", "reading"];
  const { interests } = data;

  const handleChange = (e) => {
    const { checked, name } = e.target;
    setData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, name]
        : prev.interests.filter((i) => i !== name),
    }));
  };
  return (
    <div className="p-5">
      {arr.map((item, index) => (
        <div className="" key={index}>
          <label className="text-xl">
            <input
              type="checkbox"
              name={arr[index]}
              className="mr-2 w-4 h-4"
              checked={interests.includes(item)}
              onChange={(e) => handleChange(e)}
            />
            {item}
          </label>
        </div>
      ))}
      {errors.interests && (
        <span className="text-red-800 font-medium">{errors.interests}</span>
      )}
    </div>
  );
};

export default Interest;
