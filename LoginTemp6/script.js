document
  .getElementById("toggle-signup")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const formTitle = document.getElementById("form-title");
    const toggleMessage = document.getElementById("toggle-message");

    if (loginForm.style.display === "block" || loginForm.style.display === "") {
      // Switch to signup form
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      formTitle.innerText = "Sign Up";
      toggleMessage.innerHTML =
        'Already have an account? <a href="#" class="toggle-link" id="toggle-login">Login!</a>';
    } else {
      // Switch to login form
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      formTitle.innerText = "Login";
      toggleMessage.innerHTML =
        'Don\'t have an account? <a href="#" class="toggle-link" id="toggle-signup">Sign up!</a>';
    }

    // Rebind the event listener to the new link
    document
      .getElementById("toggle-login")
      ?.addEventListener("click", arguments.callee);
    document
      .getElementById("toggle-signup")
      ?.addEventListener("click", arguments.callee);
  });

// Initially show login form
document.getElementById("login-form").style.display = "block";
