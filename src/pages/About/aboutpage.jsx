// import React from "react";
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return(
        <>
        
        {/* start of body */}
<div className='h-screen w-full flex px-24 gap-32 items-center'>
<div className='flex w-1/2'>
 <img src="/petadoption-qkw.svg" alt="" className=''/>
</div>
       
 <div className='flex flex-col text-left w-1/2'>

   <h1 className='font-sans text-black text-2xl font-semibold font-link'>Make a Paw-sitive Impact:</h1>
   <div className='flex w-full'>
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
   className='font-protest text-6xl text-[#DC8857] text-left'  
   repeat={Infinity}  
   />
   <img src="/footprint.png" alt="" className='h-12 w-12 ml-4'/>
   </div>
   <p className='pt-2 font-sans font-light'>Finding loving homes for every pet in need. Our mission is to facilitate the process of pet adoption, connecting compassionate individuals with their perfect furry companions.</p>
   <div className='pt-6'>

    <a href="/adoptpage">
    <button className='px-6 hover:bg-[#DC8857] hover:text-white font-semibold text-[#DC8857] p-1.5 rounded border border-[#DC8857] shadow'>
        Adopt Now
    </button>
    </a>
   </div>

 </div>

</div>
{/* end of body */}
        
        </>
    );
}

export default About