/* //Guardo en la constante contenedorcard el 1er elemento con el id contenedor_tarjetas 
const contenedorCard= document.querySelector('#contenedor_tarjetas')
console.log(contenedorCard)
//Creo un String vacio tarjetas
let tarjetas =''
//Obtengo del data.js la variable que figura como fecha actual
let currentDate=data.currentDate;
console.log(currentDate)
//Filtro las eventos futuros
let filtroTarjetasFuturo= filterEventsUpcoming(data.events, currentDate)
//creo las Cards
let cardsGenerated = crearCard(filtroTarjetasFuturo)
//Renderizo las cards que cree
contenedorCard.innerHTML = tarjetas */
//Guardo en la constante contenedorcard el 1er elemento con el id contenedor_tarjetas donde se van a dibujar las tarjetas
const contenedorCard= document.querySelector('#contenedor_tarjetas')
//Guardo en la constante contenedorCheck el 1er elemento con el id categorias donde se van a dibujar las checkboxs
const contenedorCheck = document.querySelector('#categorias');
/* const searchFilter = document.getElementById("searchInput") */
//Guardo en la constante searchFilter el 1er elemento con el id searchInput
const searchFilter = document.querySelector('#searchInput')
//Guardo en la constante dataEvents el acceso a eventos del data.js
const dataEvents = data.events;

let currentDate=data.currentDate;

console.log(contenedorCard)
console.log(contenedorCheck)
console.log(searchFilter)
console.log(currentDate)

//Utilizamos el selector input capturado  y lo ponemos a escuchar el 
//evento del DOM input. El método addEventListener() puede recibir 3 parametros
//en nuestro caso le pasamos 2 parametros 
//element.addEventListener(event, function) 
//la funcion superFiltro es una funcion que creamos nosotros
searchFilter.addEventListener('input',superFiltro)

//Utilizamos el objeto contenedorCheck capturado  y lo ponemos a escuchar el 
//evento del DOM change. El método addEventListener() puede recibir 3 parametros
//en nuestro caso le pasamos 2 parametros 
//element.addEventListener(event, function) 
//la funcion superFiltro es una funcion que creamos nosotros
contenedorCheck.addEventListener('change',superFiltro)

//la funcion superFiltro no recibe parametros 
//Superfiltro llama a 3 funciones las filtrarPorTexto, filtrarPorPais y pintarPersonas
//funciones que definimos mas abajo
function superFiltro(){

  let filtroTarjetasFuturo= filterEventsUpcoming(dataEvents, currentDate)

  //creamos la variable primerFiltro y le asignamos 
  //la funcion filtrarPorTexto que captura el texto 
  //ingresado por input. Esta funcion recibe como parametros
  //(array, texto ingresado) en nuestro caso (dataEvents, searchFilter.value)
  //dataEvents es el array y searchFilter.value es la propiedad que devuelve el
  //dato del valor cursor en la posicion actual  
  
  let primerFiltro = filtrarPorTexto(filtroTarjetasFuturo,searchFilter.value)

  //creamos la variable segundoFiltro y le asignamos 
  //la funcion filtrarPorCategorias que captura los checkboxs seleccionados
  //recibe como parametro un array. 
  //En este caso para que sea excluyente el 1er filtro le pasamos como 
  //parametro el array filtrado por texto ingresado en el buscador(input) (variable searchFilter)
  //el array(primerFiltro)
  let segundoFiltro = filtrarPorCategorias(primerFiltro)
  //Finalmente llamamos a la funcion crearCard que (dibuja) renderiza las cards
  //y le pasamos el el array con los datos filtrados por segundoFiltro 
  crearCard(segundoFiltro)
}

let filtroTarjetasFuturo= filterEventsUpcoming(data.events, currentDate)
//Renderizamos las cards con los datos del array dataEvents (se ven todas las cards)
/* crearCard(dataEvents) */
crearCard(filtroTarjetasFuturo) 
//Creamos los checkbox con los con los datos del array dataEvents (se ven todos las checkbox)
crearCheckBoxes(filtroTarjetasFuturo)

