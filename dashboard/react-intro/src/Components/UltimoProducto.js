/* import React from "react";


const UltimoProducto = ()=>{
 
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

    var indexUltimoProducto = (modelos.length - 1);

    return(
        <div>
            <h2>Último producto</h2>
            <div className="div-img"><img src = {`./../../../../imgs/products/${modelos[indexUltimoProducto].imgProducto}`} alt="Imágen de perfil" className="imgPro"></img></div>
                <h3>Modelo: {modelos[indexUltimoProducto].nombreModelo}</h3>
                <h4>Descripción: {modelos[indexUltimoProducto].descripcion}</h4>
            </div>
    )
}

export{UltimoProducto} */