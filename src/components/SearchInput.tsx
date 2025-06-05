import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const SearchInput = () => {
  return (
    <form className="flex grow">
      <Input
        prefix={<SearchOutlined className="mr-2" />}
        placeholder="Search for movies..."
        variant="filled"
        size="large"
        allowClear
      />
    </form>
  )
}

export default SearchInput
