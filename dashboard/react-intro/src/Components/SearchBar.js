import React from "react";

function SearchBar(){
    return(
            <section>
                <div className="button-input">
                    <form action='/products' method="GET" className="searchbar-form">
                        <input type="text" placeholder="Buscador" className="search" id='searchBarIndex' required="" name="keyword" />
                        <button type="submit" className="boton-lupa"><i class="fas fa-search" id="icono-lupa"></i></button>
                    </form>
                </div>
            </section>
        )
    }
export {SearchBar};