import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import HomePage from '../pages/HomePage';
import CitiesPage from '../pages/CitiesPage';
import ErrorPage from '../pages/ErrorPage';
import LoginRegisterPage from '../pages/LoginRegisterPage';
import CitiesDetailsPage from '../pages/CitiesDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/cities',
        element: <CitiesPage />
      },
      {
        path: '/cities/:_id',
        element: <CitiesDetailsPage />
      },
    ]
  },
  {
    path: '/login',
    element: <LoginRegisterPage />
  },
  {
    path: '/*',
    element: <ErrorPage />
  }
]);

export default router;
