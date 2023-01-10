import React from 'react'
import Image from "../../assets/flowers.jpg"

const Write = () => {
  return (
    <div className="pb-20 bg-sky-50 rounded-xl ">
      <div className="w-full">
      <img src={Image} alt="interior" className="rounded-[20px] m-auto w-full object-cover pb-5  h-[80vh]"/>
      </div>
      <form className="flex flex-col">
        <div className="flex justify-center items-center">
        <input type="file" className=" text-sm text-sky-50
      file:mr-4 file:py-2 file:px-4
      file:border-0
      file:text-sm file:font-semibold
      file:bg-black file:text-white
      hover:file:bg-black "/>
        <input type="text" placeholder="Title" autoFocus={true} className="w-[54vw] py-2 bg-gray-100  border-black border-2 focus:border-black/40 focus:ring-black/40 px-2 "/>
        </div>
        <div className="flex justify-center pt-10 ">
          <textarea placeholder="Write your Post" className="border-black border-2 w-3/4 h-80 bg-gray-100 px-2 "></textarea>
        </div>
        <div className="flex justify-center pt-5">
          <button className="py-2 px-5 bg-black text-white">Publish</button>
        </div>
      </form>
    </div>
  )
}

export default Write