import React from "react";
import PersonCard from "./PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Sami" lastName="Daraghmeh" age={18} hairColor="Brown" />
      <PersonCard firstName="Omar" lastName="Rayyan" age={20} hairColor="Blonde" />
      <PersonCard firstName="Jalal" lastName="Hemo" age={34} hairColor="Black" />
      <PersonCard firstName="Ali" lastName="Yahya" age={21} hairColor="Red" />
    </div>
  );
}

export default App;
