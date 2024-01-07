// MainLayout.js
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import Navbar from "./Navbar";
import Home from "../../page/Home";
import FooterSection from "../../components/common/Footer";

const MainLayout = () => {
    const particlesOptions = {
        fpsLimit: 120,
        backgroundMode: {
            enable: true,
            zIndex: 0
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: "#ff0000",
                animation: {
                    enable: true,
                    speed: 20,
                    sync: true
                }
            },
            shape: {
                type: "circle",
                options: {
                    polygon: {
                        sides: 5
                    },
                    image: {
                        src: "https://cdn.matteobruni.it/images/particles/github.svg",
                        width: 100,
                        height: 100
                    }
                }
            },
            stroke: {
                width: 0
            },
            opacity: {
                value: 0.5,
                random: false,
                animation: {
                    enable: false,
                    speed: 3,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: false,
                    speed: 20,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            links: {
                enable: true,
                distance: 100,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                outMode: "out",
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 200
                },
                push: {
                    quantity: 4
                },
                remove: {
                    quantity: 2
                }
            }
        },
        detectRetina: true,
        background: {
            color: "#000000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        }
    }

    const init = useCallback(async (engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
    }, []);

    return (

        <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
            <Particles id="tsparticles" options={particlesOptions} init={init} className="z-[-1]"/>
            <div className="w-[100vw] h-[10vh] bg-transparent">
                <Navbar />
            </div>
            <div className="w-[100vw] max-h-[90vh] overflow-y-scroll overflow-x-hidden scrollbar-hide">
                <Home/>
                <FooterSection/>
            </div>
        </div>

    )
};

export default MainLayout;
