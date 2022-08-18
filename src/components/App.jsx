import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
