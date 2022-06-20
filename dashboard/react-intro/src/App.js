//import logo from './logo.svg';

import './App.css';

import React from "react";
import {ListaUsuarios} from './Components/ListaUsuarios'
import {ListaProductos} from './Components/ListaProductos'
import {ProductoItem} from './Components/ProductoItem'
import {UsuarioItem} from './Components/UsuarioItem'
import {Cards} from './Components/Cards'
import { UltimoProducto } from './Components/UltimoProducto';
import { UltimoUsuario } from './Components/UltimoUsuario';



function App() {

  return (
   <React.Fragment>
    <h2 className="dash-title">DASHBOARD DE CONTROL CARMAKERS</h2>
    <div>
    <div className='cards-last'>
        <Cards>
            <UltimoUsuario/>
        </Cards>

        <Cards>
            <UltimoProducto/>
        </Cards>
      </div>

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
