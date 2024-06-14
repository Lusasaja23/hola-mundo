import Image from "next/image"

export default function Info({tech}) {
    return (
        <section className='header'>
            <section className="text">
                <div className="important">
                    <h1>{tech.title}</h1>
                    <hr />
                    <span>{`Desde ${tech.age}`}</span>
                    <small className={tech.type}>{tech.type}</small>
                    {tech.fullstack && <small className='fullstack'>fullstack</small>}
                </div>
                <p>{tech.description}</p>
            </section>
            <Image
                className='logo'
                src={tech.logo}
                width={150}
                height={150}
                alt={`Logo de ${tech.title}`}
                title={`Logo de ${tech.title}`}
            ></Image>
        </section>
    )
}