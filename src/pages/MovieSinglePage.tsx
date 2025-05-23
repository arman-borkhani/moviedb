import { Spin, Typography } from 'antd'
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
          <Typography.Title level={1}>{movie.title}</Typography.Title>
        </div>
      </div>
    </div>
  )
}

export default MovieSinglePage
