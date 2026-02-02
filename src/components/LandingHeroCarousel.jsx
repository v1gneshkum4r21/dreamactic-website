import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import './LandingHeroCarousel.css';

const defaultSlides = [
    {
        id: 1,
        video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4", // Neural Network
        title: "Neural Core",
        desc: "The heartbeat of synthetic intelligence."
    },
    {
        id: 2,
        video: "https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4", // Cyberpunk City
        title: "Future Cities",
        desc: "Architecting the skyline of tomorrow."
    },
    {
        id: 3,
        video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4", // Alternative Tech Grid
        title: "Global Grid",
        desc: "Connecting consciousness across the void."
    }
];

const LandingHeroCarousel = ({ slides = defaultSlides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const videoRefs = useRef([]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    // Handle Auto-play
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    // Handle Video Playback
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;
            if (index === currentIndex) {
                video.play().catch(() => { });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, [currentIndex]);

    const getSlideClass = (index) => {
        if (index === currentIndex) return 'active';
        if (index === (currentIndex - 1 + slides.length) % slides.length) return 'prev';
        if (index === (currentIndex + 1) % slides.length) return 'next';
        return '';
    };

    return (
        <div className="landing-hero-carousel">
            <div className="landing-carousel-header">
                <span className="landing-brand-mark">DREAMACTIC</span>
            </div>

            <div className="landing-watermark-layer">
                <h1 className="landing-vertical-watermark">DREAMACTIC</h1>
            </div>

            <div className="landing-carousel-track">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`landing-carousel-slide ${getSlideClass(index)}`}
                        onClick={() => {
                            if (index !== currentIndex) {
                                setCurrentIndex(index);
                            }
                        }}
                    >
                        <div className="landing-slide-content-wrapper">
                            <div className="landing-slide-video-container">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={slide.video}
                                    className="landing-slide-video"
                                    muted
                                    playsInline
                                    loop
                                />
                                <div className="landing-slide-overlay" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LandingHeroCarousel;
