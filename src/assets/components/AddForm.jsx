import { useState } from 'react';

const AddForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInputValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(inputValue);
    setInputValue(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue || ''}
        onChange={handleChange}
        placeholder="Add new item"
      />
      <button type="submit ">Add</button>
    </form>
  );
};

export default AddForm;
