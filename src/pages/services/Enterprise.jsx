import React, { useState } from 'react';
import { Shield, Server, Lock, Zap, Settings, Eye, Check, ArrowRight } from 'lucide-react';

const Enterprise = () => {
    // Default to first item expanded if none hovered, or keep all equal? 
    // Let's have one expanded by default (index 0) or update on hover.
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            id: 1,
            icon: Shield,
            title: "Custom Deployment",
            subtitle: "Sovereign Infrastructure",
            description: "Deploy AI solutions exactly where you need them. Whether on-premise, private cloud, or hybrid, we ensure complete control over your data and infrastructure.",
            accent: "#10b981", // Emerald
            details: ["On-premise & Hybrid Options", "Full Data Sovereignty", "Custom Security Policies", "Enterprise SLAs"]
        },
        {
            id: 2,
            icon: Server,
            title: "Scalable Infra",
            subtitle: "Global Scale",
            description: "Built for high-volume media processing and real-time rendering. Automatically scale to handle thousands of concurrent operations with 99.99% uptime.",
            accent: "#3b82f6", // Blue
            details: ["Auto-scaling Architecture", "Global CDN Distribution", "GPU/TPU Acceleration", "Load Balancing"]
        },
        {
            id: 3,
            icon: Lock,
            title: "Security",
            subtitle: "Compliance First",
            description: "Bank-grade security meets industry-specific compliance. Fully GDPR, CCPA, and SOC 2 compliant with complete audit trails for every AI decision.",
            accent: "#a855f7", // Purple
            details: ["GDPR & CCPA Compliant", "Role-Based Access", "End-to-End Encryption", "Audit Logging"]
        },
        {
            id: 4,
            icon: Zap,
            title: "Performance",
            subtitle: "Real-time Processing",
            description: "Experience lightning-fast inference. Leveraging advanced caching and model quantization to deliver sub-second response times for visual and data workloads.",
            accent: "#f59e0b", // Amber
            details: ["Sub-second Latency", "Model Quantization", "Intelligent Caching", "Batch Optimization"]
        },
        {
            id: 5,
            icon: Settings,
            title: "Integration",
            subtitle: "Seamless Fit",
            description: "We don't just build models; we engineer systems. Custom APIs and bespoke architectures designed to slot perfectly into your existing technology stack.",
            accent: "#ec4899", // Pink
            details: ["Custom API Development", "Legacy System Bridge", "Workflow Orchestration", "Bespoke Architecture"]
        }
    ];

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            background: '#050505',
            display: 'flex',
            overflow: 'hidden',
            fontFamily: '"Spline Sans", sans-serif' // Assuming font is available
        }}>
            {features.map((feature, index) => {
                const isActive = activeIndex === index;

                return (
                    <div
                        key={feature.id}
                        onMouseEnter={() => setActiveIndex(index)}
                        style={{
                            flex: isActive ? 3.5 : 1,
                            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            overflow: 'hidden',
                            borderRight: '1px solid rgba(255,255,255,0.05)',
                            background: isActive
                                ? `radial-gradient(circle at center, ${feature.accent}15 0%, #050505 100%)`
                                : '#050505',
                            cursor: 'pointer'
                        }}
                    >
                        {/* Background Glow */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: isActive ? `linear-gradient(to bottom, transparent, ${feature.accent}05)` : 'transparent',
                            opacity: isActive ? 1 : 0,
                            transition: 'opacity 0.6s'
                        }} />

                        {/* Content Container */}
                        <div style={{
                            padding: '3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center', // Center vertically
                            minWidth: isActive ? '600px' : 'auto', // Force width when active to prevent squish
                            position: 'relative',
                            zIndex: 10
                        }}>

                            {/* Icon & Vertical Title (Inactive State) */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: isActive ? 'translate(-50%, -150%) scale(0.8)' : 'translate(-50%, -50%)',
                                opacity: isActive ? 0 : 1,
                                transition: 'all 0.5s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '2rem'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: `${feature.accent}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `1px solid ${feature.accent}40`,
                                    boxShadow: `0 0 30px ${feature.accent}20`
                                }}>
                                    <feature.icon color={feature.accent} size={28} />
                                </div>
                                <h3 style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'mixed',
                                    transform: 'rotate(180deg)',
                                    color: '#666',
                                    fontSize: '1.2rem',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Active Content */}
                            <div style={{
                                opacity: isActive ? 1 : 0,
                                transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.5s ease 0.1s', // Delay slightly
                                pointerEvents: isActive ? 'auto' : 'none',
                                maxWidth: '800px',
                                paddingRight: '4rem' // Spacing
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div style={{
                                        padding: '12px',
                                        borderRadius: '12px',
                                        background: `${feature.accent}20`,
                                        border: `1px solid ${feature.accent}40`
                                    }}>
                                        <feature.icon color={feature.accent} size={32} />
                                    </div>
                                    <span style={{
                                        color: feature.accent,
                                        letterSpacing: '0.2em',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        fontSize: '0.9rem'
                                    }}>
                                        {feature.subtitle}
                                    </span>
                                </div>

                                <h2 style={{
                                    fontSize: '3.5rem',
                                    fontWeight: '800',
                                    color: '#fff',
                                    lineHeight: '1.1',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {feature.title}
                                </h2>

                                <p style={{
                                    fontSize: '1.2rem',
                                    color: '#a3a3a3',
                                    lineHeight: '1.6',
                                    marginBottom: '3rem',
                                    maxWidth: '600px'
                                }}>
                                    {feature.description}
                                </p>

                                {/* Features List */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1.5rem',
                                    marginBottom: '3rem'
                                }}>
                                    {feature.details.map((detail, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: `${feature.accent}20`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Check size={14} color={feature.accent} />
                                            </div>
                                            <span style={{ color: '#ddd', fontSize: '1rem', fontWeight: '500' }}>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <button style={{
                                    padding: '1rem 2rem',
                                    background: 'transparent',
                                    border: `1px solid ${feature.accent}`,
                                    color: feature.accent,
                                    borderRadius: '100px',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    cursor: 'pointer',
                                    width: 'fit-content',
                                    transition: 'all 0.2s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = feature.accent;
                                        e.currentTarget.style.color = '#000';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = feature.accent;
                                    }}
                                >
                                    Explore Capability <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Number Indicator (Bottom Right of panel) */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            right: '2rem',
                            fontSize: '4rem',
                            fontWeight: '900',
                            color: isActive ? feature.accent : '#222',
                            opacity: isActive ? 0.2 : 1,
                            transition: 'all 0.5s'
                        }}>
                            0{index + 1}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Enterprise;
