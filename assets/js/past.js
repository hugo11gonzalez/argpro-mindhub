//Guardo en la constante contenedorcard el 1er elemento con el id contenedor_tarjetas 
const contenedorCard= document.querySelector('#contenedor_tarjetas')
console.log(contenedorCard)
//Creo un String vacio tarjetas
let tarjetas =''
//Obtengo del data.js la variable que figura como fecha actual
let currentDate=data.currentDate;
console.log(currentDate)
//Filtro las eventos pasados
let filtroTarjetasPasado= filterEventPast(data.events, currentDate)
//creo las Cards
let cardsGenerated = crearCard(filtroTarjetasPasado)
//Renderizo las cards que cree
contenedorCard.innerHTML = tarjetas

//Funcion que filtra los eventos pasados, recibe de parametro data.js y la fecha actual de la variable currentDate del data.js
function filterEventPast(data, currentDate){
    const eventPast=[];
    for (const event of data) {
        if(event.date<currentDate){
            eventPast.push(event)

        }
        
    }
    console.log("Eventos pasados: ", eventPast)
    return eventPast

}

//funcion que crea las cards
function crearCard(data){
    for (const evento of data) {
        tarjetas += `<div class="card" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top img-fluid img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
          <div class="btn-bottom d-flex justify-content-between align-content-center mt-3 gap-3">
                <p class="m-0 "> Price: $${evento.price}</p>
                <button class="btn btn-primary">Detalles</button>
        </div>
        </div>
      </div>`
        
    }
    return tarjetas
}
