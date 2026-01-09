import React, { useState } from 'react';
import { Cpu, Box, Building2, Palette, Film, Users, ShoppingBag, BarChart3, Check, ArrowRight, X, Sparkles } from 'lucide-react';

const ServicePage = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const offerings = [
        {
            id: 1,
            icon: Cpu,
            title: "Multi-Modal Training",
            subtitle: "Media Intelligence",
            iconColor: "#3b82f6",
            detailedInfo: "Train custom AI models that understand and generate across multiple modalities - text, images, and video. Our specialized training process creates models with cross-modal reasoning capabilities, enabling AI that truly understands visual concepts and media workflows.",
            features: [
                "Multi-modal training (LLMs + Image + Video)",
                "Media and visual concept understanding",
                "Brand-specific vocabulary fine-tuning",
                "Cross-modal reasoning and generation",
                "Continuous learning and updates",
                "Domain-specific knowledge integration"
            ],
            useCases: ["Media production companies", "Creative agencies", "Publishing houses", "Visual content platforms"],
            metrics: [
                { label: "Training Speed", value: "3.5x" },
                { label: "Cross-Modal Accuracy", value: "98.2%" },
                { label: "Inference Latency", value: "< 50ms" }
            ],
            process: [
                { step: "Neural Audit", desc: "Analyzing existing datasets and cross-modal requirements." },
                { step: "Architecture Search", desc: "Selecting the optimal transformer topology for your data." },
                { step: "Swarm Training", desc: "Distributed training across our specialized compute clusters." }
            ],
            tech: ["PyTorch", "HuggingFace", "NVIDIA H100", "JAX"],
            designUrl: "/assets/services/theme_creative_v2.png"
        },
        {
            id: 2,
            icon: Box,
            title: "3D CGI Design",
            subtitle: "Automated Visualization",
            iconColor: "#a855f7",
            detailedInfo: "Transform your 3D design workflow with AI-powered CGI generation. From product visualization to architectural rendering, our solutions automate complex 3D modeling tasks while maintaining photorealistic quality and brand consistency.",
            features: [
                "AI-assisted 3D model generation",
                "Automated CGI rendering",
                "Photorealistic product visualization",
                "Environment and scene generation",
                "Material and texture synthesis",
                "Integration with 3D pipelines"
            ],
            useCases: ["Product design", "Architectural visualization", "Game development", "3D printing services"],
            metrics: [
                { label: "Render Time", value: "-85%" },
                { label: "Polygon Optimization", value: "10x" },
                { label: "Visual Fidelity", value: "8K Ultra" }
            ],
            process: [
                { step: "Lume Analysis", desc: "Material and lighting property extraction from reference." },
                { step: "Geometry Synth", desc: "Procedural generation of complex textures and meshes." },
                { step: "Ray-Tracing Opt", desc: "Real-time AI upscaling and noise reduction." }
            ],
            tech: ["Unreal Engine 5", "Blender API", "CUDA", "Stable Diffusion XL"],
            designUrl: "/assets/services/theme_creative_v2.png"
        },
        {
            id: 3,
            icon: Building2,
            title: "Real Estate Vis",
            subtitle: "Property Showcasing",
            iconColor: "#22c55e",
            detailedInfo: "Bring unbuilt properties to life with AI-powered visualization. Generate photorealistic renderings of under-construction and proposed real estate assets, enabling buyers to visualize their future spaces before development begins.",
            features: [
                "AI-generated property renderings",
                "Under-construction visualization",
                "Virtual staging with furniture",
                "360-degree virtual tours",
                "Design variations and options",
                "Seasonal condition simulations"
            ],
            useCases: ["Real estate developers", "Property marketing", "Architecture firms", "Real estate brokers"],
            metrics: [
                { label: "Listing Engagement", value: "+140%" },
                { label: "Time-to-Visualization", value: "24h" },
                { label: "Conversion Rate", value: "+35%" }
            ],
            process: [
                { step: "Blueprint Mapping", desc: "Digital twin creation from architectural drawings." },
                { step: "Contextual Gen", desc: "Generating realistic surrounding environments and lighting." },
                { step: "Virtual Tour Synthesis", desc: "Assembling path-traced 360 interactive environments." }
            ],
            tech: ["Three.js", "WebGPU", "Omniverse", "RealityKit"],
            designUrl: "/assets/services/theme_infra_v2.png"
        },
        {
            id: 4,
            icon: Palette,
            title: "Interior Design AI",
            subtitle: "Smart Interiors",
            iconColor: "#ec4899",
            detailedInfo: "Revolutionize interior design with AI that understands aesthetics, functionality, and spatial relationships. Generate complete interior designs, apply style transfers, and optimize furniture placement automatically.",
            features: [
                "Automated interior design generation",
                "Style transfer and customization",
                "Intelligent furniture placement",
                "Color palette recommendations",
                "Lighting design and simulation",
                "Budget-aware suggestions"
            ],
            useCases: ["Interior design firms", "Furniture retailers", "Home staging services", "Real estate marketing"],
            metrics: [
                { label: "Design Iterations", value: "Unlimited" },
                { label: "Material Matching", value: "99.4%" },
                { label: "Client Approval Rate", value: "+60%" }
            ],
            process: [
                { step: "Spatial Scan", desc: "Extracting dimensions and constraints from floor plans." },
                { step: "Style Infusion", desc: "Applying brand-specific aesthetics to the layouts." },
                { step: "Asset Integration", desc: "Injecting real catalogue items into the design." }
            ],
            tech: ["Segment Anything", "Point-E", "Unity RT", "WebGL"],
            designUrl: "/assets/services/theme_creative_v2.png"
        },
        {
            id: 5,
            icon: Film,
            title: "Media Production",
            subtitle: "Content Acceleration",
            iconColor: "#f97316",
            detailedInfo: "Accelerate media production with cutting-edge generative AI tools. From automated content creation to brand-consistent asset generation, our solutions help media companies produce more content faster without sacrificing quality.",
            features: [
                "Automated content generation",
                "Brand style guide incorporation",
                "Multi-format output support",
                "Image and video automation",
                "Template-based production",
                "Quality assurance checking"
            ],
            useCases: ["News organizations", "Digital media companies", "Print publishers", "Marketing agencies"],
            metrics: [
                { label: "Content Volume", value: "20x" },
                { label: "Manual Effort", value: "-90%" },
                { label: "Output Consistency", value: "100%" }
            ],
            process: [
                { step: "Style Vectoring", desc: "encoding visual brand identity into training weights." },
                { step: "Batch Generation", desc: "Mass-producing assets across multi-gpu swarms." },
                { step: "Refinement Loop", desc: "Human-in-the-loop quality scoring and RLHF." }
            ],
            tech: ["ControlNet", "IP-Adapter", "Redis", "Docker"],
            designUrl: "/assets/services/theme_creative_v2.png"
        },
        {
            id: 6,
            icon: Users,
            title: "AI Avatars",
            subtitle: "Digital Personas",
            iconColor: "#14b8a6",
            detailedInfo: "Build your brand's digital presence with AI-generated avatars and virtual influencers. Create consistent, engaging characters that can represent your brand across social media platforms with automated content generation.",
            features: [
                "Custom AI avatar creation",
                "Consistent character design",
                "Automated social content",
                "Voice synthesis and lip-sync",
                "Multi-platform deployment",
                "Engagement analytics"
            ],
            useCases: ["Social media marketing", "Brand promotion", "E-commerce demos", "Entertainment"],
            metrics: [
                { label: "Production Cost", value: "-95%" },
                { label: "Social Engagement", value: "+220%" },
                { label: "Lip-Sync Latency", value: "< 30ms" }
            ],
            process: [
                { step: "DNA Synthesis", desc: "Generating one-of-a-kind visual identifiers." },
                { step: "Motion Transfer", desc: "Mapping real expressions onto neural avatars." },
                { step: "Voice Cloning", desc: "High-fidelity zero-shot voice cloning for 50+ languages." }
            ],
            tech: ["Wav2Lip", "SadTalker", "GPT-4o", "OpenVoice"],
            designUrl: "/assets/services/theme_agents_v2.png"
        },
        {
            id: 7,
            icon: ShoppingBag,
            title: "Product Renders",
            subtitle: "E-commerce Visuals",
            iconColor: "#8b5cf6",
            detailedInfo: "Transform your product catalog with AI-powered visualization. Generate photorealistic product renders, create lifestyle scenes, and maintain brand consistency across thousands of SKUs automatically.",
            features: [
                "Automated product photography",
                "Lifestyle scene generation",
                "Automatic branding incorporation",
                "Multi-angle variant generation",
                "Background removal/replacement",
                "Batch processing capability"
            ],
            useCases: ["Furniture retailers", "E-commerce platforms", "Fashion and apparel", "Home goods"],
            metrics: [
                { label: "Photoshoot Savings", value: "85%" },
                { label: "Catalog Density", value: "10x" },
                { label: "Return Rate", value: "-12%" }
            ],
            process: [
                { step: "Geometric Lift", desc: "Converting 2D assets into neural radiance fields." },
                { step: "Lighting Studio", desc: "Applying studio-grade virtual lighting setups." },
                { step: "Batch Compositing", desc: "Generating thousands of variants in parallel." }
            ],
            tech: ["InstantNGP", "NeRF", "PBR Materials", "V-Ray"],
            designUrl: "/assets/services/theme_creative_v2.png"
        },
        {
            id: 8,
            icon: BarChart3,
            title: "Analytics AI",
            subtitle: "Business Insights",
            iconColor: "#0ea5e9",
            detailedInfo: "Make data-driven decisions with custom AI-powered analytics dashboards. Get real-time insights, predictive analytics, and actionable intelligence tailored to your specific business needs and KPIs.",
            features: [
                "Custom dashboard development",
                "Real-time data processing",
                "Predictive analytics",
                "Natural language querying",
                "Automated reporting",
                "Tool integration"
            ],
            useCases: ["Business intelligence", "Marketing analytics", "Sales tracking", "Operations monitoring"],
            metrics: [
                { label: "Insight Discovery", value: "6x" },
                { label: "Prediction Window", value: "30 Days" },
                { label: "Data Latency", value: "Real-time" }
            ],
            process: [
                { step: "Data Pipelinng", desc: "Aggregating fragmented data sources via AI connectors." },
                { step: "Pattern Detection", desc: "Unsupervised learning for outlier and trend discovery." },
                { step: "Dashboard Synthesis", desc: "Generating intuitive visual intelligence layers." }
            ],
            tech: ["Snowflake", "TensorFlow", "Scikit-Learn", "Grafana"],
            designUrl: "/assets/services/theme_data_v2.png"
        }
    ];

    const selectedOffering = offerings.find(o => o.id === selectedId);

    return (
        <div style={{ height: '100vh', width: '100%', background: '#0a0a0a', color: '#fff', display: 'flex', overflow: 'hidden' }}>
            {/* Left Side - Solution List */}
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
                        Specialized Services
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
                            Industry-Specific
                        </span>
                        <span>AI Solutions</span>
                    </h1>
                </div>

                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }}>
                    {offerings.map((offering) => {
                        const isSelected = selectedId === offering.id;
                        return (
                            <div
                                key={offering.id}
                                onClick={() => setSelectedId(offering.id)}
                                style={{
                                    padding: '1.25rem',
                                    background: isSelected ? offering.iconColor : 'rgba(255,255,255,0.03)',
                                    border: isSelected ? `1px solid ${offering.iconColor}` : '1px solid rgba(255,255,255,0.05)',
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
                                    boxShadow: isSelected ? `0 10px 30px -10px ${offering.iconColor}80` : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        // Animate background pattern on hover
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
                                        inset: '-10% -10% -10% -10%', // Oversize for movement
                                        backgroundImage: `url(${offering.designUrl})`,
                                        backgroundSize: '80%', // Make pattern design prominent
                                        backgroundPosition: 'center right',
                                        backgroundRepeat: 'no-repeat',
                                        opacity: isSelected ? 0.6 : 0.2, // Higher opacity for visibility
                                        mixBlendMode: 'soft-light', // Better color integration
                                        transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                        transform: isSelected ? 'scale(1.1) translate(-5%, -5%)' : 'scale(1)',
                                        zIndex: 0
                                    }}
                                />

                                {/* Gradient Overlay for Content Legibility */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: isSelected
                                        ? `linear-gradient(135deg, ${offering.iconColor}CC, ${offering.iconColor})`
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
                                        <offering.icon size={20} color={isSelected ? '#fff' : offering.iconColor} strokeWidth={2} />
                                    </div>
                                    {isSelected && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>}
                                </div>

                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: isSelected ? '#fff' : '#ccc', marginBottom: '0.15rem', lineHeight: '1.2' }}>
                                        {offering.title}
                                    </h3>
                                    <p style={{ fontSize: '0.75rem', color: isSelected ? 'rgba(255,255,255,0.9)' : '#666', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {offering.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Side - Solution Details */}
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
                            background: ${selectedOffering.iconColor}40;
                            border-radius: 10px;
                        }
                    `}</style>

                    {/* Feature Header with Large Icon */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(1rem, 2vw, 2rem)',
                        padding: 'clamp(1.5rem, 3vh, 2.5rem)',
                        background: `linear-gradient(135deg, ${selectedOffering.iconColor}15, rgba(0,0,0,0.4))`,
                        borderRadius: 'clamp(20px, 2vw, 32px)',
                        border: `1.5px solid ${selectedOffering.iconColor}30`,
                        boxShadow: `0 15px 40px -15px ${selectedOffering.iconColor}20`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '250px',
                            height: '250px',
                            background: `radial-gradient(circle, ${selectedOffering.iconColor}20 0%, transparent 70%)`,
                            filter: 'blur(50px)',
                            pointerEvents: 'none'
                        }} />

                        <div style={{
                            width: 'clamp(70px, 10vw, 110px)',
                            height: 'clamp(70px, 10vw, 110px)',
                            borderRadius: 'clamp(18px, 1.8vw, 28px)',
                            background: `linear-gradient(135deg, ${selectedOffering.iconColor}30, ${selectedOffering.iconColor}10)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${selectedOffering.iconColor}40`,
                            boxShadow: `0 20px 60px -15px ${selectedOffering.iconColor}40`,
                            position: 'relative',
                            zIndex: 1,
                            flexShrink: 0
                        }}>
                            <selectedOffering.icon size={window.innerWidth * 0.035 > 48 ? 48 : window.innerWidth * 0.035} color={selectedOffering.iconColor} strokeWidth={1.5} />
                        </div>

                        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                <div>
                                    <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 3rem)', fontWeight: '800', lineHeight: '1.1', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                                        {selectedOffering.title}
                                    </h2>
                                    <p style={{ fontSize: 'clamp(0.85rem, 1vw, 1.1rem)', color: selectedOffering.iconColor, fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                        {selectedOffering.subtitle}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowModal(true)}
                                    style={{
                                        padding: 'clamp(0.6rem, 0.8vh, 0.8rem) clamp(1.2rem, 1.5vw, 1.8rem)',
                                        background: selectedOffering.iconColor,
                                        color: '#000',
                                        fontWeight: '800',
                                        fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
                                        borderRadius: '100px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        boxShadow: `0 8px 20px ${selectedOffering.iconColor}40`
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                        e.currentTarget.style.boxShadow = `0 12px 28px ${selectedOffering.iconColor}60`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = `0 8px 20px ${selectedOffering.iconColor}40`;
                                    }}>
                                    Get Started <ArrowRight size={18} strokeWidth={2.5} />
                                </button>
                            </div>
                            <p style={{ fontSize: 'clamp(0.9rem, 1vw, 1.15rem)', color: '#b0b0b0', lineHeight: '1.6', maxWidth: '95%' }}>
                                {selectedOffering.detailedInfo}
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
                        marginTop: '1.5rem'
                    }}>
                        {[
                            { id: 'overview', label: 'Capabilities', icon: Box },
                            { id: 'process', label: 'Operation', icon: Sparkles },
                            { id: 'metrics', label: 'Statistics', icon: BarChart3 },
                            { id: 'tech', label: 'Infrastructure', icon: Cpu }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    flex: 1,
                                    padding: '0.85rem 1.25rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: activeTab === tab.id ? selectedOffering.iconColor : 'transparent',
                                    color: activeTab === tab.id ? '#000' : '#888',
                                    fontSize: '0.9rem',
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
                    <div style={{ flex: 1, position: 'relative', marginTop: '2rem', minHeight: 0 }}>
                        {activeTab === 'overview' && (
                            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', height: '100%', animation: 'fadeIn 0.3s ease-out' }}>
                                {/* Features Panel */}
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    border: `1.5px solid ${selectedOffering.iconColor}20`,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h3 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666', marginBottom: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>CORE FEATURES</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {selectedOffering.features.map((feature, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1rem', color: '#fff' }}>
                                                <div style={{ width: '6px', height: '6px', background: selectedOffering.iconColor, borderRadius: '50%' }} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Use Cases Panel */}
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h3 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666', marginBottom: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>TARGET INDUSTRIES</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {selectedOffering.useCases.map((useCase, idx) => (
                                            <div key={idx} style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', color: '#ccc', fontSize: '0.9rem', fontWeight: '600', borderLeft: `2px solid ${selectedOffering.iconColor}40` }}>
                                                {useCase}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'process' && (
                            <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '24px', padding: '2.5rem', border: `1.5px solid ${selectedOffering.iconColor}20`, height: '100%', animation: 'fadeIn 0.3s ease-out' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '15px', top: '10px', bottom: '10px', width: '2px', background: `linear-gradient(to bottom, ${selectedOffering.iconColor}, transparent)` }} />
                                    {selectedOffering.process.map((p, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '2rem', zIndex: 1 }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0a0a0a', border: `2.5px solid ${selectedOffering.iconColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '900', color: '#fff', flexShrink: 0 }}>{idx + 1}</div>
                                            <div>
                                                <div style={{ color: '#fff', fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{p.step}</div>
                                                <div style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.5' }}>{p.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'metrics' && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', height: '100%', animation: 'fadeIn 0.3s ease-out' }}>
                                {selectedOffering.metrics.map((metric, idx) => (
                                    <div key={idx} style={{ background: `linear-gradient(135deg, ${selectedOffering.iconColor}10, transparent)`, borderRadius: '24px', padding: '2.5rem', border: `1.5px solid ${selectedOffering.iconColor}20`, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>{metric.label}</div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.03em' }}>{metric.value}</div>
                                        <div style={{ marginTop: '1.5rem', height: '2px', background: selectedOffering.iconColor, opacity: 0.3, width: '40%', alignSelf: 'center' }} />
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'tech' && (
                            <div style={{ background: 'rgba(255, 255, 255, 0.03)', borderRadius: '24px', padding: '2.5rem', border: `1.5px solid ${selectedOffering.iconColor}20`, height: '100%', animation: 'fadeIn 0.3s ease-out' }}>
                                <h3 style={{ fontSize: '0.8rem', fontWeight: '800', color: '#666', marginBottom: '2rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>CORE ENGINE & INFRASTRUCTURE</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                                    {selectedOffering.tech.map((t, idx) => (
                                        <div key={idx} style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', color: '#fff', fontSize: '0.95rem', fontWeight: '700' }}>{t}</div>
                                    ))}
                                </div>
                                <div style={{ marginTop: 'auto', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Global Compute Partners</div>
                                    <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
                                        {[
                                            { name: 'AWS', url: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg' },
                                            { name: 'NVIDIA', url: 'https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg' },
                                            { name: 'GCP', url: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg' },
                                            { name: 'HuggingFace', url: 'https://huggingface.co/front/assets/huggingface_logo.svg' }
                                        ].map(partner => (
                                            <div key={partner.name} style={{ display: 'flex', alignItems: 'center' }}>
                                                <img
                                                    src={partner.url}
                                                    alt={partner.name}
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement.innerHTML = `<span style="color: #fff; font-weight: 900; font-size: 1.25rem; letter-spacing: 0.1em;">${partner.name}</span>`;
                                                    }}
                                                    style={{
                                                        height: 'clamp(32px, 4.5vh, 48px)',
                                                        filter: partner.name !== 'HuggingFace' ? 'invert(1) hue-rotate(180deg) brightness(1.5)' : 'none',
                                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                                        cursor: 'default'
                                                    }}
                                                    onMouseEnter={e => {
                                                        e.currentTarget.style.transform = 'scale(1.15) translateY(-5px)';
                                                        e.currentTarget.style.filter = partner.name !== 'HuggingFace' ? 'invert(1) hue-rotate(180deg) brightness(2)' : 'brightness(1.2)';
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                                        e.currentTarget.style.filter = partner.name !== 'HuggingFace' ? 'invert(1) hue-rotate(180deg) brightness(1.5)' : 'none';
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
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
                        border: `1px solid ${selectedOffering.iconColor}40`,
                        borderRadius: '24px',
                        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                        position: 'relative',
                        boxShadow: `0 20px 50px -10px ${selectedOffering.iconColor}20`,
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
                                color: selectedOffering.iconColor,
                                background: `${selectedOffering.iconColor}10`,
                                padding: '0.25rem 0.75rem',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                <selectedOffering.icon size={14} />
                                {selectedOffering.title}
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2.25rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '0.5rem', color: '#fff' }}>
                                Get Started
                            </h2>
                            <p style={{ color: '#888', fontSize: 'clamp(0.85rem, 0.95vw, 1rem)', lineHeight: '1.5' }}>
                                Ready to deploy {selectedOffering.title}? Tell us a bit about your needs.
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
                                    onFocus={e => e.target.style.borderColor = `${selectedOffering.iconColor}80`}
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
                                onFocus={e => e.target.style.borderColor = `${selectedOffering.iconColor}80`}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                            <textarea
                                rows={4}
                                placeholder="Describe your specific media requirements..."
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
                                onFocus={e => e.target.style.borderColor = `${selectedOffering.iconColor}80`}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                            />
                            <button style={{
                                marginTop: '0.5rem',
                                padding: '1rem',
                                background: selectedOffering.iconColor,
                                color: '#000',
                                fontWeight: '800',
                                borderRadius: '12px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: `0 4px 12px ${selectedOffering.iconColor}40`
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = `0 8px 20px ${selectedOffering.iconColor}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `0 4px 12px ${selectedOffering.iconColor}40`;
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

export default ServicePage;
