'use strict';

//excercise 4 

//declaramos las constantes

const titleElement = document.querySelector('.title'); //constante para el h1

const nameElement1 = document.querySelector('.name1'); //constante para nombre1
const nameElement2 = document.querySelector('.name2'); //constante para nombre2


// Cambiamos el contenido del elemento titulo h1, indicando que sea igual al actual, más una nueva palabra añadida qie es el nombre li1 o li2
titleElement.innerHTML = titleElement.innerHTML + nameElement2.innerHTML;







