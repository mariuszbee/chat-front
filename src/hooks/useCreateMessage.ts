import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { MessageFragment } from '../fragments/message.fragment';

const createMessageDocument = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      _id
      content
      createdAt
    }
  }
`);

export const useCreateMessage = () => {
  return useMutation(createMessageDocument, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          messages(existingMessages = []) {
            const newMessageRef = cache.writeFragment({
              data: data?.createMessage,
              fragment: MessageFragment,
            });
            return [...existingMessages, newMessageRef];
          },
        },
      });
    },
  });
};
