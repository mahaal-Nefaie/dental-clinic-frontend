function Button({ children, className  = "primary-btn", onClick}) {
return(
    <button className={className} onClick={onClick}>
        {children}
    </button>

);
} 

export default Button;