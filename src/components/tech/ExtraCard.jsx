export default function ExtraCard({tech, type}) {
    let types = {
        tips: 'Consejos',
        curius: 'Curiosidades',
        phrases: 'Provervios'
    }

    return (
        <section className="card">
            <h3>{types[type]}</h3>
            <section className="extraContainer">
                {tech.extra[type].map((item, index) => {
                    return (
                        <p className="item" key={index}>- {item}</p>
                    )
                })}
            </section>
        </section>
    )
}