import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

import "./style.css";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  error?: boolean
  icon?: string
  onChangeButton?: () => void;
}

export const Input: React.FC<IInputProps> = ({ disabled, error, icon, onChangeButton, ...props }) => {
  
  return (
    <div className={
      `${styles.container} 
      ${disabled ? styles.container__disabled : ''}
      ${error ? styles.container__error : ''}
      `}>
      <input
        {...props}
        disabled={disabled}
        className={styles.input}
      />
      {icon && (
        <button type="button" className={styles.button} onClick={onChangeButton}>
          <img src={icon} alt='button-icon' className={styles.button__icon} />
        </button>
      )}
    </div>
  );
}
