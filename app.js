document.body.innerHTML += "Hello JavaScript!";
// alert("Hello Dat.js");
console.log("Hello Dat.js");
console.log("Hi Students!");
console.log("This is your first JavaScript App 🎉");

function sayHello() {
  document.querySelector("h3").textContent =
    "Hello " +
    document.querySelector("#name").value +
    ". You are " +
    document.querySelector("#age").value +
    " years old. Your mail is: " +
    document.querySelector("#mail").value;
}

document.querySelector("button").addEventListener("click", sayHello);
