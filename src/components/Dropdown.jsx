import { useEffect, useRef, useState } from 'react';

function Dropdown({ data, onChange, value }) {
  // state for open and close menu
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  // handle click option section
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  // handle Click select section
  const handleSelectClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
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
    <div className="w-1/4" ref={divEl}>
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
