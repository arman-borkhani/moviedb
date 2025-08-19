import { Space } from 'antd'
import GenreList from '../components/GenreList'
import MovieGrid from '../components/MovieGrid'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-56 shrink-0">
          <div className='sticky top-6 z-10'>
            <Space direction="vertical" size="large">
              <SortSelector />

              <GenreList />
            </Space>
          </div>
        </div>
        <div className="grow">
          <MovieGrid />
        </div>
      </div>
    </div>
  )
}

export default HomePage
