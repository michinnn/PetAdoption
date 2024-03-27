import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AdoptionFile = () => {
  const [formData, setFormData] = useState({
    // firstName: "",
    // lastName: "",
    // email: "",
    // address: "",
    // contactNumber: "",
    // otherDetails: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:4305/api/adoptionApplication/", formData);
      console.log("Form data submitted successfully:", formData);
      setFormData({});
      navigate("/adoptpage");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  }

  return (
    <>
      <div className="h-screen px-8 lg:px-20">
        <div className="pt-16">
                <Link to='/adoptpage'><FaArrowLeft/></Link>
            </div>

            <div className="flex justify-center items-center flex-col gap-5">
                <h1 className="font-protest text-[#DC8857] text-3xl lg:text-5xl">Apply to Adopt</h1>
                <div className="text-xs lg:text-base font-sans">
                    <p>Please be reminded that if you don't fill up all field with a <span className="font-sans text-red-500">*</span> mark, you will not able to submit the application.</p>
                </div>

                <form className="flex flex-col justify-start w-full gap-5">
                    <div className="flex gap-5">
                    <div className="flex flex-col w-1/2">
                     <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Firstname: <span className="text-xs text-red-500">*</span></p>
                        <input required type="text" placeholder="Juan" className="text-sm lg:text-md w-full border rounded p-1.5"/>
                  </div>
                  <div className="flex flex-col w-1/2">
                     <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Lastname: <span className="text-xs text-red-500">*</span></p>
                        <input required type="text" placeholder="Dela Cruz" className="w-full border rounded p-1.5 text-sm lg:text-md"/>
                  </div>
                    </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Email address: <span className="text-xs text-red-500">*</span></p>
                        <input required type="email" placeholder="example@gmail.com" className="w-full border rounded p-1.5 text-sm lg:text-md"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Address: <span className="text-xs text-red-500">*</span></p>
                        <input required type="text" placeholder="House no., Street, Town, City, Province" className="text-sm lg:text-md w-full border rounded p-1.5"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Contact no.: <span className="text-xs text-red-500">*</span></p>
                        <input required type="tel" maxLength='11' placeholder="09*********" className="w-full border rounded p-1.5 text-sm lg:text-md"/>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#DC8857] font-semibold text-sm lg:text-md">Other details to support application: <span className="text-xs text-red-500">*</span></p>
                        <textarea required type="text" placeholder="experience, reason of adopting, etc." className="text-sm lg:text-md w-full border rounded p-1.5"/>
                  </div>

                  <div className="flex justify-end gap-5">
                  <Link to="/user/adoptpage"><button className="text-sm lg:text-md border hover:border-[#DC8857] border-[#DC8857]/60 rounded px-4 p-2 text-[#DC8857]">Cancel</button></Link>
                    <button className="bg-[#DC8857] rounded px-4 p-2 text-white hover:bg-[#DC8857]/90 text-sm lg:text-md">Submit</button>
                  </div>
                </form>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="font-protest text-[#DC8857] text-3xl lg:text-5xl">
            Apply to Adopt
          </h1>
          <div className="text-xs lg:text-base font-sans">
            <p>
              Please be reminded that if you don't fill up all field with a{" "}
              <span className="font-sans text-red-500">*</span> mark, you will
              not able to submit the application.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col justify-start w-full gap-5">
            <div className="flex gap-5">
              <div className="flex flex-col w-1/2">
                <p className="text-[#DC8857] font-semibold text-sm lg:text-md">
                  Firstname: <span className="text-xs text-red-500">*</span>
                </p>
                <input
                  required
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  placeholder="Juan"
                  className="text-sm lg:text-md w-full border rounded p-1.5"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <p className="text-[#DC8857] font-semibold text-sm lg:text-md">
                  Lastname: <span className="text-xs text-red-500">*</span>
                </p>
                <input
                  required
                  value={formData.lastName || ""}
                  onChange={handleChange}
                  name="lastName"
                  type="text"
                  placeholder="Dela Cruz"
                  className="w-full border rounded p-1.5 text-sm lg:text-md"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#DC8857] font-semibold text-sm lg:text-md">
                Email address: <span className="text-xs text-red-500">*</span>
              </p>
              <input
                required
                value={formData.email || ""}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full border rounded p-1.5 text-sm lg:text-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#DC8857] font-semibold text-sm lg:text-md">
                Address: <span className="text-xs text-red-500">*</span>
              </p>
              <input
                required
                value={formData.address || ""}
                onChange={handleChange}
                name="address"
                type="text"
                placeholder="House no., Street, Town, City, Province"
                className="text-sm lg:text-md w-full border rounded p-1.5"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#DC8857] font-semibold text-sm lg:text-md">
                Contact no.: <span className="text-xs text-red-500">*</span>
              </p>
              <input
                required
                value={formData.contactNumber || ""}
                onChange={handleChange}
                name="contactNumber"
                type="tel"
                maxLength="11"
                placeholder="09*********"
                className="w-full border rounded p-1.5 text-sm lg:text-md"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#DC8857] font-semibold text-sm lg:text-md">
                Other details to support application:{" "}
                <span className="text-xs text-red-500">*</span>
              </p>
              <textarea
                required
                value={formData.otherDetails || ""}
                onChange={handleChange}
                name="otherDetails"
                type="text"
                placeholder="experience, reason of adopting, etc."
                className="text-sm lg:text-md w-full border rounded p-1.5"
              />
            </div>

            <div className="flex justify-end gap-5">
              <Link to="/adoptpage">
                <button className="text-sm lg:text-md border hover:border-[#DC8857] border-[#DC8857]/60 rounded px-4 p-2 text-[#DC8857]">
                  Cancel
                </button>
              </Link>
              <button type="submit" className="bg-[#DC8857] rounded px-4 p-2 text-white hover:bg-[#DC8857]/90 text-sm lg:text-md">
                Submit
              </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default AdoptionFile;
