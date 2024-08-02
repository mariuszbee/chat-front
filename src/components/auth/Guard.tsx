import { useGetMe } from '../../hooks/useGetMe';

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe();
  console.log(user);

  return <>{user && children}</>;
};

export { Guard };
