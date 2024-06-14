import Image from "next/image"

export default function TechLogo({randomTech}) {
    const randomResource = randomTech.resources[Math.floor(Math.random() * randomTech.resources.length)];

    return (
        <a href={randomTech.resources[Math.floor(Math.random() * randomTech.resources.length)]}
            target="_blank" 
            rel="noopener noreferrer">
            <a href={randomResource.link} target="_blank" rel="noopener noreferrer">
                <Image 
                    src={randomTech.logo} 
                    height={100} 
                    width={100} 
                    alt={`Logo de ${randomTech.title}`} 
                    title={`Logo de ${randomTech.title}`}/>
            </a>
        </a>
    )
}