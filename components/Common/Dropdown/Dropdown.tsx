import React, { useState } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  categories: string[];
  activeCategory: any;
  setActiveCategory: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggleButton} onClick={handleToggle}>
        {selectedOption || "Categories"}
      </button>
      {isOpen && (
        <ul className={styles.categories}>
          {categories.map((option: any, index: any) => (
            <li
              key={index}
              onClick={() => {
                handleOptionSelect(option), setActiveCategory(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
