import React from 'react'
import {Link} from "react-router-dom"

const MiddNewsBlogCard = (props) => {
  return (
    <div>
         <div className="flex flex-col w-full rounded-xl overflow-hidden">
          <div>
            <img src={props.image} className="w-full" alt="interior" />
          </div>
          <div className="bg-stone-400/40 px-2 pb-2 ">
            <div className="flex justify-between text-lg  py-2">
              <span>{props.date}</span>
              <span>{props.category}</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold pb-3">
               {props.title}
              </h3>
              <p className="text-xl pb-5">
               {props.text}
              </p>
              <Link to={props.link}><span className="underline hover:opacity-20">Read More</span></Link> 
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default MiddNewsBlogCard
