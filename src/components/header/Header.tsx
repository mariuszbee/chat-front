import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Brand } from './Brand';
import { MobileMenu } from './MobileMenu';
import { TypographyBrand } from './TypographyBrand';
import { Navigation } from './Navigation';
import { UserSettingsNav } from './UserSettingsNav';
import { useReactiveVar } from '@apollo/client';
import { authenticatedVar } from '../../constants/authenticated';
import { Page } from '../../interfaces/page.interface';

const pages: Page[] = [
  {
    name: 'Home',
    path: '/',
  },
];

const unauthenticatedPages: Page[] = [
  {
    name: 'Login',
    path: '/login',
  },
  {
    name: 'Signup',
    path: '/signup',
  },
];

const Header = () => {
  const authenticated = useReactiveVar(authenticatedVar);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Brand displaySize={{ xs: 'none', md: 'flex' }} />
          <TypographyBrand displaySize={{ xs: 'none', md: 'flex' }} />
          <MobileMenu pages={authenticated ? pages : unauthenticatedPages} />
          <Navigation pages={authenticated ? pages : unauthenticatedPages} />
          <Brand displaySize={{ xs: 'flex', md: 'none' }} />
          <TypographyBrand
            displaySize={{ xs: 'flex', md: 'none' }}
            flexGrow={1}
          />
          {authenticated && <UserSettingsNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { Header };
