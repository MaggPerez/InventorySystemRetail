
/**
 * Function for login method when user enter's their username and 
 * password correctly
 */
function login(){
    window.location.href = "home.html";

}

document.getElementById('login-button').addEventListener('click', function(e){

    //Prevent the form from submitting
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username !== "" && password == !""){
        loginSuccessMessage(username);
    }else{
        loginFailedMessage();
    }
});


function loginSuccessMessage(user){
    localStorage.setItem("username", user)

    document.getElementById('login-message').innerHTML = "Logging in! Loading...";
    document.getElementById('login-message').style.color = "green";


    //Add a little delay and then switch to the main menu
    setTimeout(function(){
        window.location.href = "/public/home.html";
    }, 2000);

}

/**
 * Function for login failed message
 */
function loginFailedMessage(){
    document.getElementById('login-message').innerHTML = "Try again!";
    document.getElementById('login-message').style.color = "#ff014f";
}

/**
 * Function for switching to sign up form
 * @param {*} e 
 */
function switchToSignUp(e){
    e.preventDefault();

    // Hide sign-in form
    document.getElementById('login-field').classList.add('hidden');
    document.getElementById('signUp-field').classList.remove('hidden');
}


/**
 * Function for switching to login form
 * @param {*} e 
 */
function switchToLogin(e){
    e.preventDefault();

    // Hide sign-up form
    document.getElementById('signUp-field').classList.add('hidden');
    document.getElementById('login-field').classList.remove('hidden');
}