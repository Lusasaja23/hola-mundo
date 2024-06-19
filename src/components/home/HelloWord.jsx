'use client';
import { useRouter } from 'next/navigation';

import 'animate.css';

export default function HelloWorld({ tech }) {
    const router = useRouter();

    const handleClick = () => {
        if (tech) {
            const techName = tech.name;
            router.push(`/techs/${techName}`);
        }
    };

    return (
        <h1 className="helloWorld" onClick={handleClick}>
            ¡Hola Mundo!
        </h1>
    );
}