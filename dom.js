const INPUT = document.getElementById("numero");
const BOTON = document.querySelector("button");
const RESULTADO = document.getElementById("resultado");

const PIZZA1 = {
     id:1, nombre: "Calabresa", ingredientes:["tomate", "queso","salame"], precio:699
}
const PIZZA2 = {
    id:1, nombre: "Muzzarella", ingredientes:["tomate", "queso","salame"], precio:852
}
const PIZZA3 = {
    id:1, nombre: "Cancha", ingredientes:["tomate", "queso","rucula"], precio:1699
}
const PIZZA4 = {
    id:1, nombre: "Anchoa", ingredientes:["tomate", "anchoas","salame"], precio:587
}
const PIZZA5 = {
    id:1, nombre: "Napolitana", ingredientes:["tomate", "queso","morrrones"], precio:1560
}

const menu = [
     { id:1, nombre: "Palmitos", ingredientes:["jamon", "palmitos", "salsa golf"], precio:1500},
     { id:2, nombre: "Jamon y morrones", ingredientes:["jamon", "morrones", "salsa golf"], precio:1890},
     { id:3, nombre: "Calabresa", ingredientes:["jamon", "palmitos", "salsa golf"], precio:1250},
     { id:4, nombre: "Fugazzeta", ingredientes:["jamon", "palmitos", "salsa golf"], precio:999},
     { id:5, nombre: "Cancha", ingredientes:["jamon", "palmitos", "salsa golf"], precio:2350},
     { id:6, nombre: "Anana", ingredientes:["jamon", "palmitos", "salsa golf"], precio:1540},

]


BOTON.addEventListener("click", ()=> {
      const valor = INPUT.value;
      if (valor >= 1 && valor <= 6) {
        let metodo = menu.find(menu => menu.id == valor)
        document.querySelector("h2").innerHTML = "Su pizza es " + metodo.nombre
        document.querySelector("h3").innerHTML = "El precio es $" + metodo.precio
      }  
     if (valor == "") {
        document.querySelector("h2").innerHTML = "ingresa un valor por favor";
        

     } if (valor == 0 || valor >= 7) {
        document.querySelector("h2").innerHTML = "Ingrese un valor valido";
        document.querySelector("h3").innerHTML = ""
        }


})