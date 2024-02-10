import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Testimonial = () => {
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
        <h1 className="text-8xl text-left font-protest text-white">UNDER CONSTRUCTION</h1>
      </div>
    {/* END OF TESTIMONIALS */}
        
        </>
    )
}

export default Testimonial