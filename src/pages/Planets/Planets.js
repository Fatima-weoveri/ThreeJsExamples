import { Expo, Power2, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Background from '../../assets/planets/background.png';
import Earth from '../../assets/planets/earth.png';
import EarthPlanet from '../../assets/planets/earth1.png';
import Mars from '../../assets/planets/mars.png';
import Mid from '../../assets/planets/mid.png';
import Rock from '../../assets/planets/rock.png';
import Saturn from '../../assets/planets/saturn.png';
import './Planets.css';

const Planets = () => {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const rockRef = useRef(null);
    const earthRef = useRef(null);
    const midRef = useRef(null);
    const circleRef = useRef(null);
    const earthPlanetRef = useRef(null);
    const marsPlanetRef = useRef(null);
    const saturnPlanetRef = useRef(null);

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
        const handleMouseMove = (e) => {
            parallaxIt(e, bgRef.current, -20);
            parallaxIt(e, rockRef.current, -15);
            parallaxIt(e, earthRef.current, -100);
            parallaxIt(e, midRef.current, -5);
        };
        const container = sectionRef.current;
        container.addEventListener("mousemove", handleMouseMove);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scroll = window.scrollY / maxScroll;
            const scale = 1 + (scroll * 2); 
            gsap.to(circleRef.current, {
                scale: scale,
                ease: Expo.easeOut,
                duration: 0.5,
                width:  '100vw',  
                height: '100vw', 
            });
        };
    
        window.addEventListener('scroll', onScroll);
    
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        gsap.to("#card1", { duration: 1, bottom: "20px", opacity: 1, delay: 1, ease: "power1.out"});
        gsap.to("#card2", { duration: 1, bottom: "20px", opacity: 1, delay: 1.5, ease: "power1.out" });
        gsap.to("#card3", { duration: 1, bottom: "20px", opacity: 1, delay: 2, ease: "power1.out" });

        gsap.to(earthPlanetRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none"
        });
        gsap.to(marsPlanetRef.current, {
            rotation: 360,
            duration: 18,
            repeat: -1,
            ease: "none"
        });
        gsap.to(saturnPlanetRef.current, {
            rotation: 360,
            duration: 22,
            repeat: -1,
            ease: "none"
        });
    }, []);

    return (
        <div className='intro'>
            <div id="sectionOne" ref={sectionRef}>
                <div id="scene">
                    <div className='bg' ref={bgRef}>
                        <img src={Background} alt=""></img>
                    </div>
                    <div className='rock' ref={rockRef}>
                        <img src={Rock} alt=""></img>
                    </div>
                    <div className='earth' ref={earthRef}>
                        <img src={Earth} alt=""></img>
                    </div>
                    <div className="mid" ref={midRef}>
                        <img src={Mid} alt="" />
                    </div>
                    <div className="text">
                        <h1>PLANETS</h1>
                    </div>
                </div>
            </div>
            <div style={{height: '10vh'}}></div>
            <div ref={circleRef} className="expanding-circle">
                <div className="circle-text">Explore the Universe</div>
                <div className="cards">
                    <div className="card" id="card1" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <p style={{margin: 0, padding: 0, letterSpacing: 0.1}}>Earth</p>
                        <img ref={earthPlanetRef} src={EarthPlanet} alt="" style={{height: '70px'}} />
                    </div>
                    <div className="card" id="card2" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <p style={{margin: 0, padding: 0, letterSpacing: 0.1}}>Mars</p>
                        <img ref={marsPlanetRef} src={Mars} alt="" style={{height: '70px'}} />
                    </div>
                    <div className="card" id="card3" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <p style={{margin: 0, padding: 0, letterSpacing: 0.1}}>Saturn</p>
                        <img ref={saturnPlanetRef} src={Saturn} alt="" style={{height: '70px'}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Planets;