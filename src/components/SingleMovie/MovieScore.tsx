import { StarFilled } from '@ant-design/icons'

interface Props {
  movieVoteAverage: number
}

const MovieScore = ({ movieVoteAverage }: Props) => {
  if (movieVoteAverage === 0) return null

  return (
    <div className="flex items-center mb-8">
      <StarFilled
        className="mr-1 text-base"
        style={{ color: 'var(--yellow)', fontSize: '1.875rem' }}
      />

      <div>
        <span className="text-xl font-semibold">
          {movieVoteAverage.toFixed(1)}
        </span>

        <span className="text-sm">/10</span>
      </div>
    </div>
  )
}

export default MovieScore
