import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';
import { useLogin } from '../../hooks/useLogin';

export const Login = () => {
  const { error, login } = useLogin();
  return (
    <Auth
      submitLabel="Login"
      onSubmit={(reqest) => login(reqest)}
      error={error}
    >
      <Link to="/signup" style={{ alignSelf: 'center' }}>
        <MUILink>Don't have an account? Signup</MUILink>
      </Link>
    </Auth>
  );
};
