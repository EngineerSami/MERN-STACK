import React from "react";
import PersonCard from "./PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Ali" lastName="Yahya" age={21} hairColor="Brown" />
      <PersonCard firstName="Yahya" lastName="Jarrar" age={18} hairColor="Brown" />
      <PersonCard firstName="Jalal" lastName="Hemo" age={34} hairColor="Black" />
      <PersonCard firstName="Yasser" lastName="Al-Zoubi" age={31} hairColor="Black" />
    </div>
  );
}

export default App;
