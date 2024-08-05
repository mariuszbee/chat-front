import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

export const getChatDocument = graphql(`
  query Chats {
    chats {
      ...ChatFragment
    }
  }
`);

export const useGetChats = () => {
  return useQuery(getChatDocument);
};
