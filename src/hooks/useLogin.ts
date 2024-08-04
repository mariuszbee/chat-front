import { useState } from 'react';
import { API_URL } from '../constants/urls';
import { client } from '../constants/apollo-client';

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();
  const login = async (request: LoginRequest) => {
    const response = await fetch(`${API_URL}/auth/login`, {
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
    setError('');
    await client.refetchQueries({ include: 'active' });
  };
  return { error, login };
};

export { useLogin };
