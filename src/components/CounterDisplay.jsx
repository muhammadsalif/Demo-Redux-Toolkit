import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  let val = useSelector((state) => state);
  return (
    <div>
      <hr></hr>
      <h2>Counter display {val.counter.count}</h2>
    </div>
  );
};

export default CounterDisplay;
