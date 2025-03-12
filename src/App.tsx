import { ConfigProvider, Layout } from 'antd'
import { useState } from 'react'
import Navbar from './components/Navbar'
import themeConfig from './themeConfig'

const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  const changeTheme = (value: boolean) => {
    setThemeMode(value ? 'dark' : 'light')
  }

  return (
    <ConfigProvider theme={themeConfig(themeMode)}>
      <Layout className="h-screen flex flex-col">
        <Navbar changeThemeMode={changeTheme} />
        <Layout.Content className="grow"></Layout.Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
