import React from "react";
import Testimonies from "../../Components/testimonies/testimonies";

function Testimonial (){

    return(
        <>
        
    {/* START OF TESTIMONIALS */}
          
      <div className='h-screen w-full bg-[#DC8857] px-8 lg:px-20 pt-16 flex flex-col lg:flex-row items-center'>
        <div className='flex'>
        
         </div>

          <div className="flex flex-col lg:flex-row w-full lg:justify-between items-center">

          <div className='z-20 w-full flex justify-center'>
              <img src="/peticon.png" alt="" className="w-2/3 lg:w-3/4"/>
           </div>

           <div className="flex flex-col w-full justify-center">
             <p className="text-white text-sm lg:text-xl font-serif pt-10">here are some of our responsible</p>
              <h1 className="text-5xl lg:text-8xl text-left font-protest text-white">Furparents</h1>
             <p className="text-white text-sm lg:text-xl font-serif">who shares their <span className="text-2xl lg:text-3xl text-white italic font-semibold">lovely</span> stories after adopting our dear angels.</p>
           </div>

          </div>

      </div>

      
      <div className="h-screen w-full px-8 lg:px-20 pt-10 lg:pt-40">
        <div className="grid grid-col gap-10 lg:grid lg:grid-cols-3 lg:gap-20 justify-center h-full pb-20">


            <Testimonies Title = "Ms. Imee & Rocky" 
                          image = "/imeeandrocky.jpg"
                          desc ="Rocky’s sweetness and kindness towards Imee led the two to form a strong bond. Now, when we ask for pictures, Imee will tell us not to include Rocky. She will be Rocky’s adopter. I am so happy to oblige given the very obvious happiness of this dog with her furmom. They are basically inseparable."/>
            <Testimonies Title = "Ms. Terry & Tofu" 
                          image = "/teryandtofu.jpg"
                          desc ="Tofu: rescued May 2023, adopted by Ms. Terry"/>
            <Testimonies Title = "Ms. Cupie, Happy & Caly"
                          image = "/cupieandcalyandhappy.jpg" 
                          desc ="Rescues Aspin Happy and Shih Caly, bffs furever."/>
        
        </div>
      </div>
    {/* END OF TESTIMONIALS */}
        
        </>
    )
}

export default Testimonial