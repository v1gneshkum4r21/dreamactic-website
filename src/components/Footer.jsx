import { MessageCircle, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

// Custom Bluesky icon component
const BlueskyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
);

const Footer = () => {
    const socialLinks = [
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            url: '#'
        },
        {
            name: 'Bluesky',
            icon: BlueskyIcon,
            url: '#'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: '#'
        },
        {
            name: 'YouTube',
            icon: Youtube,
            url: '#'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: '#'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: '#'
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-social">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="social-link"
                                    aria-label={link.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                    <div className="footer-copyright">
                        <p>DREAMATIC © 2025 ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
