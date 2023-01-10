import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from "../components/menu/Menu"
import Footer from "../components/footer/Footer"

const Layout = () => {
  return (
    <div className="mx-auto w-[98%]">
      <Menu/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
