import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroCarousel.css';

const defaultSlides = [
    {
        id: 1,
        video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" // Neural Network
    },
    {
        id: 2,
        video: "https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4" // Cyberpunk City
    },
    {
        id: 3,
        video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" // Alternative Tech Grid
    }
];

const HeroCarousel = ({ slides = defaultSlides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsAutoPlaying(false);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        setTouchStart(0);
        setTouchEnd(0);
        setIsAutoPlaying(true);
    };

    const getSlideStyle = (index) => {
        if (index === currentIndex) return 'active';
        if (index === (currentIndex - 1 + slides.length) % slides.length) return 'prev';
        if (index === (currentIndex + 1) % slides.length) return 'next';
        return 'hidden';
    };

    return (
        <div className="hero-carousel"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="carousel-track">
                {slides.map((slide, index) => {
                    const status = getSlideStyle(index);
                    return (
                        <div
                            key={slide.id}
                            className={`carousel-slide ${status}`}
                            onClick={() => {
                                if (status === 'prev') prevSlide();
                                if (status === 'next') nextSlide();
                            }}
                        >
                            <div className="slide-content-wrapper">
                                <div className="slide-video-container">
                                    <video
                                        src={slide.video}
                                        className="slide-video"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                    {/* subtle gradient overlay for depth, optional */}
                                    <div className="slide-overlay" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>


        </div>
    );
};

export default HeroCarousel;
