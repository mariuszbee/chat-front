import { API_URL } from '../constants/urls';

const useLogout = () => {
  const logout = async () => {
    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return { logout };
};

export { useLogout };
