import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUpdated } from '../actions/search';

const Search = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue( target.value );
        dispatch( searchUpdated( target.value ) );
    }

    return (
        <div className='bg-white h-12 w-full p-4 rounded-xl mb-8 flex items-center border-4 border-black'>
            <i className='fa-solid fa-magnifying-glass inline-block'></i>
            <input type="text" value={ inputValue } onChange={ handleInputChange } name='search' className='mx-3 outline-none bg-transparent w-full font-bold' placeholder='Buscar...' />
        </div>
    )
}

export default Search