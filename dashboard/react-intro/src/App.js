//import logo from './logo.svg';
//import './App.css';

import React from "react";
import {ListaUsuarios} from './Components/ListaUsuarios'
import {ListaProductos} from './Components/ListaProductos'
import {ProductoItem} from './Components/ProductoItem'
import {UsuarioItem} from './Components/UsuarioItem'


function App() {

  return (
   <React.Fragment>
    <h2>Dashboard de Control de CarsMakers</h2>
    <div>
      <div>
        <ListaUsuarios>
            <UsuarioItem/>
        </ListaUsuarios>
      </div>
      <div>
      <ListaProductos>
          
            <ProductoItem/>

        </ListaProductos>
      </div>
    </div>
   </React.Fragment>
  );
}

export default App;
