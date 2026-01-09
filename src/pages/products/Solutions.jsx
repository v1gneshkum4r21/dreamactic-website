import React, { useState } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import { BarChart, Truck, Users, ArrowRight, TrendingUp, DollarSign, Package, Headphones, Layers, Rocket, Zap, X } from 'lucide-react';

const slides = [
    { id: 1, video: "https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4" },
    { id: 2, video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" }
];

const Solutions = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const features = [
        {
            id: 1,
            icon: BarChart,
            title: "Alpha Seeker",
            subtitle: "Finance Swarm",
            description: "Automated market research and portfolio rebalancing at machine speed. Alpha Seeker monitors global markets 24/7, executing trades and hedging risks based on real-time sentiment analysis.",
            accent: "#3b82f6", // Blue
            details: ["Portfolio Rebalancing", "Sentiment Analysis", "Risk Hedging", "High-Frequency Trading"],
            impact: ["+45% ROI", "0 Latency", "24/7 Uptime", "Global Coverage"]
        },
        {
            id: 2,
            icon: Truck,
            title: "Logistics Link",
            subtitle: "Supply Chain",
            description: "Predictive inventory management and route optimization. Connect your entire supply chain with a swarm of agents that predict shortages, optimize routes, and negotiate shipping rates autonomously.",
            accent: "#0ea5e9", // Sky Blue
            details: ["Route Optimization", "Demand Prediction", "Auto-Restocking", "Fleet Management"],
            impact: ["-30% Costs", "99% On-Time", "Zero Waste", "Auto-Negotiation"]
        },
        {
            id: 3,
            icon: Users,
            title: "CX Engine",
            subtitle: "Support Matrix",
            description: "Intelligent resolution that feels human. Why limit support to business hours? CX Engine provides instant, empathetic, and accurate support to millions of users simultaneously.",
            accent: "#60a5fa", // Blue-400
            details: ["Instant Resolution", "Multi-Language", "Sentiment Adaptive", "Ticket Escalation"],
            impact: ["0s Wait Time", "5/5 CSAT", "1M+ Concurrency", "24/7 Support"]
        }
    ];

    const selectedFeature = features.find(f => f.id === selectedId);

    return (
        <div style={{ height: '100vh', width: '100%', background: '#0a0a0a', color: '#fff', display: 'flex', overflow: 'hidden' }}>
            {/* Left Side - PURE VIDEO */}
            <div style={{ width: '40%', position: 'relative', overflow: 'hidden', borderRight: '1px solid #2a2a2a' }}>
                <HeroCarousel slides={slides} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
            </div>

            {/* Right Side - Dashboard */}
            <div style={{ width: '60%', display: 'flex', flexDirection: 'column', background: 'radial-gradient(circle at top right, #1a0f2e 0%, #0a0a0a 50%)', height: '100%', position: 'relative', overflow: 'hidden' }}>
                {/* Ambient Glow Effect */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '60%',
                    height: '60%',
                    background: `radial-gradient(circle, ${features.find(f => f.id === selectedId)?.accent}15 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                    transition: 'all 0.8s ease'
                }} />

                {/* Fixed Container - NO SCROLL */}
                <div style={{
                    flex: 1,
                    padding: 'clamp(100px, 12vh, 140px) clamp(1.5rem, 2.5vw, 3rem) clamp(2rem, 4vh, 3rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 1
                }}>

                    {/* Top Row: Header */}
                    <div style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 'clamp(0.5rem, 1vw, 1.5rem)' }}>
                            <h1 style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', color: '#fff', letterSpacing: '-0.03em', margin: 0 }}>
                                <span style={{
                                    color: 'transparent',
                                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
                                    marginRight: 'clamp(8px, 1vw, 12px)'
                                }}>
                                    Global
                                </span>
                                <span style={{
                                    color: features.find(f => f.id === selectedId)?.accent,
                                    transition: 'color 0.5s ease'
                                }}>Solutions</span>
                            </h1>

                            <div style={{ display: 'flex', gap: 'clamp(0.8rem, 1.2vw, 1.5rem)', alignItems: 'center' }}>
                                <button
                                    onClick={() => setShowModal(true)}
                                    style={{
                                        padding: 'clamp(0.5rem, 0.7vh, 0.65rem) clamp(1rem, 1.2vw, 1.5rem)',
                                        background: `linear-gradient(135deg, ${selectedFeature.accent}, ${selectedFeature.accent}dd)`,
                                        color: '#fff',
                                        fontWeight: '700',
                                        fontSize: 'clamp(0.8rem, 0.85vw, 0.95rem)',
                                        borderRadius: '100px',
                                        border: `1px solid ${selectedFeature.accent}`,
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        transition: 'all 0.3s ease',
                                        boxShadow: `0 4px 12px ${selectedFeature.accent}40`
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = `0 8px 20px ${selectedFeature.accent}60`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `0 4px 12px ${selectedFeature.accent}40`;
                                    }}
                                >
                                    <Zap size={16} strokeWidth={2.5} /> Deploy Solution
                                </button>
                            </div>
                        </div>

                        {/* Menu Navigation - Compact Row */}
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            marginBottom: '1.5rem',
                            overflowX: 'auto',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none'
                        }}>
                            {features.map((feature) => {
                                const isSelected = selectedId === feature.id;
                                return (
                                    <div
                                        key={feature.id}
                                        onClick={() => setSelectedId(feature.id)}
                                        style={{
                                            flex: '0 0 auto',
                                            minWidth: 'clamp(160px, 14vw, 220px)',
                                            padding: '0.75rem 1rem',
                                            background: isSelected
                                                ? `linear-gradient(135deg, ${feature.accent}25, ${feature.accent}10)`
                                                : 'rgba(255,255,255,0.02)',
                                            border: isSelected ? `1.5px solid ${feature.accent}` : '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: '0.85rem',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            boxShadow: isSelected ? `0 8px 32px -8px ${feature.accent}60` : 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isSelected) {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isSelected) {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }
                                        }}
                                    >
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '8px',
                                            background: isSelected ? `${feature.accent}20` : 'rgba(255,255,255,0.05)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: `1px solid ${isSelected ? feature.accent + '40' : 'rgba(255,255,255,0.1)'}`,
                                            transition: 'all 0.3s ease',
                                            flexShrink: 0
                                        }}>
                                            <feature.icon size={16} color={isSelected ? feature.accent : '#888'} strokeWidth={2} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', minWidth: 0 }}>
                                            <span style={{ fontWeight: '800', fontSize: '0.85rem', color: isSelected ? '#fff' : '#ccc', whiteSpace: 'nowrap', transition: 'color 0.3s ease' }}>{feature.title}</span>
                                            <span style={{ fontSize: '0.65rem', fontWeight: '600', color: feature.accent, opacity: isSelected ? 1 : 0.8, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{feature.subtitle}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Active Detail View - SCROLLABLE */}
                        <div key={selectedId} style={{
                            flex: 1,
                            animation: 'fadeIn 0.5s ease-out',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'clamp(1rem, 2vh, 1.5rem)',
                            minHeight: 0,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            paddingRight: '0.5rem',
                            paddingBottom: '4rem'
                        }}>
                            <style>{`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                            
                            div::-webkit-scrollbar {
                                width: 6px;
                            }
                            div::-webkit-scrollbar-track {
                                background: rgba(255, 255, 255, 0.05);
                                border-radius: 10px;
                            }
                            div::-webkit-scrollbar-thumb {
                                background: ${selectedFeature.accent}40;
                                border-radius: 10px;
                            }
                        `}</style>

                            {/* Feature Header with Large Icon */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'clamp(1rem, 2vw, 1.5rem)',
                                padding: 'clamp(1.25rem, 2.5vh, 2rem)',
                                background: `linear-gradient(135deg, ${selectedFeature.accent}15, rgba(0,0,0,0.4))`,
                                borderRadius: 'clamp(16px, 1.5vw, 24px)',
                                border: `1.5px solid ${selectedFeature.accent}30`,
                                boxShadow: `0 10px 30px -10px ${selectedFeature.accent}20`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    right: '-10%',
                                    width: '200px',
                                    height: '200px',
                                    background: `radial-gradient(circle, ${selectedFeature.accent}20 0%, transparent 70%)`,
                                    filter: 'blur(40px)',
                                    pointerEvents: 'none'
                                }} />

                                <div style={{
                                    width: 'clamp(60px, 8vw, 100px)',
                                    height: 'clamp(60px, 8vw, 100px)',
                                    borderRadius: 'clamp(16px, 1.5vw, 24px)',
                                    background: `linear-gradient(135deg, ${selectedFeature.accent}30, ${selectedFeature.accent}10)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `2px solid ${selectedFeature.accent}40`,
                                    boxShadow: `0 20px 60px -15px ${selectedFeature.accent}40`,
                                    position: 'relative',
                                    zIndex: 1,
                                    flexShrink: 0
                                }}>
                                    <selectedFeature.icon size={window.innerWidth * 0.03 > 48 ? 48 : window.innerWidth * 0.03} color={selectedFeature.accent} strokeWidth={1.5} />
                                </div>

                                <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '0.4rem', color: '#fff' }}>
                                        {selectedFeature.title}
                                    </h2>
                                    <p style={{ fontSize: 'clamp(0.8rem, 0.9vw, 1rem)', color: selectedFeature.accent, fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                                        {selectedFeature.subtitle}
                                    </p>
                                    <p style={{ fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)', color: '#b0b0b0', lineHeight: '1.6', maxWidth: '95%' }}>
                                        {selectedFeature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 'clamp(1rem, 2vh, 1.5rem)',
                                flex: 1
                            }}>
                                {/* Capabilities Card */}
                                <div style={{
                                    padding: 'clamp(1.5rem, 2.5vh, 2.5rem)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 'clamp(20px, 2vw, 32px)',
                                    border: `2px solid ${selectedFeature.accent}50`,
                                    backdropFilter: 'blur(30px)',
                                    boxShadow: `0 20px 50px -15px ${selectedFeature.accent}30`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start'
                                }}>
                                    <h3 style={{
                                        fontSize: 'clamp(0.7rem, 0.8vw, 0.9rem)',
                                        fontWeight: '700',
                                        color: '#888',
                                        marginBottom: '0',
                                        paddingBottom: 'clamp(0.5rem, 1vh, 1rem)',
                                        letterSpacing: '0.1em',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        textTransform: 'uppercase',
                                        flexShrink: 0
                                    }}>
                                        <div style={{ width: 'clamp(20px, 2.2vw, 26px)', height: '2px', background: selectedFeature.accent, borderRadius: '2px' }} />
                                        CAPABILITIES
                                    </h3>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 'clamp(0.8rem, 1.2vh, 1.2rem)',
                                        flex: 1,
                                        justifyContent: 'center',
                                        padding: 'clamp(0.5rem, 1vh, 1rem) 0'
                                    }}>
                                        {selectedFeature.details.map((item, i) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 'clamp(0.95rem, 1.1vw, 1.3rem)',
                                                fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)',
                                                fontWeight: '500',
                                                color: '#ffffff',
                                                padding: 'clamp(0.4rem, 0.6vh, 0.6rem) 0',
                                                borderBottom: i < selectedFeature.details.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                            }}>
                                                <div style={{
                                                    width: 'clamp(5px, 0.6vw, 7px)',
                                                    height: 'clamp(5px, 0.6vw, 7px)',
                                                    background: selectedFeature.accent,
                                                    borderRadius: '50%',
                                                    boxShadow: `0 0 8px ${selectedFeature.accent}80`,
                                                    flexShrink: 0
                                                }} />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact Card */}
                                <div style={{
                                    padding: 'clamp(1.5rem, 2.5vh, 2.5rem)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 'clamp(20px, 2vw, 32px)',
                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(30px)',
                                    boxShadow: '0 20px 50px -15px rgba(0,0,0,0.6)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start'
                                }}>
                                    <h3 style={{
                                        fontSize: 'clamp(0.7rem, 0.8vw, 0.9rem)',
                                        fontWeight: '700',
                                        color: '#888',
                                        marginBottom: '0',
                                        paddingBottom: 'clamp(0.5rem, 1vh, 1rem)',
                                        letterSpacing: '0.1em',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        textTransform: 'uppercase',
                                        flexShrink: 0
                                    }}>
                                        <div style={{ width: 'clamp(20px, 2.2vw, 26px)', height: '2px', background: selectedFeature.accent, borderRadius: '2px' }} />
                                        IMPACT
                                    </h3>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: 'clamp(0.8rem, 1vw, 1.2rem)',
                                        alignContent: 'center',
                                        flex: 1,
                                        padding: 'clamp(0.5rem, 1vh, 1rem) 0'
                                    }}>
                                        {selectedFeature.impact.map((item, i) => (
                                            <div key={i} style={{
                                                fontSize: 'clamp(0.8rem, 0.9vw, 1.1rem)',
                                                padding: 'clamp(0.7rem, 1vh, 1rem) clamp(0.8rem, 1vw, 1.2rem)',
                                                borderRadius: 'clamp(10px, 1vw, 12px)',
                                                background: `linear-gradient(135deg, ${selectedFeature.accent}20, ${selectedFeature.accent}10)`,
                                                color: '#fff',
                                                textShadow: `0 0 10px ${selectedFeature.accent}50`,
                                                border: `1px solid ${selectedFeature.accent}30`,
                                                fontWeight: '700',
                                                textAlign: 'center',
                                                boxShadow: `0 4px 12px ${selectedFeature.accent}10`
                                            }}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {showModal && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(12px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    <div style={{
                        width: 'clamp(320px, 90%, 500px)',
                        background: '#0a0a0a',
                        border: `1px solid ${selectedFeature.accent}40`,
                        borderRadius: '24px',
                        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                        position: 'relative',
                        boxShadow: `0 20px 50px -10px ${selectedFeature.accent}20`,
                        margin: '1rem'
                    }}>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute',
                                top: '1.25rem',
                                right: '1.25rem',
                                background: 'transparent',
                                border: 'none',
                                color: '#666',
                                cursor: 'pointer',
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = '#666'}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '0.75rem',
                                color: selectedFeature.accent,
                                background: `${selectedFeature.accent}10`,
                                padding: '0.25rem 0.75rem',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                <selectedFeature.icon size={14} />
                                {selectedFeature.title}
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2.25rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '0.5rem', color: '#fff' }}>
                                Deploy Solution
                            </h2>
                            <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 0.95vw, 1rem)', lineHeight: '1.5' }}>
                                Ready to deploy {selectedFeature.title}? Tell us about your specialized needs.
                            </p>
                        </div>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    style={{
                                        flex: 1,
                                        padding: '0.85rem 1rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        color: '#fff',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                    onFocus={e => e.target.style.borderColor = `${selectedFeature.accent}80`}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Work Email"
                                style={{
                                    width: '100%',
                                    padding: '0.85rem 1rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={e => e.target.style.borderColor = `${selectedFeature.accent}80`}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                            <textarea
                                rows={4}
                                placeholder="Describe your solution requirements..."
                                style={{
                                    width: '100%',
                                    padding: '0.85rem 1rem',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    resize: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={e => e.target.style.borderColor = `${selectedFeature.accent}80`}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                            <button style={{
                                marginTop: '0.5rem',
                                padding: '1rem',
                                background: selectedFeature.accent,
                                color: '#000',
                                fontWeight: '800',
                                borderRadius: '12px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: `0 4px 12px ${selectedFeature.accent}40`
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 8px 20px ${selectedFeature.accent}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 4px 12px ${selectedFeature.accent}40`;
                                }}
                            >
                                Request Consultation
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Solutions;
