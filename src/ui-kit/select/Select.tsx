import { useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";
import arow from "/icons/uparrow.svg";
import orangeArow from "/icons/uparroworange.svg";
import { Option } from "../../types";

interface ISellectProps {
  options: Option[]
  disabled?: boolean  
  color?: "primary" | "secondary";
  onChange?: (selected: Option) => void;
}

export const Select: React.FC<ISellectProps> = ({ 
    options, 
    color = "primary",
    onChange 
  }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleOptionClick = (option: Option) => {
    onChange && onChange(option)
    handleSelect(option)
  }

  const handleOutsideClick = (e: any)  => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setShowOptions(false);
    }
  };

  const toogleOptions = () => setShowOptions(prev => !prev)

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className={styles.select} ref={menuRef}>
        <div
          className={`${styles.button} ${color === "secondary" ? styles.button__secondary : ''} `}
          onClick={toogleOptions}
        >
          <span className={styles.label}>{selectedOption.name}</span>
          <img className={showOptions ? styles.icon_show : styles.icon} src={color === "secondary" ? orangeArow : arow} alt="Стрелка" />
        </div>
        <div className={showOptions ? styles.options : styles.options_hide}>
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className={selectedOption.id === option.id ? styles.option_active : styles.option} >
              {option.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};