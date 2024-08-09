import { useState } from 'react';
import { API_URL } from '../constants/urls';
import { client } from '../constants/apollo-client';
import { setToken } from '../utils/token';
import { commonFetch } from '../utils/fetch';

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();
  const login = async (request: LoginRequest) => {
    const response = await commonFetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    if (!response.ok) {
      if (response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('Unknown error occurred. Please try again.');
      }
      return;
    }
    setToken(await response.text());
    setError('');
    await client.refetchQueries({ include: 'active' });
  };
  return { error, login };
};

export { useLogin };
