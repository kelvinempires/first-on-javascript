// document.getElementById("count-el").innerText = 7;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increament() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  count = 0;
  saveEl.textContent += countStr;
  console.log(count);
  countEl.textContent = 0;
}

// let Name = 42;
// let greeting = "hi my name is ";
// let mygreeting = greeting + Name;
// console.log(mygreeting);
// let welcomeEl = document.getElementById("welcome-el");
// let Name = "kelvin";
// let greeting = "goodafternoon ";
// welcomeEl.innerText = greeting + Name;

// welcomeEl.innerText += "👌";
