import { useState } from 'react';
import List from '@mui/material/List';
import { CHatListItem } from './chat-list-item/ChatListItem';
import { Divider, Stack } from '@mui/material';
import { ChatListHeader } from './chat-list-header/ChatListHeader';
import { ChatListAdd } from './chat-list-add/ChatListAdd';
import { useGetChats } from '../../hooks/useGetChats';

export const ChatList = () => {
  const [chatAddVisible, setChatAddVisible] = useState(false);
  const { data } = useGetChats();
  return (
    <>
      <ChatListAdd
        isOpen={chatAddVisible}
        handleClose={() => setChatAddVisible(false)}
      />
      <Stack>
        <ChatListHeader handleAddChat={() => setChatAddVisible(true)} />
        <Divider />
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            maxHeight: '90vh',
            overflow: 'auto',
          }}
        >
          {data?.chats.map((chat) => (
            <CHatListItem key={chat._id} chat={chat} />
          ))}
        </List>
      </Stack>
    </>
  );
};
