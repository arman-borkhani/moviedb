import { StarFilled } from '@ant-design/icons'
import { Card } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router'
import noImage from '../assets/no-image-placeholder.svg'
import Movie from '../entities/Movie'
import WatchlistRibbon from './WatchlistRibbon'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const posterPlaceholderPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const releaseDate = new Date(movie.release_date)
  const movieTitle = movie.release_date
    ? `${movie.title} (${releaseDate.getFullYear()})`
    : movie.title

  return (
    <Card
      cover={
        <LazyLoadImage
          effect="blur"
          placeholderSrc={movie.poster_path ? posterPlaceholderPath : undefined}
          src={movie.poster_path ? posterPath : noImage}
          className="w-full lg:h-72 object-cover rounded-tr-xl"
        />
      }
      hoverable
    >
      <Card.Meta
        title={movieTitle}
        description={
          <>
            <StarFilled
              className="mr-1 text-base"
              style={{ color: '#f5c518' }}
            />
            <span className="text-base">{movie.vote_average.toFixed(1)}</span>
            <span className="text-xs">/10</span>
          </>
        }
      ></Card.Meta>
      <Link className="absolute inset-0" to={'/movies/' + movie.id}></Link>

      <WatchlistRibbon movie={movie} />
    </Card>
  )
}

export default MovieCard
