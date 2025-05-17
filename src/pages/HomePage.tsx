import { Space } from 'antd'
import GenreList from '../components/GenreList'
import MovieGrid from '../components/MovieGrid'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-56 shrink-0">
          <Space direction="vertical" size="large">
            <SortSelector />

            <GenreList />
          </Space>
        </div>
        <div className="grow">
          <MovieGrid />
        </div>
      </div>
    </div>
  )
}

export default HomePage
