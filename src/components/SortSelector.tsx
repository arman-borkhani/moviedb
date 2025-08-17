import { Select, Typography } from 'antd'
import useMovieQueryStore from '../store/useMovieQueryStore'

const SortSelector = () => {
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder)

  return (
    <>
      <Typography.Title level={3}>Sort Results By</Typography.Title>

      <Select
        onChange={(value) => setSortOrder(value)}
        defaultValue="popularity.desc"
        className='w-56'
        options={[
          { value: 'popularity.desc', label: 'Popularity Descending' },
          { value: 'popularity.asc', label: 'Popularity Ascending' },
          { value: 'vote_average.desc', label: 'Rating Descending' },
          { value: 'vote_average.asc', label: 'Rating Ascending' },
          {
            value: 'primary_release_date.desc',
            label: 'Release Date Descending',
          },
          {
            value: 'primary_release_date.asc',
            label: 'Release Date Ascending',
          },
        ]}
      />
    </>
  )
}

export default SortSelector
