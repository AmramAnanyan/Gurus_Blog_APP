import { Navigate } from 'react-router';
import { useAuth } from 'utils/hooks/useAuth';
interface IProps {
  isPrivate: boolean;
  children: any;
}
const ProtectedRoute = ({ isPrivate, children }: IProps) => {
  const { isAuthenticated } = useAuth();
  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
