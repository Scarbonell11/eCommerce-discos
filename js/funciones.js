

//Funcion asincronica para traer y mostrar los discos
async function traerDiscos() {

  const response = await fetch("./js/discos.json"); //pido la informacion
  
  const data = await response.json(); //traigo la informacion y le doy formato
   
  //Push al array discos
 data.forEach ((disco) =>{discos.push(disco)})
  
  //Muestra todos los discos sin filtro
  mostrarTodos();
  
  //arrays de discos filtrados por categoria
  const rockFiltrado = discos.filter((disco) => disco.genero.includes("ROCK") )
  const popFiltrado = discos.filter((disco) => disco.genero.includes("POP") )
  const soulFiltrado = discos.filter((disco) => disco.genero.includes("SOUL") )
  const jazzFiltrado = discos.filter((disco) => disco.genero.includes("JAZZ") )

  
  //---------Eventos para las categorias--------//

  //click --->   recorre el array rockFiltrado y lo muestra en el DOM
  let botonRock = document.getElementById("catRock")
  botonRock.addEventListener('click', () => {
  
    document.getElementById("contenedorCds").innerHTML = "";
   
    rockFiltrado.forEach( (disco) => {
       
     let contenedorCards = document.createElement ("div")
     contenedorCards.className = "card"
     contenedorCards.style = "width: 18rem"
     
     let contenidoCard =     
     `
     
     <img src="${disco.foto}" class="card-img-top" alt="foto-producto" />
     <div class="card-body">
     <h5 class="card-title">
     ${disco.nombre}
     </h5>
     <p class="card-text">
     ${disco.descripcion}
     </p>
     <p class="card-text">
     $ ${disco.precio}
     </p>
     <a  onclick="agregarAlCarrito(${disco.id})" class="btn btn-primary">+ Añadir al carrito</a>
    
     </div>
     
     
     `
      
     contenedorCards.innerHTML = contenidoCard
     
     document.getElementById("contenedorCds").appendChild(contenedorCards)
   }
   )
   
 })

 //click --->   recorre el array jazzFiltrado y lo muestra en el DOM
let botonJazz = document.getElementById("catJazz")
 botonJazz.addEventListener('click', () => {
  document.getElementById("contenedorCds").innerHTML = "";

 jazzFiltrado.forEach( (disco) => {
    
  let contenedorCards = document.createElement ("div")
  contenedorCards.className = "card"
  contenedorCards.style = "width: 18rem"
  
  let contenidoCard =     
  `
  
  <img src="${disco.foto}" class="card-img-top" alt="foto-producto" />
  <div class="card-body">
  <h5 class="card-title">
  ${disco.nombre}
  </h5>
  <p class="card-text">
  ${disco.descripcion}
  </p>
  <p class="card-text">
  $ ${disco.precio}
  </p>
  <a  onclick="agregarAlCarrito(${disco.id})" class="btn btn-primary">+ Añadir al carrito</a>
  
  </div>
  
  
  `
   
  contenedorCards.innerHTML = contenidoCard
  
  document.getElementById("contenedorCds").appendChild(contenedorCards)
}
)
 })


 //click --->   recorre el array soulFiltrado y lo muestra en el DOM
 let botonSoul = document.getElementById("catSoul")
 botonSoul.addEventListener('click', () => {
  document.getElementById("contenedorCds").innerHTML = "";

  soulFiltrado.forEach( (disco) => {
     
   let contenedorCards = document.createElement ("div")
   contenedorCards.className = "card"
   contenedorCards.style = "width: 18rem"
   
   let contenidoCard =     
   `
   
   <img src="${disco.foto}" class="card-img-top" alt="foto-producto" />
   <div class="card-body">
   <h5 class="card-title">
   ${disco.nombre}
   </h5>
   <p class="card-text">
   ${disco.descripcion}
   </p>
   <p class="card-text">
   $ ${disco.precio}
   </p>
   <a  onclick="agregarAlCarrito(${disco.id})" class="btn btn-primary">+ Añadir al carrito</a>
   
   </div>
   
   
   `
    
   contenedorCards.innerHTML = contenidoCard
   
   document.getElementById("contenedorCds").appendChild(contenedorCards)
 }
 )
 })


 //click --->   recorre el array popFiltrado y lo muestra en el DOM
 let botonPop = document.getElementById("catPop")
 botonPop.addEventListener('click', () => {
  document.getElementById("contenedorCds").innerHTML = "";

  popFiltrado.forEach( (disco) => {
     
   let contenedorCards = document.createElement ("div")
   contenedorCards.className = "card"
   contenedorCards.style = "width: 18rem"
   
   let contenidoCard =     
   `
   
   <img src="${disco.foto}" class="card-img-top" alt="foto-producto" />
   <div class="card-body">
   <h5 class="card-title">
   ${disco.nombre}
   </h5>
   <p class="card-text">
   ${disco.descripcion}
   </p>
   <p class="card-text">
   $ ${disco.precio}
   </p>
   <a  onclick="agregarAlCarrito(${disco.id})" class="btn btn-primary">+ Añadir al carrito</a>
   
   </div>
   
   
   `
    
   contenedorCards.innerHTML = contenidoCard
   
   document.getElementById("contenedorCds").appendChild(contenedorCards)
 }
 )
 })


 //click --->   recorre el array discos y lo muestra en el DOM
 let botonTodos = document.getElementById("catTodos")
 botonTodos.addEventListener('click' , () =>{mostrarTodos()})


};





