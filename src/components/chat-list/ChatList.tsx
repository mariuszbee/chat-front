import { useState } from 'react';
import List from '@mui/material/List';
import { CHatListItem } from './chat-list-item/ChatListItem';
import { Divider, Stack } from '@mui/material';
import { ChatListHeader } from './chat-list-header/ChatListHeader';
import { ChatListAdd } from './chat-list-add/ChatListAdd';

export const ChatList = () => {
  const [chatAddVisible, setChatAddVisible] = useState(false);
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
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
          <CHatListItem />
        </List>
      </Stack>
    </>
  );
};
