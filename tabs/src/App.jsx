import React from "react";
import Tabs from "./Tabs";

const App = () => {
  const words = "This is the content of Tab";

  const tabData = [];
  for (let i = 1; i <= 3; i++) {
    tabData.push({
      label: `Tab ${i}`,
      content: <h1>{`${words} ${i}`}</h1>,
    });
  }

  return (
    <div>
      <h1>Reusable Tabs Component</h1>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
