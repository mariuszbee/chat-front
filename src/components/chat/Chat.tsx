import { useParams } from 'react-router-dom';
import { useGetChat } from '../../hooks/useGetChat';
import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useCreateMessage } from '../../hooks/useCreateMessage';
import { useState } from 'react';
import { useGetMessages } from '../../hooks/useGetMessages';
import Typography from '@mui/material/Typography';

export const Chat = () => {
  const params = useParams();
  const [message, setMessage] = useState('');
  const { data } = useGetChat({ _id: params._id! });
  const [createMessage] = useCreateMessage(params._id!);
  const { data: messages } = useGetMessages({ chatId: params._id! });

  const handleCreateMessage = async () => {
    await createMessage({
      variables: {
        createMessageInput: {
          content: message,
          chatId: params._id!,
        },
      },
    });
    setMessage('');
  };

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
          <Grid container alignItems="center" marginBottom="1rem">
            <Grid item xs={3} md={1}>
              <Avatar src="" sx={{ width: 52, height: 52 }} />
            </Grid>
            <Grid item xs={9} md={11}>
              <Stack>
                <Paper sx={{ width: 'fit-content' }}>
                  <Typography sx={{ padding: '0.9rem' }}>
                    {message.content}
                  </Typography>
                </Paper>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ marginLeft: '0.25rem' }}
                >
                  {new Date(message.createdAt).toLocaleTimeString()}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
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
          onKeyDown={async (event) => {
            if (event.key === 'Enter') {
              await handleCreateMessage();
            }
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: '10px' }}
          onClick={handleCreateMessage}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};
