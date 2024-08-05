import { useParams } from 'react-router-dom';
import { useGetChat } from '../../hooks/useGetChat';
import { Divider, IconButton, InputBase, Paper, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const Chat = () => {
  const params = useParams();
  const { data } = useGetChat({ _id: params._id! });
  return (
    <Stack
      sx={{
        height: '90vh',
        justifyContent: 'space-between',

        pb: 2,
      }}
    >
      <h1>{data?.chat.name}</h1>
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
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }}>
          <SendIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};
