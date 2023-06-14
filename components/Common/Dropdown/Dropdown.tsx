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
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0.5"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className={isOpen ? "rotated" : ""}
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.categories}>
          {categories.map((option: any, index: any) => (
            <li
              key={index}
              onClick={() => {
                handleOptionSelect(option.fields.name),
                  setActiveCategory(option.fields.name);
              }}
            >
              <div className={styles.categoryImage}>
                <img src={option.fields.image.fields.file.url} alt="" />
              </div>
              {option.fields.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
