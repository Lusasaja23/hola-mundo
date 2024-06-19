import Image from "next/image"
import { Suspense } from "react";
import { LoadingInline,  } from "../Loading";

export default function TechLogo ({tech}) {
    const techLogo = tech.logo;
    const randomResource = tech.resources[Math.floor(Math.random() * tech.resources.length)].link;

    return (
        <a href={`${randomResource}`} target="_blank" rel="noopener noreferrer">
            <Suspense fallback={LoadingInline}>
                <Image
                className="techLogo"
                src={techLogo}
                alt="Logo"
                width={120}
                height={120}
                priority></Image>
            </Suspense>
        </a>
    )
}