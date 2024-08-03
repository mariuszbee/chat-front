import { Typography } from '@mui/material';

import router from '../Routes';

interface TypographyBrandProps {
  displaySize: { xs: string; md: string };
  flexGrow?: number;
}

export const TypographyBrand = ({
  displaySize,
  flexGrow,
}: TypographyBrandProps) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        //href="#app-bar-with-responsive-menu"
        onClick={() => router.navigate('/')}
        sx={{
          mr: 2,
          flexGrow: flexGrow,
          display: displaySize,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        CHATapp
      </Typography>
    </>
  );
};
