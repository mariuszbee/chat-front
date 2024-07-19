import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import Auth from './Auth';

export const SignUp = () => {
  return (
    <Auth submitLabel="Signup" onSubmit={async () => {}}>
      <Link to="/login" style={{ alignSelf: 'center' }}>
        <MUILink>Already have an account? Login</MUILink>
      </Link>
    </Auth>
  );
};
