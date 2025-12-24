const userPassword = "2009";
const userName = "fly-monkey";

function Submit() {
    let Username = document.getElementById('username-id').value;
    let Password = document.getElementById('password-id').value;


    if (Username === userName && Password === userPassword) {
        alert("Logged In!");

    }if (Username !== userName && Password !== userPassword) {
        document.getElementById('username-id').value = "Incorrect Username!";
        document.getElementById('password-id').value = "Incorrect Password!";
        

    }if (Username !== userName && Password === userPassword){
        document.getElementById('username-id').value = "Incorrect Username!";


    }if (Password !== userPassword && Username === userName){

        document.getElementById('password-id').value = "Incorrect Password!";
        
    }
}


function clearForm(){
    document.getElementById('username-id').value = "";
    document.getElementById('password-id').value = "";
}

