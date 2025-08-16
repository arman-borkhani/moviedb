import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import noImage from '../../assets/no-image-placeholder.svg'
import Movie from '../../entities/Movie'
import WatchlistRibbon from '../WatchlistRibbon'

interface Props {
  movie: Movie
}

const MoviePoster = ({ movie }: Props) => {
  const path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <figure className="[&_.lazy-load-image-background]:w-full [&_img]:w-full relative">
      <LazyLoadImage
        effect="opacity"
        src={movie.poster_path ? path : noImage}
        className="rounded-lg rounded-tl-none min-h-110 object-cover"
      />

      <WatchlistRibbon movie={movie} />
    </figure>
  )
}

export default MoviePoster
