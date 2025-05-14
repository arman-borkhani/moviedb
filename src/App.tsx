import { ConfigProvider, Layout, Space } from 'antd'
import GenreList from './components/GenreList'
import MovieGrid from './components/MovieGrid'
import Navbar from './components/Navbar'
import SortSelector from './components/SortSelector'
import useUIStore from './store/useUIStore'
import themeConfig from './themeConfig'

const App = () => {
  const darkMode = useUIStore((s) => s.darkMode)

  return (
    <ConfigProvider theme={themeConfig(darkMode ? 'dark' : 'light')}>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Layout.Content className="grow py-10">
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
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
