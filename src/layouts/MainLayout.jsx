import  {Outlet}  from 'react-router'
import Narbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
