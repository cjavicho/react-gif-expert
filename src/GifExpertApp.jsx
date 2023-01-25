import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [] );
    
    const onAddCategory = ( newCategory ) => {
        //setCategories( (c) => [ newCategory, ...c ] );
        if( categories.find( c => c.toLowerCase() ===  newCategory.toLowerCase() ) ) return;
        
        setCategories( [ newCategory, ...categories ] );
    }
    
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Búsqueda - Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />

            {/* Listado de Gifs */}
                {/* Gif Item */}
            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category ={ category }
                    />
                )) 
            }
        </>
    )
}



