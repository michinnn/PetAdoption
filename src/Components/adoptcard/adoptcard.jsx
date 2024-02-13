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
        <div className="grid grid-cols-3 gap-4">
        {/* DOG IMAGE */}
        <div className="h-full w-fit flex justify-center">
            <img src="/PetAdoption/dogadopt.jpg" alt="" className="h-96 w-full"/>
        </div>
        
        {/* DOG DESCRIPTION-SUMMARY */}
        <div className="h-1/2 w-fit pl-8 flex flex-col justify-center">
            <h3 className="text-2xl font-protest pt-36 text-[#DC8857]">Dog Name</h3>
            <p className="text-md font-sans text-gray-400">Lorem ipsum dolor sit amet consectetur adipiscing elit per, elementum porttitor imperdiet nisl lacinia in eros curae, tempus mi nullam tincidunt leo sociosqu class. Est imperdiet aliquam luctus molestie tincidunt malesuada, magnis etiam pellentesque eleifend facilisi phasellus, commodo blandit ridiculus per in.</p>
        </div>

        {/* BUTTONS */}
           <div className="flex flex-col w-full h-full items-center justify-center gap-3">

             <button onClick={() => setModal(true)} className="bg-[#DC8857] hover:bg-[#DC8857]/90 font-semibold text-white py-2 px-16 rounded">
                 Adopt Me
             </button>


            <Link to="/petinfo">
                <button className="font-semibold text-[#DC8857] w-full hover:underline">
                    View More
                </button>
            </Link>

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