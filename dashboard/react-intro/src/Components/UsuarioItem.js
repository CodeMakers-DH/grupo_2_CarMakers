import React from "react";


const UsuarioItem = ()=>{
 
    const [personas, setPersonas]= React.useState([])

    React.useEffect(()=>{
       // console.log('use efect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:4000/api/usuarios')
        const usuarios = await data.json()
       //console.log(usuarios)
       setPersonas(usuarios.data)

    }

    return(
        <div>
            <h2 className='item-title'>Usuarios</h2>
            <h4 className='total-user-title'>Usuarios Totales: {personas.length}</h4>
            <ul className='ul-lista'>
                {
                    personas.map(item=>(
                        <li key = 'item.id' className='li'>
                            <div className="div-img"><img src = {`./../../../../imgs/imgsPerfil/${item.imgPerfil}`} alt="Imágen de perfil" className="imgPro"></img></div>
                            <div className="important">{item.nombres} {item.apellidos}</div> <div className="less-imp">{item.email}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export{UsuarioItem}