//funcion que crea los checkbox recibe como parametro 
function crearCheckBoxes(array){
  //Declaro la variable local arrayCategorias que nos va a 
  //generar por medio de un map un nuevo array pero solamente
  //con el atributo category(categoria) del array dataEvents 
  let arrayCategorias = array.map(event => event.category)
  /* console.log(arrayCategorias) */
  //Ahora vamos a crear la variable setCategorias 
  //un set que tiene la particularidad de solo se 
  //pueden guardar valores unicos y asi evitamos 
  //la duplicidad de los valores 
  let setCategorias = new Set(arrayCategorias)
  /* console.log(setCategorias) */
  //Creamos la variable arrayChecks y convertimos el 
  //setCategorias en un array
  //porque comienza con Array y no con array, supongo que es debido a que 
    //si llama a array esta llamando a la funcion que le pasamos por parametro
  let arrayChecks = Array.from(setCategorias)
  /* console.log(arrayChecks) */
  //Creamos la variable checkboxes como un String vacio
  let checkboxes = ''
  //Recorro el arrayChecks con un forEach y renderizo los checkbox con las categorias 
  arrayChecks.forEach(category => {
      checkboxes += `<div class="form-check" form-switch role="switch">
      <input class="form-check-input" type="checkbox"  id="${category}" value="${category}">
      <label class="form-check-label" for="${category}">${category}</label>
    </div>`
  })
  //Dibujo los checkbox
  contenedorCheck.innerHTML = checkboxes
}
//Dibujo las cards
function crearCard(array){
  if(array.length == 0){
      contenedor.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
      return
  }
  let tarjetas = ''
  array.forEach(evento => {
    tarjetas += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top img-fluid img-thumbnail" alt="...">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
      <div class="btn-bottom d-flex justify-content-between align-content-center mt-3 gap-3">
            <p class="m-0 "> Price: $${evento.price}</p>
            
            <input class="btn btn-primary" type="button"  onclick="seeDetail('${evento._id}')" value="Detalles">

    </div>
    </div>
  </div>`
  });

  contenedorCard.innerHTML = tarjetas
}
//Funcion recibe 2 parametros para el array y el texto que va a comparar con dataEvents.name de la tarjeta
function filtrarPorTexto(array,texto){
  //creamos una variable arrayFiltrado donde en este array(este fue pasado como parametro) le aplico un metodo filter
  //En el array.filter digo recorra el evento y que busque en la propiedad del evento name (evento.name)
  //lo convierta en minusculas que incluya el texto ingresado en el input que fue pasado como parametro en la funcion, 
  //lo convierta en minusculas y lo compare 
  let arrayFiltrado = array.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()))
  //Devuelvo el arrayfiltrado por la comparacion de nombre
  return arrayFiltrado
}
//Funcion recibe como parametro un array
function filtrarPorCategorias(array){
  //creamos la variable checkboxes donde utilizamos la propiedad
  //querySelectorAll para que seleccione todos los elementos con 
  // input[type='checkbox']
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  console.log(checkboxes);
  //Creamos la variable arrayChecks y convertimos la variable checkboxes
  //en un array
  let arrayChecks = Array.from(checkboxes)
  //Creamos la variable arrayChecksChecked y filtramos el array arrayChecks
  //con la propiedad checked
  let arrayChecksChecked = arrayChecks.filter(check => check.checked)
  console.log(arrayChecksChecked);
  //Declaro la variable local arrayChecksCheckedValues que nos va a 
  //generar por medio de un map un nuevo array pero solamente
  //con el atributo value del array arrayChecksChecked
  let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
  console.log(arrayChecksCheckedValues);
  //creo la variable local arrayFiltrado donde le aplico un filter al array donde
  //recorro evento arrayFiltrado que incluya el evento category
  let arrayFiltrado = array.filter(evento => arrayChecksCheckedValues.includes(evento.category))
  console.log(arrayFiltrado);
  //Si el array arrayChecksChecked es mayor a cero (0) retorno el arrayFiltrado
  if(arrayChecksChecked.length > 0){
      return arrayFiltrado
  }
  //Sino retorno el array que recibi como parametro
  return array
}
//Funcion que filtra los eventos futuros, recibe de parametro data.js y la fecha actual de la variable currentDate del data.js
function filterEventsUpcoming(data, currentDate){
    const eventUpcoming=[];
    for (const event of data) {
        if(event.date>currentDate){
            eventUpcoming.push(event)

        }
        
    }
    console.log("Eventos futuros: ", eventUpcoming)
    return eventUpcoming

}

/* //funcion que crea las cards
function crearCard(data){
    for (const evento of data) {
        tarjetas += `<div class="card" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top img-fluid img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
          <div class="btn-bottom d-flex justify-content-between align-content-center mt-3 gap-3">
                <p class="m-0 "> Price: $${evento.price}</p>
                
                <input class="btn btn-primary" type="button"  onclick="seeDetail('${evento._id}')" value="Detalles">

        </div>
        </div>
      </div>`
        
    }
    return tarjetas
} */

function seeDetail(id){
  window.location.href=`./details.html?id=${id}`
}