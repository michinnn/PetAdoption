import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PetInfo = () => {
    return(
        <>
        
        <div className="h-screen px-24">
            <div className="pt-24">
                <Link to='/adoptpage'><FaArrowLeft/></Link>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="font-protest text-red-400 text-9xl">PETINFO</h1>
            </div>
        </div>
        
        </>
    )
}

export default PetInfo