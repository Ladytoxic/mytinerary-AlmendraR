import { createBrowserRouter } from 'react-router-dom'

//Vistas
import MainLayout from '../layouts/MainLayout'

// Paginas
import HomePage from '../pages/HomePage'
import CitiesPage from '../pages/CitiesPage'
import ErrorPage from '../pages/ErrorPage'

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
    ]
  },
  {
    path: '/*',
    element: <ErrorPage />
  }
])

export default router
