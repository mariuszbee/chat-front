import { useParams } from 'react-router-dom';
import { useGetChat } from '../../hooks/useGetChat';
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useCreateMessage } from '../../hooks/useCreateMessage';
import { useState } from 'react';
import { useGetMessages } from '../../hooks/useGetMessages';

export const Chat = () => {
  const params = useParams();
  const [message, setMessage] = useState('');
  const { data } = useGetChat({ _id: params._id! });
  const [createMessage] = useCreateMessage(params._id!);
  const { data: messages } = useGetMessages({ chatId: params._id! });

  return (
    <Stack
      sx={{
        height: '90vh',
        justifyContent: 'space-between',

        pb: 2,
      }}
    >
      <h1>{data?.chat.name}</h1>
      <Box>
        {messages?.messages.map((message) => (
          <p key={message._id}>{message.content}</p>
        ))}
      </Box>
      <Paper
        sx={{
          p: '2px 20px',
          display: 'flex',
          justifySelf: 'flex-end',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <InputBase
          sx={{
            m: 1,
            flex: 1,
            width: '100%',
          }}
          placeholder="Type a message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: '10px' }}
          onClick={() => {
            createMessage({
              variables: {
                createMessageInput: {
                  content: message,
                  chatId: params._id!,
                },
              },
            });
          }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};
