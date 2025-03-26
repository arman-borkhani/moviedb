import { Typography } from 'antd'
import useMovies from '../hooks/useMovies'

const MovieGrid = () => {
  const { movies, error } = useMovies()

  return (
    <>
      {error && <Typography.Text>{error}</Typography.Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  )
}

export default MovieGrid
