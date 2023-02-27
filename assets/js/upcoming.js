console.log("test fut");
/* Filtro eventos futuros */

const arrayEventos=data.events;

const eventosfuturos=[];

let fechaActual=data.currentDate;

function filtrarEventosFuturos(arrayEventos, fechaActual) {
    for (const evento of arrayEventos) {
        if (evento.date > fechaActual) {
            eventosfuturos.push(evento)
        }
        
    }
    console.log("eventos futuros: ", eventosfuturos);
}
filtrarEventosFuturos(arrayEventos,fechaActual)

const contenedorEventos = document.querySelector(".contenedor-eventos");
let eventosHtml= "";

function mostrarEventosfuturos(eventosfuturos) {
    for (const evento of eventosfuturos) {
        eventosHtml += `<div class="col-12 col-sm-10 col-md-9 col-lg-4 col-xl-3 p-0 d-flex align-self-lg-stretch justify-content-center">
        
          <div class="card d-flex flex-column w-100">
            <img src= ${evento.image} class="card-img-top img-thumbnail img-fluid" alt="...">
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
    
}

mostrarEventosfuturos(eventosfuturos)
contenedorEventos.innerHTML = eventosHtml;