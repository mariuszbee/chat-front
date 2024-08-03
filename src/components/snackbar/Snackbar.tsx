import { useState } from 'react';
import { SnackbarCloseReason } from '@mui/material/Snackbar';
import { Snackbar as MUISnackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

export const Snackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <MUISnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </MUISnackbar>
    </div>
  );
};
