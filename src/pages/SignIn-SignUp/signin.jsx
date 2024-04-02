import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import useUserRole from "../../helpers/useUserRole";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // const userRole = useUserRole();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4305/api/user/login', formData);
      // console.log('Login successful:', response.data);

      // Handle successful login, e.g., redirect to dashboard
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(response.data));
      console.log(response.data.user.role)
      if(response.data.user.role === "user") {
        navigate("/user/about");
      } else if(response.data.user.role === "admin") {
        navigate("/admin");
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error, e.g., display error message
    }
  };

  return(
      <>
    <div className="flex h-screen w-full px-8 lg:px-20">
    <div className="flex w-full">
      <div className="hidden lg:flex justify-center items-center">
        <img src="pets.png" alt="" />
      </div>
          <div className="flex w-full h-full justify-center items-center flex-col gap-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="font-protest text-3xl lg:text-6xl text-[#DC8857]">LOG IN</h1>
                <h2 className="font-sans font-semibold text-sm lg:text-lg">Welcome back! Please log-in your account here.</h2>
              </div>

            <form onSubmit={handleSubmit} className="flex w-full lg:w-2/3 border shadow rounded flex-col p-5 lg:p-10 gap-5">
              <div className="font-sans flex flex-col gap-5">
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-md">Email:</p>
                    <input name="email" value={formData.email} onChange={handleChange} type="text" placeholder="example@gmail.com" className="text-md w-full border rounded p-1.5"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-md">Password:</p>
                    <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="●●●●●●●●" className="text-md w-full border rounded p-1.5"/>
                  </div>
                  {/* <div className="flex text-xs justify-end">
                    <button className="text-xs hover:underline font-semibold text-[#DC8857] px-1">Forgot password?</button>
                  </div> */}
              </div>
              <div className="w-full">
                  {/* <Link to="/"> */}
                  <button type="submit" className="text-md w-full hover:bg-[#DC8857]/90 text-white font-semibold bg-[#DC8857] p-1.5 rounded shadow">Log In</button>
                  {/* </Link> */}

              </div>
            </form>
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