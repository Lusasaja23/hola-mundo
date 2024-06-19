'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Tooltip } from "react-tooltip"
import { useEffect, useState, useRef } from "react"

export default function Header({tutoUI, setTutoUI}) {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)

    const dialogRef = useRef(null);

    useEffect(() => {
        if (showMenu) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [showMenu])

    return (
        <header>
            <nav className="headerNav">
                <i className="bx bx-book" title="Ver todas las Tecnologías" onClick={() => { router.push('/techs') }} aria-label="Ver todas las Tecnologías"></i>
                <i className="bx bx-cog" id="cog" title="Abrir menu de configuraciones" aria-label="Abrir menu de configuraciones" onClick={ () => { setShowMenu(!showMenu) }}></i>
                <Tooltip className="guideTooltip" anchorSelect=".bx-cog" place="bottom" type="dark" isOpen={tutoUI} offset={20}>
                    <small>Activa o desactiva la guía aquí</small>
                </Tooltip>
                <dialog ref={dialogRef} className="configMenu">
                    <h1>Configuraciones</h1>
                    <section className="options">
                        <div className="item uiGuide">
                            <span className="name">Guía UI</span>
                            <i 
                                className={`bx bx-toggle-${tutoUI ? 'right' : 'left'} icon ${tutoUI ? 'active' : ''}`} 
                                onClick={ () => { setTutoUI(!tutoUI) }}></i>
                        </div>
                        <div className="item uiGuide">
                            <span className="name">Otra option</span>
                            <i className='bx bx-toggle-left icon' ></i>
                        </div>
                    </section>
                    <button className="close" onClick={() => { setShowMenu(false) }}>Cerrar</button>
                </dialog>
            </nav>
            <Image
                className="logo"
                src={"/logo.png"}
                alt="Logo de la web"
                width={100}
                height={100}
                onClick={() => { router.push('/') }}
                title="Ir al inicio" 
                aria-label="Ir al inicio">
            </Image>
            <nav className="headerNav">
                <i className="bx bx-bell" id="bell" title="Abrir panel de Notificaciones" aria-label="Abrir panel de Notificaciones"></i>
                <a href="https://github.com/Lusasaja23/hola-mundo" target="_blank" rel="noopener noreferrer" className="reset">
                    <i className="bx bxl-github" title="Inspeccionar cóðigo fuente" aria-label="Inspeccionar cóðigo fuente"></i>
                </a>
            </nav>
        </header>
    )
}