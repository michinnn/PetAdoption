// import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <>
        
        {/* start of body */}
<div className='h-screen w-full flex flex-col py-16 px-14 gap-5 items-center lg:flex-row lg:px-24 lg:gap-32'>
  <div className='flex flex-col lg:flex-row w-full lg:w-1/2'>
  <img src="/PetAdoption/petadoption-qkw.svg" alt="" className=''/>
</div>
       
 <div className='flex flex-col text-left w-full lg:w-1/2'>

   <h1 className='font-sans text-black text-md font-semibold font-link lg:text-2xl '>Make a Paw-sitive Impact:</h1>
   <div className='flex flex-col w-full lg:flex-row'>
   <TypeAnimation 
   sequence={[
     "Create memories",
     1000,
     "Be their family",
     1000,
     "Choose Adoption",
     1000,
   ]}
   wrapper='span'
   speed={180}      
   className='font-protest text-4xl lg:text-6xl text-[#DC8857] text-left'  
   repeat={Infinity}  
   />
   <img src="/PetAdoption/footprint.png" alt="" className='hidden lg:flex lg:h-12 lg:w-12 lg:ml-4'/>
   </div>
   <p className='pt-2 text-xs lg:text-lg font-sans font-light'>Finding loving homes for every pet in need. Our mission is to facilitate the process of pet adoption, connecting compassionate individuals with their perfect furry companions.</p>
   <div className='pt-6'>

    <Link to="/adoptpage">
    <button className='px-6 hover:bg-[#DC8857] hover:text-white font-semibold text-[#DC8857] p-1.5 rounded border border-[#DC8857] shadow'>
        Adopt Now
    </button>
    </Link>
   </div>

 </div>

</div>
{/* end of body */}
        
        </>
    );
}

export default About