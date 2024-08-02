import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';
import { useCreateUser } from '../../hooks/useCreateUser';
import { useState } from 'react';
import { extractErrorMessage } from '../../utils/errors';

export const SignUp = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState('');
  return (
    <Auth
      submitLabel="Signup"
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
          setError('');
        } catch (error) {
          const errorMessage = extractErrorMessage(error);
          if (errorMessage) {
            setError(errorMessage);
            return;
          }
          setError('Unknown error occurred. Please try again.');
        }
      }}
    >
      <Link to="/login" style={{ alignSelf: 'center' }}>
        <MUILink>Already have an account? Login</MUILink>
      </Link>
    </Auth>
  );
};
