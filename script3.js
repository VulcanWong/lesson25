function validate(e) {
    e.preventDefault();
    const email = document.getElementById('email').Value;
    const pass = document.getElementById('password').Value;
    const age = document.getElementById('age').Value;
    const msgBox = document.getElementById('message');
    let message = '';
    if (email === '') {
        message = 'please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'password must be at least 8 character.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'age must be between 12 and 50';
        msgBox.style.color = 'red';
    }
    else {
        message = 'login successful';
        msgBox.style.color = 'green';
    }
    msgBox.innerText = message;
}