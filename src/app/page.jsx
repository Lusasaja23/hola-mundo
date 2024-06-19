'use client'
import Header from "../components/Header"
import Footer from "../components/Footer"
import TechLogo from "../components/home/TechLogo"
import HelloWorld from "../components/home/HelloWord"
import RandomTech from "../components/home/RandomTech"
import ExtraData from '../components/home/ExtraData'
import {LoadingPage} from "../components/Loading"

import '../styles/home.css'
import { Techs } from '../data/techs'
import { useState, useEffect } from "react"
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export default function HomePage() {  
  const [randomTech, setRandomTech] = useState(null);
  const [tutoUI, setTutoUI] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false); // Nuevo estado para indicar si se ha cargado

  useEffect(() => {
    const savedTutoUI = localStorage.getItem('tutoUI');
    console.info("savedTutoUI guadado como:", savedTutoUI); // Para depuración
    if (savedTutoUI !== null) {
      setTutoUI(JSON.parse(savedTutoUI));
    }
    setIsLoaded(true); // Indica que se ha completado la carga
    setRandomTech(Techs[Math.floor(Math.random() * Techs.length)]);
  }, []);

  useEffect(() => {
    if (isLoaded) { // Solo guarda en localStorage después de que se haya cargado
      console.info("Guardando tutoUI como:", tutoUI); // Para depuración
      localStorage.setItem('tutoUI', JSON.stringify(tutoUI));
    }
  }, [tutoUI, isLoaded]);

  if (!randomTech) {
    return (
      <LoadingPage></LoadingPage>
    )
  }

  return (
    <div className="firstContainer homePage">
      <Header tutoUI={tutoUI} setTutoUI={setTutoUI}></Header>
      <main>
        <TechLogo tech={randomTech}></TechLogo>
        <Tooltip className="guideTooltip" anchorSelect=".techLogo" place="right" type="dark" isOpen={tutoUI} offset={20}>
          <small>Click para Aprender Más</small>
        </Tooltip>
        <HelloWorld tech={randomTech}></HelloWorld>
        <Tooltip className="guideTooltip fix" anchorSelect=".helloWorld" place="left" type="dark" isOpen={tutoUI} offset={20}>
          <small>Click para ver Hola Mundo</small>
        </Tooltip>
        <RandomTech setRandomTech={setRandomTech} techs={Techs}></RandomTech>
        <Tooltip className="guideTooltip" anchorSelect=".randomTech" place="right" type="dark" isOpen={tutoUI}>
          <small>Click para una nueva tecnología aleatoria</small>
        </Tooltip>
        <ExtraData tech={randomTech}></ExtraData>
        <Tooltip className="guideTooltip" anchorSelect=".extraData" place="bottom" type="dark" isOpen={tutoUI}>
          <small>Consejos, curiosidades o frases al azar</small>
        </Tooltip>
      </main>
      <Footer></Footer>
    </div>
  )
}