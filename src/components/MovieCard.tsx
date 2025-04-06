import { StarFilled } from '@ant-design/icons'
import { Card } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Movie from '../entities/Movie'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const posterPlaceholderPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <Card
      cover={
        <LazyLoadImage
          height={340}
          width="100%"
          effect="blur"
          placeholderSrc={posterPlaceholderPath}
          src={posterPath}
        />
      }
    >
      <div className="mb-2">
        <StarFilled className="mr-1 text-base" style={{ color: '#f5c518' }} />
        <span className="text-base">{movie.vote_average.toFixed(1)}</span>
        <span className="text-xs">/10</span>
      </div>
      <Card.Meta title={movie.title}></Card.Meta>
    </Card>
  )
}

export default MovieCard
