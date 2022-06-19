import React from "react";


const ProductoItem = ()=>{
 
    const [modelos, setProducto]= React.useState([])

    React.useEffect(()=>{
       // console.log('use efect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:3000/api/products')
        const productos = await data.json()
       // console.log(usuarios.data)
       setProducto(productos.data)

    }

    return(
        <div>
            <h2>Modelos de Autos</h2>
            <h4>Productos Totales {modelos.length}</h4>
            <ul>
                {
                    modelos.map(item=>(
                        <li key = 'item.idModelo'>
                            {item.nombre} - {item.descripcion}
                        </li>
                    ))
                }
            </ul>
        </div>


    )
}

export{ProductoItem}