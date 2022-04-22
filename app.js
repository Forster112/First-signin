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

// let myRegex = /[A-Z][a-z0-9]{8,}/;
// let tested = myRegex.test(togglePassword.value);
//     if (tested) {
//         console.log('yes')
//     } else {
//         console.log('no');
//     }

// [A - Z][a - z0 - 9]{ 8,}