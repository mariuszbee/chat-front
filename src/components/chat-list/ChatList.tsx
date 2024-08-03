import List from '@mui/material/List';
import { CHatListItem } from './chat-list-item/ChatListItem';
import { Divider, Stack } from '@mui/material';
import { ChatListHeader } from './chat-list-header/ChatListHeader';

export const ChatList = () => {
  return (
    <Stack>
      <ChatListHeader />
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
  );
};
