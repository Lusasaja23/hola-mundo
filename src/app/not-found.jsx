'use client'
import '../styles/notFound.css'
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className="firstContainer">
            <section className="text">
                <h1 className='title'>404 | Not Found</h1>
                <p className='description'>La ruta a la que intentas acceder <strong>no existe</strong> o <strong>no esta disponible</strong> por el momento</p>
            </section>
            <button className='return' onClick={() => { router.back() }}>Volver</button>
        </div>
    )
}