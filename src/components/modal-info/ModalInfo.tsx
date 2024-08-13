import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeModal } from "../../store/slices/modal-info-slice/ModalInfoSlice";
import { Button } from "../../ui-kit/button/Button";
import { Modal } from "../../ui-kit/modal/Modal";
import styles from "./ModalInfo.module.css";
import { FC } from "react";

export const ModalInfo: FC = () => {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector((state) => state.modalInfo)

  const onClose = () => {
    if(modal.replace) window.location.replace(modal.replace);
    dispatch(closeModal())
  }

  return (
    <Modal isActive={modal.isActive} toggleModal={onClose}>
      <h2 className={styles.title}>{modal.title}</h2>
      <p className={styles.subtitle}>{modal.subtitle}</p>
      <Button children="Продолжить" variant="filled" size="medium" onClick={onClose}/>
    </Modal>
  );
};