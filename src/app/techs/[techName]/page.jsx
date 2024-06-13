import {Techs} from '../../../data/techs.js';
import {LoadingInline} from '../../../components/Loading';
import Image from 'next/image';
import { Suspense } from 'react';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import TutorialFragment from '../../../components/tech/TutorialFragment.jsx';

import '../../../styles/tech.css';
import Link from 'next/link.js';

export default function TechPage({params}) {
    const tech = Techs.find((tech) => tech.name === params.techName)
    if (!tech) {
        return <LoadingPage></LoadingPage>
    }
    return (
        <>
            <Header></Header>
            <main>
                <article className='container'>
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
                    <section className="main">
                        <article className="content">
                            <section className="nav">
                                <h2>Ver:</h2>
                                <nav>
                                    <a href="#tutorial" className='reset'>Tutorial</a>
                                    <a href="#resources" className='reset'>Recursos</a>
                                    <a href="#extras" className='reset'>Extras</a>
                                </nav>
                            </section>
                            <section id="tutorial" className='tutorialContainer'>
                                {tech.tutorial.map((tutorial) => {
                                    return (
                                        <TutorialFragment tutorial={tutorial}></TutorialFragment>
                                    )
                                })}
                            </section>
                            <section id="resources" className='resourcesContainer'>
                                <h2>Aprender más</h2>
                                <section className="resourcesFragment">
                                    {tech.resources.map((resource, index) => {
                                        return (
                                            <a className='resource reset' href={resource.link} target="_blank" rel="noopener noreferrer" key={index} title={`${resource.title} ofrecido por ${resource.from}`}>
                                                <div className="top">
                                                    <h3>{resource.title}</h3>
                                                    <small>Por {resource.from}</small>
                                                </div>
                                                <img src={resource.image} alt={`${resource.title} ofrecido por ${resource.from}`} width='90%'/>
                                                <small className='disclaimer'>* Este recurso podría lucir diferente o no estar disponible</small>
                                            </a>
                                        )
                                    })}
                                </section>
                            </section>
                            <section id="extras">Extras</section>
                        </article>
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
                    </section>
                </article>
            </main>
            <Footer></Footer>
        </>
    )
}