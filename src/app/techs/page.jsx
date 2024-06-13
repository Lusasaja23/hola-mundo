import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Techs } from '../../data/techs'
import TechCard from "../../components/techs/TechCard"
import { Suspense } from "react"
import {LoadingPage} from '../../components/Loading'

import '../../styles/techs.css'

export default function TechsPage() {
    return (
        <>
            <Header></Header>
            <main of='techs'>
                <Suspense fallback={<LoadingPage></LoadingPage>}>
                    {Techs.map((tech) => {
                        return (
                            <TechCard tech={tech}></TechCard>
                        )
                    })}
                </Suspense>
            </main>
            <Footer></Footer>
        </>
    )
}