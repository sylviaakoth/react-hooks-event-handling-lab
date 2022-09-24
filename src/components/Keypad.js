// Code Keypad Component Here

// import { useState } from "react";

function Keypad (){
    

function handleChange (event) {
console.log(event.target.value = "Entering password...")
}

    return (
        <div>
<form>
    <label>
        Password
    </label>
<input  type= "password" onChange={handleChange} > 

</input>
<input type="submit" value="Submit">
</input> 

</form> 


        </div>
    )
}

export default Keypad;