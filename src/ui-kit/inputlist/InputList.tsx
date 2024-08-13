import { InputHTMLAttributes } from "react";
import styles from "./InputList.module.css";
import { Input } from "../input/Input";
import view from "/icons/view.svg"

interface IInputListProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  error?: boolean
}

export const InputList: React.FC<IInputListProps> = ({ disabled, error, ...props }) => {

  return ( 
    <>
      <Input
        {...props}
        disabled={disabled}
        error={error}
        icon={view}
      />
      <div className={styles.div}>asd</div>
    </>
  );
}
