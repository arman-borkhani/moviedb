import { SearchOutlined } from '@ant-design/icons'
import type { InputRef } from 'antd'
import { Input } from 'antd'
import { useRef } from 'react'
import { useNavigate } from 'react-router'
import useMovieQueryStore from '../store/useMovieQueryStore'

const SearchInput = () => {
  const ref = useRef<InputRef>(null)
  const navigate = useNavigate()
  const setSearchText = useMovieQueryStore((s) => s.setSearchText)
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText)

  return (
    <form
      className="flex grow"
      onSubmit={(event) => {
        event.preventDefault()
        if (ref.current?.input) {
          setSearchText(ref.current.input.value)
          navigate('/search')
        }
      }}
    >
      <Input
        ref={ref}
        prefix={<SearchOutlined className="mr-2" />}
        placeholder="Search for movies..."
        variant="filled"
        size="large"
        allowClear
        value={searchText}
        onClear={() => setSearchText('')}
      />
    </form>
  )
}

export default SearchInput
