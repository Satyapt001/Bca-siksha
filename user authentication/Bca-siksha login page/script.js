document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
    const switchToSignUp = document.getElementById('switch-to-signup');
    const switchToSignIn = document.getElementById('switch-to-signin');

    // Initially show the sign-in form
    signInForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');

    // Event listener for switching to the sign-up form
    switchToSignUp.addEventListener('click', function() {
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
    });

    // Event listener for switching to the sign-in form
    switchToSignIn.addEventListener('click', function() {
        signUpForm.classList.add('hidden');
        signInForm.classList.remove('hidden');
    });
});
