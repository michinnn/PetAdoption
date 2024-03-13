import React from "react";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <>
               <div className="flex h-screen w-full px-24">
      <div className="flex w-full">
        <div className="flex justify-center items-center">
          <img src="pets.png" alt="" />
        </div>
            <div className="flex w-full h-full justify-center items-center flex-col gap-2">
                <div className="flex flex-col items-center">
                  <h1 className="font-protest text-6xl text-[#DC8857]">SIGN UP</h1>
                  <h2 className="font-sans font-semibold">Welcome! Create your account here.</h2>
                </div>

              <div className="flex w-2/3 border shadow rounded flex-col p-10 gap-5">
                <div className="font-sans flex flex-col justify-between gap-3">
                    <div className="flex w-full">
                        <div className="w-full font-sans">
                        <p className="text-[#DC8857] font-semibold">Firstname:</p>
                             <input type="text" placeholder="Juan" className="w-5/6 border rounded p-1.5"/>
                        </div>
                        <div className="w-full font-sans">
                        <p className="text-[#DC8857] font-semibold">Lastname:</p>
                            <input type="text" placeholder="Dela Cruz" className="w-3/2 border rounded p-1.5"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Email:</p>
                        <input type="text" placeholder="example@gmail.com" className="w-full border rounded p-1.5"/>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Password:</p>
                         <input type="password" placeholder="●●●●●●●●" className="w-full border rounded p-1.5"/>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Confirm Password:</p>
                         <input type="password" placeholder="●●●●●●●●" className="w-full border rounded p-1.5"/>
                    </div>
                </div>
               <div className="flex w-full justify-between">

                    <Link to="/">
                    <button className="px-14 hover:bg-[#DC8857]/90 text-white font-semibold bg-[#DC8857] p-1.5 rounded shadow">Sign Up</button>
                    </Link>

                    <Link to="/signin">
                    <button className="px-14 hover:underline font-semibold text-[#DC8857] p-1.5">Log In</button>
                    </Link>
               </div>
              </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default SignUp