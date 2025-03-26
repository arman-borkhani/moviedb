import { ConfigProvider, Layout } from 'antd'
import { useState } from 'react'
import Navbar from './components/Navbar'
import themeConfig from './themeConfig'
import MovieGrid from './components/MovieGrid'

const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  const changeTheme = (value: boolean) => {
    setThemeMode(value ? 'dark' : 'light')
  }

  return (
    <ConfigProvider theme={themeConfig(themeMode)}>
      <Layout className="h-screen flex flex-col">
        <Navbar changeThemeMode={changeTheme} />
        <Layout.Content className="grow">
          <div className="container">
            <MovieGrid />
          </div>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
