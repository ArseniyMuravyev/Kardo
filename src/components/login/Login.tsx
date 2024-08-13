import { FC, useState } from "react";
import styles from "./Login.module.css";
import logo from "/icons/logo_login.svg"
import { Select } from "../../ui-kit/select/Select";
import { Button } from "../../ui-kit/button/Button";
import { SignIn } from "./signin/SignIn";
import { TabList } from "../../ui-kit/tab-list/TabList";
import { SignUp } from "./signup/SignUp"; 
import { Auth, Register, User } from "../../types";
import { authService } from "../../services/auth.service";
import { setUser } from "../../store/slices/user-slice/UserSlice";
import { useAppDispatch } from "../../store/hooks";
import { Option } from "../../types";
import { ModalInfo } from "../modal-info/ModalInfo";
import { setModalInfo } from "../../store/slices/modal-info-slice/ModalInfoSlice";
import { optionsEvent, optionsLang } from "../../data";

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const [isEvent, setIsEvent] = useState<string | number>('signin')

  function replaceHome() {
    window.location.replace('/')
  }

  function getCurrentUser(email: string, token: string) {
    return authService
      .getCurrentUser(email, token)
      .then((res) => {
        dispatch(setUser(res))
        replaceHome()
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  }

  function authorization(data: Auth) {
    return authService
      .authorize(data)
      .then((res) => {
        getCurrentUser(data.username, res)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  }

  function regisration(data: Register) {
    return authService
      .register(data)
      .then((res: User) => {
        console.log(res)
        authorization({username: data.email, password: data.password})
        dispatch(setUser({...res, password: ''}))
        dispatch(setModalInfo({
          isActive: true,
          title: 'Теперь ты один из нас!',
          subtitle: 'Регистрация успешно завершена. Добро пожаловать в тусовку!',
          replace: '/'
        }))
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  }

  return (
    <>
    <main className={styles.login}>
      <img src={logo} alt="logo" className={styles.image} />
      <div className={styles.header}>
        <Button
          variant="text"
          color="secondary"
          size="medium"
          onClick={replaceHome}
        >
          Отменить
        </Button>
        <Select options={optionsLang} color="secondary" />
      </div>
      <section className={styles.content}>
        <TabList options={optionsEvent} activeTab={isEvent} onChange={(key: Option['id']) => setIsEvent(key)} />
        {isEvent === "signin" && <SignIn authorization={authorization}/>}
        {isEvent === "signup" && <SignUp regisration={regisration} />}
      </section>
    </main>
    <ModalInfo />
    </>
  );
};

