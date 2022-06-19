import React from "react";

function ListaProductos(props){
    return(
            <section>
                <ul className="ul-listaUsuarios">
                    {props.children}
                </ul>
            </section>
        )
    }
export {ListaProductos};