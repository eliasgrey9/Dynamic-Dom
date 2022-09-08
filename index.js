const body = document.querySelector("body");
const inputLink = document.querySelector(".link");
const inputName = document.querySelector(".name");
const btn = document.querySelector("button");

//Creates ul to place li elements in
let ul = document.createElement("ul");
body.appendChild(ul);

//Creates li element to appear in ul and be appended by the linkAndName const.
let li = document.createElement("li");
ul.appendChild(li);

let listArray = [];
let linkAndName = "";

btn.addEventListener("click", (event) => {
  linkAndName = inputLink.value + " " + inputName.value;
  listArray.push(linkAndName);
  console.log(listArray);
});

//renders each item in an array as a list item
const render = (token) => {
token.forEach((arrItem) =>{
ul.push(arrItem);
return ul;
})
};
render(listArray);

