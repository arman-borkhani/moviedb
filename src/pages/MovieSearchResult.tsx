import { Alert, Flex, Space, Spin, Tag, Typography } from 'antd'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieCard from '../components/MovieCard'
import MovieCardSkeleton from '../components/MovieCardSkeleton'
import useSearchMovies from '../hooks/useSearchMovies'

const MovieSearchResult = () => {
  const { movies, totalResults, error, isLoading, fetchNextPage, hasNextPage } =
    useSearchMovies()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  if (error) return <Alert message={error.message} type="error" />

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-56 shrink-0">
          <Typography.Title level={3}>Search Results</Typography.Title>

          <Flex gap="small" justify="space-between">
            <Typography.Text>Movies</Typography.Text>

            <Tag color="blue">{totalResults}</Tag>
          </Flex>
        </div>

        <div className="grow">
          <Space direction="vertical" size="large" className="w-full">
            <InfiniteScroll
              dataLength={totalResults}
              hasMore={!!hasNextPage}
              next={() => fetchNextPage()}
              loader={
                <Flex
                  justify="center"
                  align="center"
                  style={{ marginTop: '2rem' }}
                >
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
                    {page.results.length < 1 && (
                      <Alert
                        message="There are no movies that matched your query."
                        type="error"
                        className="col-span-full"
                      />
                    )}

                    {page.results.map((movie) => (
                      <div key={movie.id}>
                        <MovieCard movie={movie} />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </InfiniteScroll>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default MovieSearchResult
