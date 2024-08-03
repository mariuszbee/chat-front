import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Brand } from './Brand';
import { MobileMenu } from './MobileMenu';
import { TypographyBrand } from './TypographyBrand';
import { Navigation } from './Navigation';
import { UserSettingsNav } from './UserSettingsNav';

const pages = ['Products', 'Pricing', 'Blog'];

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Brand displaySize={{ xs: 'none', md: 'flex' }} />
          <TypographyBrand displaySize={{ xs: 'none', md: 'flex' }} />
          <MobileMenu pages={pages} />
          <Navigation pages={pages} />
          <Brand displaySize={{ xs: 'flex', md: 'none' }} />
          <TypographyBrand
            displaySize={{ xs: 'flex', md: 'none' }}
            flexGrow={1}
          />

          <UserSettingsNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { Header };
