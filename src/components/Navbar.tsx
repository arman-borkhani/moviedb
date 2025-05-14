import { Flex, Layout } from 'antd'
import logo from '../assets/logo.svg'
import ThemeModeSwitch from './ThemeModeSwitch'

const Navbar = () => {
  return (
    <Layout.Header className="flex">
      <div className="container">
        <Flex align="center" justify="space-between" className="h-full">
          <img src={logo} alt="" className="max-w-50" />
          <ThemeModeSwitch />
        </Flex>
      </div>
    </Layout.Header>
  )
}

export default Navbar
