import React from "react";
import { Link } from 'react-router-dom';

const SignIn = () => {
    return(
        <>
      <div className="flex h-screen w-full px-24">
      <div className="flex w-full">
        <div className="flex justify-center items-center">
          <img src="pets.png" alt="" />
        </div>
            <div className="flex w-full h-full justify-center items-center flex-col gap-2">
                <div className="flex flex-col items-center gap-2">
                  <h1 className="font-protest text-6xl text-[#DC8857]">LOG IN</h1>
                  <h2 className="font-sans font-semibold">Welcome back! Please log-in your account here.</h2>
                </div>

              <div className="flex w-2/3 border shadow rounded flex-col p-10 gap-5">
                <div className="font-sans flex flex-col gap-5">
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Email:</p>
                        <input type="text" placeholder="example@gmail.com" className="w-full border rounded p-1.5"/>
                    </div>
                    <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold">Password:</p>
                         <input type="password" placeholder="●●●●●●●●" className="w-full border rounded p-1.5"/>
                    </div>
                    <div className="flex text-xs justify-end">
                    <button className="text-xs hover:underline font-semibold text-[#DC8857] px-1">Forgot password?</button>
                    </div>
                </div>
               <div className="w-full">
                    <Link to="/">
                    <button className="w-full hover:bg-[#DC8857]/90 text-white font-semibold bg-[#DC8857] p-1.5 rounded shadow">Log In</button>
                    </Link>

               </div>
              </div>
              <div className="flex text-xs text-black/70 font-sans">
                      <p>Create an account here.</p>
                    <Link to="/signup">
                    <button className="text-xs hover:underline font-semibold text-[#DC8857] px-1">Sign Up</button>
                    </Link>
                    </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default SignIn