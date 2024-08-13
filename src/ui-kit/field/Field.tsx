import { ReactNode } from "react";
import styles from "./Field.module.css";

interface Props {
  children: ReactNode
  className?: string
  error?: string
  label?: string
  hint?: string
}

export const Field: React.FC<Props> = ({ className, children, error, label, hint }) => {
  return (
    <div className={`${styles.field} ${className && className}`}>
      <label className={styles.label}>{label}</label>
      {children}
      <span
        className={`
                    ${styles.hint}
                    ${error ? styles.hint__error : ''}
                `}>
        {error ? error : hint}
      </span>
    </div>
  );
}
