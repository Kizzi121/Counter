// src/Counter.js
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <div className="count-display">
        {count}
      </div>
      <div className="button-container">
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement} disabled={count <= 0}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
