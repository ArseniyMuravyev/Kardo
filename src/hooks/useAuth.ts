import { getAccessToken } from '../services/auth-token.service';
import { useAppSelector } from '../store/hooks';

export function useAuth() {
  const {user} = useAppSelector((state) => state.user)
  const token = getAccessToken();

  return {
    isAuth: !!token,
    ...user
  }
}