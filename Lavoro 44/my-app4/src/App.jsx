import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Andrea" age={25} />
    </div>
  );
}

export default App;


