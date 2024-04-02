import React, { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useUserRole from "../../helpers/useUserRole";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    _id: "",
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const userRole = useUserRole();

  useEffect(() => {
    if(userRole && userRole !== "user") {
        navigate("/");
      }
      
    const userData = JSON.parse(localStorage.getItem("userData"));
    const user = userData.user;
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      _id: user._id,
    });
    setImage(`http://localhost:4305/${user.image}`);
  }, []);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (!validateEmail(formData.email)) {
      setError({
        text: "Invalid Email",
        code: "fe",
      });
    } else {
      setError(null);
    }
  };

  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
  }

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (error && error.code === "fe") return;

      const newFormData = new FormData();
      newFormData.append("firstName", formData.firstName);
      newFormData.append("lastName", formData.lastName);
      newFormData.append("email", formData.email);
      newFormData.append("image", e.target.elements.image.files[0]);

      if (password !== "") {
        newFormData.append("password", password);
      }

      const response = await axios.put(
        `http://localhost:4305/api/user/${formData._id}`,
        newFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      localStorage.setItem("userData", JSON.stringify(response.data));
      setError(null);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        _id: "",
      });
      setPassword("");
      setImage(null);
      alert("Profile updated successfully");

      // navigate to the homepage
      navigate("/user/profilepage");
    } catch (error) {
      console.error("Editing profile failed:", error);
      //   if (error.response) {
      //     setError(error.response.data.error);
      //   } else {
      setError({code: "be", text: "Error editing profile"});
      //   }
    }
  };

  const handleImageChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }

    setFormData((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <div className="flex h-screen w-full px-8 lg:px-20 justify-center">
        <div className="flex flex-col w-full h-fit lg:p-8 gap-2 lg:border py-14 lg:m-20 rounded-lg">
          <p className="font-protest text-2xl lg:text-3xl text-[#DC8857]">
            Edit Profile
          </p>

          <div className="flex flex-col gap-2 w-full">
            <div className="font-sans text-md lg:text-lg text-gray-400 font-semibold">
              <p>Profile Picture</p>
            </div>

            <div className="flex items-center gap-3">
              {image 
                ? <img src={image} className="border rounded-full object-cover w-[10vh] h-[10vh]" /> 
                : <FaCircleUser className="w-fit h-[8vh] lg:h-[10vh] text-gray-400" /> 
              }
              <label htmlFor="image" className="flex h-1/2 border border-gray-200 hover:border-gray-500 hover:text-gray-800 text-gray-400 px-6 py-1 items-center rounded-full text-xs lg:text-sm cursor-pointer">
                Change Display
              </label>
            </div>

            <div className="font-sans text-md lg:text-lg text-gray-400 font-semibold pt-4">
              <p>Other</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex w-full gap-6">
              <input
                    className="hidden"
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                  />
                <div className="flex flex-col w-1/2">
                  <p>First name</p>
                  <input
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Juan"
                    className="border rounded p-1"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <p>Last name</p>
                  <input
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Dela Cruz"
                    className="border rounded p-1"
                  />
                </div>
              </div>
              <div className="flex w-full gap-6">
                <div className="flex flex-col w-1/2">
                  <p>Email Address</p>
                  <input
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="email@gmail.com"
                    className="border rounded p-1"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <p>Password</p>
                  <input
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                    placeholder="●●●●●●●●●●●"
                    className="border rounded p-1"
                  />
                </div>
              </div>
              {error && error.text && (
                  <div className="font-semibold text-red-400">Error: {error.text}</div>
                )}

              <div className="flex justify-end gap-6 items-center pt-6 lg:pt-2 w-full">
                <Link to="/user/profilepage">
                  <button className="hover:underline text-red-500 font-semibold text-sm lg:text-md">
                    Cancel
                  </button>
                </Link>
                {/* <Link to="/user/profilepage"> */}
                <button
                  type="submit"
                  className="flex items-center hover:bg-[#DC8857] hover:text-white border border-[#DC8857] text-[#DC8857] text-sm lg:text-md font-semibold p-2 rounded-full px-5 lg:px-10"
                >
                  Update Profile
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
export default EditProfile;
