import { FiEdit } from "react-icons/fi";
import React, { useState, useEffect } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoCloseCircle } from "react-icons/io5";
import axios from 'axios';
import { BiSolidImageAdd } from "react-icons/bi";
import Input from "../../Components/Input"

function AdminPage() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("For Adoption");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
      const fetchData = async () => {
          try {
          const response = await axios.get('http://localhost:4305/api/pet');
          setData(response.data);
          } catch (error) {
          setError(error);
          } finally {
          setLoading(false);
          }
      };

      fetchData();
  }, []);

  function toggleModal() {
    setModal(!modal)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const pet = {
      name: name,
      color: color,
      breed: breed,
      age: age,
      sex: sex,
      location: location,
      status: status,
      image: image,
      description: description,
    }

    console.log(pet);

    try {
      const response = await axios.post('http://localhost:4305/api/pet', pet);
      console.log('Pet added successfully:', response.data);

      setName("");
      setColor("");
      setBreed("");
      setAge(0);
      setSex("");
      setLocation("");
      setStatus("");
      setImage("");

      toggleModal(); 
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  }


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="flex h-screen w-full px-16">
        <div className="border-r w-1/4 flex flex-col gap-10 pt-10">
          <div className="flex justify-start gap-2 h-fit">
            <div className='h-6 w-6 lg:h-10 lg:w-10'>
              <img src="/paw.png" alt="" />
            </div>
            <div className="flex flex-col items-center items-center">
              <p className="font-protest text-xl font-semibold text-[#DC8857]">PAWS</p>
              <p className="font-sans font-semibold text-gray-300 text-xs">Pets Are Worth Saving</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="flex rounded hover:bg-[#DC8857]/70 hover:text-white hover:cursor-pointer text-[#DC8857] text-md font-semibold py-3 px-2 w-full">Pet List</p>
            <p className="flex rounded hover:bg-[#DC8857]/70 hover:text-white hover:cursor-pointer text-[#DC8857] text-md font-semibold py-3 px-2 w-full">Adopter List</p>
          </div>
        </div>

        <div className="flex flex-col w-3/4 bg-gray-50 px-5 pt-10">
          <div className="flex w-full justify-between">
              <p className="font-sans font-semibold text-[#DC8857] text-2xl">PET LIST</p>
            <div onClick={toggleModal} className="flex justify-end items-center gap-2 text-[#DC8857] hover:text-white hover:bg-[#DC8857] cursor-pointer border border-[#DC8857] p-2 font-semibold rounded">
              <IoMdAddCircle /><p>Add a Pet</p>
            </div>
          </div>


          <div className="flex overflow-auto pt-5">
            <table className="border w-full">
                <thead>
                  <tr>
                    <th className="font-sans font-semibold text-gray-400">Name</th>
                    <th className="font-sans font-semibold text-gray-400">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((pet)=>(
                    <tr key={pet._id}>
                      <th className="font-sans font-semibold text-gray-700">{pet.name}</th>
                      <th className="font-sans font-semibold text-gray-700 w-fit">
                        <span className={`border-2 w-fit px-4 py-1 rounded-2xl ${
                          pet.status === 'On Process' ? 'border-yellow-400 bg-yellow-300' :
                          pet.status === 'For Adoption' ? 'border-blue-300 bg-blue-200' :
                          pet.status === 'Adopted' ? 'border-orange-400 bg-orange-300' : ''
                        }`}>{pet.status}</span>
                      </th>
                      <th className="py-4 text-gray-400 hover:cursor-pointer"><FiEdit /></th>
                    </tr>
                  ))}
                </tbody>

            </table>
          </div>
        </div>
      </div>

      {modal && 
      <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black/20">
        <div className="bg-white w-10/12 rounded-lg relative max-h-[90vh] overflow-auto">
          <div onClick={toggleModal} className="absolute top-5 right-5 cursor-pointer"><IoCloseCircle size={25} /></div>

          <div className="px-5 py-5 h-full">
            <div className="font-semibold text-xl text-[#DC8857] pb-3">
              Add New Pet
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row lg:gap-10 h-full">
              <div className="w-full lg:w-1/2 h-1/2">
                <div className="border border-dashed p-10 w-full h-full flex flex-col items-center justify-center text-gray-300 gap-2 cursor-pointer">
                    Attach image here.
                    <BiSolidImageAdd  size={23}/>
                    <input value={image} onChange={(e) => setImage(e.target.value)} type="file" id="Image" />
                </div>

                <div className="flex flex-col w-full">
                    <label className="font-semibold text-gray-600" htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} 
                      className="w-full border border-gray-300 h-10 rounded" type="text" id="name" />
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-semibold text-gray-600" htmlFor="color">Color</label>
                    <input value={color} onChange={(e) => setColor(e.target.value)} 
                      className="w-full border border-gray-300 h-10 rounded" type="text" id="color" />
                </div>
                <div className="flex flex-col w-full">
                    <label className="font-semibold text-gray-600" htmlFor="breed">Breed</label>
                    <input value={breed} onChange={(e) => setBreed(e.target.value)} 
                      className="w-full border border-gray-300 h-10 rounded" type="text" id="breed" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col w-full">
                      <label className="font-semibold text-gray-600" htmlFor="age">Age</label>
                      <input value={age} onChange={(e) => setAge(e.target.value)} 
                        className="w-full border border-gray-300 h-10 rounded" type="number" id="age" />
                  </div>
                  <div className="flex flex-col w-full">
                      <label className="font-semibold text-gray-600" htmlFor="sex">Sex</label>
                      <input value={sex} onChange={(e) => setSex(e.target.value)} 
                       className="w-full border border-gray-300 h-10 rounded" type="text" id="sex" />
                  </div>
                  <div className="flex flex-col w-full">
                      <label className="font-semibold text-gray-600" htmlFor="location">Location</label>
                      <input value={location} onChange={(e) => setLocation(e.target.value)} 
                        className="w-full border border-gray-300 h-10 rounded" type="text" id="location" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold text-gray-600" htmlFor="status">Status</label>

                    <select value={status} onChange={(e) => setStatus(e.target.value)} 
                      className="w-full border border-gray-300 h-10 rounded" name="status" id="status">
                      <option value="For Adoption">For Adoption</option>
                      <option value="On Process">On Process</option>
                      <option value="Adopted">Adopted</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full">
                      <label className="font-semibold text-gray-600" htmlFor="description">Description</label>
                      <input value={description} onChange={(e) => setDescription(e.target.value)} 
                        className="w-full border border-gray-300 h-10 rounded" type="text" id="description" />
                  </div>
                </div>

                <div className="flex gap-4 pt-2 font-semibold">
                  <button className="border w-full rounded py-2" type="submit">Cancel</button>
                  <button className="border w-full rounded py-2 bg-orange-200" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>}
    </>
  )
  } export default AdminPage