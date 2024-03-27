function Button(props) {
    return (
        <button onClick={(e) => { e.preventDefault(); props.handleClick(); }} className={`rounded px-2 py-1 font-semibold ${props.className}`}>
            {props.children}
        </button>
    );
}

export default Button;
