import { Flex, Layout } from 'antd'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'
import ThemeModeSwitch from './ThemeModeSwitch'

const Navbar = () => {
  return (
    <Layout.Header className="flex">
      <div className="container">
        <Flex align="center" justify="space-between" className="h-full">
          <Link to="/">
            <img src={logo} alt="" className="max-w-50" />
          </Link>
          <ThemeModeSwitch />
        </Flex>
      </div>
    </Layout.Header>
  )
}

export default Navbar
