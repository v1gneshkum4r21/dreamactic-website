import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import './ProductHeroCarousel.css';

const ProductHeroCarousel = ({ slides }) => {
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
                    video.play().catch(() => { });
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
        <div className="product-hero-carousel">
            <div className="product-carousel-track">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`product-carousel-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <div className="product-slide-content-wrapper">
                            <div className="product-slide-video-container">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={slide.video}
                                    className="product-slide-video"
                                    muted
                                    playsInline
                                    onTimeUpdate={index === currentIndex ? handleVideoTimeUpdate : undefined}
                                    onEnded={index === currentIndex ? nextSlide : undefined}
                                />
                                <div className="product-slide-overlay" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cinematic Bottom Bar Layout */}
            <div className="product-cinematic-bottom-bar">
                {/* Minimal Info */}
                <div className="product-cinematic-info">
                    <div className="product-meta-line">
                        <span className="product-slide-number">0{currentIndex + 1}</span>
                        <span className="product-slide-total">/ 0{slides.length}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="product-cinematic-controls-area">
                    <div className="product-control-buttons">
                        <button onClick={prevSlide}><ArrowLeft size={20} /></button>
                        <button onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
                            {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        <button onClick={nextSlide}><ArrowRight size={20} /></button>
                    </div>
                </div>

                {/* Progress */}
                <div className="product-cinematic-progress-container">
                    <div
                        className="product-cinematic-progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductHeroCarousel;
