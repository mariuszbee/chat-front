import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';

export const Login = () => {
  return (
    <Auth submitLabel="Login" onSubmit={async () => {}}>
      <Link to="/signup" style={{ alignSelf: 'center' }}>
        <MUILink>Don't have an account? Signup</MUILink>
      </Link>
    </Auth>
  );
};
