//Guardo en la constante contenedorcard el 1er elemento con el id contenedor_tarjetas 
const contenedorCard= document.querySelector('#contenedor_tarjetas')
const categoriesconteiner = document.querySelector("#categorias");
const searchFilter = document.getElementById("searchInput")
const dataEvents = data.events;
console.log(contenedorCard)
console.log(categoriesconteiner)
console.log(searchFilter)
let tarjetas =''
let cardsGenerated = crearCard(data.events)

contenedorCard.innerHTML = tarjetas


function crearCard(data){
    data.forEach(evento => {
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
}

function seeDetail(id){
  window.location.href=`./details.html?id=${id}`
}

