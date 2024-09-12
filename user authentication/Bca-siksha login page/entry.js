const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const switchToSignin = document.getElementById('switch-to-signin');
const switchToSignup = document.getElementById('switch-to-signup');

// Switch to Sign-In form
switchToSignin.addEventListener('click', function() {
  signupForm.classList.add('hidden');
  signinForm.classList.remove('hidden');
});

// Switch to Sign-Up form
switchToSignup.addEventListener('click', function() {
  signinForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});