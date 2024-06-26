import { useState } from 'react'
import Modal from "../../Components/Modal/modal";
import { Link } from "react-router-dom";


function AdoptCard(props) {

    
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true);
      };

    const closeModal = () => {
        setModal(false);
    };


    return(
        <>
        <div className="grid grid-row-3 lg:grid-cols-3 gap-4 items-center justify-center">
        {/* DOG IMAGE */}
        <div className="h-full w-full flex justify-center">
            <img src={`http://localhost:4305/${props.image}`} alt="" className="h-full lg:h-80 w-full rounded object-cover"/>
        </div>
        
        {/* DOG DESCRIPTION-SUMMARY */}
        <div className="h-1/2 w-full lg:w-fit flex flex-col justify-center">
            <h3 className="text-xl lg:text-3xl font-protest text-[#DC8857]">{props.name}</h3>
            <p className="text-xs break-all lg:text-lg font-sans text-gray-400">{props.description}</p>
        </div>

        {/* BUTTONS */}
            <div className='flex flex-col w-full lg:flex-row justify-center'>
                <div className="flex lg:flex-col w-full h-full items-center justify-between lg:gap-3">

                    <button onClick={() => setModal(true)} className="bg-[#DC8857] hover:bg-[#DC8857]/90 font-semibold text-white py-2 px-6 lg:px-16 rounded text-sm lg:text-lg">
                     Adopt Me
                    </button>


                    <Link to={`/user/petinfo/${props._id}`}>
                     <button className="font-semibold text-[#DC8857] w-full hover:underline text-sm lg:text-lg flex justify-center">
                        View More
                     </button>
                    </Link>

                </div>
            </div>
    </div>
    { modal && (
                <Modal title="Data Privacy Policy"
                    desc="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
                    closeModal={closeModal} />)
         }
         
        </>
    )
}export default AdoptCard