import React, { useState, useEffect } from 'react';
import ProductHeroCarousel from '../../components/ProductHeroCarousel';
import { Globe, Cpu, Shield, Activity, X } from 'lucide-react';
import './ProductsLayout.css';

const slides = [
    { id: 1, video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" },
    { id: 2, video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" }
];

const Platform = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.body.classList.add('product-locked');
        return () => {
            document.body.classList.remove('product-locked');
        };
    }, []);

    const features = [
        {
            id: 1,
            icon: Globe,
            title: "Orchestration",
            subtitle: "Global Swarm Logic",
            description: "Coordinate thousands of autonomous agents in real-time. Our swarm orchestration engine ensures agents collaborate, share context, and execute complex workflows without collision.",
            accent: "#a78bfa",
            details: ["Swarm Coordination", "Collision Avoidance", "Task Delegation", "Global State Sync"],
            specs: ["< 10ms Latency", "1M+ Concurrent Agents", "99.99% Uptime", "Global CDN"]
        },
        {
            id: 2,
            icon: Cpu,
            title: "Neural Core",
            subtitle: "Long-Term Memory",
            description: "Agents that remember. Advanced vector database integration allows agents to retain context across infinite sessions, learning and adapting to your business logic over time.",
            accent: "#818cf8",
            details: ["Vector Embeddings", "Semantic Search", "Context Recall", "Active Learning"],
            specs: ["128k Context Window", "Infinite Memory", "RAG Pipeline", "Auto-Indexing"]
        },
        {
            id: 3,
            icon: Shield,
            title: "Sentinel",
            subtitle: "Enterprise Security",
            description: "Military-grade encryption and safety guardrails. Ensure your swarm never goes rogue with role-based access control, audit logging, and determinist output filters.",
            accent: "#c084fc",
            details: ["Output Guardrails", "PII Redaction", "Audit Trails", "Role-Based Access"],
            specs: ["SOC 2 Type II", "AES-256 Encryption", "GDPR Compliant", "Private VPC"]
        }
    ];

    const selectedFeature = features.find(f => f.id === selectedId);

    return (
        <div className="product-layout">
            <div className="product-panel left-panel">
                <ProductHeroCarousel slides={slides} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
            </div>

            <div className="product-panel right-panel">
                <div className="product-container">
                    {/* Header */}
                    <div style={{ marginBottom: 'clamp(0.75rem, 1.5vh, 1.5rem)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 'clamp(0.5rem, 1vw, 1.5rem)' }}>
                            <h1 style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: '800', lineHeight: '1.2', color: '#fff', letterSpacing: '-0.03em', margin: 0 }}>
                                <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)', marginRight: 'clamp(8px, 1vw, 12px)' }}>Core</span>
                                <span style={{ color: selectedFeature.accent, transition: 'color 0.5s ease' }}>Platform</span>
                            </h1>

                            <button
                                onClick={() => setShowModal(true)}
                                style={{
                                    padding: 'clamp(0.5rem, 0.7vh, 0.65rem) clamp(1rem, 1.2vw, 1.5rem)',
                                    background: `linear-gradient(135deg, ${selectedFeature.accent}, ${selectedFeature.accent}dd)`,
                                    color: '#000',
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
                                <Activity size={16} style={{ marginRight: '4px' }} strokeWidth={2.5} /> Initialize
                            </button>
                        </div>

                        {/* Navigation Tabs */}
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
                                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: feature.accent, opacity: isSelected ? 1 : 0.8, textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>{feature.subtitle}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div key={selectedId} className="platform-scroll-container" style={{
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
                            
                            .platform-scroll-container::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {/* Feature Header Card */}
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
                            flexShrink: 0
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

                            <div style={{ flex: 1, position: 'relative', zIndex: 1, overflow: 'hidden', minHeight: 0 }}>
                                <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.25rem)', fontWeight: '800', lineHeight: '1.4', marginBottom: '0.4rem', color: '#fff', paddingTop: '0.8rem' }}>
                                    {selectedFeature.title}
                                </h2>
                                <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1.15rem)', color: selectedFeature.accent, fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                                    {selectedFeature.subtitle}
                                </p>
                                <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.25rem)', color: '#b0b0b0', lineHeight: '1.6', maxWidth: '95%' }}>
                                    {selectedFeature.description}
                                </p>
                            </div>
                        </div>

                        {/* Details Grid */}
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
                                    fontSize: '0.85rem',
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
                                    gap: 'clamp(0.5rem, 0.8vh, 0.8rem)',
                                    flex: 1,
                                    justifyContent: 'center',
                                    padding: 'clamp(0.5rem, 1vh, 1rem) 0'
                                }}>
                                    {selectedFeature.details.map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'clamp(0.95rem, 1.1vw, 1.3rem)',
                                            fontSize: '1.1rem',
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
                                    fontSize: '0.85rem',
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
                                    gap: 'clamp(0.5rem, 0.8vw, 0.8rem)',
                                    alignContent: 'center',
                                    flex: 1,
                                    padding: 'clamp(0.3rem, 0.6vh, 0.6rem) 0'
                                }}>
                                    {selectedFeature.specs.map((item, i) => (
                                        <div key={i} style={{
                                            fontSize: '1rem',
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

            {showModal && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
                    <div style={{ width: '400px', background: '#111', padding: '2rem', borderRadius: '24px', border: `1px solid ${selectedFeature.accent}40`, position: 'relative' }}>
                        <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}><X size={24} /></button>
                        <h2 style={{ color: '#fff' }}>Contact Us</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Name" style={{ padding: '0.8rem', background: '#222', border: '1px solid #333', color: '#fff', borderRadius: '8px', fontSize: '1rem' }} />
                            <input type="email" placeholder="Email" style={{ padding: '0.8rem', background: '#222', border: '1px solid #333', color: '#fff', borderRadius: '8px', fontSize: '1rem' }} />
                            <button type="button" style={{ padding: '1rem', background: selectedFeature.accent, border: 'none', borderRadius: '8px', fontWeight: '800', fontSize: '1rem' }}>Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Platform;
