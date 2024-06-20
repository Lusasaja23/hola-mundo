'use client'
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Carousel({ techs, type, filter }) {
    const router = useRouter();
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [lastTouchTime, setLastTouchTime] = useState(0);

    const handleScroll = (e) => {
        const carousel = carouselRef.current;
        if (carousel) {
            e.preventDefault();
            const scrollAmount = e.deltaY * 2;
            carousel.scrollLeft += scrollAmount;
        }
    };

    const handleTouchStart = (e) => {
        if (e.touches.length === 1 && e.touches[0].target === carouselRef.current) {
            setIsDragging(true);
            setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
            setScrollLeft(carouselRef.current.scrollLeft);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleItemClick = (techName) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastTouchTime > 300) { 
            router.push(`/techs/${techName}`);
        }
        setLastTouchTime(currentTime);
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('wheel', handleScroll, { passive: false });
            carousel.addEventListener('touchstart', handleTouchStart);
            carousel.addEventListener('touchend', handleTouchEnd);
            carousel.addEventListener('touchmove', handleTouchMove);

            return () => {
                carousel.removeEventListener('wheel', handleScroll);
                carousel.removeEventListener('touchstart', handleTouchStart);
                carousel.removeEventListener('touchend', handleTouchEnd);
                carousel.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, [isDragging, startX, scrollLeft]);

    if (type === 'type') {
        return (
            <section className="carousel" ref={carouselRef} onWheel={handleScroll}>
                {techs.filter(tech => tech.type === filter).map((tech) => {
                    return (
                        <div className="item" key={tech.name} onClick={() => {handleItemClick(tech.name)}}>
                            <Image className='techLogo' src={tech.logo} width={75} height={75} alt={`Logo de ${tech.title}`}></Image>
                            <h3 className='techName'>{tech.title}</h3>
                        </div>
                    )
                })}
            </section>
        )
    }

    if (type === 'is') {
        return (
            <section className="carousel" ref={carouselRef}>
                {techs.filter(tech => tech[`is${filter}`] === true).map((tech) => {
                    return (
                        <div className="item" key={tech.name} onClick={() => {handleItemClick(tech.name)}}>
                            <Image className='techLogo' src={tech.logo} width={75} height={75} alt={`Logo de ${tech.title}`}></Image>
                            <h3 className='techName'>{tech.title}</h3>
                        </div>
                    )
                })}
            </section>
        )
    }
}