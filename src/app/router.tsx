import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([{ path: '/', element: <>Home</> }]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
