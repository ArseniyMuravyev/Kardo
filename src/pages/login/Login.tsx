import { FC } from "react";
import { Login } from "../../components/login/Login";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const LoginPage: FC = () => {

  const { isAuth } = useAuth()

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return (
    <Login />
  );
};
