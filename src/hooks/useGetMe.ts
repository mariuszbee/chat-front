import { gql, useQuery } from '@apollo/client';

const GET_ME = gql`
  query GetMe {
    me {
      _id
      email
    }
  }
`;

const useGetMe = () => {
  return useQuery(GET_ME);
};

export { useGetMe };
