import React from "react";
import Testimonies from "../../Components/testimonies/testimonies";

function Testimonial (){

    return(
        <>
        
    {/* START OF TESTIMONIALS */}
          
      <div className='h-screen w-full bg-[#DC8857] px-24 gap-32 flex items-center'>
        <div className='flex w-1/2'>
          <div className='rounded-full bg-white w-96 h-96 z-10 relative shadow-md'></div>
        
            <div className='z-20 absolute left-36'>
              <img src="/PetAdoption/pet.png" alt="" className='h-1/2 w-2/3 pt-16'/>
           </div>
        </div>
          <div>
            <p className="text-white text-xl font-serif">here are some of our responsible</p>
            <h1 className="text-8xl text-left font-protest text-white">Furparents</h1>
            <p className="text-white text-xl font-serif">who shares their <span className="text-3xl text-white italic font-semibold">lovely</span> stories after adopting our dear angels.</p>
          </div>

      </div>

      
      <div className="h-screen w-full px-24 pt-40">
        <div className="grid grid-cols-3 gap-20 justify-center">


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