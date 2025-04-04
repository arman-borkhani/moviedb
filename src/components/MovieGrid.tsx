import { Col, Row, Typography } from 'antd'
import useMovies from '../hooks/useMovies'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies()
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Typography.Text>{error}</Typography.Text>}

      <Row gutter={24}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Col
              className="gutter-row py-2"
              xs={24}
              sm={12}
              md={6}
              xl={4}
              key={skeleton}
            >
              <MovieCardSkeleton />
            </Col>
          ))}

        {movies.map((movie) => (
          <Col className="gutter-row py-2" sm={12} md={6} xl={4} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default MovieGrid
