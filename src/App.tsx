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
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar changeThemeMode={changeTheme} />
        <Layout.Content className='grow py-10'>
          <div className="container">
            <MovieGrid />
          </div>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
