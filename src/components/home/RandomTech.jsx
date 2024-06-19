'use client'

export default function RandomTech({setRandomTech, techs}) {
    const randomTech = techs[Math.floor(Math.random() * techs.length)];

    return (
        <button className="randomTech" onClick={() => {setRandomTech(randomTech)}}>Ver otro modo</button>
    )
}