import { FormHTMLAttributes, ReactNode } from "react";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string
  children: ReactNode
}

export const Form: React.FC<IFormProps> = ({ children, className, ...props }) => {

  return (
    <form
      {...props}
      className={`${styles.form} ${className && className}`}
    >
      {children}
      <p className={styles.alerts}>
        При регистрации вы соглашаетесь <Link
          className={styles.link}
          to={'https://kardoaward.com/privacy-policy/'}
          target="_blank" 
          rel="noopener noreferrer"
        >
          на обработку, хранение и передачу персональных данных
        </Link> в рамках реализации всех этапов КАРДО
      </p>
    </form>
  );
}
