document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.visibility = 'hidden');

    if (name.value.trim() === '') {
        showError(name, 'Name field cannot be empty.');
        isValid = false;
    }
    if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    }
    if (message.value.trim() === '') {
        showError(message, 'Message field cannot be empty.');
        isValid = false;
    }
    if (isValid) {
        alert('Form submitted successfully!');
    }
});
function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.visibility = 'visible';
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
