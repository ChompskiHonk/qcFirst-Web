const loginForm = document.querySelector("form.loginForm");
const signForm = document.querySelector("form.signupForm");
const logiBtn = document.querySelector("label.login");
const signBtn = document.querySelector("label.signup");
const signLink = document.querySelector(".sign-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");

/*when clicking slide sign buttom, the login form and text will move to left 50%*/
/*then sign up form will show up*/
signBtn.onclick = function() {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

/*when clicking slide login buttom, the login form will be set to 0% to back original place*/ 
logiBtn.onclick = function() {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

/*when create account link gets hit, then sign up buttom gets called to display sign form*/
signLink.onclick = function() {
    signBtn.click();
    return false;
};

/*confrimation of password*/
function onChange() {
    const password = document.querySelector('input[id=password]');
    const confirm = document.querySelector('input[id=passwordConfirm]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }


