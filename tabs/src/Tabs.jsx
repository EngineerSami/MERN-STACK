import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ color: generateRandomColor() }}>
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
