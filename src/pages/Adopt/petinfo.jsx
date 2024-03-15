import React from "react";
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../../Components/Modal/modal";

function PetInfo(props) {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true);
      };

    const closeModal = () => {
        setModal(false);
    };



    return(
        <>
        
        <div className="h-screen px-24">
            <div className="pt-20">
                <Link to='/adoptpage'><FaArrowLeft/></Link>
            </div>

            <div className="flex pt-8">
                <div className="flex w-full justify-center">
                    <img src="/PetAdoption/dogadopt.jpg" alt="" className="w-3/4 h-full border rounded"/>
                </div>
                <div className="flex w-1/2 border shadow rounded p-10 justify-center">
                    <div className="flex flex-col w-full gap-3">
                        <p className="font-protest text-[#DC8857] text-3xl pb-5">Dog Name</p>
                        <p className="font-sans text-gray-400 font-semibold">D E T A I L S</p>

                            <div className="flex w-full justify-between">
                                <div className="font-sans w-1/2 flex flex-col text-lg gap-2">
                                    <p className="text-gray-600">Breed</p>
                                    <p className="text-gray-600">Color</p>
                                    <p className="text-gray-600">Age</p>
                                    <p className="text-gray-600">Sex</p>
                                    <p className="text-gray-600">Arrived From</p>
                                    <p className="text-gray-600">Location</p>
                                </div>
                                <div className="font-sans w-1/2 flex flex-col text-lg gap-2">
                                    <p className="text-gray-400">Husky</p>
                                    <p className="text-gray-400">Black and White</p>
                                    <p className="text-gray-400">2 months old</p>
                                    <p className="text-gray-400">Male</p>
                                    <p className="text-gray-400">Rescue</p>
                                    <p className="text-gray-400">Bulacan</p>
                                </div>
                            </div>
                            <div className="flex flex-col pt-5 w-full">
                                <button onClick={() => setModal(true)} className="bg-[#DC8857] hover:bg-[#DC8857]/90 font-semibold text-white py-2 px-16 rounded">
                                     Adopt Me
                                </button>
                            </div>
                    </div>
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
}
export default PetInfo