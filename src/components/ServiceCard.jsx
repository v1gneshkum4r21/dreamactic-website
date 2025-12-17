import { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, colorTheme }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`service-card ${colorTheme} ${isHovered ? 'hovered' : ''}`}
        >
            <div className="service-icon">
                <Icon className="icon-svg" size={32} strokeWidth={2} />
            </div>
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
