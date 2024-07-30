import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($createUserData: CreateUserInput!) {
    createUser(createUserData: $createUserData) {
      _id
      email
    }
  }
`;
const useCreateUser = () => {
  return useMutation(CREATE_USER);
};
