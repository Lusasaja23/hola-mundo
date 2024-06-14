import TutorialFragment from "./TutorialFragment"

export default function TutorialSection({tech}) {
    return (
        <section id="tutorial" className='tutorialContainer'>
            {tech.tutorial.map((tutorial) => {
                return (
                    <TutorialFragment tutorial={tutorial}></TutorialFragment>
                )
            })}
        </section>
    )
}