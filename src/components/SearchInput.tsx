import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import useSearchMovies from '../hooks/useSearchMovies'

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  const { data, isLoading } = useSearchMovies(debouncedSearch)

  const options = data?.results.map((movie) => {
    const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A'

    return {
      value: `${movie.title} (${year})`,
      key: String(movie.id),
      label: (
        <Link className='block' to={'/movies/' + movie.id}>
          <Typography.Text>
            {movie.title} ({year})
          </Typography.Text>
        </Link>
      ),
    }
  })

  return (
    <AutoComplete
      options={options}
      onSearch={(value) => {
        setTimeout(() => {
          setSearch(value)
        }, 1000)
      }}
      variant="filled"
      prefix={<SearchOutlined className="mr-2" />}
      className="flex grow w-full!"
      size="large"
      placeholder="Search movies..."
      notFoundContent={isLoading ? 'Loading...' : 'No results'}
      allowClear
    ></AutoComplete>
  )
}

export default SearchInput
