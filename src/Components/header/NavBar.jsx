import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";


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
              <Link to="/" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold focus:text-[#DC8857] focus:font-semibold'>About</Link>
              <Link to="/testimonialpage" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold focus:text-[#DC8857] focus:font-semibold'>Testimonies</Link>
              <Link to="/adoptpage" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold focus:text-[#DC8857] focus:font-semibold'>Adopt</Link>
              <Link to="/profilepage" className="text-gray-300 hover:text-[#DC8857] mt-1 cursor-pointer focus:text-[#DC8857]"><FaUser/></Link>
             </div>

        </div>
      </nav>
      {/* end of navbar */}
        </>
    )
}

export default NavBar