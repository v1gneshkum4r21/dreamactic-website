import React, { useState } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import { BarChart, Truck, Users, ArrowRight, TrendingUp, DollarSign, Package, Headphones, Layers, Rocket, Zap } from 'lucide-react';

const slides = [
    { id: 1, video: "https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4" },
    { id: 2, video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" }
];

const Solutions = () => {
    const [selectedId, setSelectedId] = useState(1);

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
                <div style={{ flex: 1, padding: '120px 3rem 2rem', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 1 }}>

                    {/* Header */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{
                            fontSize: '0.7rem',
                            fontWeight: '700',
                            marginBottom: '0.75rem',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: '#3b82f6',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            padding: '0.4rem 1rem',
                            borderRadius: '100px',
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
                            SECTOR: ENTERPRISE
                        </div>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', color: '#fff', letterSpacing: '-0.03em' }}>
                            <span style={{
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
                                marginRight: '12px'
                            }}>
                                Global
                            </span>
                            <span style={{
                                color: features.find(f => f.id === selectedId)?.accent,
                                transition: 'color 0.5s ease'
                            }}>Solutions</span>
                        </h1>
                    </div>

                    {/* Menu Navigation - Compact Row */}
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem' }}>
                        {features.map((feature) => {
                            const isSelected = selectedId === feature.id;
                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => setSelectedId(feature.id)}
                                    style={{
                                        flex: 1,
                                        padding: '1.25rem 1rem',
                                        background: isSelected
                                            ? `linear-gradient(135deg, ${feature.accent}25, ${feature.accent}10)`
                                            : 'rgba(255,255,255,0.02)',
                                        border: isSelected ? `1px solid ${feature.accent}` : '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.75rem',
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
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: isSelected ? `${feature.accent}20` : 'rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: `1px solid ${isSelected ? feature.accent + '40' : 'rgba(255,255,255,0.1)'}`,
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <feature.icon size={24} color={isSelected ? feature.accent : '#888'} strokeWidth={2} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                        <span style={{ fontWeight: '700', fontSize: '0.85rem', color: isSelected ? '#fff' : '#aaa', marginBottom: '0.15rem' }}>{feature.title}</span>
                                        <span style={{ fontSize: '0.65rem', color: feature.accent, opacity: isSelected ? 1 : 0.6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{feature.subtitle}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Active Detail View */}
                    <div key={selectedId} style={{ flex: 1, animation: 'fadeIn 0.5s ease-out', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <style>{`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                        `}</style>

                        {/* Feature Header with Large Icon */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            padding: '2rem',
                            background: `linear-gradient(135deg, ${selectedFeature.accent}08, transparent)`,
                            borderRadius: '20px',
                            border: `1px solid ${selectedFeature.accent}20`,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Decorative gradient orb */}
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
                                width: '100px',
                                height: '100px',
                                borderRadius: '24px',
                                background: `linear-gradient(135deg, ${selectedFeature.accent}30, ${selectedFeature.accent}10)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: `2px solid ${selectedFeature.accent}40`,
                                boxShadow: `0 20px 60px -15px ${selectedFeature.accent}40`,
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <selectedFeature.icon size={48} color={selectedFeature.accent} strokeWidth={1.5} />
                            </div>

                            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                                <h2 style={{ fontSize: '2.25rem', fontWeight: '800', lineHeight: '1', marginBottom: '0.5rem', color: '#fff' }}>
                                    {selectedFeature.title}
                                </h2>
                                <p style={{ fontSize: '1rem', color: selectedFeature.accent, fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                    {selectedFeature.subtitle}
                                </p>
                                <p style={{ fontSize: '0.95rem', color: '#b0b0b0', lineHeight: '1.6', maxWidth: '90%' }}>
                                    {selectedFeature.description}
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                            {/* Capabilities Card */}
                            <div style={{
                                padding: '1.75rem',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                            }}>
                                <h3 style={{
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    color: '#888',
                                    marginBottom: '1.25rem',
                                    letterSpacing: '0.1em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    textTransform: 'uppercase'
                                }}>
                                    <div style={{ width: '24px', height: '2px', background: selectedFeature.accent, borderRadius: '2px' }} />
                                    CAPABILITIES
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                    {selectedFeature.details.map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.85rem',
                                            fontSize: '0.9rem',
                                            color: '#ddd',
                                            padding: '0.5rem 0',
                                            borderBottom: i < selectedFeature.details.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                        }}>
                                            <div style={{
                                                width: '6px',
                                                height: '6px',
                                                background: selectedFeature.accent,
                                                borderRadius: '50%',
                                                boxShadow: `0 0 8px ${selectedFeature.accent}80`
                                            }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Card */}
                            <div style={{
                                padding: '1.75rem',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                            }}>
                                <h3 style={{
                                    fontSize: '0.7rem',
                                    fontWeight: '700',
                                    color: '#888',
                                    marginBottom: '1.25rem',
                                    letterSpacing: '0.1em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    textTransform: 'uppercase'
                                }}>
                                    <div style={{ width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
                                    IMPACT
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                    {selectedFeature.impact.map((item, i) => (
                                        <div key={i} style={{
                                            fontSize: '0.75rem',
                                            padding: '0.75rem 0.85rem',
                                            borderRadius: '10px',
                                            background: `linear-gradient(135deg, ${selectedFeature.accent}15, ${selectedFeature.accent}08)`,
                                            color: selectedFeature.accent,
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

                        {/* CTA Button */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
                            <button style={{
                                padding: '1rem 2.5rem',
                                background: `linear-gradient(135deg, ${selectedFeature.accent}, ${selectedFeature.accent}dd)`,
                                color: '#fff',
                                fontWeight: '700',
                                fontSize: '0.95rem',
                                borderRadius: '100px',
                                border: `1px solid ${selectedFeature.accent}`,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                transition: 'all 0.3s ease',
                                boxShadow: `0 8px 24px ${selectedFeature.accent}40`
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 12px 32px ${selectedFeature.accent}60`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 8px 24px ${selectedFeature.accent}40`;
                                }}
                            >
                                <Zap size={18} strokeWidth={2.5} /> Deploy Solution
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
