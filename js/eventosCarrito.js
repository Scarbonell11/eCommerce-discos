
//Eventos para el funcionamiento del carrito//




//click --->   Vacia el contenido del carrito y reasigna un valor de array vacio al carrito y limpia el storage
let botonVaciar = document.getElementById("vaciado")
botonVaciar.addEventListener('click' , () =>{vaciarCarrito()})
  
//click --->  Recorre el array carrito y crea una variable para almacenar el resultado de la suma del precio de todos los discos y la muestra en el DOM
let botonTotal = document.getElementById("total")
botonTotal.addEventListener('click' , () =>{calcularTotal()})
 


  // referencia al boton y al elemento que se muestra/oculta.
const ocultarMostrar = document.getElementById('ocultarMostrar');
const carritoPadre = document.getElementById('carritoPadre');
// Agrega un evento de clic al boton.
ocultarMostrar.addEventListener('click', () => {
  // Verifica si el elemento esta visible.
  if (carritoPadre.style.display === 'none' || carritoPadre.style.display === '') {
    // Si esta oculto, mostralo.
    carritoPadre.style.display = 'flex';
  } else {
    // Si esta visible, ocultalo.
    carritoPadre.style.display = 'none';
  }
});



let botonCheckOut = document.getElementById("check")
botonCheckOut.addEventListener('click', () =>{
  Swal.fire({
  title: 'Esta seguro que desea confirmar su compra?',
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: 'Si, seguro',
  denyButtonText: `Continuar comprando`,
}).then((result) => {
  
  if (result.isConfirmed) {
   // Swal.fire('Compra realizada con exito!', '', 'success')
   let timerInterval
Swal.fire({
  title: 'Estamos procesando tu pago!',
  html: 'Aguarda mientras completamos la operacion',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
  },
  willClose: () => {
    clearInterval(timerInterval)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu compra se ha realizado con exito!',
      showConfirmButton: false,
      timer: 1500
    })
    vaciarCarrito()
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
  }
})
  } else if (result.isDenied) {
    Swal.fire('Continua disfrutando de nuestra tienda!', '', 'info')
  }
})
})






