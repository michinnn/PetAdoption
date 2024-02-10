import { FaUser } from "react-icons/fa6";
const NavBar = () => {
    return(
        <>
            {/* start of navbar */}
      <nav className='w-full z-40 fixed top-0 right-0 left-0 bg-white/80 rounded-b-sm shadow-sm border-b-sm'> 
        <div className='flex px-24 py-2 justify-between items-center'>

          <div className='h-10 w-10'>
            <img src="/PetAdoption/paw.png" alt="" />
           </div>

             <div className='flex gap-14 '>
              <a href="/#/" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold'>About</a>
              <a href="/PetAdoption/#/testimonialpage" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold'>Testimonies</a>
              <a href="/PetAdoption/#/adoptpage" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold'>Adopt</a>
              <a href="/PetAdoption/#/profilepage"><FaUser className='text-[#DC8857]/50 hover:text-[#DC8857] mt-1 cursor-pointer'/></a>
             </div>

        </div>
      </nav>
      {/* end of navbar */}
        </>
    )
}

export default NavBar