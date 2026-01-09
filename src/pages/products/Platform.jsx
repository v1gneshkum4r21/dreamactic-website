import React, { useState } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import { Globe, Cpu, Shield, ArrowRight, Network, Calculator, Activity, X } from 'lucide-react';

const slides = [
    { id: 1, video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" },
    { id: 2, video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" }
];

const Platform = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const features = [
        {
            id: 1,
            icon: Globe,
            title: "Orchestration",
            subtitle: "Global Swarm Logic",
            description: "Coordinate thousands of autonomous agents in real-time. Our swarm orchestration engine ensures agents collaborate, share context, and execute complex workflows without collision.",
            accent: "#a78bfa", // Purple
            details: ["Swarm Coordination", "Collision Avoidance", "Task Delegation", "Global State Sync"],
            specs: ["< 10ms Latency", "1M+ Concurrent Agents", "99.99% Uptime", "Global CDN"]
        },
        {
            id: 2,
            icon: Cpu,
            title: "Neural Core",
            subtitle: "Long-Term Memory",
            description: "Agents that remember. Advanced vector database integration allows agents to retain context across infinite sessions, learning and adapting to your business logic over time.",
            accent: "#818cf8", // Indigo
            details: ["Vector Embeddings", "Semantic Search", "Context Recall", "Active Learning"],
            specs: ["128k Context Window", "Infinite Memory", "RAG Pipeline", "Auto-Indexing"]
        },
        {
            id: 3,
            icon: Shield,
            title: "Sentinel",
            subtitle: "Enterprise Security",
            description: "Military-grade encryption and safety guardrails. Ensure your swarm never goes rogue with role-based access control, audit logging, and determinist output filters.",
            accent: "#c084fc", // Violet
            details: ["Output Guardrails", "PII Redaction", "Audit Trails", "Role-Based Access"],
            specs: ["SOC 2 Type II", "AES-256 Encryption", "GDPR Compliant", "Private VPC"]
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
                                    Core
                                </span>
                                <span style={{
                                    color: features.find(f => f.id === selectedId)?.accent,
                                    transition: 'color 0.5s ease'
                                }}>Platform</span>
                            </h1>
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
                                <Activity size={16} strokeWidth={2.5} /> Initialize
                            </button>
                        </div>
                    </div>

                    {/* Menu Navigation - Compact Row */}
                    <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        marginBottom: '1.5rem',
                        overflowX: 'auto',
                        paddingTop: '8px', // Prevent Clipping
                        paddingBottom: '8px', // Balanced spacing
                        paddingLeft: '4px', // Breath for shadows
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
                                        flex: '0 0 auto', // Don't squeeze
                                        minWidth: 'clamp(140px, 12vw, 180px)',
                                        padding: '0.6rem 0.75rem',
                                        background: isSelected
                                            ? `linear-gradient(135deg, ${feature.accent}25, ${feature.accent}10)`
                                            : 'rgba(255,255,255,0.02)',
                                        border: isSelected ? `1.5px solid ${feature.accent}` : '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '12px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex',
                                        flexDirection: 'row', // Horizontal for compactness
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
                        gap: 'clamp(1rem, 2vh, 1.5rem)', // Consistent gap
                        minHeight: 0,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        paddingRight: '0.5rem',
                        paddingBottom: '4rem' // Generous footer buffer
                    }}>
                        <style>{`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                            
                            /* Custom Scrollbar */
                            div::-webkit-scrollbar {
                                width: 6px;
                            }
                            div::-webkit-scrollbar-track {
                                background: rgba(255, 255, 255, 0.05);
                                border-radius: 10px;
                            }
                            div::-webkit-scrollbar-thumb {
                                background: rgba(167, 139, 250, 0.3);
                                border-radius: 10px;
                            }
                            div::-webkit-scrollbar-thumb:hover {
                                background: rgba(167, 139, 250, 0.5);
                            }
                        `}</style>

                        {/* Feature Header with Large Icon */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'clamp(1rem, 2vw, 1.5rem)',
                            padding: 'clamp(1.25rem, 2.5vh, 2rem)', // Increased padding
                            background: `linear-gradient(135deg, ${selectedFeature.accent}15, rgba(0,0,0,0.4))`,
                            borderRadius: 'clamp(16px, 1.5vw, 24px)',
                            border: `1.5px solid ${selectedFeature.accent}30`,
                            boxShadow: `0 10px 30px -10px ${selectedFeature.accent}20`,
                            position: 'relative',
                            overflow: 'hidden',
                            flexShrink: 0 // Prevent clipping
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
                                width: 'clamp(60px, 7vw, 100px)',
                                height: 'clamp(60px, 7vw, 100px)',
                                borderRadius: 'clamp(16px, 2vw, 24px)',
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
                                <selectedFeature.icon size={Math.min(48, window.innerWidth * 0.035)} color={selectedFeature.accent} strokeWidth={1.5} />
                            </div>

                            <div style={{ flex: 1, position: 'relative', zIndex: 1, minWidth: 0 }}>
                                <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.5rem)', fontWeight: '800', lineHeight: '1', marginBottom: 'clamp(0.3rem, 0.5vh, 0.5rem)', color: '#fff' }}>
                                    {selectedFeature.title}
                                </h2>
                                <p style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)', color: selectedFeature.accent, fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 'clamp(0.5rem, 1vh, 1rem)' }}>
                                    {selectedFeature.subtitle}
                                </p>
                                <p style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)', color: '#b0b0b0', lineHeight: '1.6', maxWidth: '90%' }}>
                                    {selectedFeature.description}
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 'clamp(0.75rem, 1.2vw, 1rem)',
                            flex: 1 // Allow grid to grow and fill available space
                        }}>
                            {/* Functionality Card */}
                            <div style={{
                                padding: 'clamp(1.5rem, 2.5vh, 2.5rem)',
                                background: 'rgba(255, 255, 255, 0.05)', // Slightly brighter
                                borderRadius: 'clamp(20px, 2vw, 32px)',
                                border: `2px solid ${selectedFeature.accent}50`, // Stronger border
                                backdropFilter: 'blur(30px)',
                                boxShadow: `0 20px 50px -15px ${selectedFeature.accent}30`,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(0.7rem, 0.8vw, 0.9rem)', // Increased font size
                                    fontWeight: '700',
                                    color: '#888',
                                    marginBottom: '0',
                                    paddingBottom: 'clamp(0.5rem, 1vh, 1rem)',
                                    letterSpacing: '0.1em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem', // Increased gap
                                    textTransform: 'uppercase',
                                    flexShrink: 0
                                }}>
                                    <div style={{ width: 'clamp(20px, 2.2vw, 26px)', height: '2px', background: selectedFeature.accent, borderRadius: '2px' }} />
                                    FUNCTIONALITY
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 'clamp(0.8rem, 1.2vh, 1.2rem)', // Increased item gap
                                    flex: 1,
                                    justifyContent: 'center', // Center content vertically in remaining space
                                    padding: 'clamp(0.5rem, 1vh, 1rem) 0'
                                }}>
                                    {selectedFeature.details.map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'clamp(0.6rem, 0.9vw, 1rem)', // Increased gap
                                            fontSize: 'clamp(0.95rem, 1.1vw, 1.3rem)', // Slightly larger
                                            fontWeight: '500', // Better weight
                                            color: '#ffffff', // Full white for max readability
                                            padding: 'clamp(0.4rem, 0.6vh, 0.6rem) 0',
                                            borderBottom: i < selectedFeature.details.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                        }}>
                                            <div style={{
                                                width: 'clamp(5px, 0.6vw, 7px)', // Increased dot size
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

                            {/* Specifications Card */}
                            <div style={{
                                padding: 'clamp(1.5rem, 2.5vh, 2.5rem)',
                                background: 'rgba(255, 255, 255, 0.05)', // Slightly brighter
                                borderRadius: 'clamp(20px, 2vw, 32px)',
                                border: '2px solid rgba(255, 255, 255, 0.2)', // Stronger border
                                backdropFilter: 'blur(30px)',
                                boxShadow: '0 20px 50px -15px rgba(0,0,0,0.6)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(0.7rem, 0.8vw, 0.9rem)', // Increased font size
                                    fontWeight: '700',
                                    color: '#888',
                                    marginBottom: '0',
                                    paddingBottom: 'clamp(0.5rem, 1vh, 1rem)',
                                    letterSpacing: '0.1em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem', // Increased gap
                                    textTransform: 'uppercase',
                                    flexShrink: 0
                                }}>
                                    <div style={{ width: 'clamp(20px, 2.2vw, 26px)', height: '2px', background: selectedFeature.accent, borderRadius: '2px' }} />
                                    SPECIFICATIONS
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: 'clamp(0.8rem, 1vw, 1.2rem)', // Increased grid gap
                                    alignContent: 'center', // Center vertically
                                    flex: 1,
                                    padding: 'clamp(0.5rem, 1vh, 1rem) 0'
                                }}>
                                    {selectedFeature.specs.map((spec, i) => (
                                        <div key={i} style={{
                                            fontSize: 'clamp(0.8rem, 0.9vw, 1.1rem)', // Better scaling
                                            padding: 'clamp(0.7rem, 1vh, 1rem) clamp(0.8rem, 1vw, 1.2rem)',
                                            borderRadius: 'clamp(10px, 1vw, 12px)',
                                            background: `linear-gradient(135deg, ${selectedFeature.accent}20, ${selectedFeature.accent}10)`,
                                            color: '#fff', // White text on colored bg for clarity
                                            textShadow: `0 0 10px ${selectedFeature.accent}50`,
                                            border: `1px solid ${selectedFeature.accent}30`,
                                            fontFamily: 'monospace',
                                            fontWeight: '600',
                                            textAlign: 'center',
                                            boxShadow: `0 4px 12px ${selectedFeature.accent}10`
                                        }}>
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {
                showModal && (
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
                                    Initialize Platform
                                </h2>
                                <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 0.95vw, 1rem)', lineHeight: '1.5' }}>
                                    Ready to scale with {selectedFeature.title}? Tell us about your infrastructure goals.
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
                                    placeholder="Describe your platform requirements..."
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
        </div >
    );
};

export default Platform;
