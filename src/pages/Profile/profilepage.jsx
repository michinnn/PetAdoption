import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Profile = () => {
    return(
        <>
        
            <div className="flex justify-center px-24 py-40">
                <div className="flex flex-col justify-center">
                    <FaCircleUser className="w-[20vw] h-[20vh] text-gray-400" />
                    <div className="flex flex-col pt-5 gap-5">
                        <div className="text-[#DC8857] text-3xl flex justify-center font-semibold">User</div>
                        <Link to="/editprofile">
                        <button className="w-full bg-[#DC8857] hover:bg-[#DC8857]/90 rounded p-2 text-white">Edit Profile</button>
                        </Link>
                        <Link to="/signin">
                            <button className="w-full border border-red-500 text-red-500 p-2 rounded hover:bg-red-500 hover:text-white">Sign Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile