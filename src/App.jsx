import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };
  const handleDecrementClick = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + inputValue);
    setInputValue(0);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue || ''}
          onChange={handleChange}
          placeholder="Add new item"
        />
        <button type="submit ">Add</button>
      </form>
    </div>
  );
}

export default App;
