import React, { useState } from 'react';
import { Shield, Server, Lock, Zap, Settings, Check, ArrowRight, X, Box, BarChart3, Cpu, Sparkles } from 'lucide-react';

const Enterprise = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const features = [
        {
            id: 1,
            icon: Shield,
            title: "Custom Deployment",
            subtitle: "Sovereign Infrastructure",
            description: "Deploy AI solutions exactly where you need them. Whether on-premise, private cloud, or hybrid, we ensure complete control over your data and infrastructure.",
            accent: "#10b981", // Emerald
            details: ["On-premise & Hybrid Options", "Full Data Sovereignty", "Custom Security Policies", "Enterprise SLAs"],
            useCases: ["Financial Services", "Healthcare", "Defense", "Government"],
            designUrl: "/assets/services/theme_infra_v2.png",
            standards: ["ISO 27001 Certified Facilities", "SOC 2 Type II Compliant", "HIPAA Ready Architecture", "FedRAMP High Baseline"],
            stats: ["99.999% Guaranteed Uptime", "<5ms Internal Network Latency", "Zero Data Egress Fees"],
            tech: ["Kubernetes", "Docker Containers", "VMware vSphere", "OpenStack", "Bare Metal"]
        },
        {
            id: 2,
            icon: Server,
            title: "Scalable Infra",
            subtitle: "Global Scale",
            description: "Built for high-volume media processing and real-time rendering. Automatically scale to handle thousands of concurrent operations with 99.99% uptime.",
            accent: "#3b82f6", // Blue
            details: ["Auto-scaling Architecture", "Global CDN Distribution", "GPU/TPU Acceleration", "Load Balancing"],
            useCases: ["Media Streaming", "High-Frequency Trading", "Global E-commerce", "Gaming"],
            designUrl: "/assets/services/theme_infra_v2.png",
            standards: ["Global Multi-Region Redundancy", "DDoS Protection Layer 7", "Automatic Failover Protocols"],
            stats: ["1M+ Concurrent Connections", "Auto-scale in <2 Seconds", "100Gbps Network Backbone"],
            tech: ["AWS / GCP / Azure", "Terraform", "NVIDIA A100 Clusters", "Redis Cluster", "Kafka"]
        },
        {
            id: 3,
            icon: Lock,
            title: "Security",
            subtitle: "Compliance First",
            description: "Bank-grade security meets industry-specific compliance. Fully GDPR, CCPA, and SOC 2 compliant with complete audit trails for every AI decision.",
            accent: "#a855f7", // Purple
            details: ["GDPR & CCPA Compliant", "Role-Based Access", "End-to-End Encryption", "Audit Logging"],
            useCases: ["Banking", "Insurance", "Legal", "Health Tech"],
            designUrl: "/assets/services/theme_data_v2.png",
            standards: ["AES-256 Encryption at Rest", "TLS 1.3 in Transit", "FIPS 140-2 Validated Modules", "Role-Based Access Control (RBAC)"],
            stats: ["Zero Critical Vulnerabilities", "24/7 SIEM Monitoring", "100% Audit Trail Coverage"],
            tech: ["HashiCorp Vault", "Auth0 / Okta", "Wazuh SIEM", "Hardware Security Modules (HSM)"]
        },
        {
            id: 4,
            icon: Zap,
            title: "Performance",
            subtitle: "Real-time Processing",
            description: "Experience lightning-fast inference. Leveraging advanced caching and model quantization to deliver sub-second response times for visual and data workloads.",
            accent: "#f59e0b", // Amber
            details: ["Sub-second Latency", "Model Quantization", "Intelligent Caching", "Batch Optimization"],
            useCases: ["Ad Tech", "Real-time Analytics", "Autonomous Systems", "Interactive Media"],
            designUrl: "/assets/services/theme_infra_v2.png",
            standards: ["Real-time Inference SLAs", "Edge Computing Capability", "Optimized Model Weights"],
            stats: ["<10ms Inference Time (Text)", "<50ms Inference Time (Image)", "4x Throughput Optimization"],
            tech: ["TensorRT", "ONNX Runtime", "C++ Custom Op Kernels", "gRPC", "Protobuf"]
        },
        {
            id: 5,
            icon: Settings,
            title: "Integration",
            subtitle: "Seamless Fit",
            description: "We don't just build models; we engineer systems. Custom APIs and bespoke architectures designed to slot perfectly into your existing technology stack.",
            accent: "#ec4899", // Pink
            details: ["Custom API Development", "Legacy System Bridge", "Workflow Orchestration", "Bespoke Architecture"],
            useCases: ["Legacy Modernization", "Custom ERP Integration", "Workflow Automation", "Proprietary Systems"],
            designUrl: "/assets/services/theme_agents_v2.png",
            standards: ["REST & GraphQL API Standards", "OpenAPI (Swagger) Documentation", "Versioning Policy", "Backward Compatibility"],
            stats: ["99.9% API Success Rate", "<100ms API Response Time", "100% Schema Validation"],
            tech: ["Apollo GraphQL", "Node.js / Go microservices", "RabbitMQ", "Kong API Gateway"]
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
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        const bg = e.currentTarget.querySelector('.tile-bg-pattern');
                                        if (bg) {
                                            bg.style.transform = 'scale(1.1) translate(-10%, -10%)';
                                            bg.style.opacity = '0.4';
                                        }
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                        const bg = e.currentTarget.querySelector('.tile-bg-pattern');
                                        if (bg) {
                                            bg.style.transform = 'scale(1) translate(0, 0)';
                                            bg.style.opacity = '0.2';
                                        }
                                    }
                                }}
                            >
                                {/* Background Pattern Layer */}
                                <div
                                    className="tile-bg-pattern"
                                    style={{
                                        position: 'absolute',
                                        inset: '-10% -10% -10% -10%',
                                        backgroundImage: `url(${feature.designUrl})`,
                                        backgroundSize: '80%',
                                        backgroundPosition: 'center right',
                                        backgroundRepeat: 'no-repeat',
                                        opacity: isSelected ? 0.6 : 0.2,
                                        mixBlendMode: 'soft-light',
                                        transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                        transform: isSelected ? 'scale(1.1) translate(-5%, -5%)' : 'scale(1)',
                                        zIndex: 0
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: isSelected
                                        ? `linear-gradient(135deg, ${feature.accent}CC, ${feature.accent})`
                                        : 'linear-gradient(135deg, rgba(15,15,15,0.95), rgba(5,5,5,0.98))',
                                    zIndex: 1,
                                    transition: 'all 0.4s ease'
                                }} />

                                <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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

                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: isSelected ? '#fff' : '#ccc', marginBottom: '0.15rem', lineHeight: '1.2' }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: isSelected ? 'rgba(255,255,255,0.9)' : '#666', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {feature.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Side - Features Details */}
            <div style={{
                width: '60%',
                padding: 'clamp(80px, 10vh, 110px) clamp(1.5rem, 3vw, 3rem) clamp(2rem, 4vh, 3rem)',
                overflow: 'hidden',
                position: 'relative',
                background: 'radial-gradient(circle at top right, #1a1a1a 0%, #050505 40%)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Scrollable Content Container */}
                <div key={selectedId} style={{
                    flex: 1,
                    animation: 'fadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(1.5rem, 3vh, 2rem)',
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
                        gap: 'clamp(1rem, 2vw, 2rem)',
                        padding: 'clamp(1.5rem, 3vh, 2.5rem)',
                        background: `linear-gradient(135deg, ${selectedFeature.accent}15, rgba(0,0,0,0.4))`,
                        borderRadius: 'clamp(20px, 2vw, 32px)',
                        border: `1.5px solid ${selectedFeature.accent}30`,
                        boxShadow: `0 15px 40px -15px ${selectedFeature.accent}20`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '250px',
                            height: '250px',
                            background: `radial-gradient(circle, ${selectedFeature.accent}20 0%, transparent 70%)`,
                            filter: 'blur(50px)',
                            pointerEvents: 'none'
                        }} />

                        <div style={{
                            width: 'clamp(70px, 10vw, 110px)',
                            height: 'clamp(70px, 10vw, 110px)',
                            borderRadius: 'clamp(18px, 1.8vw, 28px)',
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
                            <selectedFeature.icon size={window.innerWidth * 0.035 > 48 ? 48 : window.innerWidth * 0.035} color={selectedFeature.accent} strokeWidth={1.5} />
                        </div>

                        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                <div>
                                    <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: '800', lineHeight: '1.1', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                                        {selectedFeature.title}
                                    </h2>
                                    <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', color: selectedFeature.accent, fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                        {selectedFeature.subtitle}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowModal(true)}
                                    style={{
                                        padding: 'clamp(0.6rem, 0.8vh, 0.8rem) clamp(1.2rem, 1.5vw, 1.8rem)',
                                        background: selectedFeature.accent,
                                        color: '#000',
                                        fontWeight: '800',
                                        fontSize: 'clamp(0.95rem, 1vw, 1.15rem)',
                                        borderRadius: '100px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        boxShadow: `0 8px 20px ${selectedFeature.accent}40`
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                        e.currentTarget.style.boxShadow = `0 12px 28px ${selectedFeature.accent}60`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = `0 8px 20px ${selectedFeature.accent}40`;
                                    }}>
                                    Get Started <ArrowRight size={18} strokeWidth={2.5} />
                                </button>
                            </div>
                            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.25rem)', color: '#b0b0b0', lineHeight: '1.6', maxWidth: '95%' }}>
                                {selectedFeature.description}
                            </p>
                        </div>
                    </div>

                    {/* Dashboard Navigation Tabs */}
                    <div style={{
                        display: 'flex',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '0.4rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        gap: '0.4rem',
                        marginTop: '1.5rem',
                        marginBottom: '2rem'
                    }}>
                        {[
                            { id: 'overview', label: 'Overview', icon: Box },
                            { id: 'standards', label: 'Standards', icon: Shield },
                            { id: 'stats', label: 'Performance', icon: BarChart3 },
                            { id: 'tech', label: 'Tech Stack', icon: Cpu }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    flex: 1,
                                    padding: '0.85rem 1.25rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: activeTab === tab.id ? selectedFeature.accent : 'transparent',
                                    color: activeTab === tab.id ? '#000' : '#888',
                                    fontSize: '1rem',
                                    fontWeight: '900',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Display */}
                    <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
                        {activeTab === 'overview' && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '1.5rem', alignContent: 'start', animation: 'fadeIn 0.3s ease-out' }}>
                                {/* Capabilities Panel */}
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    border: `1.5px solid ${selectedFeature.accent}20`,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#666', marginBottom: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>CAPABILITIES</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {selectedFeature.details.map((detail, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem', color: '#fff' }}>
                                                <div style={{ width: '6px', height: '6px', background: selectedFeature.accent, borderRadius: '50%', flexShrink: 0 }} />
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deployment Areas Panel */}
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#666', marginBottom: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>DEPLOYMENT AREAS</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {selectedFeature.useCases.map((useCase, idx) => (
                                            <div key={idx} style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', color: '#ccc', fontSize: '1rem', fontWeight: '600', borderLeft: `2px solid ${selectedFeature.accent}40` }}>
                                                {useCase}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'standards' && (
                            <div style={{ animation: 'fadeIn 0.3s ease-out', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {selectedFeature.standards.map((standard, idx) => (
                                    <div key={idx} style={{
                                        padding: '1.5rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem'
                                    }}>
                                        <Shield size={24} color={selectedFeature.accent} />
                                        <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#eee' }}>{standard}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'stats' && (
                            <div style={{ animation: 'fadeIn 0.3s ease-out', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                {selectedFeature.stats.map((stat, idx) => (
                                    <div key={idx} style={{
                                        background: `linear-gradient(135deg, ${selectedFeature.accent}20, transparent)`,
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        border: `1px solid ${selectedFeature.accent}30`,
                                        textAlign: 'center'
                                    }}>
                                        <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>{stat}</div>
                                        <div style={{ fontSize: '1rem', color: selectedFeature.accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Metric Verified</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'tech' && (
                            <div style={{ animation: 'fadeIn 0.3s ease-out', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {selectedFeature.tech.map((item, idx) => (
                                    <div key={idx} style={{
                                        fontFamily: 'monospace',
                                        background: '#111',
                                        color: selectedFeature.accent,
                                        padding: '1rem 1.5rem',
                                        borderRadius: '8px',
                                        border: '1px solid #333',
                                        fontSize: '1.1rem'
                                    }}>
                                        {'>'} {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Contact Modal (New) */}
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
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                <selectedFeature.icon size={14} />
                                {selectedFeature.title}
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.7rem, 2.2vw, 2.5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '0.5rem', color: '#fff' }}>
                                Deploy Solution
                            </h2>
                            <p style={{ color: '#888', fontSize: 'clamp(0.95rem, 1vw, 1.1rem)', lineHeight: '1.5' }}>
                                Ready to scale with {selectedFeature.title}? Tell us a bit about your infrastructure needs.
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
                                        fontSize: '1rem',
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
                                placeholder="Describe your infrastructure requirements..."
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
                                fontWeight: '700',
                                borderRadius: '12px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'transform 0.2s',
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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

export default Enterprise;
