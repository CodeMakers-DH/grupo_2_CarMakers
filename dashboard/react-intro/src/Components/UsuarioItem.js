import React from "react";


const UsuarioItem = ()=>{
 
    const [personas, setPersonas]= React.useState([])

    React.useEffect(()=>{
       // console.log('use efect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:3000/api/usuarios')
        const usuarios = await data.json()
       //console.log(usuarios)
       setPersonas(usuarios.data)

    }

    return(
        <div>
            <h2>Usuarios</h2>
            <h4>Usuarios Totales {personas.length}</h4>
            <ul>
                {
                    personas.map(item=>(
                        <li key = 'item.id'>
                            {item.nombres} - {item.email}
                        </li>
                    ))
                }
            </ul>
        </div>


    )
}

export{UsuarioItem}