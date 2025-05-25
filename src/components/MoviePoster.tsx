import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import noImage from '../assets/no-image-placeholder.svg'

interface Props {
  posterPath: string | undefined
}

const MoviePoster = ({ posterPath }: Props) => {
  const placeholderPath = `https://image.tmdb.org/t/p/w200/${posterPath}`
  const path = `https://image.tmdb.org/t/p/w500/${posterPath}`

  return (
    <figure className="[&_*]:w-full">
      <LazyLoadImage
        effect="blur"
        placeholderSrc={posterPath ? placeholderPath : undefined}
        src={posterPath ? path : noImage}
        className="rounded-lg min-h-96 object-cover"
      />
    </figure>
  )
}

export default MoviePoster
