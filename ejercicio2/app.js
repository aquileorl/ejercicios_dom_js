
    //2.1
    const div = document.createElement("div");
    document.body.appendChild(div);

    //2.2
    const div2 = document.createElement("div");
    const p = document.createElement("p");
    div2.appendChild(p);
    document.body.appendChild(div2);

    //2.3
    const div3 = document.createElement("div");
    for(let i = 0; i < 6 ; i++){
        const p = document.createElement("p");
        div3.appendChild(p);
    }
    document.body.appendChild(div3);

    //2.4
    const p_dinamico = document.createElement("p");
    p_dinamico.innerText = "¡Soy Dinámico!";
    document.body.appendChild(p_dinamico);

    //2.5
    const h2 = document.querySelector(".fn-insert-here");
    h2.innerText = "Wubba Lubba dub dub";

    //2.6
    const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
    const ul = document.createElement("ul");

    for(let i = 0; i < apps.length; i++){
        const li = document.createElement("li");
        li.innerText = apps[i];
        ul.appendChild(li);
    }

    document.body.appendChild(ul);

    //2.7
    const itemsToRemove = document.querySelectorAll(".fn-remove-me");

    itemsToRemove.forEach(item => {
        item.parentNode.removeChild(item);
    });

    //2.8
    const middleP = document.createElement("p");
    p.textContent = "¡Voy enmedio!";

    const divs = document.querySelectorAll("div");
    const padre = divs[0].parentNode; //para detectar el nodo padre a partir del cual estructuraremos
    padre.insertBefore(middleP , divs[1]);

    //2.9
    const all_divs = document.querySelectorAll("div.fn-insert-here");
    
    all_divs.forEach(item => {
        const p = document.createElement("p");
        p.textContent = "¡¡Voy dentro!!";
        item.appendChild(p);
    });