import { Flex, Typography } from 'antd'
import Movie from '../../entities/Movie'

interface Porps {
  movie: Movie
}

const MovieHeading = ({ movie }: Porps) => {
  const releaseDate = new Date(movie.release_date)
  const runTime = movie.runtime

  return (
    <Flex vertical gap={4} style={{ marginBottom: '2rem' }}>
      <Typography.Title level={1} style={{ margin: 0 }}>
        {movie.title}

        {movie.release_date && (
          <span className="opacity-80 font-medium">{` (${releaseDate.getFullYear()})`}</span>
        )}
      </Typography.Title>

      <Flex wrap align="center" gap="small">
        {movie.release_date && (
          <div className="flex items-center gap-2 [&:last-child]:after:hidden after:w-1 after:h-1 after:inline-block after:rounded-full after:bg-current">
            {releaseDate.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        )}

        {movie.genres.length > 0 && (
          <div className="flex items-center gap-2 [&:last-child]:after:hidden after:w-1 after:h-1 after:inline-block after:rounded-full after:bg-current">
            {movie.genres.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index < movie.genres.length - 1 && ', '}
              </span>
            ))}
          </div>
        )}

        {runTime > 0 && (
          <div className="movie-heading-info">{`${Math.floor(runTime / 60)}h ${
            runTime % 60
          }m`}</div>
        )}
      </Flex>
    </Flex>
  )
}

export default MovieHeading
