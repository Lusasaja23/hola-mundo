import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href='/techs'><i className="bx bxs-book"></i></Link>
        <i className="bx bx-cog"></i>
      </nav>
      <Link href='/' className="logo" title="Ir al Inicio">
          <Image src={'/logo.png'} height={100} width={100} alt="Logo de la web"></Image>
      </Link>
      <nav>
        <a href="https://github.com/Lusasaja23/hola-mundo" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
        <i className="bx bx-info-circle"></i>
      </nav>
    </header>
  );
}