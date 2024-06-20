'use client'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchTech from '../../components/techs/SearchTech';
import Gallery from '../../components/techs/Gallery';

import '../../styles/structure.css'
import '../../styles/techs.css'
import { Techs } from '../../data/techs';
import Image from 'next/image';
import { useState } from 'react';

export default function TechsPage() {
    const [searching, setSearching] = useState(false);

    const handleSearch = () => {
        setSearching(true);
    }

    const handleClearSearch = () => {
        setSearching(false);
    }

    return (
        <div className="firstContainer">
            <Header></Header>
            <main className='techsMain'>
                <h1 className='title'>Tecnologías</h1>
                <SearchTech handleSearch={handleSearch} handleClearSearch={handleClearSearch}></SearchTech>
                <article className={searching ? 'searchGallery' : 'gallery'}>
                    {searching ? (
                        <p>Estamos buscando...</p>
                    ) : (
                        <Gallery techs={Techs}></Gallery>
                    )}
                </article>
            </main>
            <Footer></Footer>
        </div>
    );
}