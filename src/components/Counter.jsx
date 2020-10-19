import React, { useState } from "react";
import { useSelector } from "react-redux";
import { decrement, increment, incrementByamout } from "../store/CounterSlice";
import { useDispatch } from "react-redux";
const Counter = () => {
  let value = useSelector((state) => state);
  let dispatch = useDispatch();
  let [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>Counter Value {value.counter.count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <input type="text" onChange={(e) => setAmount(e.target.value)} />

      <button onClick={() => dispatch(incrementByamout(amount))}>
        Inrement by amount
      </button>
    </div>
  );
};

export default Counter;
