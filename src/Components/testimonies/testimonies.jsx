function Testimonies(props) {

return(
    <div className="hover:scale-110 transition-all ease-in-out duration-300 delay-75">
        <div className="shadow-md rounded flex flex-col items-center p-8 gap-2">
         <img src="/PetAdoption/testimony.jpg" alt="" className="rounded-full bg-white w-28 h-28"/>
         <div className="text-[#DC8857] font-protest text-xl">{props.Title}</div>
         <div className="text-[#DC8857] text-sm align-right">{props.desc}</div>
        </div>
    </div>
)
    
} export default Testimonies