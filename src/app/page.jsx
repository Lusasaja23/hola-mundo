'use client'
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Techs } from '../data/techs.js'
import { LoadingPage, LoadingInline } from "../components/Loading";
import TechLogo from "../components/home/TechLogo";
import HelloWorldText from "../components/home/HelloWorldText";

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
        <TechLogo randomTech={randomTech}></TechLogo>
        <HelloWorldText tech={randomTech}></HelloWorldText>
        <button className="randomTech" onClick={handleRandomTech}>Tecnología aleatoria</button>
        <section className="extra">
          <small><i className="bx bx-brain"></i> {randomExtraData(randomTech)}</small>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}
