import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean
}

export const ProtectedRoute: FC<Props> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

