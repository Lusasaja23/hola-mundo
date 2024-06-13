'use client'
import { useState, useEffect, Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { Techs } from '../data/techs.js'
import { LoadingPage, LoadingInline } from "../components/Loading";

import '../styles/home.css'

export default function HomePage() {
  const [randomTech, setRandomTech] = useState(null);

  useEffect(() => {
    setRandomTech(Techs[Math.floor(Math.random() * Techs.length)]);
  }, []);


  function randomExtraData() {
    const keys = Object.keys(randomTech.extra);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const selectedData = randomTech.extra[randomKey];
    const randomData = selectedData[Math.floor(Math.random() * selectedData.length)];
    return randomData;
  }

 function handleRandomTech() {
    const newRandomTech = Techs[Math.floor(Math.random() * Techs.length)];
    if (newRandomTech.name !== randomTech.name) {
     setRandomTech(newRandomTech);
    } else {
      handleRandomTech();
    }
  }

  if (!randomTech) {
    return <LoadingPage></LoadingPage>;
  }
  
  return (
    <>
      <Header></Header>
      <main of='home'>
        <a href={randomTech.resources[Math.floor(Math.random() * randomTech.resources.length)]}
          target="_blank" 
          rel="noopener noreferrer">
          <Suspense fallback={<LoadingInline></LoadingInline>}>
            <Image 
              src={randomTech.logo} 
              height={100} 
              width={100} 
              alt={`Logo de ${randomTech.title}`} 
              title={`Logo de ${randomTech.title}`}/>
          </Suspense>
        </a>
        <h1>¡Hola mundo!</h1>
        <button className="randomTech" onClick={handleRandomTech}>Tecnología aleatoria</button>
        <section className="extra">
          <small><i className="bx bx-brain"></i> {randomExtraData(randomTech)}</small>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}
