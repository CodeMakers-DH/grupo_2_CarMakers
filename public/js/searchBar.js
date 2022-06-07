const searchBar = document.getElementById('searchbarID');
const productsList = document.getElementById('productsList');

let products = [];


/* { 
    
     fetch('http://localhost:3000/api') 
                        .then( function(response) {
                            return response.json();
                        })
                        .then( function(data) {
                            products = data.data;
                            displayProducts(products);
}) 
}

 */

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return (product.nombreModelo.toLowerCase().includes(searchString));
    })
    displayProducts(filteredProducts);
});


const loadProducts = async () => { 
    try {
        const res = await fetch('http://localhost:3000/api');
        const productsJSON = await res.json();
        products = productsJSON.data;
        displayProducts(products);

    } catch(err){
        console.error(err);
    }
}


const displayProducts = (products) => {
    const htmlString = products
        .map((product) => {
            return `
            <li>
            <a href="/products/detail/${product.idModelo}">
                <img src="/imgs/products/${product.imgProducto}" alt="imagen de producto">
            </a>
                <h3 class="inv-nombre">${product.nombreModelo}</h3>
                <h4 class="inv-precio">USD ${product.precio}</h4>
            </li>
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;
};


loadProducts();