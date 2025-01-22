import React, { useState } from "react";
import Tabs from "./Tabs";

const App = () => {
  const [tabCount, setTabCount] = useState(1);
  const words = "This is the content of Tab";

  const tabData = [];
  for (let i = 1; i <= tabCount; i++) {
    tabData.push({
      label: `Tab ${i}`, 
      content: <h1>{`${words} ${i}`}</h1>,
    });
  }

  // Handle input change
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setTabCount(value); 
    }
  };

  return (
    <div>
      <input type="number" id="text" placeholder="Enter number of tabs" onChange={handleInputChange} style={{width:'700px', fontSize:'50px'}}/>
      <h1>My Numbers Tab Using React</h1>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
