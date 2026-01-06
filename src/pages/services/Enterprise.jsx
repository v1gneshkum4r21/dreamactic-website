import React, { useState } from 'react';
import { Shield, Server, Lock, Zap, Settings, Check, ArrowRight } from 'lucide-react';

const Enterprise = () => {
    const [selectedId, setSelectedId] = useState(1);

    const features = [
        {
            id: 1,
            icon: Shield,
            title: "Custom Deployment",
            subtitle: "Sovereign Infrastructure",
            description: "Deploy AI solutions exactly where you need them. Whether on-premise, private cloud, or hybrid, we ensure complete control over your data and infrastructure.",
            accent: "#10b981", // Emerald
            details: ["On-premise & Hybrid Options", "Full Data Sovereignty", "Custom Security Policies", "Enterprise SLAs"],
            useCases: ["Financial Services", "Healthcare", "Defense", "Government"]
        },
        {
            id: 2,
            icon: Server,
            title: "Scalable Infra",
            subtitle: "Global Scale",
            description: "Built for high-volume media processing and real-time rendering. Automatically scale to handle thousands of concurrent operations with 99.99% uptime.",
            accent: "#3b82f6", // Blue
            details: ["Auto-scaling Architecture", "Global CDN Distribution", "GPU/TPU Acceleration", "Load Balancing"],
            useCases: ["Media Streaming", "High-Frequency Trading", "Global E-commerce", "Gaming"]
        },
        {
            id: 3,
            icon: Lock,
            title: "Security",
            subtitle: "Compliance First",
            description: "Bank-grade security meets industry-specific compliance. Fully GDPR, CCPA, and SOC 2 compliant with complete audit trails for every AI decision.",
            accent: "#a855f7", // Purple
            details: ["GDPR & CCPA Compliant", "Role-Based Access", "End-to-End Encryption", "Audit Logging"],
            useCases: ["Banking", "Insurance", "Legal", "Health Tech"]
        },
        {
            id: 4,
            icon: Zap,
            title: "Performance",
            subtitle: "Real-time Processing",
            description: "Experience lightning-fast inference. Leveraging advanced caching and model quantization to deliver sub-second response times for visual and data workloads.",
            accent: "#f59e0b", // Amber
            details: ["Sub-second Latency", "Model Quantization", "Intelligent Caching", "Batch Optimization"],
            useCases: ["Ad Tech", "Real-time Analytics", "Autonomous Systems", "Interactive Media"]
        },
        {
            id: 5,
            icon: Settings,
            title: "Integration",
            subtitle: "Seamless Fit",
            description: "We don't just build models; we engineer systems. Custom APIs and bespoke architectures designed to slot perfectly into your existing technology stack.",
            accent: "#ec4899", // Pink
            details: ["Custom API Development", "Legacy System Bridge", "Workflow Orchestration", "Bespoke Architecture"],
            useCases: ["Legacy Modernization", "Custom ERP Integration", "Workflow Automation", "Proprietary Systems"]
        }
    ];

    const selectedFeature = features.find(f => f.id === selectedId);

    return (
        <div style={{ height: '100vh', width: '100%', background: '#0a0a0a', color: '#fff', display: 'flex', overflow: 'hidden' }}>
            {/* Left Side - Capability List */}
            <div style={{ width: '40%', borderRight: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column', padding: '110px 2.5rem 2rem', background: '#050505' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#666',
                        display: 'inline-block'
                    }}>
                        Enterprise Solutions
                    </div>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        color: '#fff'
                    }}>
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
                            marginRight: '12px'
                        }}>
                            Infrastructure &
                        </span>
                        <span>Core Systems</span>
                    </h1>
                </div>

                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }}>
                    {features.map((feature) => {
                        const isSelected = selectedId === feature.id;
                        return (
                            <div
                                key={feature.id}
                                onClick={() => setSelectedId(feature.id)}
                                style={{
                                    padding: '1.25rem',
                                    background: isSelected ? feature.accent : 'rgba(255,255,255,0.03)',
                                    border: isSelected ? `1px solid ${feature.accent}` : '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '16px',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: '1rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                                    boxShadow: isSelected ? `0 10px 30px -10px ${feature.accent}80` : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{
                                        background: isSelected ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.05)',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <feature.icon size={20} color={isSelected ? '#fff' : feature.accent} strokeWidth={2} />
                                    </div>
                                    {isSelected && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>}
                                </div>

                                <div>
                                    <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: isSelected ? '#fff' : '#ccc', marginBottom: '0.15rem', lineHeight: '1.2' }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{ fontSize: '0.75rem', color: isSelected ? 'rgba(255,255,255,0.9)' : '#666', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Side - Features Details */}
            <div style={{ width: '60%', padding: '2rem', overflowY: 'auto', position: 'relative', background: 'radial-gradient(circle at top right, #1a1a1a 0%, #0a0a0a 40%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <style>{`
                    div::-webkit-scrollbar { display: none; }
                    div { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
                <div key={selectedId} style={{ animation: 'fadeIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)', margin: 'auto', width: '100%', maxWidth: '900px', padding: '2rem 0' }}>
                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(10px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>

                    {/* Header Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div style={{ background: `linear-gradient(135deg, ${selectedFeature.accent}20, ${selectedFeature.accent}10)`, width: '72px', height: '72px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${selectedFeature.accent}30`, boxShadow: `0 8px 32px -8px ${selectedFeature.accent}30` }}>
                                <selectedFeature.icon size={36} color={selectedFeature.accent} strokeWidth={2} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2.75rem', fontWeight: '800', color: '#fff', lineHeight: '1', marginBottom: '0.25rem', letterSpacing: '-0.03em' }}>
                                    {selectedFeature.title}
                                </h2>
                                <p style={{ fontSize: '1rem', color: selectedFeature.accent, fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    {selectedFeature.subtitle}
                                </p>
                            </div>
                        </div>

                        <button style={{
                            padding: '0.75rem 1.75rem',
                            background: selectedFeature.accent,
                            color: '#000',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            borderRadius: '100px',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            height: 'fit-content',
                            boxShadow: `0 4px 12px ${selectedFeature.accent}40`
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 8px 20px ${selectedFeature.accent}60`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 12px ${selectedFeature.accent}40`;
                            }}>
                            Deploy Solution <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '1.1rem', color: '#b0b0b0', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '95%', fontWeight: '400' }}>
                        {selectedFeature.description}
                    </p>

                    {/* Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '1.5rem', alignContent: 'start' }}>
                        {/* Features Panel */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#888', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                                <div style={{ width: '40px', height: '1px', background: selectedFeature.accent }}></div>
                                CAPABILITIES
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                {selectedFeature.details.map((detail, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <div style={{ marginTop: '4px', opacity: 0.8 }}>
                                            <Check size={16} color={selectedFeature.accent} strokeWidth={3} />
                                        </div>
                                        <span style={{ color: '#d4d4d4', lineHeight: '1.5', fontSize: '0.95rem' }}>{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use Cases Panel */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#888', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                                <div style={{ width: '40px', height: '1px', background: '#fff' }}></div>
                                DEPLOYMENT AREAS
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {selectedFeature.useCases.map((useCase, idx) => (
                                    <div key={idx} style={{
                                        background: 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)',
                                        padding: '0.85rem 1.25rem',
                                        borderRadius: '12px',
                                        borderLeft: `2px solid ${selectedFeature.accent}40`,
                                        transition: 'all 0.2s',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = `linear-gradient(90deg, ${selectedFeature.accent}10, transparent)`;
                                            e.currentTarget.style.borderLeftColor = selectedFeature.accent;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)';
                                            e.currentTarget.style.borderLeftColor = `${selectedFeature.accent}40`;
                                        }}>
                                        <span style={{ color: '#eee', fontSize: '0.9rem', fontWeight: '500' }}>{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enterprise;
