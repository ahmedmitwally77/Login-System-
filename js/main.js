//* elements
let uname = document.getElementById("username");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let invalid = document.getElementById("invalid");
let users = [];

let reg = {
  username: /^[A-Z][a-z]{3,10}$/,
  emailInput: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  passwordInput: /^[a-zA-Z0-9]{6,10}$/,
};

//* Functions

if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  let user = {
    username: uname.value,
    email: email.value,
    password: password.value,
  };
  if (validation(uname) & validation(email) & validation(password)) {
    users.push(user);
    clearInputs();
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "../loginPage/login.html";
  } else if (!validation(uname) & !validation(email) & !validation(password)) {
    invalid.classList.remove("d-none");
    invalid.innerHTML = "Invalid Input Should Enter Valid Data";
  } else if (!validation(uname)) {
    invalid.classList.remove("d-none");
    invalid.innerHTML =
      "Invalid Username Should start with Capital Letter and minimum 3 characters and maximum 10 characters";
  } else if (!validation(email)) {
    invalid.classList.remove("d-none");
    invalid.innerHTML = "Invalid Email Address";
  } else if (!validation(password)) {
    invalid.classList.remove("d-none");
    invalid.innerHTML = "Invalid Password Should be 6 to 10 characters";
  } else {
    invalid.innerHTML = "Invalid Input";
    invalid.classList.remove("d-none");
  }
}

function clearInputs() {
  uname.value = "";
  email.value = "";
  password.value = "";
}

function validation(ele) {
  if (reg[ele.id].test(ele.value)) {
    ele.classList.remove("is-invalid");
    ele.classList.add("is-valid");

    return true;
  } else {
    ele.classList.remove("is-valid");
    ele.classList.add("is-invalid");

    return false;
  }
}
