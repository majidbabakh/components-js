import { useState } from 'react';

function Dropdown({ data, onChange, value }) {
  // state for open and close menu
  const [isOpen, setIsOpen] = useState(false);

  // handle click option section
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  // handle Click select section
  const handleSelectClick = () => {
    setIsOpen((currentIsOpen) => setIsOpen(!currentIsOpen));
  };

  const renderedList = data.map((option) => {
    return (
      <div
        key={option.value}
        className="border border-slate-300 p-1 text-center"
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="w-1/4">
      <div
        className="border-2 border-blue-500 text-center "
        onClick={handleSelectClick}
      >
        {value?.label || 'No Item Selected'}
      </div>
      <div className="">{isOpen && renderedList}</div>
    </div>
  );
}

export default Dropdown;
