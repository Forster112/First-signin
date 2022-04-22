let switchText = document.querySelector('.hide');
let togglePassword = document.querySelector('.toggled');

document.querySelector('.pass').addEventListener('click', function () {
    if (switchText.innerHTML === 'Hide') {
        switchText.innerHTML = 'Show';
    } else {
        switchText.innerHTML = 'Hide';
    }

    
    if (togglePassword.type === 'password') {
        togglePassword.type = 'text';
    } else {
        togglePassword.type = 'password';
    }
});

FIXME: //feature not what we want FIXME:
function myPasswordCheck(inputtxt) {
    let myRegex = /[A-Z][a-z0-9]{8,}/;
    if (inputtxt.value.match(myRegex)) {
        return true;
    } else {
        togglePassword.style.borderColor = 'red';
        return false;
    }
}
// [A - Z][a - z0 - 9]{ 8,}
