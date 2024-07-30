import { gql, useMutation } from '@apollo/client';
import { User } from '../models/User';

interface CreateUserInput {
  createUserData: {
    email: string;
    password: string;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($createUserData: CreateUserInput!) {
    createUser(createUserData: $createUserData) {
      _id
      email
    }
  }
`;
export const useCreateUser = () => {
  return useMutation<User, CreateUserInput>(CREATE_USER);
};
