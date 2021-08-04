'use strict';

// execise 2 arreglando errores por crear una constante y reasignarle contendio. se cambila de constante a variable

let address = 'av españa 4';

address = 'gran via 25';
// execise 2 end 

//****************************************************************** */

//Practicando el cambio de h1


// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = 'Bienvenida';

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
titleElement.innerHTML = titleElement.innerHTML + ' adalaber';

//*************************************************************** */


//exercise 3  cambiar el texto de <p>
//1º creo una clase en htm de <p> luego creo una constante textElement y guardo el contendio de la clase .parrafo
//por ultimo llamo a mi constante creada  y a la propiedad .innerHTML  y le  reasigno el nuevo valor


const textElement = document.querySelector ('.parrafo');

textElement.innerHTML = 'Hola Mundo';

//exercise 3 end




