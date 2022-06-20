import React from "react";


const UltimoProducto = ()=>{
 
    const [modelos, setProducto]= React.useState([])

    React.useEffect(()=>{
        obtenerDatos()

    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:4000/api/products')
        const productos = await data.json()
       setProducto(productos.data)

    }

    return(
        <div className="div-padre">
        <h2 className="title-last">Último Producto</h2>
        {modelos.filter(modelo => modelo.idModelo === (modelos.length - 1)).map(ModeloFiltrado => (
            <div>
            <div className="div-img-last"><img src = {`./../../../../imgs/products/${ModeloFiltrado.imgProducto}`} alt="Imágen del último producto" className="imgPro"></img></div>
            <h3>Modelo</h3>
            <h4>{ModeloFiltrado.nombreModelo}</h4>
            <h3>Descripción</h3>
            <h4>{ModeloFiltrado.descripcion}</h4>
            </div>
        ))}
        </div>
    )
}

export{UltimoProducto} 