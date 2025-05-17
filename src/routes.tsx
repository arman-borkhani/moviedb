import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import MovieSinglePage from './pages/MovieSinglePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'movies/:id', element: <MovieSinglePage /> },
    ],
  },
])

export default router
