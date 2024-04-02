import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const OTP = ({email}) => {
  const [formData, setFormData] = useState({
    otp: "",
    email: email,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4305/api/user/verifyEmail",
        formData
      );
      // console.log('Login successful:', response.data);

      // Handle successful login, e.g., redirect to dashboard
      // Store user data in local storage
      localStorage.setItem("userData", JSON.stringify(response.data));

      // navigate to the homepage
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error, e.g., display error message
    }
  };

  return (
    <>
      <div className="fixed bg-black/50 top-0 bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="flex w-[90vw] max-h-[95vh] bg-white p-10 rounded-xl">
          <div className="flex w-full h-full justify-center items-center flex-col gap-2">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-protest text-3xl lg:text-6xl text-[#DC8857]">
                Enter OTP
              </h1>
              {/* <h2 className="font-sans font-semibold text-sm lg:text-lg">
                Welcome back! Please log-in your account here.
              </h2> */}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full lg:w-2/3 border shadow rounded flex-col p-5 lg:p-10 gap-5"
            >
              <div className="font-sans flex flex-col gap-5">
                <div className="flex flex-col">
                  <p className="text-[#DC8857] font-semibold text-md">OTP:</p>
                  <input
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    type="text"
                    placeholder="1234"
                    className="text-md w-full border rounded p-1.5"
                  />
                </div>

                {/* <div className="flex text-xs justify-end">
                  <button className="text-xs hover:underline font-semibold text-[#DC8857] px-1">
                    Resend OTP
                  </button>
                </div> */}
              </div>
              <div className="w-full">
                {/* <Link to="/"> */}
                <button
                  type="submit"
                  className="text-md w-full hover:bg-[#DC8857]/90 text-white font-semibold bg-[#DC8857] p-1.5 rounded shadow"
                >
                  Verify OTP
                </button>
                {/* </Link> */}
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default OTP;
