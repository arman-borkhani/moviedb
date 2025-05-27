import { Flex, Typography } from 'antd'
import Movie from '../../entities/Movie'

interface Porps {
  movie: Movie
}

const MovieHeading = ({ movie }: Porps) => {
  const releaseDate = new Date(movie.release_date)
  const runTime = movie.runtime

  return (
    <Flex vertical gap={4} className="mb-8!">
      <Typography.Title level={1} className="m-0!">
        {movie.title}

        {movie.release_date && (
          <span className="opacity-80 font-medium">{` (${releaseDate.getFullYear()})`}</span>
        )}
      </Typography.Title>

      <Flex wrap align="center" gap="small">
        {movie.release_date && (
          <div>
            {releaseDate.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        )}

        {movie.genres.length > 0 && (
          <>
            <div className="w-1 h-1 rounded-full bg-current"></div>

            <div>
              {movie.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < movie.genres.length - 1 && ', '}
                </span>
              ))}
            </div>
          </>
        )}

        {runTime > 0 && (
          <>
            <div className="w-1 h-1 rounded-full bg-current"></div>

            <div>{`${Math.floor(runTime / 60)}h ${runTime % 60}m`}</div>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default MovieHeading
