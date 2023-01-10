import React from "react";
import {Link} from "react-router-dom"
import Interior from "../../../assets/modern-interior.jpg";
import Mikrohouse from "../../../assets/small-houses.jpg"
import Plants from "../../../assets/flowers.jpg"
import Paintings from "../../../assets/colors.jpg"
import Materials from "../../../assets/materials.jpg"
import NewsBlogCards from "../../../components/blog-cards/NewsBlogCards";
import MiddNewsBlogCard from "../../../components/blog-cards/MiddNewsBlogCard";

const News = () => {
  return (
    <div className=" pt-5 pb-20  w-5/6 mx-auto border-b-[1px] border-gray mb-10 ">
      <h2 className="pb-5 text-center text-6xl">News</h2>
      <hr></hr>
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 justify-items-center items-start w-full m-auto pt-10">
        <div className="flex flex-col gap-2">
        <NewsBlogCards image={Plants} date="Date:05/01/2023" category="Interior" title="Styl klasyczny jest nadal najbardziej popularnym stylem." text=" Nowoczesność jest z nami od lat i jest chyba najbardziej
                  popularną stylistyką. Może przyjmować różne „twarze” i
                  sprawdzać się nie tylko we wnętrzach mieszkalnych, ale również
                  tych komercyjnych czy publicznych. Fajnie łączy się z drewnem,
                  efektem betonu oraz tkaninami typu bawełna (lub imitacja
                  bawełny)." link=""/>
          
         
          <NewsBlogCards image={Mikrohouse} date="Date:05/01/2023" category="Interior" title="Styl klasyczny jest nadal najbardziej popularnym stylem." text=" Nowoczesność jest z nami od lat i jest chyba najbardziej
                  popularną stylistyką. Może przyjmować różne „twarze” i
                  sprawdzać się nie tylko we wnętrzach mieszkalnych, ale również
                  tych komercyjnych czy publicznych. Fajnie łączy się z drewnem,
                  efektem betonu oraz tkaninami typu bawełna (lub imitacja
                  bawełny)." link=""/>
           </div>
          <MiddNewsBlogCard image={Interior} date="Date:05/01/2023" category="Interior" title="Styl klasyczny jest nadal najbardziej popularnym stylem." text=" Nowoczesność jest z nami od lat i jest chyba najbardziej
                  popularną stylistyką. Może przyjmować różne „twarze” i
                  sprawdzać się nie tylko we wnętrzach mieszkalnych, ale również
                  tych komercyjnych czy publicznych. Fajnie łączy się z drewnem,
                  efektem betonu oraz tkaninami typu bawełna (lub imitacja
                  bawełny)." link=""/>
        <div className="flex flex-col gap-2">
        <NewsBlogCards image={Paintings} date="Date:05/01/2023" category="Interior" title="Styl klasyczny jest nadal najbardziej popularnym stylem." text=" Nowoczesność jest z nami od lat i jest chyba najbardziej
                  popularną stylistyką. Może przyjmować różne „twarze” i
                  sprawdzać się nie tylko we wnętrzach mieszkalnych, ale również
                  tych komercyjnych czy publicznych. Fajnie łączy się z drewnem,
                  efektem betonu oraz tkaninami typu bawełna (lub imitacja
                  bawełny)." link=""/>
     
          <div className="flex flex-col">
             <NewsBlogCards image={Materials} date="Date:05/01/2023" category="Interior" title="Styl klasyczny jest nadal najbardziej popularnym stylem." text=" Nowoczesność jest z nami od lat i jest chyba najbardziej
                  popularną stylistyką. Może przyjmować różne „twarze” i
                  sprawdzać się nie tylko we wnętrzach mieszkalnych, ale również
                  tych komercyjnych czy publicznych. Fajnie łączy się z drewnem,
                  efektem betonu oraz tkaninami typu bawełna (lub imitacja
                  bawełny)." link="" bg="bg-stone-400/40"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
