import React , {useState} from 'react'

const Hero = () => {
  const [time, setTime] = useState('');
  setTimeout(() => {
      setInterval(() => {
          setTime(new Date().toLocaleTimeString())
      }, 1000)
  })
  return (
    <div className="  mt-2 w-full h-[90vh] bg-bottom bg-cover bg-hero-home rounded-xl text-center relative ">
        
        <h1 className="text-7xl pt-36 pb-4">Architecture Design Visualisation  </h1>
        <h2 className="text-2xl">With passion and love  to beatifull inspiration.</h2>
        <div className='px-3 py-1 bg-white/20 backdrop-blur-3xl bottom-2 right-10 absolute text-3xl rounded-xl'>
        <h2 className="">{new Date().toLocaleTimeString()}</h2>
        </div>
        
    </div>
  )
}

export default Hero
