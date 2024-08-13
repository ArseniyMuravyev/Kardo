import { FC } from "react";
import styles from "./Modal.module.css";

interface Props {
  children?: React.ReactNode
  className?: string
  isActive: boolean
  toggleModal: () => void
}

export const Modal:FC<Props> = ({ children, className, isActive, toggleModal }) => {

  return (
    <div className={isActive ? [styles.modal, styles.active].join(' ') : styles.modal} onClick={toggleModal}>
      <div className={`${styles.content} ${className ? className : ''}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};