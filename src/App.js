import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  return (
    <div>
      <h1>Demo redux toolkit</h1>
      <Counter></Counter>
      <CounterDisplay></CounterDisplay>
    </div>
  );
}

export default App;
 