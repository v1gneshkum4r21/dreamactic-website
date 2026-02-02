import { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ index, icon: Icon, title, description, colorTheme }) => {
    const colorMap = {
        blue: '#3b82f6',
        gray: '#9ca3af',
        orange: '#f97316',
        pink: '#ec4899',
        purple: '#a855f7'
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`service-card ${isHovered ? 'hovered' : ''}`}
            style={{ '--accent-color': colorMap[colorTheme] || '#3b82f6' }}
        >
            <div className="service-index">
                {String(index).padStart(2, '0')}
            </div>
            <div className="service-content-wrapper">
                <div className="service-icon">
                    <Icon className="icon-svg" size={28} strokeWidth={2} />
                </div>
                <div className="service-content">
                    <h3 className="service-title">{title}</h3>
                    <p className="service-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
