import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const EditProfile = () => {

    return(
        <>
        
        <div className="flex h-screen w-full px-8 lg:px-20 justify-center">
            <div className="flex flex-col w-full h-fit lg:p-8 gap-2 lg:border py-14 lg:m-20 rounded-lg">
                <p className="font-protest text-2xl lg:text-3xl text-[#DC8857]">Edit Profile</p>

                <div className="flex flex-col gap-2 w-full">
                    <div className="font-sans text-md lg:text-lg text-gray-400 font-semibold">
                        <p>Profile Picture</p>
                     </div>

                 <div className="flex items-center gap-3">
                    <FaCircleUser className="w-fit h-[8vh] lg:h-[10vh] text-gray-400" />
                    <button className="flex h-1/2 border border-gray-200 hover:border-gray-500 hover:text-gray-800 text-gray-400 px-6 py-1 items-center rounded-full text-xs lg:text-sm">Change Display</button>
                 </div>

                 <div className="font-sans text-md lg:text-lg text-gray-400 font-semibold pt-4">
                        <p>Other</p>
                </div>

                 <div className="flex flex-col gap-4">
                        <div className="flex w-full gap-6">
                            <div className="flex flex-col w-1/2">
                                <p>Firstname</p>
                                <input type="text" placeholder="Juan" className="border rounded p-1"/>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p>Lastname</p>
                                <input type="text" placeholder="Dela Cruz" className="border rounded p-1"/>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full gap-6">
                            <div className="flex flex-col w-1/2">
                             <p>Email Address</p>
                             <input type="email" placeholder="email@gmail.com" className="border rounded p-1"/>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p>Password</p>
                                <input type="password" placeholder="●●●●●●●●●●●" className="border rounded p-1"/>
                            </div>
                        </div>


                        <div className="flex justify-end gap-6 items-center pt-6 lg:pt-2 w-full">
                            <Link to="/user/profilepage">
                                <button className="hover:underline text-red-500 font-semibold text-sm lg:text-md">Cancel</button>
                             </Link>
                             <Link to="/user/profilepage">
                                <button className="flex items-center hover:bg-[#DC8857] hover:text-white border border-[#DC8857] text-[#DC8857] text-sm lg:text-md font-semibold p-2 rounded-full px-5 lg:px-10">Update Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}
export default EditProfile