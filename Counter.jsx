// src/Counter.js
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);  // Reset function

  return (
    <div className="counter-container">
      <h1>Styled Counter</h1>
      <div className="count-display">
        {count}
      </div>
      <div className="button-container">
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement} disabled={count <= 0}>Decrement</button>
        <button className="counter-button reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
