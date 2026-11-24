import {Outlet} from "react-router"
import Navbar from "../Components/Navbar"
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default MainLayout
