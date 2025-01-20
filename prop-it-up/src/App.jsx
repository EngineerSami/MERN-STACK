import React from "react";
import PersonCard from "./PersonCard";

function App() {
  return (
    <div className="App">
      <h1>Person Cards</h1>
      <PersonCard firstName="John" lastName="Doe" age={30} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Smith" age={25} hairColor="Blonde" />
      <PersonCard firstName="Michael" lastName="Johnson" age={40} hairColor="Black" />
      <PersonCard firstName="Emily" lastName="Davis" age={35} hairColor="Red" />
    </div>
  );
}

export default App;
