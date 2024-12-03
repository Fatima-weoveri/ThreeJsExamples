import Background from '../../assets/background.jpg';
import Man from '../../assets/man.png';
import Cloud1 from '../../assets/clouds_1.png';
import Cloud2 from '../../assets/clouds_2.png';
import MountainLeft from '../../assets/mountain_left.png';
import MountainRight from '../../assets/mountain_right.png';
import JaazBanda from '../../assets/jaazbanda.jpeg';
import Kumrat from '../../assets/kumrat.jpeg';
import DoJanga from '../../assets/dojanga.jpg';
import KalaChashma from '../../assets/kalachashma.png';
import './Mountains.css';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power2, Power1, gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Mountains = () => {
    const detail1Ref = useRef(null);
    const detail2Ref = useRef(null);

    useLayoutEffect(() => {
        gsap.to("#background", {
            scrollTrigger: {
                scrub: 1
            },
            scale: 1.5
        })
        gsap.to("#man", {
            scrollTrigger: {
                scrub: 1
            },
            scale: 0.5,
        })
        gsap.to("#mountain_left", {
            scrollTrigger: {
                scrub: 1
            },
            x: -500
        })
        gsap.to("#mountain_right", {
            scrollTrigger: {
                scrub: 1
            },
            x: 500
        })
        gsap.to("#clouds_1", {
            scrollTrigger: {
                scrub: 1
            },
            x: 200
        })
        gsap.to("#clouds_2", {
            scrollTrigger: {
                scrub: 1
            },
            x: -200
        })
        gsap.to("#mountains", {
            scrollTrigger: {
                scrub: 1
            },
            opacity: 0,
            y: -500,
        })
        gsap.fromTo(detail1Ref.current, 
            {
              x: '-100%',
              opacity: 0,
            }, 
            {
              x: '0%',
              opacity: 1,
              scrollTrigger: {
                trigger: detail1Ref.current,
                start: "top center",
                end: "bottom bottom",
                toggleActions: 'play none none reverse',
                scrub: 1,
              },
              duration: 1,
              ease: 'power3.out',
            }
          );
        gsap.fromTo(detail2Ref.current, 
            {
                x: '100%',
                opacity: 0,
            }, 
            {
                x: '0%',
                opacity: 1,
                scrollTrigger: {
                trigger: detail2Ref.current,
                start: "top center",
                end: "bottom bottom",
                toggleActions: 'play none none reverse',
                scrub: 1,
                },
                duration: 1,
                ease: 'power3.out',
            }
        );

        gsap.timeline({
                scrollTrigger: {
                    trigger: detail1Ref.current,
                    start: "center-=100 center",
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                }
            })
        .fromTo("#line1", { scaleX: 0, transformOrigin: "right center" }, { scaleX: 1, duration: 1, ease: "none" })
        .fromTo("#upper1", { y: 30, opacity: 0 }, { y: 0, duration: 0.75, ease: "none", opacity: 1 }, "text")
        .fromTo("#lower1", { y: -30, opacity: 0 }, { y: 0, duration: 0.75, ease: "none", opacity: 1 }, "text");

        gsap.timeline({
            scrollTrigger: {
                trigger: detail1Ref.current,
                start: "center-=100 center",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        })
        .set("#mask1", {autoAlpha: 1})
        .from("#mask1", {
            duration: 1.5,
            ease: Power2.out
        })
        .from("#image1", {
            xPercent: 100,
            duration: 1.5,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        })
        .fromTo('#desc_text1', {opacity: 0, scale: 0.5, transformOrigin: '50% 50%', x: -100}, {
            duration: 1, opacity: 1, scale: 1, x: 0, ease: Power2.easeIn
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: detail2Ref.current,
                start: "center-=100 center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
        })
        .fromTo("#line2", { scaleX: 0, transformOrigin: "right center" }, { scaleX: 1, duration: 1, ease: "none" })
        .fromTo("#upper2", { y: 30, opacity: 0 }, { y: 0, duration: 0.75, ease: "none", opacity: 1 }, "text")
        .fromTo("#lower2", { y: -30, opacity: 0 }, { y: 0, duration: 0.75, ease: "none", opacity: 1 }, "text");

        gsap.timeline({
            scrollTrigger: {
                trigger: detail2Ref.current,
                start: "center-=100 center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
        })
        .set("#mask2", {autoAlpha: 1,})
        .set("#image2", {xPercent: -100,})
        .from("#mask2", {
            duration: 1.5,
            ease: Power2.out
        })
        .from("#image2", {
            xPercent: -100,
            duration: 1.5,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        })
        .fromTo('#desc_text2', {opacity: 0, scale: 0.5, transformOrigin: '50% 50%', x: 100}, {
            duration: 1, opacity: 1, scale: 1, x: 0, ease: Power2.easeIn
        });

        const textElements = gsap.utils.toArray('.quoteText');

        textElements.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: Power1.out,
                scrollTrigger: {
                    trigger: text,
                    start: 'top-=300 80%',
                    scrub: true,
                    toggleActions: "play none none reverse",
                },
            });
        });

        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#trigger1",
                start: "center-=80 center", 
                end: "center bottom",
                scrub: 5,
                toggleActions: "play none none none",
            },
        });

        tl1.from("#parallax_image1", {
            duration: 1.5,
            scale: 0.5
        }).to("#parallax_image1", {
            duration: 1.5,
            scale: 1,
        }, "-=0.1");

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#trigger2",
                start: "center-=80 center",
                end: "center bottom",
                scrub: 5,
                toggleActions: "play none none none",
            },
        });

        tl2.from("#parallax_image2", {
            duration: 1.5,
            scale: 0.5
        }).to("#parallax_image2", {
            duration: 1.5,
            scale: 1,
        }, "-=0.1");
    })

    return (
        <div className='mountainPage'>
            <div className='main'>
                <img src={Background} id="background" />
                <h2 id="mountains" className="mountainsText">Mountains</h2>
                <img src={Man} id="man" />
                <img src={Cloud1} id="clouds_1" />
                <img src={Cloud2} id="clouds_2" />
                <img src={MountainLeft} id="mountain_left" />
                <img src={MountainRight} id="mountain_right" />
            </div>
            <div className='section1'>
                <div id="detail1" className='options' ref={detail1Ref}>
                    <div className='optionsDiv'>
                        <div id="upperWrap">
                            <h3 id="upper1">Kumrat</h3> 
                        </div>
                        <div id="line1"></div>
                        <div id="lowerWrap">
                            <h3 id="lower1">Valley in Upper Dir District</h3> 
                        </div>
                    </div>
                    <div className='description'>
                        <div className="img_container">
                            <div className="mask" id="mask1">
                                <img id="image1" src={Kumrat} alt="" />
                            </div>
                        </div>
                        <div className='text_container'>
                            <p id='desc_text1'>
                                It is among the most popular tourist spots in Khyber Pakhtunkhwa. It is known for its stunning natural beauty, including lush green forests, snow-capped mountains, sparkling rivers, and magnificent waterfalls. The valley is a popular destination for tourists, particularly those seeking adventure activities such as trekking, camping, and hiking. Kumrat is a valley in the Upper Dir District of the Khyber Pakhtunkhwa province of Pakistan.
                            </p>
                        </div>
                    </div>
                </div>
                    
                <div id="detail2" className='options' ref={detail2Ref}>
                    <div className='optionsDiv'>
                        <div id="upperWrap">
                            <h3 id="upper2">Jaz Banda</h3> 
                        </div>
                        <div id="line2"></div>
                        <div id="lowerWrap">
                            <h3 id="lower2">Meadow in Kumrat Valley</h3> 
                        </div>
                    </div>
                    <div className='description'>
                        <div className="img_container">
                            <div className="mask" id="mask2">
                                <img id="image2" src={JaazBanda} alt="" />
                            </div>
                        </div>
                        <div className='text_container'>
                            <p id='desc_text2'>
                                Jahaz Banda (Pashto: جازبانډه), also spelt as Jaz Banda, is a large meadow in the upper reaches of Kumrat Valley in Upper Dir District of the Khyber Pakhtunkhwa province of Pakistan. It is located at an altitude of 3,100 m above sea level. The region is surrounded by snow-clad mountains, towering trees, and green pastures. The main road extends northward through Upper Dir, eventually arriving at Darwaza village. At this point, the road diverges, branching off into Lamoti village. From there, it ascends toward Jandrai village via a passable but unpaved road suitable for jeeps. Beyond this point, the journey transitions to a trek, leading to Jahaz Banda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <p className='quoteText'>Exploring new horizons,</p> 
                <p className='quoteText'>one destination at a time.</p>
                <p className='quoteText'>Memories in the making.</p>
            </div>

            <div className='section3'>
                <h1 style={{color: 'white'}}>Kala Chashma</h1>
                <div id="trigger1">
                    <section id="parallax_trigger1">
                        <div id="parallax_section1" >
                            <img id="parallax_image1" src={KalaChashma} data-speed="auto" />
                        </div>
                    </section>
                </div>
                <div style={{height: '10vh'}}></div>
                <h1 style={{color: 'white'}}>Do Janga</h1>
                <div id="trigger2">
                    <section id="parallax_trigger2">
                        <div id="parallax_section2" >
                            <img id="parallax_image2" src={DoJanga} data-speed="auto" />
                        </div>
                    </section>
                </div>
            </div>

            <div className='section4'>

            </div>
        </div>
       
    );
}

export default Mountains;