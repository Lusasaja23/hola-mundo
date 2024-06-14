import Link from "next/link"
import Image from "next/image"
import { Techs } from "../../data/techs"

export default function Related({tech}) {
    return (
        <aside className="related">
            <h2>Tecnologías Relacionadas:</h2>
            <section className="container">
                {
                    Techs.filter((relatedTech) => relatedTech.type === tech.type && relatedTech.name !== tech.name).map((filteredTech) => {
                        return (
                            <Link className='reset' href={`/techs/${filteredTech.name}`}>
                                <div className="item" key={filteredTech.name}>
                                    <h3>{filteredTech.title}</h3>
                                    <Image
                                        src={filteredTech.logo}
                                        width={50}
                                        height={50}
                                        alt={`Logo de ${tech.title}`}
                                        title={`Logo de ${tech.title}`}
                                    ></Image>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </aside>
    )
}