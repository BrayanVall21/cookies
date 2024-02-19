localStorage.setItem("pato","lucas");

//creamos objeto lst
objetoNuevo = [{
    name: "Madre",
    age: 40
},{
    name: "Padre",
    age: 50
}];

//guardamos con llave "list" y como string el objeto con el JSON.stringify
localStorage.setItem("padres",JSON.stringify(objetoNuevo));

//almacenamos la llave list para ver si se guardó como string
obtenerAlmacenadoString = localStorage.getItem("padres");
//nos saldrá que es un string
console.log(typeof(obtenerAlmacenadoString));

//ahora es un objeto gracias a que parseamos el string
variableObjetoNuevo = JSON.parse(obtenerAlmacenadoString);
console.log(typeof(variableObjetoNuevo))
//ahora vamos a representarlo, vamos a recoorer la lista
variableObjetoNuevo.forEach(element => {
    let elements = document.getElementById("elements");
    let div = document.createElement("div");
    div.innerHTML = element.name + " "+ element.age;
    elements.appendChild(div);
});
