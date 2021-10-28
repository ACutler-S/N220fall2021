//Andrew Cutler
//N220 - 34971
//October 27 ,2021
//Assignment 7: User Input Exercise
//PasswordProtection
//----------------------------------------------------------------

//Reference to the inputs and divs from the HTML page

let username = document.querySelector("#usernameInput");
let password = document.querySelector("#passwordInput");
let dvOutput = document.getElementById("dvOutput");

//initial message to user
dvOutput.innerHTML = "Please input your Username and Password...";

//function that is invoked when the button is clicked
function checkInputs(){
//If else statement to check for the correct credentials:

    if((username.value === "Username") && (password.value === "Password")){
        dvOutput.innerHTML = "Your credentials are correct... Please Proceed";
        //console.log(checkInputs());
    }else{
        dvOutput.innerHTML = "Your credentials are NOT correct.... Self Destruction imminent!";
    }
}