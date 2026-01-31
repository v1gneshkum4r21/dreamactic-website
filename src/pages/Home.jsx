import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Image, Settings, Workflow, Bot, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import LandingHeroCarousel from '../components/LandingHeroCarousel';
import ServiceCard from '../components/ServiceCard';
import './Landing.css';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Lock scroll on mount
        document.body.classList.add('landing-locked');
        return () => {
            // Unlock scroll on unmount
            document.body.classList.remove('landing-locked');
        };
    }, []);

    const services = [
        {
            icon: Image,
            title: 'Image Models',
            description: 'Intelligent AI image models for analyzing and generating business-ready visual content.',
            colorTheme: 'blue',
            path: '/showcase'
        },
        {
            icon: Settings,
            title: 'Fine-tuning Models',
            description: 'Fine-tuning models tailored to your data, style, and business objectives.',
            colorTheme: 'gray',
            path: '/showcase'
        },
        {
            icon: Workflow,
            title: 'Workflow Automation',
            description: 'AI-powered workflow automation to streamline and optimize business processes.',
            colorTheme: 'orange',
            path: '/showcase'
        },
        {
            icon: Bot,
            title: 'Autonomous AI Agents',
            description: 'Autonomous AI agents that execute tasks and streamline operations intelligently.',
            colorTheme: 'pink',
            path: '/showcase'
        },
        {
            icon: Sparkles,
            title: 'AI Innovation',
            description: 'Cutting-edge AI solutions that transform ideas into intelligent, scalable products.',
            colorTheme: 'purple',
            path: '/showcase'
        }
    ];

    const handleCardClick = (path) => {
        navigate(path);
    };

    const serviceStripRef = useRef(null);
    const isPausedRef = useRef(false);
    const isManualScrollRef = useRef(false);
    const manualScrollTimeoutRef = useRef(null);
    const scrollPosRef = useRef(0);

    // Triple the services to create an infinite loop effect
    const duplicatedServices = [...services, ...services, ...services];

    useEffect(() => {
        // Initialize scroll to the middle section
        if (serviceStripRef.current) {
            const cardWidth = 380 + 24; // Width + Gap (Approximate)
            const initialScroll = cardWidth * services.length;
            serviceStripRef.current.scrollLeft = initialScroll;
            scrollPosRef.current = initialScroll;
        }

        // Auto-scroll loop
        let animationFrameId;
        const scrollSpeed = 0.5; // slow cinematic speed

        const animate = () => {
            if (serviceStripRef.current && !isPausedRef.current && !isManualScrollRef.current) {
                scrollPosRef.current += scrollSpeed;
                serviceStripRef.current.scrollLeft = scrollPosRef.current;

                // Seamless reset logic within the animation frame
                const { scrollLeft, scrollWidth } = serviceStripRef.current;
                const singleSetWidth = scrollWidth / 3;

                if (scrollLeft <= 0) {
                    scrollPosRef.current = singleSetWidth;
                    serviceStripRef.current.scrollLeft = scrollPosRef.current;
                } else if (scrollLeft >= singleSetWidth * 2) {
                    scrollPosRef.current = singleSetWidth;
                    serviceStripRef.current.scrollLeft = scrollPosRef.current;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [services.length]);

    const handleScroll = () => {
        if (!serviceStripRef.current) return;
        // Keep scrollPosRef in sync with manual scrolls (buttons/touch)
        scrollPosRef.current = serviceStripRef.current.scrollLeft;
    };

    const scrollServices = (direction) => {
        if (serviceStripRef.current) {
            isManualScrollRef.current = true;
            if (manualScrollTimeoutRef.current) {
                clearTimeout(manualScrollTimeoutRef.current);
            }

            const scrollAmount = 404; // Card width (380) + Gap (24)
            serviceStripRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });

            // Resume auto-scroll after smooth scroll duration (approx 600ms to be safe)
            manualScrollTimeoutRef.current = setTimeout(() => {
                isManualScrollRef.current = false;
                if (serviceStripRef.current) {
                    scrollPosRef.current = serviceStripRef.current.scrollLeft;
                }
            }, 600);
        }
    };

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="landing-hero-section">
                <LandingHeroCarousel />
            </section>

            {/* Services Strip Section */}
            <section className="landing-services-strip-container">
                <button className="strip-nav-button left" onClick={() => scrollServices('left')}>
                    <ArrowLeft size={24} />
                </button>

                <h2 className="landing-section-title">Our Solutions</h2>
                <div
                    className="landing-services-strip"
                    ref={serviceStripRef}
                    onScroll={handleScroll}
                    onMouseEnter={() => { isPausedRef.current = true; }}
                    onMouseLeave={() => { isPausedRef.current = false; }}
                >
                    {duplicatedServices.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(service.path)}
                            className="landing-service-card"
                            data-theme={service.colorTheme}
                        >
                            <div className="card-icon-box">
                                <service.icon className="icon-svg" size={28} style={{ color: service.colorTheme === 'gray' ? '#9ca3af' : 'inherit' }} />
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="strip-nav-button right" onClick={() => scrollServices('right')}>
                    <ArrowRight size={24} />
                </button>
            </section>
        </div>
    );
};

export default Home;
