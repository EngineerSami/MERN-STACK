import React from "react";
import Tabs from "./Tabs";

const App = () => {
  const tabData = [
    {
      label: "Tab 1",
      content: <h1>This is the content of Tab 1</h1>,
    },
    {
      label: "Tab 2",
      content: <h1>This is the content of Tab 2</h1>,
    },
    {
      label: "Tab 3",
      content: <h1>This is the content of Tab 3</h1>,
    },
  ];

  return (
    <div>
      <h1>Reusable Tabs Component</h1>
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
