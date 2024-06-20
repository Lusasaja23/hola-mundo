'use client'
import {useState} from 'react';
import {Tooltip} from 'react-tooltip'

export default function SearchTech({ handleSearch, handleClearSearch }) {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value.trim() === '') {
            handleClearSearch(); 
        } else {
            handleSearch(); 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim() !== '') {
            alert(`Buscando ${searchValue}`);
        } else {
            alert(`No estas buscando algo`)
        }
    }

    return (
        <nav className='searchTech'>
            <form action='/techs' method="get" onSubmit={handleSubmit}>
                <input className='input' type="search" name="searchTech" id="search" placeholder="Buscar Tecnologías..." onChange={handleInputChange}/>
                <button class='button' type="submit"><i className="bx bx-search"></i></button>
            </form>
            <small className='indication'>Busqueda <span className='keyword searchVariety'>variada</span>, <span className='keyword searchSensible'>sin sensibilidad</span> e <span className='keyword searchFull'>ilimitada</span></small>
            <Tooltip className='searchTooltip'anchorSelect='.searchVariety' place='bottom' type='dark' offset={10} clickable={true}>
                <small>Intenta buscar categorías, nombres y tecnologías relacionadas o derivadas</small>
            </Tooltip>
            <Tooltip className='searchTooltip'anchorSelect='.searchSensible' place='bottom' type='dark' offset={10} clickable={true}>
                <small>No sensible a mayúsculas, espacios, guiones, tildes, abreviaciones, etc</small>
            </Tooltip>
            <Tooltip className='searchTooltip'anchorSelect='.searchFull' place='bottom' type='dark' offset={10} clickable={true}>
                <small>Busca entre todas las tecnologías, los autores de los recursos y hasta por las frases que necesitas</small>
            </Tooltip>
        </nav>
    )
}