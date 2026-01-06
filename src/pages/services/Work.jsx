import React, { useState } from 'react';
import { MessageCircle, Bot, Sparkles, Film, TrendingUp, Target, Database, Workflow, Check, ArrowRight, X } from 'lucide-react';

const Work = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const solutions = [
        {
            id: 1, icon: MessageCircle, title: "Conversational AI", subtitle: "Custom Chatbots", iconColor: "#8b5cf6",
            detailedInfo: "Build intelligent conversational AI solutions that understand your business context and customer needs. Our custom chatbots integrate seamlessly with your existing systems, providing 24/7 support across web, mobile, and messaging platforms with natural, human-like interactions.",
            features: ["Custom chatbot development tailored to requirements", "Multi-channel deployment (web, mobile, WhatsApp, Slack)", "Industry-specific conversation flows", "CRM and ticketing integration", "Multi-language support", "Analytics and improvement tracking"],
            useCases: ["Customer support automation", "Lead qualification and sales", "Internal employee assistance", "E-commerce recommendations"]
        },
        {
            id: 2, icon: Bot, title: "Agentic AI", subtitle: "Autonomous Systems", iconColor: "#3b82f6",
            detailedInfo: "Deploy sophisticated autonomous AI agents that understand complex goals, break them down into steps, and execute across multiple tools and systems with built-in reasoning and adaptive learning.",
            features: ["Autonomous task planning and execution", "Multi-agent orchestration", "Intelligent tool integration", "Self-correction mechanisms", "Explainable AI decisions", "Long-running context management"],
            useCases: ["Automated research and analysis", "Complex workflow automation", "Intelligent task delegation", "Autonomous customer service"]
        },
        {
            id: 3, icon: Sparkles, title: "Generative AI", subtitle: "Content Creation", iconColor: "#ec4899",
            detailedInfo: "Create content that matches your brand identity. From text and images to video and 3D assets, our solutions incorporate your branding automatically, accelerating production while maintaining consistency.",
            features: ["Custom LLM training for brand voice", "Multi-modal generation (text, images, video)", "Automatic brand incorporation", "Style transfer capabilities", "Real-time generation", "Content quality assurance"],
            useCases: ["Marketing content automation", "Product visualization", "Social media generation", "Technical documentation"]
        },
        {
            id: 4, icon: Film, title: "Image & Video AI", subtitle: "Visual Models", iconColor: "#10b981",
            detailedInfo: "Build custom AI models for image and video processing. From enhancement and generation to style transfer and quality control, tailored to your visual requirements.",
            features: ["Custom visual model development", "Enhancement and upscaling", "Style transfer and effects", "Quality control automation", "Video generation and editing", "Brand-specific training"],
            useCases: ["Media production and enhancement", "E-commerce product imagery", "Social media content", "Visual quality assurance"]
        },
        {
            id: 5, icon: TrendingUp, title: "Predictive Analytics", subtitle: "Forecasting", iconColor: "#f59e0b",
            detailedInfo: "Make data-driven decisions with advanced predictive models and real-time analytics. Combines ML, statistical analysis, and BI for accurate forecasts and actionable insights.",
            features: ["Advanced time-series forecasting", "Risk scoring and analysis", "Anomaly detection with alerts", "Scenario modeling", "Real-time dashboards", "Automated reporting"],
            useCases: ["Demand forecasting", "Financial planning", "Churn prediction", "Market trend analysis"]
        },
        {
            id: 6, icon: Target, title: "Recommendations", subtitle: "Personalization", iconColor: "#a855f7",
            detailedInfo: "Boost engagement with intelligent recommendation systems. ML-powered engines deliver personalized suggestions across touchpoints, adapting in real-time.",
            features: ["Collaborative and content filtering", "Real-time personalization", "Multi-channel deployment", "A/B testing framework", "Cold-start handling", "Explainable recommendations"],
            useCases: ["Product recommendations", "Content suggestions", "Upsell opportunities", "Personalized campaigns"]
        },
        {
            id: 7, icon: Database, title: "Knowledge Graphs", subtitle: "RAG Systems", iconColor: "#06b6d4",
            detailedInfo: "Build intelligent knowledge systems combining semantic search with generative AI. RAG solutions ensure grounded responses, eliminating hallucinations.",
            features: ["Knowledge graph construction", "Semantic vector search", "RAG implementation", "Multi-source aggregation", "Citation tracking", "Real-time document indexing"],
            useCases: ["Enterprise knowledge management", "Q&A automation", "Legal document search", "Research platforms"]
        },
        {
            id: 8, icon: Workflow, title: "AI Automation", subtitle: "Workflow Intelligence", iconColor: "#14b8a6",
            detailedInfo: "Automate complex workflows with AI-driven intelligence. Orchestrates tools and systems, making intelligent decisions to optimize efficiency.",
            features: ["End-to-end automation", "Multi-tool orchestration", "Intelligent decision routing", "Exception handling", "Real-time monitoring", "No-code workflow builder"],
            useCases: ["Business process automation", "Data synchronization", "Approval workflows", "Operations management"]
        }
    ];

    const selectedSolution = solutions.find(s => s.id === selectedId);

    return (
        <div style={{ height: '100vh', width: '100%', background: '#0a0a0a', color: '#fff', display: 'flex', overflow: 'hidden', position: 'relative' }}>
            {/* Left Side - Solution List */}
            <div style={{ width: '40%', borderRight: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column', padding: '110px 2.5rem 2rem', background: '#050505' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ fontSize: '0.75rem', color: '#666', fontWeight: '600', marginBottom: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Core AI Solutions</div>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', color: '#fff' }}>
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
                            marginRight: '12px'
                        }}>
                            Choose Your
                        </span>
                        <span>AI Solution</span>
                    </h1>
                </div>

                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignContent: 'start' }}>
                    {solutions.map((solution) => {
                        const isSelected = selectedId === solution.id;
                        return (
                            <div
                                key={solution.id}
                                onClick={() => setSelectedId(solution.id)}
                                style={{
                                    padding: '1.25rem',
                                    // Solid colors logic: Solid accent if selected, dark solid if not
                                    background: isSelected ? solution.iconColor : 'rgba(255,255,255,0.03)',
                                    // Subtle border, colored if selected
                                    border: isSelected ? `1px solid ${solution.iconColor}` : '1px solid rgba(255,255,255,0.05)',
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
                                    boxShadow: isSelected ? `0 10px 30px -10px ${solution.iconColor}80` : 'none'
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
                                        <solution.icon size={20} color={isSelected ? '#fff' : solution.iconColor} strokeWidth={2} />
                                    </div>
                                    {isSelected && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>}
                                </div>

                                <div>
                                    {/* Text colors: White/Grey */}
                                    <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: isSelected ? '#fff' : '#ccc', marginBottom: '0.15rem', lineHeight: '1.2' }}>
                                        {solution.title}
                                    </h3>
                                    <p style={{ fontSize: '0.75rem', color: isSelected ? 'rgba(255,255,255,0.9)' : '#666', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {solution.subtitle}
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
                            <div style={{ background: `linear-gradient(135deg, ${selectedSolution.iconColor}20, ${selectedSolution.iconColor}10)`, width: '72px', height: '72px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${selectedSolution.iconColor}30`, boxShadow: `0 8px 32px -8px ${selectedSolution.iconColor}30` }}>
                                <selectedSolution.icon size={36} color={selectedSolution.iconColor} strokeWidth={2} />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2.75rem', fontWeight: '800', color: '#fff', lineHeight: '1', marginBottom: '0.25rem', letterSpacing: '-0.03em' }}>
                                    {selectedSolution.title}
                                </h2>
                                <p style={{ fontSize: '1rem', color: selectedSolution.iconColor, fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    {selectedSolution.subtitle}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            style={{
                                padding: '0.75rem 1.75rem',
                                background: selectedSolution.iconColor,
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
                                boxShadow: `0 4px 12px ${selectedSolution.iconColor}40`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 8px 20px ${selectedSolution.iconColor}60`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 12px ${selectedSolution.iconColor}40`;
                            }}>
                            Get Started <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '1.1rem', color: '#b0b0b0', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '95%', fontWeight: '400' }}>
                        {selectedSolution.detailedInfo}
                    </p>

                    {/* Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '1.5rem', alignContent: 'start' }}>
                        {/* Features Panel */}
                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#888', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '0.05em' }}>
                                <div style={{ width: '40px', height: '1px', background: selectedSolution.iconColor }}></div>
                                KEY FEATURES
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                {selectedSolution.features.map((feature, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <div style={{ marginTop: '4px', opacity: 0.8 }}>
                                            <Check size={16} color={selectedSolution.iconColor} strokeWidth={3} />
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
                                COMPATIBLE WITH
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {selectedSolution.useCases.map((useCase, idx) => (
                                    <div key={idx} style={{
                                        background: 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)',
                                        padding: '0.85rem 1.25rem',
                                        borderRadius: '12px',
                                        borderLeft: `2px solid ${selectedSolution.iconColor}40`,
                                        transition: 'all 0.2s',
                                        cursor: 'default'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = `linear-gradient(90deg, ${selectedSolution.iconColor}10, transparent)`;
                                            e.currentTarget.style.borderLeftColor = selectedSolution.iconColor;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.03), transparent)';
                                            e.currentTarget.style.borderLeftColor = `${selectedSolution.iconColor}40`;
                                        }}>
                                        <span style={{ color: '#eee', fontSize: '0.9rem', fontWeight: '500' }}>{useCase}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
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
                    background: 'rgba(0,0,0,0.8)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    <div style={{
                        width: '500px',
                        background: '#0a0a0a',
                        border: `1px solid ${selectedSolution.iconColor}40`,
                        borderRadius: '24px',
                        padding: '2.5rem',
                        position: 'relative',
                        boxShadow: `0 20px 50px -10px ${selectedSolution.iconColor}20`
                    }}>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'transparent',
                                border: 'none',
                                color: '#666',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '0.75rem',
                                color: selectedSolution.iconColor,
                                background: `${selectedSolution.iconColor}10`,
                                padding: '0.25rem 0.75rem',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                fontWeight: '600'
                            }}>
                                <selectedSolution.icon size={14} />
                                {selectedSolution.title}
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '700', lineHeight: '1.1', marginBottom: '0.5rem' }}>
                                Start Your Project
                            </h2>
                            <p style={{ color: '#888', fontSize: '0.95rem' }}>
                                Ready to deploy {selectedSolution.title}? Tell us a bit about your needs.
                            </p>
                        </div>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Work Email"
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: '#111',
                                    border: '1px solid #222',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    outline: 'none'
                                }}
                            />
                            <textarea
                                rows={4}
                                placeholder="Tell us about your project requirements..."
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: '#111',
                                    border: '1px solid #222',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    resize: 'none'
                                }}
                            />
                            <button style={{
                                marginTop: '0.5rem',
                                padding: '1rem',
                                background: selectedSolution.iconColor,
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

export default Work;
