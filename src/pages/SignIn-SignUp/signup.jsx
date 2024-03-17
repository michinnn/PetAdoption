import React from "react";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <>
      <div className="flex h-screen w-full pt-28 lg:pt-10 px-8 lg:px-20">
        <div className="flex w-full">
          <div className="hidden lg:flex justify-center items-center">
            <img src="pets.png" alt="" />
          </div>
            <div className="flex w-full h-full justify-center items-center flex-col gap-2">
                <div className="flex flex-col items-center">
                  <h1 className="font-protest text-3xl lg:text-6xl text-[#DC8857]">SIGN UP</h1>
                  <h2 className="font-sans font-semibold">Welcome! Create your account here.</h2>
                </div>

              <div className="flex w-full lg:w-2/3 border shadow rounded flex-col p-10 gap-5">
                <div className="font-sans flex flex-col justify-between gap-3">
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className="w-full font-sans">
                        <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Firstname:</p>
                             <input type="text" placeholder="Juan" className="text-sm lg:text-md w-full lg:w-5/6 border rounded p-1.5"/>
                        </div>
                        <div className="w-full font-sans">
                        <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Lastname:</p>
                            <input type="text" placeholder="Dela Cruz" className="text-sm lg:text-md w-full lg:w-3/2 border rounded p-1.5"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Email:</p>
                        <input type="text" placeholder="example@gmail.com" className="text-sm lg:text-md w-full border rounded p-1.5"/>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Password:</p>
                         <input type="password" placeholder="●●●●●●●●" className="text-sm lg:text-md w-full border rounded p-1.5"/>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Confirm Password:</p>
                         <input type="password" placeholder="●●●●●●●●" className="text-sm lg:text-md w-full border rounded p-1.5"/>
                    </div>
                </div>

                    <Link to="/signin">
                    <button className="w-full hover:bg-[#DC8857]/90 text-white font-semibold bg-[#DC8857] p-1.5 rounded shadow text-sm lg:text-md">Sign Up</button>
                    </Link>
              </div>
              <div className="flex text-xs text-black/70 font-sans">
                      <p>Already have an account?</p>
                    <Link to="/signin">
                    <button className="text-xs hover:underline font-semibold text-[#DC8857] px-1 text-sm lg:text-md">Log In</button>
                    </Link>
                    </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default SignUp