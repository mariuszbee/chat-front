import { Link } from 'react-router-dom';
import { Link as MUILink, TextField } from '@mui/material';
import Auth from './Auth';
import { useCreateUser } from '../../hooks/useCreateUser';
import { useState } from 'react';
import { extractErrorMessage } from '../../utils/errors';
import { useLogin } from '../../hooks/useLogin';

export const SignUp = () => {
  const [createUser] = useCreateUser();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const { login } = useLogin();

  return (
    <Auth
      submitLabel="Signup"
      error={error}
      extraFields={[
        <TextField
          type="text"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          error={!!error}
          helperText={error}
        />,
      ]}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                username,
                password,
              },
            },
          });
          await login({ email, password });
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
