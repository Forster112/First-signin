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

/* <input type="radio" class="checker" id="one">
    <label for="one" class="radio">One lowercase character</label>
    <span><input type="radio" class="checker" id="two">
        <label for="two" class="radio">8 characters minimum</label></span>
    <br>
        <input type="radio" class="checker" id="three">
            <label for="three" class="radio">One uppercase letter</label>
            <br>
                <input type="radio" class="checker" id="four">
                    <label for="four" class="radio">One number</label> */