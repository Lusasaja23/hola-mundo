import ExtraCard from "./ExtraCard"

export default function ExtrasSection({tech}) {
    return (
        <section id="extras" className='extrasContainer'>
            <h2>Extras</h2>
            <article className="extrasFragment">
                <ExtraCard tech={tech} type={'tips'}></ExtraCard>
                <ExtraCard tech={tech} type={'curius'}></ExtraCard>
                <ExtraCard tech={tech} type={'phrases'}></ExtraCard>
            </article>
        </section>
    )
}