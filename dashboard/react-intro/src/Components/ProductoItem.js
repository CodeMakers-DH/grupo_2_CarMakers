import React from "react";
import {SearchBar} from './SearchBar';


const ProductoItem = ()=>{
 
    const [modelos, setProducto]= React.useState([])

    React.useEffect(()=>{
       // console.log('use efect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:4000/api/products')
        const productos = await data.json()
       // console.log(usuarios.data)
       setProducto(productos.data)

    }

    return(
        <div>
            <h2 className='item-title-prod'>Productos</h2>
            <h4 className='total-user-title'>Productos Totales: {modelos.length}</h4>
            <div className="section-search">
                <SearchBar/>
            </div>
            <ul className='ul-lista'>
                {
                    modelos.map(item=>(
                        <li key = 'item.idModelo' className='li-prod'>
                            <div className="div-img"><img src = {`./../../../../imgs/products/${item.imgProducto}`} alt="Imágen de perfil" className="imgPro"></img></div>
                            <div className="important">{item.nombreModelo}</div> <div className="less-imp">{item.descripcion}</div>
                        </li>
                    ))
                }
            </ul>
        </div>


    )
}

export{ProductoItem}