import { Flex, Layout } from 'antd'
import logo from '../assets/logo.svg'
import ThemeModeSwitch from './ThemeModeSwitch'

interface Props {
  changeThemeMode: (value: boolean) => void
}

const Navbar = ({ changeThemeMode }: Props) => {
  return (
    <Layout.Header className="flex">
      <div className="container">
        <Flex align="center" justify="space-between" className="h-full">
          <img src={logo} alt="" className="max-w-50" />
          <ThemeModeSwitch onSelectMode={(value) => changeThemeMode(value)} />
        </Flex>
      </div>
    </Layout.Header>
  )
}

export default Navbar
