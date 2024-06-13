'use client'
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function TutorialFragment({tutorial}) {
    
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <article className="tutorialFragment" key={tutorial.name}>
            <h3>{tutorial.title}</h3>
            <p>{tutorial.text}</p>
            <section className="code">
                <img
                    src={tutorial.image}
                    width='80%'
                    height={''}
                    alt={`Tutorial de ${tutorial.title}`}
                    title={`Tutorial de ${tutorial.title}`}
                ></img>
                <section className='interactive'>
                    <CopyToClipboard text={tutorial.code} onCopy={handleCopy}>
                        <button title='Copiar Código'  className='intective-btn'><i className={`bx bx${copied ? 's' : ''}-paste`}></i></button>
                    </CopyToClipboard>
                    <a title='Ver Imagen' className='intective-btn reset' href={tutorial.image} target="_blank" rel="noopener noreferrer"><i className="bx bx-link-external"></i></a>
                </section>
            </section>
        </article>
    )
}