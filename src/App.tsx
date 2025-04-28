import { ConfigProvider, Layout } from 'antd'
import { useState } from 'react'
import GenreList from './components/GenreList'
import MovieGrid from './components/MovieGrid'
import Navbar from './components/Navbar'
import Genre from './entities/Genre'
import themeConfig from './themeConfig'

const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  const changeTheme = (value: boolean) => {
    setThemeMode(value ? 'dark' : 'light')
  }

  return (
    <ConfigProvider theme={themeConfig(themeMode)}>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar changeThemeMode={changeTheme} />
        <Layout.Content className="grow py-10">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="lg:w-56 shrink-0">
                <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
              </div>
              <div>
                <MovieGrid selectedGenre={selectedGenre} />
              </div>
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
