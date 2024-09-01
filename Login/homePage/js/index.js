//* elements
let div = document.getElementById("welcome");
let favUser = [localStorage.getItem("correctUser")];

console.log(favUser);

div.innerHTML = `Welcome ${favUser}`;
