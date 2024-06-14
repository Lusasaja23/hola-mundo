import ResourceLink from "./resourceSection/ResourceLink"

export default function ResourcesSection({tech}) {
    return (
        <section id="resources" className='resourcesContainer'>
            <h2>Aprender más</h2>
            <section className="resourcesFragment">
                {tech.resources.map((resource, index) => {
                    return (
                        <ResourceLink resource={resource} index={index}></ResourceLink>
                    )
                })}
            </section>
        </section>
    )
}