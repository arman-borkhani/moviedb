import { Col, Row, Typography } from 'antd'
import useMovies from '../hooks/useMovies'
import MovieCard from './MovieCard'

const MovieGrid = () => {
  const { movies, error } = useMovies()

  return (
    <>
      {error && <Typography.Text>{error}</Typography.Text>}
      <Row gutter={24}>
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
