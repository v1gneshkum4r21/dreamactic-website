import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Image, Settings, Workflow, Bot, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        // Lock scroll on mount
        document.body.classList.add('home-locked');
        return () => {
            // Unlock scroll on unmount
            document.body.classList.remove('home-locked');
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

    // Duplicate services for seamless infinite scroll
    // Tripled to ensure smooth reset on large screens
    const duplicatedServices = [...services, ...services, ...services];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            // Get exact card width including gap from the first element
            const card = container.querySelector('div > .service-card')?.parentElement;
            const scrollAmount = card ? card.offsetWidth + 32 : 350; // Fallback to 350 if calculation fails

            const currentScroll = container.scrollLeft;
            const targetScroll =
                direction === 'left'
                    ? currentScroll - scrollAmount
                    : currentScroll + scrollAmount;

            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationFrameId;
        const speed = 1; // Pixels per frame

        const scrollLoop = () => {
            if (!isPaused) {
                container.scrollLeft += speed;

                // Reset when we've scrolled past the first set (approx 1/3 of content)
                if (container.scrollLeft >= (container.scrollWidth / 3)) {
                    container.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scrollLoop);
        };

        animationFrameId = requestAnimationFrame(scrollLoop);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <div className="home">
            <HeroCarousel />

            <section className="services-section">
                <div className="services-container">
                    <div
                        className="services-strip-wrapper"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        <button
                            className="nav-arrow left"
                            onClick={() => scroll('left')}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div
                            className="services-strip"
                            ref={scrollRef}
                        >
                            {duplicatedServices.map((service, index) => (
                                <div key={index} onClick={() => handleCardClick(service.path)}>
                                    <ServiceCard
                                        icon={service.icon}
                                        title={service.title}
                                        description={service.description}
                                        colorTheme={service.colorTheme}
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            className="nav-arrow right"
                            onClick={() => scroll('right')}
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
