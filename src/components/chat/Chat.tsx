import { useLocation, useParams } from 'react-router-dom';
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
import { useEffect, useRef, useState } from 'react';
import { useGetMessages } from '../../hooks/useGetMessages';
import Typography from '@mui/material/Typography';
import { useMessageCreated } from '../../hooks/useMessageCreated';
import { Message } from '../../gql/graphql';

export const Chat = () => {
  const params = useParams();
  const [message, setMessage] = useState('');
  const { data } = useGetChat({ _id: params._id! });
  const [createMessage] = useCreateMessage(params._id!);
  const { data: existingMessages } = useGetMessages({ chatId: params._id! });
  const [messages, setMessages] = useState<Message[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const { data: latestMessage } = useMessageCreated({ chatId: params._id! });

  console.log(latestMessage);

  const scrollToBottom = () => {
    divRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (existingMessages) {
      setMessages(existingMessages.messages);
    }
  }, [existingMessages]);

  useEffect(() => {
    const existingLatestMessage = messages[messages.length - 1]?._id;
    if (
      latestMessage?.messageCreated &&
      existingLatestMessage !== latestMessage.messageCreated._id
    ) {
      setMessages([...messages, latestMessage.messageCreated]);
    }
  }, [latestMessage, messages]);

  useEffect(() => {
    setMessage('');
    scrollToBottom();
  }, [location, messages]);

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
    scrollToBottom();
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
      <Box sx={{ maxHeight: '70vh', overflow: 'auto' }}>
        {[...messages]
          .sort(
            (messageA, messageB) =>
              new Date(messageA.createdAt).getTime() -
              new Date(messageB.createdAt).getTime()
          )
          .map((message) => (
            <Grid container alignItems="center" marginBottom="1rem">
              <Grid item xs={2} lg={1}>
                <Avatar src="" sx={{ width: 52, height: 52 }} />
              </Grid>
              <Grid item xs={10} lg={11}>
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
        <div ref={divRef}></div>
      </Box>
      <Paper
        sx={{
          p: '2px 20px',
          display: 'flex',
          justifySelf: 'flex-end',
          alignItems: 'center',
          width: '100%',
          margin: '1rem 0',
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
