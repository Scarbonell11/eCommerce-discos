
  //array declarado vacio para cargarlo mediante push
  const discos = [];
  const carrito = JSON.parse(sessionStorage.getItem("contenidoCarrito")) || [];


 //Ejecucion de la funcion asincronica que trae los discos y los muestra//
  traerDiscos();


//--------------------Variables-----------------//

  
  //Estas variables son aprovechadas por la funcion mostrarCarrito()
 let stringcarritoJSON;
 let mostrado;
 




//-----------------DOM-----------------//

//Creacion del menu de navegacion
let menuNav = document.createElement("header");

menuNav.innerHTML = `
<nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="./assets/logo.png"
              alt="Logo"
              width="250"
              height="180"
              class="flex"
            />

        
          </a>
          <button id="ocultarMostrar">
          <img src="./assets/mbrishoppingcart_99558.svg" alt="carrito" />
          <span id="textoCar"></span>
          </button>
</nav>
<div class="tituloGen">
    <h1>Discos disponibles</h1>
</div>
`;

//Se añade el menu de navegacion al html
document.body.append(menuNav);

//Creacion de la seccion donde se muestran todas las cards
let seccionCards = document.createElement("section");

seccionCards.className =
  "container d-flex justify-content-center align-items-center flex-column";

seccionCards.innerHTML = 
    `
  <div class="grid-container row d-flex">
    <aside class="col-md-2 d-flex flex-column">
      <div class="categorias">
        <p>Categorias</p>
        <form class="categoriasCheck">
        <div class="d-flex justify-content-between align-items-center">
            <input id="catTodos" type="button" name="categoria" value="Todos" />
            
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <input id="catRock" type="button" name="categoria" value="Rock" />
            
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <input id="catPop" type="button" name="categoria" value="Pop" />
            
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <input id="catSoul" type="button" name="categoria" value="Soul" />
            
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <input type="button" name="categoria" id="catJazz" value="Jazz" />
            
          </div>
        </form>
      </div>
    </aside>

    <div id="contenedorCds" class="grid col-md-10 row">
    </div>
  </div>
  `

//Añadiendo al html seccion de cards
document.body.append(seccionCards)
  

//Esta funcion muestra todos los discos sin filtro



// Creacion de div que contiene la cantidad a pagar
divTotales = document.createElement('div')
divTotales.id = "aPagar"
divTotales.innerHTML  = `$<p></p> 
<div id="divCheckOut"></div>
` 
// creacion de div que contiene los botones para operar el carrito
divBotones = document.createElement('div')
divBotones.className = "botonesCarrito"
divBotones.innerHTML = `
<h4 class="tituloCarrito" >Compras</h4> 
<button id="vaciado">Vaciar carrito</button>   <button id="total">Total$</button>
`
//Creacion del div donde se muestran los discos
let contenedorCompras =  document.createElement('div')
contenedorCompras.id =  "contenedorCompras"

//condicional que alterna el contenido del div que muestra los discos dentro del carrito
//en funcion de si hay o no discos cargados
if (carrito.length === 0) {
  contenedorCompras.innerHTML = `<p>No hay elementos cargados aun</p>`
} else {
  mostrarCarrito()
}


//Creacion del boton que redireccion al checkOut *en construccion*
botonCheck = document.createElement('button')
botonCheck.id = "check"
botonCheck.innerText = `CheckOut`

//Creacion del div contenedor del carrito de compras
let divPadre = document.createElement('div')
divPadre.className = "carroPadre"
divPadre.id = "carritoPadre"


//Añadiendo todo al div padre y posteriormente al html
divPadre.appendChild(divBotones)
divPadre.appendChild(contenedorCompras)
divPadre.appendChild(divTotales)
divPadre.appendChild(botonCheck)
document.body.appendChild(divPadre)



//factura y modo de pago

 let divFactura = document.createElement('div')

 divFactura.className = "factura"
 document.body.append(divFactura)
