import React from "react";

function ListaProductos(props){
    return(
            <section>
                <ul>
                    {props.children}
                </ul>
            </section>
        )
    }
export {ListaProductos};