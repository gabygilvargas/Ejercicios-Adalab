'use strict';

document.querySelector('h1').innerHTML = '¡Esta página Hola mundo!';

// Aquí va el código JavaScript 


//creamos 1 constante donde se guardará el listado  
const listElement = document.querySelector('.list');


//creamos una constante donde estaran los li home y contact
const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

//en la constante de listado metemos los li
listElement.innerHTML = content;

