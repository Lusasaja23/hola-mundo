import Link from "next/link"
import Image from "next/image"

export default function TechCard({tech}) {
    return (
        <Link href={`/techs/${tech.name}`} className="tech reset" key={tech.name}>
            <h1>{tech.title}</h1>
            <Image
                src={tech.logo}
                width={75}
                height={75}
            ></Image>
            <small className={tech.type}>{tech.type}</small>
        </Link>
    )
}