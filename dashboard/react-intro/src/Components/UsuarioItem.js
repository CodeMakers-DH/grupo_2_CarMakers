import React from "react";
import {SearchBar} from './SearchBar';


const UsuarioItem = ()=>{
 
    const [personas, setPersonas]= React.useState([])
    const[searchValue, setSearchValue]=  React.useState('')

   
    // console.log(UltimoUsuario.nombres)

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


    let searchedPersonas=[];
    if(!searchValue.length>=1){
        searchedPersonas = personas;
    }else{
        searchedPersonas = personas.filter(usuario=>{
            const usuarioText = usuario.nombres.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return usuarioText.includes(searchText);
        })
    }



    return(
        <div>
            <h2 className='item-title'>Usuarios</h2>
            <h4 className='total-user-title'>Usuarios Totales: {personas.length}</h4>
 
            <div className="section-search">
                <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}

                />
            </div>
            <ul className='ul-lista'>
                {
                    searchedPersonas.map(item=>(
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
