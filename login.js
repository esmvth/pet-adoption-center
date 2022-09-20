const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.email.value;
    const password = loginForm.password.value;

    if (username === "person@email.com" && password === "123") {
        location.href="dogs.html";
        
    }
})

