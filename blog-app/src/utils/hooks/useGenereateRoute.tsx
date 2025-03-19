import HomePage from '../../pages/Home';
import { RouteObject } from 'react-router';
import ProtectedRoute from 'features/ProtectedRoute';
// import ToastProvider from 'shared/ui/Toast/ToastProvider';
import WrapperNavbar from 'components/WrapperNavbar';
import { HARD_CODE_ROUTES } from 'utils/constants/routes';
import NotFound from 'pages/NotFound';

const useGenerateRoutes = () => {
  const defaultRoutes: RouteObject[] = [];
  defaultRoutes.push({
    path: '/',
    element: <WrapperNavbar />,
    errorElement: <NotFound />,
    children: [{ path: '/', element: <HomePage /> }],
  });
  HARD_CODE_ROUTES.forEach(({ path, isPrivate, component: Component }) => {
    defaultRoutes[0].children?.push({
      path: path,
      element: (
        <ProtectedRoute isPrivate={isPrivate}>
          <Component />
        </ProtectedRoute>
      ),
    });
  });
  return { defaultRoutes };
};

export default useGenerateRoutes;
