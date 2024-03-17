function Testimonies(props) {

return(
    <div className="hover:scale-110 transition-all ease-in-out duration-300 delay-75">
        <div className="shadow-md rounded flex flex-col items-center p-4 lg:p-8 gap-2">
         <img src="testimony.jpg" alt="" className="rounded-full bg-white w-24 h-24 lg:w-28 lg:h-28"/>
         <div className="text-[#DC8857] font-protest text-md lg:text-xl">{props.Title}</div>
         <div className="text-[#DC8857] text-xs lg:text-sm align-right">{props.desc}</div>
        </div>
    </div>
)
    
} export default Testimonies