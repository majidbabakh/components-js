import { useState } from 'react';
import AddForm from './assets/components/AddForm';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };
  const handleDecrementClick = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleInputChange = (number) => {
    setCount(count + number);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>

      <AddForm onAdd={handleInputChange}></AddForm>
    </div>
  );
}

export default App;
