
function Button(){
   //const handlecClick2 = (name) => console.log(`${name} stop clicking me!`) 

    let count = 0;
     const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times!`)
        }else{
            console.log(`${name} stop cilcking me!!!`)
        }
     }



    return(
        <button className="button" onClick={ () => handleClick("Aytac") }>Click me!😁</button>
    );
}

export default Button;