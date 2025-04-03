import { StarFilled } from '@ant-design/icons'
import { Card } from 'antd'
import Movie from '../entities/Movie'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      cover={
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
