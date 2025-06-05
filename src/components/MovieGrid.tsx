import { Alert, Flex, Spin } from 'antd'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useMovies from '../hooks/useMovies'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'

const MovieGrid = () => {
  const { movies, error, isLoading, fetchNextPage, hasNextPage } = useMovies()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  if (error) return <Alert message={error.message} type="error" />

  const fetchedMoviesCount = movies.reduce(
    (total, page) => total + page.results.length,
    0,
  )

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <Flex justify="center" align="center" style={{ marginTop: '2rem' }}>
          <Spin size="large"></Spin>
        </Flex>
      }
      style={{ overflow: 'initial' }}
    >
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
    </InfiniteScroll>
  )
}

export default MovieGrid
