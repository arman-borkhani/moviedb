import { Flex, Spin, Typography } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useParams } from 'react-router'
import noImage from '../assets/no-image-placeholder.svg'
import useMovie from '../hooks/useMovie'

const MovieSinglePage = () => {
  const { id } = useParams()
  const { movie, isLoading, error } = useMovie(id!)

  if (isLoading)
    return (
      <div className="container">
        <Spin />
      </div>
    )

  if (error || !movie) throw error

  const posterPlaceholderPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const releaseDate = new Date(movie.release_date)
  const runTime = movie.runtime

  return (
    <div className="container">
      <div className="grid sm:grid-cols-12 gap-4 lg:gap-10">
        <div className="sm:col-span-3">
          <figure className="[&_*]:w-full">
            <LazyLoadImage
              effect="blur"
              placeholderSrc={
                movie.poster_path ? posterPlaceholderPath : undefined
              }
              src={movie.poster_path ? posterPath : noImage}
              className="rounded-lg"
            />
          </figure>
        </div>

        <div className="sm:col-span-9">
          <Typography.Title level={1} style={{ marginBottom: '0.25rem' }}>
            {movie.title}

            <span className="opacity-80 font-medium">{` (${releaseDate.getFullYear()})`}</span>
          </Typography.Title>

          <Flex wrap align="center" gap="small">
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
        </div>
      </div>
    </div>
  )
}

export default MovieSinglePage
