import { Alert } from 'antd'
import MovieQuery from '../entities/MovieQuery'
import useMovies from '../hooks/useMovies'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'

interface Props {
  movieQuery: MovieQuery
}

const MovieGrid = ({ movieQuery }: Props) => {
  const { movies, error, isLoading } = useMovies(movieQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  if (error) return <Alert message={error.message} type="error" />

  return (
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
  )
}

export default MovieGrid
