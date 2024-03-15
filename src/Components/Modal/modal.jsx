import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdPrivacyTip } from "react-icons/md";

// TODO: Change html tags to proper ones if it exist
function Modal(props) {

    return(
        <div className="z-40 bg-black/50 fixed top-0 bottom-0 right-0 left-0">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-[90vw] lg:w-[35vw] h-[50vh] bg-white rounded-xl flex flex-col lg:flex-row relative px-6">
                    <div onClick={props.closeModal} className="absolute top-0 right-0 m-2 p-1 font-bold text-lg cursor-pointer hover:bg-gray-200 text-gray-800 transition-colors duration-300 delay-75 ease-in-out rounded-full">
                        <IoCloseCircleSharp className='text-2xl'/>
                    </div>

                    
                    <div className="flex flex-col justify-center">
                        <div className="w-full lg:w-full pl-4 pr-10 py-5 flex flex-col">
                        <div className="flex gap-3">
                         <MdPrivacyTip className="w-fit h-full pb-2"/>
                            <div className="font-semibold text-xl pb-2">{props.title}</div>
                        </div>
                        <div className="pl-10 text-sm">{props.desc}</div>
                    </div>
                        <div className="flex items-center gap-2 pl-48">

                            <button onClick={props.closeModal}  className="text-[#DC8857] py-2 px-8 rounded hover:underline">Cancel</button>


                            <Link to="/adoptionfile">
                            <button className="bg-[#DC8857] text-white py-2 px-8 rounded">Confirm</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal