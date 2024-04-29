let password= document.getElementById("input")
let strength= document.getElementById("strength")
let btn= document.getElementById("btn")
let para= document.getElementById("para")

password.addEventListener("input",()=>{
    if(password.value.length === 0){
        password.style.borderColor= "white"
        para.style.visibility="hidden"
        return
    }
    if(password.value.length>0){
        para.style.visibility="visible"
    }
    else{
        
        para.style.visibility="hidden"
  
    }

    if(password.value.length<=4){
        strength.innerHTML="weak"
        strength.style.color="red"
        password.style.borderColor= "red"
    }
    else if(password.value.length>4 && password.value.length<8){
        strength.innerHTML="medium"
        strength.style.color="yellow"
        password.style.borderColor= "yellow"
    }
    else if( password.value.length >8)
    {
        strength.innerHTML="strong"
        strength.style.color="rgb(50, 255, 9)"
        password.style.borderColor= "rgb(50, 255, 9)"
    }


    

})

password.addEventListener("blur",()=>{
    password.style.borderColor= "white"
})





// let lastchar=""

// password.addEventListener("input",(event)=>{

//     if(lastchar == ""){
//         lastchar=""
//     }
//     let newchar=event.data
//     password.value=newchar
//     newchar.type="text"
//     lastchar+=newchar
//     setTimeout(()=>{
// newchar.type="password"
// password.value=lastchar;


//     },400)

    
// })

let lastChar = ""; // Store the last entered character



// password.addEventListener("keyup", (event) => {
//   const newChar = event.data; // Get the newly entered character

//   // Update value and type for temporary reveal
//   password.value = newChar;
//   password.type = "text";

//   setTimeout(() => {
//     password.type = "password"; // Hide the character after 500ms (0.5 seconds)

//     // Restore original password with only last character revealed
//     password.value = lastChar; // Set value to lastChar
//   }, 500);

//   // Update lastChar for subsequent inputs
//   lastChar+= newChar;
// });
