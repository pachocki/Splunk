import React from 'react'
import Image from "../../assets/profil-photo.webp"

const ProfileSetings = () => {
  return (
    <div className="bg-red-100 rounded-xl px-5 h-[92vh]">
        <div className="flex justify-between items-center pt-10">
            <h1 className="text-5xl ">Update Your Account</h1>
            <span className="text-2xl hover:text-red-500">Delete Account</span>
        </div>
        <div  className="pt-10 w-1/3 m-auto">
            <h2 className="text-2xl">Profile Picture</h2>
            <div className="flex gap-5 py-5 items-center">
            <img src={Image} alt="profil" className="w-[50px] h-[50px] rounded-full"/>
            <input type="file" className="text-sm text-red-100
      file:mr-4 file:py-2 file:px-4
      file:border-0
      file:text-sm file:font-semibold
      file:bg-black file:text-white
      hover:file:bg-black"/>
            </div>
        </div>
        <form className="flex flex-col justify-center w-1/3 m-auto gap-2">
            <label className="text-3xl">Username</label>
            <input type="text" placeholder="Username" className="py-2 px-1"/>
            <label className="text-3xl">Email</label>
            <input type="text" placeholder="E-mail" className="py-2 px-1"/>
            <label className="text-3xl">Password</label>
            <input type="password" className="py-2 px-1" placeholder="Password"/>
            <button className="py-1 px-2 bg-black text-white text-xl mt-8">Update</button>
        </form>
      
    </div>
  )
}

export default ProfileSetings
