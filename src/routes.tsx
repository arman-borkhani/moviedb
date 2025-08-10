import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import MovieSinglePage from './pages/MovieSinglePage'
import ErrorPage from './pages/ErrorPage'
import WatchlistPage from './pages/WatchlistPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'movies/:id', element: <MovieSinglePage /> },
      { path: 'watchlist', element: <WatchlistPage /> },
    ],
  },
])

export default router
