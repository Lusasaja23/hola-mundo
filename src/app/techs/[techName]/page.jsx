import {Techs} from '../../../data/techs.js';
import Header from '../../../components/Header.jsx';
import Footer from '../../../components/Footer.jsx';
import Info from '../../../components/tech/Info.jsx';
import Related from '../../../components/tech/Related.jsx';
import Nav from '../../../components/tech/Nav.jsx';
import TutorialSection from '../../../components/tech/TutorialSection.jsx';
import ResourcesSection from '../../../components/tech/ResourcesSection.jsx';
import ExtrasSection from '../../../components/tech/ExtrasSection.jsx';

import '../../../styles/tech.css';

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
                    <Info tech={tech}></Info>
                    <section className="main">
                        <section className="principal">
                            <article className="content">
                                <Nav></Nav>
                                <TutorialSection tech={tech}></TutorialSection>
                                <ResourcesSection tech={tech}></ResourcesSection>
                            </article>
                            <Related tech={tech}></Related>
                        </section>
                        <ExtrasSection tech={tech}></ExtrasSection>
                    </section>
                </article>
            </main>
            <Footer></Footer>
        </>
    )
}