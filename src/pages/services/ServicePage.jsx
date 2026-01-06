import React, { useState } from 'react';
import { Cpu, Box, Building2, Palette, Film, Users, ShoppingBag, BarChart3, Check, ArrowRight } from 'lucide-react';

const ServicePage = () => {
    const [selectedId, setSelectedId] = useState(1);

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
            useCases: ["Media production companies", "Creative agencies", "Publishing houses", "Visual content platforms"]
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
            useCases: ["Product design", "Architectural visualization", "Game development", "3D printing services"]
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
            useCases: ["Real estate developers", "Property marketing", "Architecture firms", "Real estate brokers"]
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
            useCases: ["Interior design firms", "Furniture retailers", "Home staging services", "Real estate marketing"]
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
            useCases: ["News organizations", "Digital media companies", "Print publishers", "Marketing agencies"]
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
            useCases: ["Social media marketing", "Brand promotion", "E-commerce demos", "Entertainment"]
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
            useCases: ["Furniture retailers", "E-commerce platforms", "Fashion and apparel", "Home goods"]
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
            useCases: ["Business intelligence", "Marketing analytics", "Sales tracking", "Operations monitoring"]
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
                                    // Solid colors logic: Solid accent if selected, dark solid if not
                                    background: isSelected ? offering.iconColor : 'rgba(255,255,255,0.03)',
                                    // Subtle border, colored if selected
                                    border: isSelected ? `1px solid ${offering.iconColor}` : '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '16px',
                                    cursor: 'pointer',
                                    // Figma-like animation: spring physics feel
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
                                        // Icon box: Dark background for contrast if selected
                                        background: isSelected ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.05)',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {/* Icon color: White if selected (solid background), Accent if not */}
                                        <offering.icon size={20} color={isSelected ? '#fff' : offering.iconColor} strokeWidth={2} />
                                    </div>
                                    {isSelected && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>}
                                </div>

                                <div>
                                    {/* Text colors: White/Grey */}
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
            <div style={{ width: '60%', padding: '2rem', overflowY: 'auto', position: 'relative', background: 'radial-gradient(circle at top right, #1a1a1a 0%, #0a0a0a 40%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <style>{`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    div::-webkit-scrollbar {
                        display: none;
                    }
                    /* Hide scrollbar for IE, Edge and Firefox */
                    div {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
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
                            <div style={{ background: `linear-gradient(135deg, ${selectedOffering.iconColor}20, ${selectedOffering.iconColor}10)`, width: '72px', height: '72px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${selectedOffering.iconColor}30`, boxShadow: `0 8px 32px -8px ${selectedOffering.iconColor}30` }}>
                                <selectedOffering.icon size={36} color={selectedOffering.iconColor} strokeWidth={2} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2.75rem', fontWeight: '800', color: '#fff', lineHeight: '1', marginBottom: '0.25rem', letterSpacing: '-0.03em' }}>
                                    {selectedOffering.title}
                                </h2>
                                <p style={{ fontSize: '1rem', color: selectedOffering.iconColor, fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    {selectedOffering.subtitle}
                                </p>
                            </div>
                        </div>

                        <button style={{
                            padding: '0.75rem 1.75rem',
                            background: selectedOffering.iconColor,
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
                            boxShadow: `0 4px 12px ${selectedOffering.iconColor}40`
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 8px 20px ${selectedOffering.iconColor}60`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 12px ${selectedOffering.iconColor}40`;
                            }}>
                            Learn More <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '1.1rem', color: '#b0b0b0', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '95%', fontWeight: '400' }}>
                        {selectedOffering.detailedInfo}
                    </p>

                    {/* Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '1.5rem', alignContent: 'start' }}>
                        {/* Features Panel */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#888', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                                <div style={{ width: '40px', height: '1px', background: selectedOffering.iconColor }}></div>
                                KEY FEATURES
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                {selectedOffering.features.map((feature, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <div style={{ marginTop: '4px', opacity: 0.8 }}>
                                            <Check size={16} color={selectedOffering.iconColor} strokeWidth={3} />
                                        </div>
                                        <span style={{ color: '#d4d4d4', lineHeight: '1.5', fontSize: '0.95rem' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Use Cases Panel */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#888', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                                <div style={{ width: '40px', height: '1px', background: '#fff' }}></div>
                                TARGET INDUSTRIES
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {selectedOffering.useCases.map((useCase, idx) => (
                                    <div key={idx} style={{
                                        background: 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)',
                                        padding: '0.85rem 1.25rem',
                                        borderRadius: '12px',
                                        borderLeft: `2px solid ${selectedOffering.iconColor}40`,
                                        transition: 'all 0.2s',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = `linear-gradient(90deg, ${selectedOffering.iconColor}10, transparent)`;
                                            e.currentTarget.style.borderLeftColor = selectedOffering.iconColor;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)';
                                            e.currentTarget.style.borderLeftColor = `${selectedOffering.iconColor}40`;
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

export default ServicePage;
