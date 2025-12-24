import React, { useState } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import { BarChart, Truck, Users, ArrowRight } from 'lucide-react';

const slides = [
    { id: 1, video: "https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4" },
    { id: 2, video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" }
];

const Solutions = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: BarChart,
            title: "ALPHA SEEKER",
            subtitle: "Finance Swarm",
            desc: "Automated market research, sentiment analysis, and portfolio rebalancing at machine speed.",
            stat: "+45% ROI"
        },
        {
            icon: Truck,
            title: "LOGISTICS LINK",
            subtitle: "Supply Chain",
            desc: "Predictive inventory management and route optimization using real-time global data feeds.",
            stat: "-30% COSTS"
        },
        {
            icon: Users,
            title: "CX ENGINE",
            subtitle: "Support Matrix",
            desc: "24/7 intelligent resolution that feels human, scaling infinitely with your user base.",
            stat: "0s WAIT"
        }
    ];

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative', background: '#000', color: '#fff' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <HeroCarousel slides={slides} />
            </div>

            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(circle at center, transparent 0%, #000 120%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', padding: '0 4vw' }}>
                <div style={{ height: '100px' }} />

                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontFamily: 'monospace', color: '#3b82f6', marginBottom: '1rem', letterSpacing: '0.2em', fontSize: '0.9rem' }}>
                            /// SECTOR: ENTERPRISE
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', fontWeight: '800', lineHeight: '0.9', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                            GLOBAL<br />SOLUTIONS
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', lineHeight: '1.6', borderLeft: '2px solid #3b82f6', paddingLeft: '1.5rem' }}>
                            Tailored agent swarms for mission-critical functions. <br />
                            Finance. Logistics. Operations.
                        </p>
                    </div>
                </div>

                <div style={{ height: 'auto', paddingBottom: '3rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {features.map((f, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveFeature(idx)}
                            style={{
                                background: idx === activeFeature ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.6)',
                                backdropFilter: 'blur(20px)',
                                border: `1px solid ${idx === activeFeature ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                                padding: '1.5rem',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <f.icon size={24} color={idx === activeFeature ? '#3b82f6' : '#fff'} />
                                <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>0{idx + 1}</span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>{f.title}</h3>
                                <div style={{ fontSize: '0.8rem', color: '#3b82f6', marginBottom: '0.8rem', fontFamily: 'monospace' }}>{f.subtitle}</div>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5', display: idx === activeFeature ? 'block' : 'none' }}>
                                    {f.desc}
                                </p>
                            </div>

                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>IMPACT: {f.stat}</span>
                                {idx === activeFeature && <ArrowRight size={14} color="#3b82f6" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
