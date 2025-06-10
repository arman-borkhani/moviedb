import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import MovieSinglePage from './pages/MovieSinglePage'
import ErrorPage from './pages/ErrorPage'
import MovieSearchResult from './pages/MovieSearchResult'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'movies/:id', element: <MovieSinglePage /> },
      { path: 'search', element: <MovieSearchResult /> },
    ],
  },
])

export default router
