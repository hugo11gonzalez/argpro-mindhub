/* Obtenemos los datos de los parametros de la URL*/
const params = new URLSearchParams(document.location.search)
const id = params.get('id')
console.log(id);
/* Renderizamos los datos del evento*/
/* const contenedorCard= document.querySelector('#contenedor_tarjetas')
console.log(contenedorCard)
//Creamos la variable eventos que es un array
let eventos=[]
let profile=[] */
//Creamos la funcion traerDatos y utilizamos para traer los datos desde una API con la funcion fetch 
function traerDatos() {
  fetch(api)
  .then(response => response.json())
  .then(datosApi => {
    console.log(datosApi)
    eventos = datosApi.events
    console.log(eventos)
    profile = eventos.filter(info=>info._id ==id)
    console.log(profile);
    crearCardDetails(profile, contenedorCard)
    
  })
  .catch(error => console.log(error.message))
  
}
traerDatos()


function crearCardDetails(array, _lugar){
  let tarjeta =''

  tarjeta += `<div class="card mb-3">
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
  
  contenedorCard.innerHTML = tarjeta
}
