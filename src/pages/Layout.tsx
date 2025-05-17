import { Layout as AntLayout, ConfigProvider } from 'antd'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import useUIStore from '../store/useUIStore'
import themeConfig from '../themeConfig'

const Layout = () => {
  const darkMode = useUIStore((s) => s.darkMode)

  return (
    <ConfigProvider theme={themeConfig(darkMode ? 'dark' : 'light')}>
      <AntLayout style={{ minHeight: '100vh' }}>
        <Navbar />
        <AntLayout.Content className="grow py-10">
          <Outlet />
        </AntLayout.Content>
      </AntLayout>
    </ConfigProvider>
  )
}

export default Layout
