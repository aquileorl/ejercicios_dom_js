
/* 

Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
 */



//1.1
const button = document.createElement("button");
button.id = "btnToClick";
button.innerText = "Button";
document.body.appendChild(button);
button.addEventListener("click", (event) => {
    console.log(event);
});

//1.2
const myFocus = document.querySelector(".focus");
myFocus.addEventListener("focus", ()=>{
    console.log(myFocus.value);
});

//1.3 
const myInputs = document.querySelectorAll("input");

myInputs.forEach(input => {
    input.addEventListener("input", () => {
        console.log(input.value);
    });
});

//1.4
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");

for (const album of albums) {
    const li = document.createElement("li");
    li.textContent = album;
    ul.appendChild(li);
}

document.body.appendChild(ul);