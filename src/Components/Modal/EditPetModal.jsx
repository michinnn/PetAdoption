import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { BiSolidImageAdd } from "react-icons/bi";
import axios from "axios";

function EditPetModal(props) {
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [image, setImage] = useState(null);

  const fetchPetList = async () => {
    try {
      const data = await axios.get(`http://localhost:4305/api/pet/${props.id}`);
      const petData = data.data;
      console.log(petData);

      setPet({
        name: petData.name,
        color: petData.color,
        breed: petData.breed,
        age: petData.age,
        sex: petData.sex,
        location: petData.location,
        status: petData.status,
        image: petData.image,
        description: petData.description,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPetList();
  }, []);

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    setPet((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", pet.name);
      formData.append("color", pet.color);
      formData.append("breed", pet.breed);
      formData.append("age", pet.age);
      formData.append("sex", pet.sex);
      formData.append("location", pet.location);
      formData.append("status", pet.status);
      formData.append("description", pet.description);
      formData.append("image", event.target.elements.image.files[0]);

      const response = await axios.put(
        `http://localhost:4305/api/pet/${props.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Pet updated successfully:", response.data);
      setPet({});
      alert("Pet Updated successfully");
      props.handleClose();
    } catch (error) {
      console.error("Error updating pet:", error);
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

    setPet((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     try {

  //       const response = await axios.put(`http://localhost:4305/api/pet/${props.id}`, pet);
  //       console.log("Pet updated successfully:", response.data);

  //       setPet({});
  //       alert("Pet Updated successfully")
  //       props.handleClose();
  //     } catch (error) {
  //       console.error("Error updating pet:", error);
  //     }
  //   };

  if (loading)
    return (
      <div className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/10">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/10">
        Error: {error.message}
      </div>
    );

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black/20">
      <div className="bg-white w-11/12 md:w-10/12 rounded-lg relative max-h-[90vh] overflow-auto">
        <div
          onClick={props.handleClose}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <IoCloseCircle size={25} />
        </div>

        <div className="px-5 py-5 h-full">
          <div className="font-semibold text-xl text-[#DC8857] pb-3">
            Edit Pet
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row lg:gap-10 h-full"
          >
            <div className="w-full lg:w-1/2 h-1/2">
              <div className="flex w-full">
                <div className="w-full flex">
                  <input
                    className="hidden"
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                  />
                  <div className={`border border-dashed p-10 ${!image ? "w-full" : "w-1/2"} h-full flex flex-col items-center justify-center text-gray-300 gap-2 cursor-pointer`}>
                    <BiSolidImageAdd size={23} />
                    <label htmlFor="image" className="cursor-pointer">
                      Attach Image here.
                    </label>
                  </div>
                  {image && (
                    <img className="w-1/2" src={image} alt="Pet Preview" />
                  )}
                </div>

                {pet.image && !image && (
                  <div className="flex flex-col w-full">
                    <img
                      className="w-full max-h-[40vh] object-cover"
                      src={`http://localhost:4305/${pet.image}`}
                      alt="Pet"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label className="font-semibold text-gray-600" htmlFor="name">
                  Name
                </label>
                <input
                  value={pet.name || ""}
                  onChange={handleChange}
                  name="name"
                  className="w-full border border-gray-300 h-10 rounded"
                  type="text"
                  id="name"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-semibold text-gray-600" htmlFor="color">
                  Color
                </label>
                <input
                  value={pet.color || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 h-10 rounded"
                  type="text"
                  id="color"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-semibold text-gray-600" htmlFor="breed">
                  Breed
                </label>
                <input
                  value={pet.breed || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 h-10 rounded"
                  type="text"
                  id="breed"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex flex-col w-full">
                  <label className="font-semibold text-gray-600" htmlFor="age">
                    Age
                  </label>
                  <input
                    value={pet.age || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 h-10 rounded"
                    type="text"
                    id="age"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="font-semibold text-gray-600" htmlFor="sex">
                    Sex
                  </label>
                  <input
                    value={pet.sex || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 h-10 rounded"
                    type="text"
                    id="sex"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="font-semibold text-gray-600"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    value={pet.location || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 h-10 rounded"
                    type="text"
                    id="location"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-semibold text-gray-600"
                    htmlFor="status"
                  >
                    Status
                  </label>

                  <select
                    value={pet.status || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 h-10 rounded"
                    name="status"
                    id="status"
                  >
                    <option value="For Adoption">For Adoption</option>
                    <option value="On Process">On Process</option>
                    <option value="Adopted">Adopted</option>
                  </select>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    className="font-semibold text-gray-600"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    value={pet.description || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 h-10 rounded"
                    type="text"
                    id="description"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-2 font-semibold">
                <button
                  onClick={props.handleClose}
                  className="border w-full rounded py-2"
                  type="submit"
                >
                  Cancel
                </button>
                <button
                  className="border w-full rounded py-2 bg-orange-200"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPetModal;
