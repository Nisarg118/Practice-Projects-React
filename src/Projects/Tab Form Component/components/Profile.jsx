import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, email, password } = data;

  const handleDataChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="p-10">
      <div className="flex flex-col">
        <label>Name : </label>
        <input
          className="border-1 w-[300px] p-1"
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {errors.name && (
          <span className="text-red-800 font-medium">{errors.name}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label>Email : </label>
        <input
          className="border-1 w-[300px] p-1"
          type="email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {errors.email && (
          <span className="text-red-800 font-medium">{errors.email}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label>Password : </label>
        <input
          className="border-1 w-[300px] p-1"
          type="password"
          value={password}
          onChange={(e) => handleDataChange(e, "password")}
        />
        {errors.password && (
          <span className="text-red-800 font-medium">{errors.password}</span>
        )}
      </div>
    </div>
  );
};

export default Profile;
