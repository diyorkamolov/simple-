import React, { useState } from 'react';
import './index.css';

function App() {
  
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>Simple React App with useState</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button className='btn2' onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
}

export default App;