import { useState } from "react";
import Interest from "./components/Interest";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
export default function Tabs() {
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Your name is not valid";
        }
        if (!data.email) {
          err.email = "Your email is not valid";
        }
        if (!data.password || data.password.length < 6) {
          err.name = "Your password is not valid";
        }

        setErrors(err);

        return err.name || err.email || err.password ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};

        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);

        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "John",
    email: "john@gmail.com",
    password: "123456",
    interests: ["reading", "singing"],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});

  const ActiveTabComponent = tabs[activeTab].component;

  const handleClick = (index) => {
    if (tabs[activeTab].validate()) setActiveTab(index);
  };

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prev) => prev - 1);
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) setActiveTab((prev) => prev + 1);
  };
  const handleSubmitClick = () => {
    console.log(data);
  };
  return (
    <div className="min-h-screen p-10 ">
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="text-3xl p-2 border font-bold hover:bg-gray-300 cursor-pointer"
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="mt-10 min-h-[100px] border">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="flex gap-2 ">
        {activeTab > 0 && (
          <button
            onClick={handlePrevClick}
            className="px-1 py-2 cursor-pointer bg-amber-200 rounded mt-2"
          >
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button
            onClick={handleNextClick}
            className="px-1 py-2 cursor-pointer bg-amber-200 rounded mt-2"
          >
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button
            onClick={handleSubmitClick}
            className="px-1 py-2 cursor-pointer bg-amber-200 rounded mt-2"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
