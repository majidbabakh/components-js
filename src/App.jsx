import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  // state for selected option
  const [selection, setSelection] = useState(null);

  const data = [
    { label: 'JavaScript Programming', value: 'JS' },
    { label: 'HyperText Markup Language', value: 'HTML' },
    { label: 'CSS Style Sheet', value: 'CSS' }
  ];

  const handleSelect = (option) => {
    setSelection(option);
  };

  return <Dropdown data={data} value={selection} onChange={handleSelect} />;
}

export default App;
