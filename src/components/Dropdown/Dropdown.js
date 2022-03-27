import { useState } from "react";

export default function Dropdown({ title, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
        {isOpen && (
          <ul>
            {options.map((item) => (
              <li
                key={item}
                role="menuitem"
                onClick={() => handleSelection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
