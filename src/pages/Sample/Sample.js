import React, { useRef, useLayoutEffect } from 'react';
import './Sample.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sample = () => { 
    const sunRef = useRef(null);
    const barRef = useRef(null);

    useLayoutEffect(() => {
        const sun = sunRef.current;
        gsap.fromTo(sun, 
            { scale: 3.45 }, 
            {
                scale: 1, 
                duration: 5, 
                scrollTrigger: {
                    trigger: barRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                    markers: true,
                    toggleActions: 'play pause resume pause'
                }
            })

            sun.addEventListener('mousemove', (e) => {
                const rect = sun.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                sun.style.backgroundImage = `radial-gradient(circle at ${xPercent}% ${yPercent}%, gold, transparent 70%, yellow)`;
            });
    
            sun.addEventListener('mouseleave', () => {
                sun.style.backgroundImage = 'radial-gradient(circle at 50% 50%, yellow, gold)';
            });
      }, []);

    return (
        <div className="container" >
            <div ref={barRef} style={{ height: '100vh' }}></div>
            <div className="sun" ref={sunRef}></div>
        </div>
    );
};

export default Sample;
