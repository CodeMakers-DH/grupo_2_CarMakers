import React from "react";

function ListaUsuarios(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>

        </section>
    )
}

export {ListaUsuarios};