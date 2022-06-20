import React from "react";

function SearchBar({searchValue, setSearchValue}){

    //const [searchValue, setSearchValue]=React.useState('');

    const onSearchValueChange= (event)=>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }


    return(
            <section>
                <div className="button-input">
                    <form action='/products' method="GET" className="searchbar-form">
                        <input 
                        type="text" 
                        placeholder="Buscador" 
                        className="search" 
                        id='searchBarIndex' 
                        required="" 
                        name="keyword"
                        value={searchValue}
                        onChange={onSearchValueChange} />
                        <button type="submit" className="boton-lupa"><i className="fas fa-search" id="icono-lupa"></i></button>
                    {/* <p>{searchValue}</p> */}
                    </form>
                </div>
            </section>
        )
    }
export {SearchBar};