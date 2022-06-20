import React from "react";


const UltimoUsuario = ()=>{
 
    const [lastPersonas, setlastPersonas]= React.useState([])

    React.useEffect(()=>{
       // console.log('use efect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:4000/api/usuarios')
        const usuarios = await data.json()
       //console.log(usuarios)
       setlastPersonas(usuarios.data)

    }

    var indexUltimoUsuario = (lastPersonas.length - 1);
    console.log(lastPersonas);

    return(
        <div>
            <h2>Último usuario</h2>
            <div className="div-img"><img src = {`./../../../../imgs/imgsPerfil/${lastPersonas[indexUltimoUsuario].imgPerfil}`} alt="Imágen de perfil" className="imgPro"></img></div>
                <h3>Nombre: {lastPersonas[indexUltimoUsuario].nombres} {lastPersonas[indexUltimoUsuario].apellidos}</h3>
                <h4>E-mail: {lastPersonas[indexUltimoUsuario].email}</h4>
            </div>
    )
}

export{UltimoUsuario}
