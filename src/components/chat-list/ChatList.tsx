import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { CHatListItem } from './chat-list-item/ChatListItem';
import { Divider, Stack } from '@mui/material';
import { ChatListHeader } from './chat-list-header/ChatListHeader';
import { ChatListAdd } from './chat-list-add/ChatListAdd';
import { useGetChats } from '../../hooks/useGetChats';
import { usePath } from '../../hooks/usePath';

export const ChatList = () => {
  const [chatAddVisible, setChatAddVisible] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState('');
  const { data } = useGetChats();
  const { path } = usePath();

  useEffect(() => {
    const pathSplit = path.split('chat/');
    if (pathSplit.length === 2) {
      setSelectedChatId(pathSplit[1]);
    }
  }, [path]);

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
            maxHeight: '80vh',
            overflow: 'auto',
          }}
        >
          {data?.chats
            .map((chat) => (
              <CHatListItem
                key={chat._id}
                chat={chat}
                selected={chat._id === selectedChatId}
              />
            ))
            .reverse()}
        </List>
      </Stack>
    </>
  );
};
