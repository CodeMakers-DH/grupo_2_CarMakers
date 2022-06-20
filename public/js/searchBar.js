const searchBar = document.getElementById("searchbarID");
const productsList = document.getElementById("productsList");

let products = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  //const filteredProducts = products.filter((product) => {
  //  return product.nombreModelo.toLowerCase().includes(searchString);
  //});
  let filteredProducts = filterProducts(searchString);
  displayProducts(filteredProducts);
});

const loadProducts = async (psSearchString) => {
  try {
    const res = await fetch("http://localhost:4000/api/products");
    const productsJSON = await res.json();
    products = productsJSON.data;
    // se agrega filtrado de productos 
    let filteredProducts = filterProducts(psSearchString);
    displayProducts(filteredProducts);
  } catch (err) {
    console.error(err);
  }
};

// se agregar funcion para filtrar productos
const filterProducts = (psFilter) => {
  let filteredProducts = [];
  if (psFilter) {
    filteredProducts = products.filter((product) => {
      return product.nombreModelo.toLowerCase().includes(psFilter);
    });
  } else {
    filteredProducts = products;
  }
  return filteredProducts;
};

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
    .join("");
  if (htmlString) {
    productsList.innerHTML = htmlString;
    noproducto.innerHTML = "";
  } else {
    const noProduct =
      '<img src="/imgs/404error.png" class="imagen-error" alt="No se encuentran productos con esas caraterísticas"></img><p class="loSentimos">Lo sentimos, no hemos encontrado resultados con esas características.</p>';
    productsList.innerHTML = "";
    noproducto.innerHTML = noProduct;
  }
};

window.addEventListener("load", function () {
  let sSearch = document.getElementById("searchbarID").value; //* se obtiene filtro busqueda y se envia al loadproducts//
  loadProducts(sSearch);
});

