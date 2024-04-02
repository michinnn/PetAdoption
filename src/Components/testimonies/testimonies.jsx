function Testimonies(props) {

return(
    <div className="hover:scale-110 transition-all ease-in-out duration-300 delay-75 h-full">
        <div className="shadow-md rounded flex flex-col items-center p-4 lg:p-8 gap-2 h-full">
         <img src={props.image} alt="" className="rounded bg-white object-contain w-1/2"/>
         <div className="text-[#DC8857] font-protest text-md lg:text-xl">{props.Title}</div>
         <div className="text-[#DC8857] text-xs lg:text-sm align-right">{props.desc}</div>
        </div>
    </div>
)
    
} export default Testimonies