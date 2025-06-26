/* 

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.

*/

//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul");

countries.forEach(country => {
    const li = document.createElement("li");
    li.innerText = country;
    ul.appendChild(li);
});

document.body.appendChild(ul);

//1.2
const itemsToRemove = document.querySelectorAll(".fn-remove-me");

itemsToRemove.forEach(item => {
	item.parentNode.removeChild(item);
});

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('[data-function = "printHere"]');
const ul_cars = document.createElement("ul");

cars.forEach(car => {
	const li = document.createElement("li");
	li.innerText = car;
	ul_cars.appendChild(li);
});

div.appendChild(ul_cars);

//1.4
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(country => {
	const div = document.createElement("div");
	const h4 = document.createElement("h4");
	const img = document.createElement("img");

	h4.innerText = country.title;
	img.src = country.imgUrl;

	div.appendChild(h4);
	div.appendChild(img);

	document.body.appendChild(div);
});

//1.5
const button = document.createElement("button");
button.textContent = "Remove Last";

button.addEventListener("click", ()=> {
	const divs = document.querySelectorAll("div");
	const total = divs.length - 1 ;
	const padre = divs[total].parentNode;
	const lastDiv = divs[total];
	padre.removeChild(lastDiv);
});

document.body.appendChild(button);

//1.6


const myDivs = document.querySelectorAll("div");

myDivs.forEach(div1 => {
	const button = document.createElement("button");
	button.textContent = "Remove this";
	div1.appendChild(button);
	button.addEventListener("click", () => {
		const padre = div1.parentNode;
		padre.removeChild(div1);
	})
});