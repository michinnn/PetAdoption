import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal/modal";
import useUserRole from "../../helpers/useUserRole";

function PetInfo(props) {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true);
      };

    const closeModal = () => {
        setModal(false);
    };

    const { id } = useParams();

    const [pet, setPet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4305/api/pet/${id}`);
            setPet(response.data);
        console.log(pet)

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const userRole = useUserRole();
    const navigate = useNavigate();

    useEffect(() => {
        if(userRole && userRole !== "user") {
            navigate("/");
          }
        // console.log(id)
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <>
        
        <div className="h-screen px-8 lg:px-20">
            <div className="pt-16 lg:pt-20">
                <Link to='/user/adoptpage'><FaArrowLeft/></Link>
            </div>

            <div className="pt-6 grid grid-row-2 lg:grid-cols-2">
                <div className="flex w-full justify-center">
                    <img src={`http://localhost:4305/${pet.image}`} alt="" className="w-full lg:w-3/4 h-full object-cover border rounded"/>
                </div>
                <div className="flex w-full lg:border lg:shadow lg:rounded pt-2 lg:p-12 justify-center">
                    <div className="flex flex-col w-full gap-2 lg:gap-3">
                        <p className="font-protest text-[#DC8857] text-xl lg:text-3xl lg:pb-5">{pet.name}</p>
                        <p className="font-sans text-gray-400 font-semibold text-sm lg:text-lg">D E T A I L S</p>

                            <div className="flex w-full justify-between">
                                <div className="font-sans w-1/2 flex flex-col text-xs lg:text-lg gap-2">
                                    <p className="text-gray-600">Breed</p>
                                    <p className="text-gray-600">Color</p>
                                    <p className="text-gray-600">Age</p>
                                    <p className="text-gray-600">Sex</p>
                                    <p className="text-gray-600">Location</p>
                                    <p className="text-gray-600">Description</p>
                                    
                                </div>
                                <div className="font-sans font-semibold w-1/2 flex flex-col text-xs lg:text-lg gap-2">
                                    <p className="text-gray-400">{pet.breed}</p>
                                    <p className="text-gray-400">{pet.color}</p>
                                    <p className="text-gray-400">{pet.age}</p>
                                    <p className="text-gray-400">{pet.sex}</p>
                                    <p className="text-gray-400">{pet.location}</p>
                                    <p className="text-gray-400">{pet.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-col pt-2 lg:pt-5 w-full">
                                <button onClick={() => setModal(true)} className="bg-[#DC8857] hover:bg-[#DC8857]/90 font-semibold text-md lg:text-lg text-white py-2 px-10 lg:px-16 rounded">
                                     Adopt Me
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        { modal && (
                <Modal title="Data Privacy Policy"
                    desc="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
                    closeModal={closeModal} />)
         }
        
        </>
    )
}
export default PetInfo