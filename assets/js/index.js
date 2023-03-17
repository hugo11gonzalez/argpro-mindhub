//Guardo en la constante contenedorcard el 1er elemento con el id contenedor_tarjetas 
const contenedorCard= document.querySelector('#contenedor_tarjetas')
console.log(contenedorCard)
let tarjetas =''
let cardsGenerated = crearCard(data.events)

contenedorCard.innerHTML = tarjetas

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
