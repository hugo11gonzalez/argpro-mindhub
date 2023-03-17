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

tarjetas += `<div class="card" style="width: 18rem;">
        <img src="${profile[0].image}" class="card-img-top img-fluid img-thumbnail" alt="...">
        <div class="card-body">
          <h5 class="card-title">${profile[0].name}</h5>
          <p class="card-text">${profile[0].description}</p>
          <div class="btn-bottom d-flex justify-content-between align-content-center mt-3 gap-3">
                <p class="m-0 "> Price: $${profile[0].price}</p>
                
                

        </div>
        </div>
      </div>`

      contenedorCard.innerHTML = tarjetas