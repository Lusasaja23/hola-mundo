export default function ExtraData({tech}) {
    const keys = Object.keys(tech.extra);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const resource = tech.extra[randomKey];
    const randomResource = resource[Math.floor(Math.random() * resource.length)];

    return (
        <small className="extraData"><i className="bx bx-brain"></i> {randomResource}</small>
    )
}