import { ConfigProvider, Layout, Space } from 'antd'
import { useState } from 'react'
import GenreList from './components/GenreList'
import MovieGrid from './components/MovieGrid'
import Navbar from './components/Navbar'
import MovieQuery from './entities/MovieQuery'
import themeConfig from './themeConfig'
import SortSelector from './components/SortSelector'

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
                <Space direction="vertical" size="large">
                  <SortSelector
                    onSelectSortOrder={(sortOrder) =>
                      setMovieQuery({ ...movieQuery, sortOrder })
                    }
                  />

                  <GenreList
                    selectedGenreId={movieQuery.genreId}
                    onSelectGenre={(genre) =>
                      setMovieQuery({ ...movieQuery, genreId: genre.id })
                    }
                  />
                </Space>
              </div>
              <div className="grow">
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
