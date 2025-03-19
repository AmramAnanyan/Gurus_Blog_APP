import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import useGenerateRoutes from 'utils/hooks/useGenereateRoute';

const Routing = () => {
  const { defaultRoutes } = useGenerateRoutes();
  const routes = createBrowserRouter(defaultRoutes, {
    // future: { v7_normalizeFormMethod: true },
  });
  return <RouterProvider router={routes} />;
};

export default Routing;
