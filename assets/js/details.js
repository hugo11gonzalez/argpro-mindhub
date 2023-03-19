/* Obtenemos los datos de los parametros de la URL*/
const params = new URLSearchParams(document.location.search)
const id = params.get('id')
console.log(id);

/* Buscamos dato por id*/
let profile = data.events.filter(info=>info._id ==id)
console.log(profile);

/* Renderizamos los datos del evento*/
const contenedorCard= document.querySelector('#contenedor_tarjetas')
console.log(contenedorCard)
let tarjetas =''

tarjetas += `<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${profile[0].image}" class="img-fluid rounded-start" alt="${profile[0].name}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${profile[0].name}</h5>
      <p class="card-text">${profile[0].description}</p>
      <p class="card-text">Fecha del evento: ${profile[0].date}</p>
      <p class="card-text">Capacidad Espectadores: ${profile[0].capacity}</p>
      <p class="card-text m-0 "> Price: $${profile[0].price}</p>
    </div>
  </div>
</div>
</div>`

      contenedorCard.innerHTML = tarjetas