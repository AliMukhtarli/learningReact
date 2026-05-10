
function Button(){
    const handleClick = () => console.log("Don't click me!😠")
    return(
        <button className="button" onClick={handleClick}>Click me!😁</button>
    );
}

export default Button;