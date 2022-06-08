// variables
const carrito = document.querySelector('#carrito')
const idModelo = document.getElementById('idModelo').innerHTML
//console.log(carrito)
//console.log(idmodelo)

carrito.addEventListener('click', function(event){
    let products = {}

    if(localStorage.getItem('carrito')){
        products = JSON.parse(localStorage.getItem('carrito'));
    }
    let itemKey = `item_${idModelo}`
    if (products[itemKey] != undefined){
        products[itemKey].count += 1
    }else{
        products[itemKey]= {id: parseInt(idModelo), count :1}
    }
    localStorage.setItem('carrito', JSON.stringify(products))

    //https://f3oall.github.io/awesome-notifications/docs/toasts/success
    new AWN().success('Se agrego el producto correctamente')

    event.preventDefault()
});



