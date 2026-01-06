import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Image, Settings, Workflow, Bot, Sparkles } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

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

    return (
        <div className="home split-layout">
            <div className="home-panel left-panel">
                <HeroCarousel />
            </div>

            <div className="home-panel right-panel">
                <div className="services-vertical-list">
                    <h2 className="section-title">Our Solutions</h2>
                    {services.map((service, index) => (
                        <div key={index} onClick={() => handleCardClick(service.path)} className="service-card-wrapper">
                            <ServiceCard
                                index={index + 1}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                colorTheme={service.colorTheme}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
