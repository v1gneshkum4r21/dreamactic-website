import React, { useState } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import { Cpu, Globe, Shield, ArrowRight } from 'lucide-react';

const slides = [
    { id: 1, video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" },
    { id: 2, video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" }
];

const Platform = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: Globe,
            title: "ORCHESTRATION",
            subtitle: "Global Swarm Logic",
            desc: "Coordinate thousands of autonomous agents in real-time with sub-millisecond latency.",
            stat: "99.9% UPTIME"
        },
        {
            icon: Cpu,
            title: "NEURAL CORE",
            subtitle: "Long-Term Memory",
            desc: "Advanced vector database integration allows agents to retain context across infinite sessions.",
            stat: "128k CONTEXT"
        },
        {
            icon: Shield,
            title: "SENTINEL",
            subtitle: "Enterprise Security",
            desc: "Military-grade encryption and safety guardrails ensure your swarm never goes rogue.",
            stat: "SOC2 TYPE II"
        }
    ];

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative', background: '#000', color: '#fff' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <HeroCarousel slides={slides} />
            </div>

            {/* Cinematic Vignette & Grid Overlay */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(circle at center, transparent 0%, #000 120%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px', pointerEvents: 'none' }} />

            {/* HUD Content */}
            <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', padding: '0 4vw' }}>
                <div style={{ height: '100px' }} /> {/* Navbar Spacer */}

                {/* Main Heading Area */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontFamily: 'monospace', color: '#a78bfa', marginBottom: '1rem', letterSpacing: '0.2em', fontSize: '0.9rem' }}>
                            /// SYSTEM STARTUP: COMPLETE
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', fontWeight: '800', lineHeight: '0.9', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                            CORE<br />PLATFORM
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', lineHeight: '1.6', borderLeft: '2px solid #a78bfa', paddingLeft: '1.5rem' }}>
                            The operating system for the agentic future. <br />
                            Build. Deploy. Conquer.
                        </p>
                    </div>
                </div>

                {/* Control Deck */}
                <div style={{ height: 'auto', paddingBottom: '3rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {features.map((f, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveFeature(idx)}
                            style={{
                                background: idx === activeFeature ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(20px)',
                                border: `1px solid ${idx === activeFeature ? '#a78bfa' : 'rgba(255,255,255,0.1)'}`,
                                padding: '1.5rem',
                                borderRadius: '4px', // Squared off technical look
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <f.icon size={24} color={idx === activeFeature ? '#a78bfa' : '#fff'} />
                                <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>0{idx + 1}</span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>{f.title}</h3>
                                <div style={{ fontSize: '0.8rem', color: '#a78bfa', marginBottom: '0.8rem', fontFamily: 'monospace' }}>{f.subtitle}</div>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5', display: idx === activeFeature ? 'block' : 'none' }}>
                                    {f.desc}
                                </p>
                            </div>

                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>STATUS: {f.stat}</span>
                                {idx === activeFeature && <ArrowRight size={14} color="#a78bfa" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Platform;
