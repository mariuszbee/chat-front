import { Box, Modal, Typography } from '@mui/material';

interface ChatListAddProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const ChatListAdd = ({ isOpen, handleClose }: ChatListAddProps) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Add Chat
        </Typography>
      </Box>
    </Modal>
  );
};
