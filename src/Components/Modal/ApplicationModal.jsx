import { IoCloseCircle } from "react-icons/io5";
import Button from "../Button";
import axios from "axios";

function ApplicationModal({ application, handleClose }) {
    const { _id, firstName, lastName, email, address, contactNumber, otherDetails, status } = application;
    
    function handleButton(action) {
        if(action === "Decline") {
            updateApplication("Rejected");
        } else {
            updateApplication("Accepted");
        }
    }

    async function updateApplication(status) {
        try {
            const response = await axios.put(`http://localhost:4305/api/adoptionApplication/${_id}`, {status: status});
            console.log("Application updated successfully:", response.data);
            
            alert("Application Updated successfully")
            handleClose();
        } catch (error) {
            console.error("Error updating application:", error);
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/10 flex justify-center items-center">
            <div className="bg-white w-[90vw] rounded relative">
                <button onClick={handleClose} className="absolute top-5 right-5 cursor-pointer">
                    <IoCloseCircle size={24} />
                </button>

                <div className="p-10">
                    {renderDetail("Name", `${firstName} ${lastName}`)}
                    {renderDetail("Email", email)}
                    {renderDetail("Address", address)}
                    {renderDetail("Contact Number", contactNumber)}
                    {renderDetail("Other Details", otherDetails)}
                    {renderDetail("Status", status)}

                    <div className="pt-6 flex gap-4 justify-end w-full">
                        {/* This is a custom "Button", go to Components > Button to edit. */}
                        <Button handleClick={() => handleButton("Decline")} className="bg-red-200 text-black/50">Decline</Button>
                        <Button handleClick={() => handleButton("Accept")} className="bg-green-300 text-black/50">Accept</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function renderDetail(label, value) {
    return (
        <div>
            <div>{label}</div>
            <div className="border rounded p-1">{value}</div>
        </div>
    );
}

export default ApplicationModal;
