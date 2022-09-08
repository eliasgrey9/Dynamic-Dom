const body = document.querySelector("body");
const inputLink = document.querySelector(".link")
const inputName = document.querySelector(".name")
const btn = document.querySelector("button")

//Creates ul to place li elements in
const ul = document.createElement("ul");
body.appendChild(ul);

//Creates li element to appear in ul and be appended by the linkAndName const.
const li = document.createElement("li");

let listArray = [];
let linkAndName = "";

btn.addEventListener("click", (event) => {
linkAndName = inputLink.value + " " + inputName.value;
listArray.push(linkAndName);
console.log(listArray);
}
);


//renders each item in an array as a list item
 const render = (myList) =>{
 myList.forEach((token)=>{li.append(token);
})
 ul.appendChild(li);
 return ul;
}

//executes render function
console.log(render(listArray));