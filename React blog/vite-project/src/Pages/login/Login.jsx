import React from 'react'

const Login = () => {
  return (
    <div className="bg-teal-400 rounded-xl px-5 h-[92vh] text-white">
      <div className="flex flex-col justify-center w-1/3 items-center m-auto pt-20">
        <h1 className="text-6xl ">Login</h1>
        <form className="pt-10 flex flex-col  gap-2 w-2/3">
          <label className="text-2xl">Username</label>
          <input type="text" className="py-2 px-2" placeholder="Username"/>
          <label className="text-2xl">Password</label>
          <input type="text" className="py-2 px-2" placeholder="Password"/>
          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-col">
            <span >You dont have account ?</span>
            <button className="underline text-lg text-left hover:opacity-50">Register</button>
            </div>
     
      <button className="py-1 px-2 bg-black text-white text-xl">Login</button>

      </div>
        </form>
      </div>
     

    </div>
  )
}

export default Login