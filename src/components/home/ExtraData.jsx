import { useState, useEffect } from 'react';
import { LoadingInline } from '../Loading';

export default function ExtraData({ tech }) {
    const [randomResource, setRandomResource] = useState(null);

    useEffect(() => {
        const keys = Object.keys(tech.extra);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const resource = tech.extra[randomKey];
        const randomRes = resource[Math.floor(Math.random() * resource.length)];
        setRandomResource(randomRes);
    }, [tech]);

    if (!randomResource) {
        return <LoadingInline></LoadingInline>;
    }

    return (
        <small className="extraData"><i className="bx bx-brain"></i> {randomResource}</small>
    );
}