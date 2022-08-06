import React from "react";


const UltimoUsuario = ()=>{
 
    const [personas, setPersonas]= React.useState([])

    React.useEffect(()=>{
        obtenerDatos()

    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:4000/api/usuarios')
        const usuarios = await data.json()
       setPersonas(usuarios.data)

    }

console.log(personas.filter(persona => persona.idUsuario === (personas.length-1)))
    return(
            <div  className="div-padre">
            <h2 className="title-last">Último Usuario</h2>
            {personas.filter(persona => persona.idUsuario === (personas.length-1)).map(PersonaFiltrada => (
                <div>
                {<div className="div-img-last"><img src = {`./../../../../imgs/imgsPerfil/${PersonaFiltrada.imgPerfil}`} alt="Imágen de perfil del último usuario" className="imgPro"></img></div>}
                <h3>Nombre Completo</h3>
                <h4>{PersonaFiltrada.nombres}  {personas[1].apellidos}</h4>
                <h3>E-mail</h3>
                <h4>{PersonaFiltrada.email}</h4>
                </div>
            
            ))}
            </div>
    )
}
//{'./../../../../public/imgs/imgsPerfil'}
export{UltimoUsuario}

