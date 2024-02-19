localStorage.setItem("pato","lucas");

//creamos objeto lst
lst = [{
    name: "Atila",
    age: 12
},{
    name: "Brayan",
    age: 23
}];

//guardamos con llave "list" y como string el objeto con el JSON.stringify
localStorage.setItem("list",JSON.stringify(lst));

//almacenamos la llave list para ver si se guardó como string
lst = localStorage.getItem("list");
//nos saldrá que es un string
//console.log(typeof(lst));

//ahora es un objeto gracias a que parseamos el string
lst = JSON.parse(localStorage.getItem("list"));


//ahora vamos a representarlo, vamos a recoorer la lista
lst.forEach(element => {
    let elements = document.getElementById("elements");
    let div = document.createElement("div");
    div.innerHTML = element.name + " "+ element.age;
    elements.appendChild(div);
});
