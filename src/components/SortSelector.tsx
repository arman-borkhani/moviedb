import { Select, Typography } from 'antd'

const SortSelector = () => {
  return (
    <>
      <Typography.Title level={3}>Sort Results By</Typography.Title>

      <Select
        defaultValue="popularity.desc"
        style={{ width: 200 }}
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
          { value: 'title.desc', label: 'Title (A-Z)' },
          { value: 'title.asc', label: 'Title (Z-A)' },
        ]}
      />
    </>
  )
}

export default SortSelector
