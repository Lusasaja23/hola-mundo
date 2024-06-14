'use client'

import { useState, useEffect, useRef } from "react"

export default function ResourceLink({resource, index}) {
    const [showDialog, setShowDialog] = useState(false)
    const [dialogType, setDialogType] = useState('')

    const handleClick = (type) => (e) => {
        e.preventDefault();
        if (!type || type == '') {
            window.open(resource.link, '_blank')
        } else if (type === 'video') {
            setShowDialog(true)
            setDialogType('video')
        } else {
            setShowDialog(true)
            setDialogType('download')
        }
    }

    const dialogRef = useRef(null);

    useEffect(() => {
        if (showDialog) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [showDialog]);

    const handleLinkClick = (resource) => (e) => {
        e.preventDefault();
        window.open(resource.link, '_blank');
        setShowDialog(false);
    }

    return (
        <>
            <a 
                className='resource reset' 
                href={resource.link} 
                onClick={handleClick((resource.type === 'web') ? '' : (resource.type == 'video' ? 'video' : 'download'))}
                target="_blank" 
                rel="noopener noreferrer" 
                key={index} 
                title={`${resource.title} ofrecido por ${resource.from}`}>

                <div className="top">
                    <h3>{resource.title}</h3>
                    <small>Por {resource.from}</small>
                </div>

                <img src={resource.image} alt={`${resource.title} ofrecido por ${resource.from}`} width='90%'/>
                <small className='disclaimer'>* Este recurso podría lucir diferente o no estar disponible</small>
            </a>

            <dialog ref={dialogRef}>
                {(dialogType !== '' && dialogType === 'video') ? (
                    <>
                        <h1>Recurso en video</h1>
                        <p>El recurso que vas a revisar es un video. <strong>¿Quieres ir igual?</strong></p>
                        <section className="buttons">
                            <a className="reset" href={resource.link} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick(resource)}>Claro</a>
                            <button onClick={() => setShowDialog(false)}>No</button>
                        </section>
                    </>
                ) : (
                    <>
                        <h1>Recurso en video</h1>
                        <p>El recurso que vas a revisar necesita descargarse en tu equipo. <strong>¿Quieres ir igual?</strong></p>
                        <section className="buttons">
                            <a className="reset" href={resource.link} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick(resource)}>Claro</a>
                            <button onClick={() => setShowDialog(false)}>No</button>
                        </section>
                    </>
                )}
            </dialog>
        </>
    )
}