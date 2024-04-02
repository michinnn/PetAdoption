import React, { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const user = userData.user;
    setName(`${user.firstName} ${user.lastName}`);
    setImage(`http://localhost:4305/${user.image}`);
  }, []);

  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("userData");
    navigate("/");
  }

  return (
    <>
      <div className="flex justify-center px-8 lg:px-20 py-40">
        <div className="flex flex-col w-3/4 lg:w-1/4">
          <div className="flex flex-col items-center">
            {image ? (
              <img
                src={image}
                className="w-40 h-40 border-2 object-cover rounded-full"
              />
            ) : (
              <FaCircleUser className="w-[20vw] h-[20vh] text-gray-400" />
            )}
          </div>

          <div className="flex flex-col pt-2 gap-2 lg:pt-5 lg:gap-5">
            <div className="text-[#DC8857] text-xl lg:text-3xl flex justify-center font-semibold">
              {name}
            </div>
            <Link to="/user/editprofile">
              <button className="w-full bg-[#DC8857] hover:bg-[#DC8857]/90 rounded p-2 text-white">
                Edit Profile
              </button>
            </Link>
            {/* <Link to="/"> */}
            <button
              onClick={handleLogout}
              className="w-full border border-red-500 text-red-500 p-2 rounded hover:bg-red-500 hover:text-white"
            >
              Sign Out
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
