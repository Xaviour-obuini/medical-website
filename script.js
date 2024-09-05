document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('.sign-up');
    const logInButton = document.querySelector('.log-in');
    const submitButton = document.querySelector('.submit');

    signUpButton.addEventListener('click', () => {
        alert('Sign Up button clicked!');
    });

    logInButton.addEventListener('click', () => {
        alert('Log In button clicked!');
    });

    submitButton.addEventListener('click', () => {
        alert('Submit button clicked!');
    });
});
