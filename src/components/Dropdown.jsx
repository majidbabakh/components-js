import { useState } from 'react';

function Dropdown({ data }) {
  // state for open and close menu
  const [isOpen, setIsOpen] = useState(false);

  // state for selected option
  const [selected, setSelected] = useState(null);

  // handle click option section
  const handleOptionClick = (option) => {
    setSelected(option.label);
    setIsOpen(false);
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
        {selected || 'No Item Selected'}
      </div>
      <div className="">{isOpen && renderedList}</div>
    </div>
  );
}

export default Dropdown;
