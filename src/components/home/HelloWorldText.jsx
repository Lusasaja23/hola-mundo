import Link from "next/link"

export default function HelloWorldText({tech}) {
    return (
        <h1><Link className="reset" href={`/techs/${tech.name}`}>¡Hola Mundo!</Link></h1>
    )
}