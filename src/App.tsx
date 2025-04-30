import { ConfigProvider, Layout } from 'antd'
import { useState } from 'react'
import GenreList from './components/GenreList'
import MovieGrid from './components/MovieGrid'
import Navbar from './components/Navbar'
import MovieQuery from './entities/MovieQuery'
import themeConfig from './themeConfig'

const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery)

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
                <GenreList
                  selectedGenre={movieQuery.genre}
                  onSelectGenre={(genre) =>
                    setMovieQuery({ ...movieQuery, genre })
                  }
                />
              </div>
              <div>
                <MovieGrid movieQuery={movieQuery} />
              </div>
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
