import React, { useState } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import { Bot, Code2, LineChart, ArrowRight } from 'lucide-react';

const slides = [
    { id: 1, video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" },
    { id: 2, video: "https://videos.pexels.com/video-files/5377684/5377684-hd_1920_1080_25fps.mp4" }
];

const Agentic = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: Bot,
            title: "SDR-X",
            subtitle: "Sales Autopilot",
            desc: "Your tireless sales development rep. Prospects, qualifies, and books meetings while you sleep.",
            stat: "24/7 ACTIVE"
        },
        {
            icon: Code2,
            title: "DEV-01",
            subtitle: "Code Guardian",
            desc: "Instant PR analysis, security scanning, and automated refactoring. Ship cleaner code, faster.",
            stat: "0 BUGS"
        },
        {
            icon: LineChart,
            title: "ANALYST-V",
            subtitle: "Data Oracle",
            desc: "Natural language SQL queries and instant visualization. Turn complex data into clear strategy.",
            stat: "REAL-TIME"
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
                        <div style={{ fontFamily: 'monospace', color: '#ec4899', marginBottom: '1rem', letterSpacing: '0.2em', fontSize: '0.9rem' }}>
                            /// UNIT: DEPLOYABLE
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', fontWeight: '800', lineHeight: '0.9', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                            AGENTIC<br />BUNDLES
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', lineHeight: '1.6', borderLeft: '2px solid #ec4899', paddingLeft: '1.5rem' }}>
                            Pre-configured AI agent bundles. <br />
                            Select. Configure. Deploy.
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
                                border: `1px solid ${idx === activeFeature ? '#ec4899' : 'rgba(255,255,255,0.1)'}`,
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
                                <f.icon size={24} color={idx === activeFeature ? '#ec4899' : '#fff'} />
                                <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>0{idx + 1}</span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>{f.title}</h3>
                                <div style={{ fontSize: '0.8rem', color: '#ec4899', marginBottom: '0.8rem', fontFamily: 'monospace' }}>{f.subtitle}</div>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5', display: idx === activeFeature ? 'block' : 'none' }}>
                                    {f.desc}
                                </p>
                            </div>

                            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>TYPE: {f.stat}</span>
                                {idx === activeFeature && <ArrowRight size={14} color="#ec4899" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agentic;
