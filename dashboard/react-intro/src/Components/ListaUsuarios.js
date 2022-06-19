import React from "react";

function ListaUsuarios(props){
    return(
        <section>
            <ul className="ul-listaUsuarios">
                {props.children}
            </ul>

        </section>
    )
}

export {ListaUsuarios};