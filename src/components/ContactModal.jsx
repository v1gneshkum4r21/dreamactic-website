import { createPortal } from 'react-dom';
import { X, Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="contact-overlay" onClick={onClose}>
            <div className="contact-modal" onClick={e => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="contact-header">
                    <h2>Get in Touch</h2>
                    <p>We'd love to hear from you. Let's start a conversation.</p>
                </div>

                <div className="contact-content-grid">
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="icon-box"><Mail size={20} /></div>
                            <div>
                                <h3>Email</h3>
                                <p>hello@dreamatic.ai</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><Phone size={20} /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><MapPin size={20} /></div>
                            <div>
                                <h3>Office</h3>
                                <p>123 Innovation Dr, Tech City</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={e => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name *" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Company Name" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input type="email" placeholder="Email Address *" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number *" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <select className="form-select" defaultValue="" required>
                                <option value="" disabled>Inquiry Type *</option>
                                <option value="sales">Sales & Partnerships</option>
                                <option value="product">Product Demo</option>
                                <option value="support">Technical Support</option>
                                <option value="general">General Inquiry</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea placeholder="Tell us about your project *" rows={4} required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ContactModal;
