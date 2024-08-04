import { Box } from '@mui/material';
import router from '../Routes';

interface BrandProps {
  displaySize: { xs: string; md: string };
}

export const Brand = ({ displaySize }: BrandProps) => {
  return (
    <>
      <Box
        onClick={() => router.navigate('/')}
        sx={{ display: displaySize, cursor: 'pointer' }}
      >
        <img
          src="/src/assets/my_logo.svg"
          width={50}
          height={45}
          style={{ marginRight: '10px' }}
        />
      </Box>
    </>
  );
};
