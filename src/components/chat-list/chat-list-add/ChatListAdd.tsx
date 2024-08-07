import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { useCreateChat } from '../../../hooks/useCreateChat';
import { UNKNOW_ERROR_MESSAGE } from '../../../constants/error';
import router from '../../Routes';

interface ChatListAddProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const ChatListAdd = ({ isOpen, handleClose }: ChatListAddProps) => {
  const [error, setError] = useState('');
  const [chatName, setChatName] = useState('');
  const [createChat] = useCreateChat();

  const onClose = () => {
    setError('');
    setChatName('');
    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: grey[700],
          width: 400,
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6" component="h2">
            Add Chat
          </Typography>

          <TextField
            label="Chat name"
            error={!!error}
            helperText={error}
            fullWidth
            onChange={(event) => {
              setChatName(event.target.value);
            }}
          />

          <Button
            variant="outlined"
            fullWidth
            onClick={async () => {
              if (!chatName.length) {
                setError('Chat name is required');
                return;
              }
              try {
                const chat = await createChat({
                  variables: {
                    createChatInput: { name: chatName },
                  },
                });
                onClose();
                router.navigate(`/chat/${chat.data?.createChat._id}`);
              } catch (error) {
                setError(UNKNOW_ERROR_MESSAGE);
              }
            }}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
