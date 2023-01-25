import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => setInputValue(target.value);
    const onFormSubmit = (e) => { 
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        //setCategories( c => [ inputValue, ...c ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs" 
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
