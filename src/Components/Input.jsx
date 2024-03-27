
function Input(props) {
    return (
        <div className="flex flex-col w-full">
            <label className="font-semibold text-gray-600" for={props.label}>{props.label}</label>
            <input className="w-full border border-gray-300 h-10 rounded" type={props.type} id={props.label} />
        </div>
    )
}

export default Input