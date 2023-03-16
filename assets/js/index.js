//Guardo en la constante contenedorcard el 1er elemento con el id contenedor_tarjetas 
const contenedorCard= document.querySelector('#contenedor_tarjetas')
console.log(contenedorCard)
let tarjetas =''
let cardsGenerated = crearCard(data.events)

contenedorCard.innerHTML = tarjetas

function crearCard(data){
    for (const evento of data) {
        tarjetas += `<div class="col-12 col-sm-10 col-md-9 col-lg-4 col-xl-3 p-0 d-flex align-self-lg-stretch justify-content-center">
        
          <div class="card d-flex flex-column w-100">
            <img src= ${evento.image} class="card-img-top img-thumbnail" alt="...">
            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text">${evento.description}</p>
            </div>
            <div class="btn-bottom d-flex justify-content-between align-content-center mt-3 gap-5">
                <p class="m-0 "> Price: $${evento.price}</p>
                <button class="btn btn-primary">See more...</button>
            </div>
          </div>
        
      </div>`
        
    }
    return tarjetas
    /* const datos = data.events;
    for (let i = 0; i < datos.length; i++) {
        const dato = datos[i];
        console.log(dato)
        tarjetas +=`<div class="col-12 col-sm-10 col-md-9 col-lg-4 col-xl-3 p-0 d-flex align-self-lg-stretch justify-content-center">
        
        <div class="card d-flex flex-column w-100">
          <img src= ${dato.image} class="card-img-top img-thumbnail" alt="...">
          <div class="card-body">
            <h5 class="card-title">${dato.name}</h5>
            <p class="card-text">${dato.description}</p>
          </div>
          <div class="btn-bottom d-flex justify-content-between align-content-center mt-3 gap-5">
              <p class="m-0 "> Price: $${dato.price}</p>
              <button class="btn btn-primary">See more...</button>
          </div>
        </div>
      
    </div>`
    }
    return tarjetas */
    /* console.log(tarjetas) */
}
