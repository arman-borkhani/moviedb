import { Typography } from 'antd'
import useMovies from '../hooks/useMovies'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Typography.Text>{error}</Typography.Text>}

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading &&
          skeletons.map((skeleton) => (
            <div key={skeleton}>
              <MovieCardSkeleton />
            </div>
          ))}
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  )
}

export default MovieGrid
