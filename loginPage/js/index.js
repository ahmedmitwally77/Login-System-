//* Elements
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let invalid = document.getElementById("invalid");

let users = [localStorage.getItem("users")];
users = JSON.parse(users);

//* Functions

function login() {
  if (email.value === "" || password.value === "") {
    if (email.value === "") {
      email.classList.add("is-invalid");
    }
    if (password.value === "") {
      password.classList.add("is-invalid");
    }
  }

  // console.log("login");

  if (users) {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      console.log(user);

      if (user.email === email.value && user.password === password.value) {
        console.log("correct user");
        console.log(user.username);
        localStorage.setItem("correctUser", user.username);
        clearInputs();
        window.location.href = "../homePage/home.html";
      } 
      else if (
        user.email === email.value &&
        user.password !== password.value
      ) {
        invalid.innerHTML = "Wrong Password";
        invalid.classList.remove("d-none");
        password.classList.add("is-invalid");
        password.value = "";
        return;
      }
    }
    invalid.innerHTML = "Email Does Not Exist";
    invalid.classList.remove("d-none");
    email.classList.add("is-invalid");
    clearInputs();
  }
}

function clearInputs() {
  email.value = "";
  password.value = "";
}

function removeClassEmail() {
  email.classList.remove("is-invalid");
  invalid.classList.add("d-none");
}

function removeClassPass() {
  password.classList.remove("is-invalid");
  invalid.classList.add("d-none");
}
