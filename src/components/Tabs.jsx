import React, { useState } from "react";

const Tabs = ({ tabs, size, children }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="w-full">
      <div
        className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md"
        style={{ width: size }}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setOpenTab(index)}
            className={`flex-1 py-2 px-4 lg:text-xs 2zl:text-base rounded-md focus:outline-none transition-all duration-300 ${
              openTab === index ? "bg-blue-900 text-white" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {React.Children.map(children, (child, index) => {
        if (index === openTab) {
          return <div className="transition-all duration-300">{child}</div>;
        }
        return null;
      })}
    </div>
  );
};

export default Tabs;
