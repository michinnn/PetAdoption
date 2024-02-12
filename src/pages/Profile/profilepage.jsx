import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const Profile = () => {
    return(
        <>
        
            <div className="flex justify-center px-24 py-32">
                <div className="flex flex-col justify-center">
                    <FaCircleUser className="w-[20vw] h-[20vh] text-gray-400" />
                    <div className="flex flex-col pt-5 gap-5">
                        <button className="bg-[#DC8857] hover:bg-[#DC8857]/90 rounded p-2 text-white">Edit Profile</button>
                        <button className="border border-red-500 text-red-500 p-2 rounded hover:bg-red-500 hover:text-white">Sign Out</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Profile