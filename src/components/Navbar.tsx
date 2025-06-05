import { Layout } from 'antd'
import { Link } from 'react-router'
import logo from '../assets/logo.svg'
import SearchInput from './SearchInput'
import ThemeModeSwitch from './ThemeModeSwitch'

const Navbar = () => {
  return (
    <Layout.Header className="flex">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          <Link to="/">
            <img src={logo} alt="" className="w-50" />
          </Link>

          <div className="md:order-3">
            <ThemeModeSwitch />
          </div>

          <div className="order-2 grow w-full md:w-auto">
            <SearchInput />
          </div>
        </div>
      </div>
    </Layout.Header>
  )
}

export default Navbar