//Recorre el array discos y lo muestra en el DOM
function mostrarTodos () {
  document.getElementById("contenedorCds").innerHTML = "";
  discos.forEach( (disco) => {
    
    let contenedorCards = document.createElement ("div")
    contenedorCards.className = "card"
    contenedorCards.style = "width: 18rem"
    
    let contenidoCard =     
    `
    
    <img src="${disco.foto}" class="card-img-top" alt="foto-producto" />
    <div class="card-body">
    <h5 class="card-title">
    ${disco.nombre}
    </h5>
    <p class="card-text">
    ${disco.descripcion}
    </p>
    <p class="card-text">
    $ ${disco.precio}
    </p>
    <a  onclick="agregarAlCarrito(${disco.id})" class="btn btn-primary">+ Añadir al carrito</a> 
    </div>
    
    
    `
     
    contenedorCards.innerHTML = contenidoCard
    
    document.getElementById("contenedorCds").appendChild(contenedorCards)
}
)
}






//Funciones del carrito
 

 function agregarAlCarrito (idDisco){

    
       let discoParaCarrito = {
        ...discos[idDisco],
        cantidad: 1,
       }
      
       if (carrito.some((disco) => disco.id == discoParaCarrito.id)) {
        let indice = carrito.findIndex(el => el.nombre === discoParaCarrito.nombre);
        carrito[indice].cantidad += 1;
    } else {
        carrito.push(discoParaCarrito); // {disco} ---> [carrito]
    }
       
      
      document.getElementById("textoCar").innerText = "Mostrar" 
      // Convertir el array carrito a una cadena JSON
      sessionStorage.setItem("contenidoCarrito", JSON.stringify(carrito))

      Toastify({
        text: "Producto agregado con exito!",
        gravity: "bottom",
        duration: 2000,
        style: {
            background: '#cf0015',
            color: "white"
        }
    }).showToast();

      //Esta funcion muestra cada disco agregado en el carrito
      mostrarCarrito()
    }

  

function mostrarCarrito (){

  if (carrito.length === 0 ) {
   return contenedorCompras.innerHTML = `<p>No hay elementos cargados aun!</p>`
  }

  contenedorCompras.innerHTML = " "

// Obtener la cadena JSON del almacenamiento de sesión
 stringcarritoJSON = sessionStorage.getItem("contenidoCarrito");

 // Convertir la cadena JSON de nuevo a un arreglo de objetos
  mostrado = JSON.parse(stringcarritoJSON);

//Recorre el array obtenido del storage y lo muestra en el DOM
  mostrado.forEach((disco) =>{
    
    let carritoMostrado = document.createElement ("div")
   carritoMostrado.className = "card"
  
    let contenidoCart =     
    `
    <h5 class="card-title">
    ${disco.nombre}
    </h5>
    <p>
    Precio: $ ${disco.precio} 
    Cantidad:  ${disco.cantidad}
    </p>
    `
   
    carritoMostrado.innerHTML = contenidoCart
  
    contenedorCompras.appendChild(carritoMostrado)
 })
   


}




function vaciarCarrito(){

  
if (carrito.length === 0) {
 return contenedorCompras.innerHTML = `
  <p>No se puede vaciar, ya esta vacio!</p>
  `
}

  
  botonCheck.style.display = 'none'
  carrito.length = 0
  document.getElementById("textoCar").innerText = ""
  sessionStorage.clear()
  contenedorCompras.innerHTML = `
  <p>Carrito vaciado!</p>
  `
  let divaPagar = document.getElementById("aPagar")
  divaPagar.innerText = "$"

}


function calcularTotal(){
  if (carrito.length === 0) {
  return  contenedorCompras.innerHTML = `
  <p>No hay elementos en el carrito!</p>
  `
  } else{
  
    let total = 0
    carrito.forEach((disco) =>{
      total += disco.precio * disco.cantidad
    })
    let checks = document.getElementById("check")
    let divaPagar = document.getElementById("aPagar")
    checks.style.display = 'block'
    divaPagar.innerText = total
  }

 
}




