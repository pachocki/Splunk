import React from 'react'
import {NavLink , Link} from "react-router-dom"
import Image from "../../assets/profil-photo.webp"
import {BsSearch} from "react-icons/bs"

const Menu = () => {
  return (
    <nav className="flex justify-between items-center px-5 w-full m-auto sticky top-0 right-0 py-2  text-3xl backdrop-2xl  bg-white/80  z-20  rounded-xl">
      <div className=""><h2>_ArchTeK</h2></div>
      <ul className="flex gap-5 items-center">
        <li  className="hover:opacity-50  delay-150 transition-all "><NavLink to="/blog">Blog</NavLink></li>
        <li className="hover:opacity-50  delay-150 transition-all "><NavLink to="/about">About</NavLink></li>
        <li className="hover:opacity-50  delay-150 transition-all "><NavLink to="/write">Write</NavLink></li>
        <li className="hover:opacity-50  delay-150 transition-all "><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="flex items-center gap-5">
        <img src={Image} alt="profil" className="w-[50px] h-[50px] rounded-full"/>
        <BsSearch/>
      </div>
    </nav>
  )
}

export default Menu