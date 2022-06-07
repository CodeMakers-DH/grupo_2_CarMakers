// variables
const carrito = document.querySelector('#carrito')
const idmodelo = document.getElementById('idModelo').innerHTML
//console.log(carrito)
//console.log(idmodelo)


carrito.addEventListener('click', function(event){
    let products = []
    if(localStorage.getItem('carrito')){
        products = JSON.parse(localStorage.getItem('carrito'));
    }
    products.push(idmodelo);
    localStorage.setItem('carrito', JSON.stringify(products));

    /*
    productos.push(idmodelo)
    let prodString = JSON.stringify(productos)
    console.log(productos)
    console.log(prodString)
    if (productos.length >0){
        localStorage.setItem('carrito', prodString)
    }*/
    event.preventDefault()
})