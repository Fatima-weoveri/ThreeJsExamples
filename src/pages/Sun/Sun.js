import './styles.scss';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';
import bg from "../../assets/bg.jpg";

gsap.registerPlugin( ScrollTrigger)

const Sun = () => {
    const sunCircleRef = useRef(null);
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    const parallaxIt = (e, target, movement) => {
        const relX = e.clientX - (window.innerWidth / 2);
        const relY = e.clientY - (window.innerHeight / 2);
        const x = (relX / window.innerWidth) * movement;
        const y = (relY / window.innerHeight) * movement;

        gsap.to(target, {
          x: x,
          y: y,
          ease: Power2.easeOut,
        });
    };     

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener("mousemove", (e) => {
            parallaxIt(e, bgRef.current, -20); // Reduced movement for less drastic effect
        });

        return () => {
            container.removeEventListener("mousemove", parallaxIt);
        };
    }, []);

    useEffect(() => {
        // Animation for the sun getting bigger
        gsap.to(".sun__circle", {
          scale: 0.4, // adjust scale to desired final size
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      
        // Animation for the hero title disappearing
        gsap.to(".hero__title", {
            opacity: 0,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      
        gsap.from(".lyrics", {
          scrollTrigger: {
            trigger: ".lyrics",
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
       

      }, []);
    

    return (
        <div ref={containerRef} className="full-screen-container">
            <div
                ref={bgRef}
                style={{ backgroundImage: `url(${bg})` }}
                className="background-container"
            >
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <section class="hero">
                            <div class="sun1" >
                                <div class="sun__circle" ref={sunCircleRef}></div>
                            </div>
                            <h1 class="hero__title">Here comes the sun</h1>
                        </section>

                        <section class="lyrics">
                            <h1 class="lyrics__title" data-lag="0.2">Sunny Text</h1>
                            <p> It's been a long, cold lonely winter</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        
    );
}
export default Sun;