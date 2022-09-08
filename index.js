const body = document.querySelector("body");
const container = document.querySelector(".container");
const inputLink = document.querySelector(".link");
const inputName = document.querySelector(".name");
const btn = document.querySelector("button");

//Creates ul to place li elements in
let ul = document.createElement("ul");
container.appendChild(ul);

//Creates li element to appear in ul and be appended by the linkAndName const.
let li = document.createElement("li");
ul.appendChild(li);

let listArray = [];
let linkAndName = "";

btn.addEventListener("click", (event) => {
  linkAndName = inputLink.value + " " + inputName.value;
  listArray.push(linkAndName);
  render(listArray);
  console.log(listArray);
});

//renders each item in an array as a list item
const render = (token) => {
token.forEach((arrItem) =>{
const list = document.createElement("li");
list.textContent = arrItem;
ul.append(list);
})
};
render(listArray);

console.log(ul);