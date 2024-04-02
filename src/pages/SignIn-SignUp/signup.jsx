import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import OTP from "./otp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [otpModal, setOtpModal] = useState(false);
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const confirmPassword = (e) => {
    const { value } = e.target;
    setCPassword(value);

    // console.log("form.password !== value", form.password !== value)

    if(formData.password !== value) {
      setError("Password does not match.");
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(error === "Password does not match.") return;

      const response = await axios.post('http://localhost:4305/api/user/signup', formData);
      // console.log('Login successful:', response.data);

      // Handle successful login, e.g., redirect to dashboard
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(response.data));
      setError(null);

      // navigate to the homepage
      // navigate("/");
      setEmail(formData.email);
      setOtpModal(true);

    } catch (error) {
      console.error('Signup failed:', error);
      if(error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Error signing up user.");
      }
    }
  };
  
  return (
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

            <form onSubmit={handleSubmit} className="flex w-full lg:w-2/3 border shadow rounded flex-col p-10 gap-5">
              <div className="font-sans flex flex-col justify-between gap-3">
                <div className="flex flex-col lg:flex-row w-full">
                  <div className="w-full font-sans">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Firstname:</p>
                    <input value={formData.firstName} onChange={handleChange} type="text" placeholder="Juan" name="firstName" className="text-sm lg:text-md w-full lg:w-5/6 border rounded p-1.5" />
                  </div>
                  <div className="w-full font-sans">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Lastname:</p>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Dela Cruz" className="text-sm lg:text-md w-full lg:w-3/2 border rounded p-1.5" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Email:</p>
                  <input name="email" value={formData.email} onChange={handleChange} type="text" placeholder="example@gmail.com" className="text-sm lg:text-md w-full border rounded p-1.5" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Password:</p>
                  <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="●●●●●●●●" className="text-sm lg:text-md w-full border rounded p-1.5" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Confirm Password:</p>
                  <input name="cPassword" value={cPassword} onChange={confirmPassword} type="password" placeholder="●●●●●●●●" className="text-sm lg:text-md w-full border rounded p-1.5" />
                </div>

                {error && 
                <div className="text-red-400 font-semibold">{error}</div>}
              </div>

              {/* <Link to="/signin"> */}
                <button type="submit" className="w-full hover:bg-[#DC8857]/90 text-white font-semibold bg-[#DC8857] p-1.5 rounded shadow text-sm lg:text-md">Sign Up</button>
              {/* </Link> */}
            </form>
            <div className="flex text-xs text-black/70 font-sans">
              <p>Already have an account?</p>
              <Link to="/">
                <button className="hover:underline font-semibold text-[#DC8857] px-1 text-sm lg:text-md">Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {otpModal && 
      <OTP email={email} />}
    </>
  )
}

export default SignUp