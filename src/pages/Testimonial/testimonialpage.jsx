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
              <img src="peticon.png" alt="" className="w-2/3 lg:w-3/4"/>
           </div>

           <div className="flex flex-col w-full justify-center">
             <p className="text-white text-sm lg:text-xl font-serif pt-10">here are some of our responsible</p>
              <h1 className="text-5xl lg:text-8xl text-left font-protest text-white">Furparents</h1>
             <p className="text-white text-sm lg:text-xl font-serif">who shares their <span className="text-2xl lg:text-3xl text-white italic font-semibold">lovely</span> stories after adopting our dear angels.</p>
           </div>

          </div>

      </div>

      
      <div className="h-screen w-full px-8 lg:px-20 pt-10 lg:pt-40">
        <div className="grid grid-col gap-10 lg:grid lg:grid-cols-3 lg:gap-20 justify-center">


            <Testimonies Title = "Maggie & Lorice" 
                          desc ="lorem ipsum dolor sit amet consectetur adipiscing elit, pulvinar enim aenean quis curae risus libero, nec leo curabitur cubilia nascetur rhoncus. Senectus odio ante habitant vehicula orci taciti turpis, varius etiam ullamcorper dapibus magna ac, vivamus nostra nulla auctor blandit faucibus. "/>
            <Testimonies Title = "Maggie & Lorice" 
                          desc ="lorem ipsum dolor sit amet consectetur adipiscing elit, pulvinar enim aenean quis curae risus libero, nec leo curabitur cubilia nascetur rhoncus. Senectus odio ante habitant vehicula orci taciti turpis, varius etiam ullamcorper dapibus magna ac, vivamus nostra nulla auctor blandit faucibus. "/>
            <Testimonies Title = "Maggie & Lorice" 
                          desc ="lorem ipsum dolor sit amet consectetur adipiscing elit, pulvinar enim aenean quis curae risus libero, nec leo curabitur cubilia nascetur rhoncus. Senectus odio ante habitant vehicula orci taciti turpis, varius etiam ullamcorper dapibus magna ac, vivamus nostra nulla auctor blandit faucibus. "/>
        
        </div>
      </div>
    {/* END OF TESTIMONIALS */}
        
        </>
    )
}

export default Testimonial