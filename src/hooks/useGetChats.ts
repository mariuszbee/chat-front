import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

export const getChatDocument = graphql(`
  query Chats {
    chats {
      _id
      userId
      isPrivate
      userIds
      name
    }
  }
`);

export const useGetChats = () => {
  return useQuery(getChatDocument);
};
