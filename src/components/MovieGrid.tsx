import { Alert, Button } from 'antd'
import React from 'react'
import MovieQuery from '../entities/MovieQuery'
import useMovies from '../hooks/useMovies'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'

interface Props {
  movieQuery: MovieQuery
}

const MovieGrid = ({ movieQuery }: Props) => {
  const {
    movies,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies(movieQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  if (error) return <Alert message={error.message} type="error" />

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading &&
          skeletons.map((skeleton) => (
            <div key={skeleton}>
              <MovieCardSkeleton />
            </div>
          ))}
        {movies.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </>
  )
}

export default MovieGrid
