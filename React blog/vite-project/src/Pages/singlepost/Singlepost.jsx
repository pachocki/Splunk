import React from "react";
import Image from "../../assets/modern-interior.jpg";
import {FaEdit , FaTrashAlt} from "react-icons/fa"

const Singlepost = () => {
  return (
    <div>
      <div>
        <img
          src={Image}
          className="w-full h-[85vh] rounded-xl object-cover"
          alt="interior"
        />
      </div>
      <div className="flex justify-between pt-4 text-lg border-b-[1px] w-3/4 m-auto">
        <span>
          <b>Author:W.Pachocki</b>
        </span>
        <span>
          <b>Interior</b>
        </span>
        <span>
          <b>Date:01.01.2023</b>
        </span>
      </div>
      <div className="text-5xl text-center pt-6 relative">
        <h1>Tu jest tytul tego calego artykulu</h1>
        <div className="absolute right-5 top-6 flex gap-5">
        <FaEdit className="text-green-500 text-2xl cursor-pointer hover:opacity-50"/>
        <FaTrashAlt className="text-red-500 text-2xl cursor-pointer hover:opacity-50" />
        </div>
      </div>
      <div className="text-2xl w-3/4 m-auto pt-16">
        <p>
          Modern interior design is characterized by clean lines, simplicity,
          and a focus on functionality. In recent years, there has been a shift
          towards more sustainable and environmentally-conscious design, as well
          as a move away from the minimalist aesthetic that was popular in the
          past. 
          
          <p className="pt-5">Here are some of the top modern interior design trends right
          now:<br/></p><p>Biophilic design incorporates elements of
          nature into the built environment. This can include things like
          natural light, plants, and organic materials. Biophilic design has
          been shown to have a number of benefits, including improved mental
          health, increased productivity, and reduced stress. Sustainable
          materials: More and more people are looking for ways to reduce their
          environmental impact, and this is reflected in their interior design
          choices. Sustainable materials, such as bamboo, cork, and recycled
          materials, are becoming increasingly popular. </p>
          <div className="py-10 flex gap-5 justify-center m-w-screen px-5"> 
          <img src={Image} className="w-1/3"/>
          <img src={Image} className="w-1/3"/>
          <img src={Image} className="w-1/3"/>
         
          </div>
    
          <p>Natural elements, such as wood, stone, and marble, are being used more
          frequently in modern interiors to add warmth and texture. These
          materials can be used on walls, floors, and as accents in furniture
          and decor. Bold color: While minimalism is still popular, there is a
          trend towards using bold, saturated colors in modern interiors. This
          can be a great way to add personality and interest to a space.
          Artistic lighting: Lighting is an important element of modern interior
          design, and there is a trend towards using unique and artistic
          lighting fixtures. These can be statement pieces in themselves, and
          can add a lot of interest to a space.</p>
          <div className="py-10 flex gap-5 justify-center m-w-screen px-5"> 
          <img src={Image} className="w-1/3"/>
          <img src={Image} className="w-1/3"/>
          <img src={Image} className="w-1/3"/>
         
          </div>
            <p>Multifunctional spaces: With</p>
          more and more people working from home, there is a trend towards
          designing multifunctional spaces that can be used for a variety of
          purposes. This can include things like built-in desks and shelving, or
          furniture that can be easily repurposed for different uses. Overall,
          modern interior design is about creating spaces that are functional,
          sustainable, and visually appealing. By incorporating natural
          elements, sustainable materials, and unique lighting and color, you
          can create a modern, trendy space that reflects your personal style.
        </p>
        <div className="py-10 flex gap-5 justify-center m-w-screen px-5"> 
          <img src={Image} className="w-1/3"/>
          <img src={Image} className="w-1/3"/>
          <img src={Image} className="w-1/3"/>
         
          </div>
      </div>
    </div>
  );
};

export default Singlepost;
