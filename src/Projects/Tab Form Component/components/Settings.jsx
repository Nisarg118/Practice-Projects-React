import React from "react";

const Settings = ({ data, setData, errors }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.name }));
  };

  return (
    <div className="p-5">
      <div>
        <label className="text-xl">
          <input
            type="radio"
            className="mr-2 w-4 h-4"
            checked={theme === "dark"}
            name="dark"
            onChange={handleChange}
          />
          dark
        </label>
      </div>
      <div>
        <label className="text-xl">
          <input
            type="radio"
            className="mr-2 w-4 h-4"
            checked={theme === "light"}
            name="light"
            onChange={handleChange}
          />
          light
        </label>
      </div>
    </div>
  );
};

export default Settings;
