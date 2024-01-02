async function showElement() {
    element = document.querySelector('.h3a');
      element.style.visibility = 'visible';
      await sleep(1500)
      element.style.visibility = 'hidden'; 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if ( username == "root" && password == "root") {
        alert ("Login successfully");
        window.location.href = './main/index.html';
        return false;
    }
    else{
        showElement();
        refFields();
    }
}

function show1Element() {
    element = document.querySelector('.btn-login');
        element.style.visibility = 'hidden'
    element = document.querySelector('.login-div');
      element.style.visibility = 'visible';
}
function refFields() {
    document.getElementById('username').value = ""; 
    document.getElementById('password').value = ""; 
}
   
