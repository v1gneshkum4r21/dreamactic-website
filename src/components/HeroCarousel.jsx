import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import './HeroCarousel.css';

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

const HeroCarousel = ({ slides = defaultSlides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const videoRefs = useRef([]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setProgress(0);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    }, [slides.length]);

    // Handle Video Playback Control
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;
            
            if (index === currentIndex) {
                if (isAutoPlaying) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            } else {
                video.pause();
                video.currentTime = 0; 
            }
        });
    }, [currentIndex, isAutoPlaying]);

    const handleVideoTimeUpdate = (e) => {
        const { currentTime, duration } = e.target;
        if (duration > 0) {
            setProgress((currentTime / duration) * 100);
        }
    };

    const nextSlideIndex = (currentIndex + 1) % slides.length;

    return (
        <div className="hero-carousel">
            {/* Header - Minimal & Floating */}
            <div className="carousel-header">
                <span className="brand-mark">DREAMATIC</span>
            </div>

            <div className="carousel-track">
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id} 
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <div className="slide-content-wrapper">
                            <div className="slide-video-container">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={slide.video}
                                    className="slide-video"
                                    muted
                                    playsInline
                                    onTimeUpdate={index === currentIndex ? handleVideoTimeUpdate : undefined}
                                    onEnded={index === currentIndex ? nextSlide : undefined}
                                />
                                <div className="slide-overlay" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Vertical Watermark */}
            <div className="watermark-layer">
                <h1 className="vertical-watermark">DREAMATIC</h1>
            </div>

            {/* Cinematic Bottom Bar Layout */}
            <div className="cinematic-bottom-bar">
                
                {/* 1. Main Text Info */}
                <div className="cinematic-info">
                    <div className="meta-line">
                        <span className="slide-number">0{currentIndex + 1}</span>
                        <span className="slide-total">/ 0{slides.length}</span>
                    </div>
                    <h2 className="cinematic-title">
                        {slides[currentIndex].title}
                    </h2>
                    <p className="cinematic-desc">
                        {slides[currentIndex].desc}
                    </p>
                </div>

                {/* 2. Controls & Next Up */}
                <div className="cinematic-controls-area">
                    <div className="next-up-preview" onClick={nextSlide}>
                        <span className="next-label">NEXT</span>
                        <span className="next-title">{slides[nextSlideIndex].title}</span>
                    </div>
                    
                    <div className="control-buttons">
                        <button onClick={prevSlide}><ArrowLeft size={24} /></button>
                        <button onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
                            {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <button onClick={nextSlide}><ArrowRight size={24} /></button>
                    </div>
                </div>

                {/* 3. Integrated Progress Line */}
                <div className="cinematic-progress-container">
                    <div 
                        className="cinematic-progress-bar" 
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
