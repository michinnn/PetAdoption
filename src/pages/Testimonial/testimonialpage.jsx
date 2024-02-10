import React from "react";

const Testimonial = () => {
    return(
        <>
        
    {/* START OF TESTIMONIALS */}
          
      <div className='h-screen w-full bg-[#DC8857] px-24 gap-32 flex items-center'>
        <div className='flex w-1/2'>
          <div className='rounded-full bg-white w-96 h-96 z-10 relative shadow-md'></div>
        
            <div className='z-20 absolute left-36'>
              <img src="/pet.png" alt="" className='h-1/2 w-2/3 pt-16'/>
           </div>
        </div>
      </div>
    {/* END OF TESTIMONIALS */}
        
        </>
    )
}

export default Testimonial