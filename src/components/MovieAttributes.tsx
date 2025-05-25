import { Descriptions } from 'antd'
import Movie from '../entities/Movie'

interface Props {
  movie: Movie
}

const MovieAttributes = ({ movie }: Props) => {
  const { budget, status, revenue, original_language } = movie

  const descriptionItems = [
    { label: 'Status', key: 'status', children: status },
    {
      label: 'Original Language',
      key: 'original_language',
      children: original_language,
    },
    {
      label: 'Budget',
      key: 'budget',
      children: budget > 0 ? `$${formatPrice(budget)}` : 'N/A',
    },
    {
      label: 'Revenue',
      key: 'revenue',
      children: revenue > 0 ? `$${formatPrice(revenue)}` : 'N/A',
    },
  ]

  function formatPrice(num: number) {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <Descriptions
      column={2}
      title="More Info"
      layout="horizontal"
      items={descriptionItems}
    />
  )
}

export default MovieAttributes
