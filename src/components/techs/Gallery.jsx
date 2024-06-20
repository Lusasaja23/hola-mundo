import Carousel from '../../components/techs/Carousel';

export default function Gallery({techs}) {
    return (
        <>
            <section className="category">
                <h2 className="catName">Frontend</h2>
                <Carousel techs={techs} type="type" filter='frontend'></Carousel>
            </section>
            <section className="category">
                <h2 className="catName">Backend</h2>
                <Carousel techs={techs} type='type' filter='backend'></Carousel>
            </section>
            <section className="category">
                <h2 className="catName">FullStack</h2>
                <Carousel techs={techs} type='is' filter='fullstack'></Carousel>
            </section>
            <section className="category">
                <h2 className="catName">Frameworks</h2>
                <Carousel techs={techs} type='is' filter='framework'></Carousel>
            </section>
        </>
    )
}