import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react'


function NavBar(props){


  const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true);
      };

    const closeModal = () => {
        setModal(false);
    };

    
    return(
        <>
            {/* start of navbar */}
      <nav className='w-full z-40 fixed top-0 right-0 left-0 bg-white/80 rounded-b-sm shadow-sm border-b-sm'> 
        <div className='flex px-8 lg:px-20 py-2 justify-between items-center'>

          <div className='h-6 w-6 lg:h-10 lg:w-10'>
            <img src="paw.png" alt="" />
           </div>

           <IoIosMenu className="lg:hidden flex text-[#DC8857] justify-end h-7 w-6" onClick={() => setModal(!modal)}/>



             <div className='hidden lg:flex lg:gap-14'>
              <Link to="/user/" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold focus:text-[#DC8857] focus:font-semibold'>About</Link>
              {/* <Link to="/user/testimonialpage" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold focus:text-[#DC8857] focus:font-semibold'>Testimonies</Link> */}
              <Link to="/user/adoptpage" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold focus:text-[#DC8857] focus:font-semibold'>Adopt</Link>
              <Link to="/user/profilepage" className="text-gray-300 hover:text-[#DC8857] mt-1 cursor-pointer focus:text-[#DC8857]"><FaUser/></Link>
              {/* <Link to="/user/adminpage" className='text-gray-300 font-semibold hover:text-[#DC8857] hover:font-semibold focus:text-[#DC8857] focus:font-semibold'>ADMIN</Link> */}
             </div>

        </div>
      </nav>
        {/* <div className="flex justify-end px-14 pt-12">
          <div className="lg:hidden flex flex-col w-1/4 h-fit rounded border p-2 justify-end items-end fixed gap-2 bg-white/60">
              <Link to="/user/" className='font-semibold text-[#DC8857]'>About</Link>
              <Link to="/user/testimonialpage" className='font-semibold text-[#DC8857]'>Testimonies</Link>
              <Link to="/user/adoptpage" className='font-semibold text-[#DC8857]'>Adopt</Link>
              <Link to="/user/profilepage" className="font-semibold text-[#DC8857]">Profile</Link>
          </div>
        </div> */}

      {/* end of navbar */}

      { modal && (
                <div className="lg:hidden flex w-fit h-fit fixed z-40 top-12 right-8 rounded border p-2 gap-2 bg-white/90">
                <div className="flex flex-col text-end">
                    <Link to="/user/about" className='font-semibold text-[#DC8857]'>About</Link>
                    {/* <Link to="/user/testimonialpage" className='font-semibold text-[#DC8857]'>Testimonies</Link> */}
                    <Link to="/user/adoptpage" className='font-semibold text-[#DC8857]'>Adopt</Link>
                    <Link to="/user/profilepage" className="font-semibold text-[#DC8857]">Profile</Link>
                    {/* <Link to="/user/adminpage" className="font-semibold text-[#DC8857]">ADMIN</Link> */}
                </div>
              </div>)
            }

        </>
    )
}

export default NavBar