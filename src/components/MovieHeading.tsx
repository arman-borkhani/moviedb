import { Flex, Typography } from 'antd'
import Movie from '../entities/Movie'

interface Porps {
  movie: Movie
}

const MovieHeading = ({ movie }: Porps) => {
  const releaseDate = new Date(movie.release_date)
  const runTime = movie.runtime

  return (
    <>
      <Typography.Title level={1} style={{ marginBottom: '0.25rem' }}>
        {movie.title}

        <span className="opacity-80 font-medium">{` (${releaseDate.getFullYear()})`}</span>
      </Typography.Title>

      <Flex wrap align="center" gap="small" style={{ marginBottom: '2rem' }}>
        <div>
          {releaseDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>

        <div className="w-1 h-1 rounded-full bg-current"></div>

        <div>
          {movie.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < movie.genres.length - 1 && ', '}
            </span>
          ))}
        </div>

        <div className="w-1 h-1 rounded-full bg-current"></div>

        <div>{`${Math.floor(runTime / 60)}h ${runTime % 60}m`}</div>
      </Flex>
    </>
  )
}

export default MovieHeading
