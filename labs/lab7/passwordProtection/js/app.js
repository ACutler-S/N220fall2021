let username = document.querySelector("#usernameInput");
let password = document.querySelector("#passwordInput");
let dvOutput = document.getElementById("dvOutput");


dvOutput.innerHTML = "Please input your Username and Password...";

function checkInputs(){
    if((username.value === "Username") && (password.value === "Password")){
        dvOutput.innerHTML = "Your credentials are correct... Please Proceed";
        //console.log(checkInputs());
    }else{
        dvOutput.innerHTML = "Your credentials are NOT correct.... Self Destruction imminent!";
    }
}