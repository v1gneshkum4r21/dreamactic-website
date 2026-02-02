import React, { useState } from 'react';
import { MessageCircle, Bot, Sparkles, Film, TrendingUp, Target, Database, Workflow, Check, ArrowRight, X, Box, BarChart3, Cpu } from 'lucide-react';

const Work = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const solutions = [
        {
            id: 1, icon: MessageCircle, title: "Conversational AI", subtitle: "Custom Chatbots", iconColor: "#8b5cf6",
            detailedInfo: "Build intelligent conversational AI solutions that understand your business context and customer needs. Our custom chatbots integrate seamlessly with your existing systems, providing 24/7 support across web, mobile, and messaging platforms with natural, human-like interactions.",
            features: ["Custom chatbot development tailored to requirements", "Multi-channel deployment (web, mobile, WhatsApp, Slack)", "Industry-specific conversation flows", "CRM and ticketing integration", "Multi-language support", "Analytics and improvement tracking"],
            useCases: ["Customer support automation", "Lead qualification and sales", "Internal employee assistance", "E-commerce recommendations"],
            designUrl: "/assets/services/theme_agents_v2.png",
            workflow: ["Requirement Analysis & Persona Design", "Conversation Flow Architecture", "NLP Model Integration", "System & API Hookup", "Testing & refinement", "Multi-channel Deployment"],
            impact: ["70% reduction in support tickets", "24/7 instant response time", "30% increase in lead capture"],
            integration: ["Zendesk", "Salesforce", "Slack", "Microsoft Teams", "WhatsApp API"]
        },
        {
            id: 2, icon: Bot, title: "Agentic AI", subtitle: "Autonomous Systems", iconColor: "#3b82f6",
            detailedInfo: "Deploy sophisticated autonomous AI agents that understand complex goals, break them down into steps, and execute across multiple tools and systems with built-in reasoning and adaptive learning.",
            features: ["Autonomous task planning and execution", "Multi-agent orchestration", "Intelligent tool integration", "Self-correction mechanisms", "Explainable AI decisions", "Long-running context management"],
            useCases: ["Automated research and analysis", "Complex workflow automation", "Intelligent task delegation", "Autonomous customer service"],
            designUrl: "/assets/services/theme_agents_v2.png",
            workflow: ["Goal Definition & Constraint Mapping", "Agent Reasoning Configuration", "Tool & Environment Setup", "Multi-Agent Simulation", "Safety & Guardrail Implementation", "Autonomous Deployment"],
            impact: ["90% faster complex task completion", "Zero human intervention for routine flows", "Scalable workforce operations"],
            integration: ["LangChain", "AutoGPT", "Custom Internal APIs", "Browser Automation Tools", "Enterprise ERPs"]
        },
        {
            id: 3, icon: Sparkles, title: "Generative AI", subtitle: "Content Creation", iconColor: "#ec4899",
            detailedInfo: "Create content that matches your brand identity. From text and images to video and 3D assets, our solutions incorporate your branding automatically, accelerating production while maintaining consistency.",
            features: ["Custom LLM training for brand voice", "Multi-modal generation (text, images, video)", "Automatic brand incorporation", "Style transfer capabilities", "Real-time generation", "Content quality assurance"],
            useCases: ["Marketing content automation", "Product visualization", "Social media generation", "Technical documentation"],
            designUrl: "/assets/services/theme_creative_v2.png",
            workflow: ["Brand Asset Ingestion", "Style Model Fine-Tuning", "Template & Prompt Engineering", "Generation Pipeline Setup", "Quality Assurance Loop", "Content Delivery Scaling"],
            impact: ["10x faster content production", "100% brand consistency", "50% reduction in creative costs"],
            integration: ["Adobe Creative Cloud", "Figma", "WordPress", "HubSpot", "Social Media APIs"]
        },
        {
            id: 4, icon: Film, title: "Image & Video AI", subtitle: "Visual Models", iconColor: "#10b981",
            detailedInfo: "Build custom AI models for image and video processing. From enhancement and generation to style transfer and quality control, tailored to your visual requirements.",
            features: ["Custom visual model development", "Enhancement and upscaling", "Style transfer and effects", "Quality control automation", "Video generation and editing", "Brand-specific training"],
            useCases: ["Media production and enhancement", "E-commerce product imagery", "Social media content", "Visual quality assurance"],
            designUrl: "/assets/services/theme_creative_v2.png",
            workflow: ["Dataset Curation & Cleaning", "Visual Model Training (LoRA/ControlNet)", "Inference Pipeline Optimization", "Batch Processing Setup", "Real-time API Integration", "Output Verification"],
            impact: ["Automated quality control", "Instant visual alterations", "Scalable media generation"],
            integration: ["Davinci Resolve", "Unreal Engine", "Cloudinary", "Custom DAM Systems", "AWS Rekognition"]
        },
        {
            id: 5, icon: TrendingUp, title: "Predictive Analytics", subtitle: "Forecasting", iconColor: "#f59e0b",
            detailedInfo: "Make data-driven decisions with advanced predictive models and real-time analytics. Combines ML, statistical analysis, and BI for accurate forecasts and actionable insights.",
            features: ["Advanced time-series forecasting", "Risk scoring and analysis", "Anomaly detection with alerts", "Scenario modeling", "Real-time dashboards", "Automated reporting"],
            useCases: ["Demand forecasting", "Financial planning", "Churn prediction", "Market trend analysis"],
            designUrl: "/assets/services/theme_data_v2.png",
            workflow: ["Data Source Connectors", "Feature Engineering & Cleaning", "Model Selection & Training", "Backtesting & Validation", "Deployment to Production", "Dashboard Visualization"],
            impact: ["25% improved forecast accuracy", "Proactive risk mitigation", "Real-time market adaption"],
            integration: ["Snowflake", "Databricks", "Tableau", "PowerBI", "Python/Pandas"]
        },
        {
            id: 6, icon: Target, title: "Recommendations", subtitle: "Personalization", iconColor: "#a855f7",
            detailedInfo: "Boost engagement with intelligent recommendation systems. ML-powered engines deliver personalized suggestions across touchpoints, adapting in real-time.",
            features: ["Collaborative and content filtering", "Real-time personalization", "Multi-channel deployment", "A/B testing framework", "Cold-start handling", "Explainable recommendations"],
            useCases: ["Product recommendations", "Content suggestions", "Upsell opportunities", "Personalized campaigns"],
            designUrl: "/assets/services/theme_data_v2.png",
            workflow: ["User Behavior Tracking", "Collaborative Filtering Setup", "Real-time Inference Engine", "A/B Test Configuration", "Feedback Loop Integration", "Conversion Optimization"],
            impact: ["35% increase in engagement", "20% higher conversion rates", "Personalized user journeys"],
            integration: ["Shopify", "Segment", "Google Analytics", "Custom CMS", "Mobile Apps"]
        },
        {
            id: 7, icon: Database, title: "Knowledge Graphs", subtitle: "RAG Systems", iconColor: "#06b6d4",
            detailedInfo: "Build intelligent knowledge systems combining semantic search with generative AI. RAG solutions ensure grounded responses, eliminating hallucinations.",
            features: ["Knowledge graph construction", "Semantic vector search", "RAG implementation", "Multi-source aggregation", "Citation tracking", "Real-time document indexing"],
            useCases: ["Enterprise knowledge management", "Q&A automation", "Legal document search", "Research platforms"],
            designUrl: "/assets/services/theme_data_v2.png",
            workflow: ["Unstructured Data Ingestion", "Entity Extraction & Linking", "Vector Database Indexing", "Retrieval Pipeline Configuration", "LLM Context Windowing", "Response Generation"],
            impact: ["Instance access to enterprise IP", "Zero-hallucination responses", "Complex query resolution"],
            integration: ["Pinecone", "Neo4j", "Elasticsearch", "SharePoint", "Confluence"]
        },
        {
            id: 8, icon: Workflow, title: "AI Automation", subtitle: "Workflow Intelligence", iconColor: "#14b8a6",
            detailedInfo: "Automate complex workflows with AI-driven intelligence. Orchestrates tools and systems, making intelligent decisions to optimize efficiency.",
            features: ["End-to-end automation", "Multi-tool orchestration", "Intelligent decision routing", "Exception handling", "Real-time monitoring", "No-code workflow builder"],
            useCases: ["Business process automation", "Data synchronization", "Approval workflows", "Operations management"],
            designUrl: "/assets/services/theme_agents_v2.png",
            workflow: ["Process Mapping & Mining", "Bot Logic Configuration", "API Connection Setup", "Exception Handling Rules", "UAT & Piloting", "Full Scale Automation"],
            impact: ["80% reduction in manual effort", "Error-free processing", "Standardized operations"],
            integration: ["Zapier logic", "UiPath", "ServiceNow", "Jira", "Slack"]
        }
    ];

    const selectedSolution = solutions.find(s => s.id === selectedId);

    return (
        <div style={{ height: '100vh', width: '100%', background: '#0a0a0a', color: '#fff', display: 'flex', overflow: 'hidden', position: 'relative' }}>
            {/* Left Side - Solution List */}
            <div style={{ width: '40%', borderRight: '1px solid #2a2a2a', display: 'flex', flexDirection: 'column', padding: '110px 2.5rem 2rem', background: '#050505' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: '600', marginBottom: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Core AI Solutions</div>
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
                                    background: isSelected ? solution.iconColor : 'rgba(255,255,255,0.03)',
                                    border: isSelected ? `1px solid ${solution.iconColor}` : '1px solid rgba(255,255,255,0.05)',
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
                                    boxShadow: isSelected ? `0 10px 30px -10px ${solution.iconColor}80` : 'none'
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
                                        backgroundImage: `url(${solution.designUrl})`,
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
                                        ? `linear-gradient(135deg, ${solution.iconColor}CC, ${solution.iconColor})`
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
                                        <solution.icon size={20} color={isSelected ? '#fff' : solution.iconColor} strokeWidth={2} />
                                    </div>
                                    {isSelected && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>}
                                </div>

                                <div style={{ position: 'relative', zIndex: 2 }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: isSelected ? '#fff' : '#ccc', marginBottom: '0.15rem', lineHeight: '1.2' }}>
                                        {solution.title}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: isSelected ? 'rgba(255,255,255,0.9)' : '#666', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {solution.subtitle}
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
                            background: ${selectedSolution.iconColor}40;
                            border-radius: 10px;
                        }
                    `}</style>

                    {/* Feature Header with Large Icon */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'clamp(1rem, 2vw, 2rem)',
                        padding: 'clamp(1.5rem, 3vh, 2.5rem)',
                        background: `linear-gradient(135deg, ${selectedSolution.iconColor}15, rgba(0,0,0,0.4))`,
                        borderRadius: 'clamp(20px, 2vw, 32px)',
                        border: `1.5px solid ${selectedSolution.iconColor}30`,
                        boxShadow: `0 15px 40px -15px ${selectedSolution.iconColor}20`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-10%',
                            width: '250px',
                            height: '250px',
                            background: `radial-gradient(circle, ${selectedSolution.iconColor}20 0%, transparent 70%)`,
                            filter: 'blur(50px)',
                            pointerEvents: 'none'
                        }} />

                        <div style={{
                            width: 'clamp(70px, 10vw, 110px)',
                            height: 'clamp(70px, 10vw, 110px)',
                            borderRadius: 'clamp(18px, 1.8vw, 28px)',
                            background: `linear-gradient(135deg, ${selectedSolution.iconColor}30, ${selectedSolution.iconColor}10)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${selectedSolution.iconColor}40`,
                            boxShadow: `0 20px 60px -15px ${selectedSolution.iconColor}40`,
                            position: 'relative',
                            zIndex: 1,
                            flexShrink: 0
                        }}>
                            <selectedSolution.icon size={window.innerWidth * 0.035 > 48 ? 48 : window.innerWidth * 0.035} color={selectedSolution.iconColor} strokeWidth={1.5} />
                        </div>

                        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                <div>
                                    <h2 style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', fontWeight: '800', lineHeight: '1.1', color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                                        {selectedSolution.title}
                                    </h2>
                                    <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.3rem)', color: selectedSolution.iconColor, fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                        {selectedSolution.subtitle}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowModal(true)}
                                    style={{
                                        padding: 'clamp(0.6rem, 0.8vh, 0.8rem) clamp(1.2rem, 1.5vw, 1.8rem)',
                                        background: selectedSolution.iconColor,
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
                                        boxShadow: `0 8px 20px ${selectedSolution.iconColor}40`
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                                        e.currentTarget.style.boxShadow = `0 12px 28px ${selectedSolution.iconColor}60`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = `0 8px 20px ${selectedSolution.iconColor}40`;
                                    }}>
                                    Get Started <ArrowRight size={18} strokeWidth={2.5} />
                                </button>
                            </div>
                            <p style={{ fontSize: 'clamp(1rem, 1.1vw, 1.25rem)', color: '#b0b0b0', lineHeight: '1.6', maxWidth: '95%' }}>
                                {selectedSolution.detailedInfo}
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
                            { id: 'workflow', label: 'Workflow', icon: Workflow },
                            { id: 'impact', label: 'Impact', icon: TrendingUp },
                            { id: 'integration', label: 'Integration', icon: Cpu }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    flex: 1,
                                    padding: '0.85rem 1.25rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: activeTab === tab.id ? selectedSolution.iconColor : 'transparent',
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
                                {/* Features Panel */}
                                <div style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    border: `1.5px solid ${selectedSolution.iconColor}20`,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#666', marginBottom: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>CORE FEATURES</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {selectedSolution.features.map((feature, idx) => (
                                            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem', color: '#fff' }}>
                                                <div style={{ width: '6px', height: '6px', background: selectedSolution.iconColor, borderRadius: '50%', flexShrink: 0 }} />
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
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', color: '#666', marginBottom: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>COMPATIBLE WITH</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {selectedSolution.useCases.map((useCase, idx) => (
                                            <div key={idx} style={{ padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', color: '#ccc', fontSize: '1rem', fontWeight: '600', borderLeft: `2px solid ${selectedSolution.iconColor}40` }}>
                                                {useCase}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'workflow' && (
                            <div style={{ animation: 'fadeIn 0.3s ease-out', paddingRight: '0.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {selectedSolution.workflow.map((step, idx) => (
                                        <div key={idx} style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '16px',
                                            padding: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '12px',
                                                background: `${selectedSolution.iconColor}20`,
                                                color: selectedSolution.iconColor,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '900',
                                                fontSize: '1.2rem'
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#eee' }}>{step}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'impact' && (
                            <div style={{ animation: 'fadeIn 0.3s ease-out', display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                {selectedSolution.impact.map((item, idx) => (
                                    <div key={idx} style={{
                                        background: `linear-gradient(90deg, ${selectedSolution.iconColor}10, transparent)`,
                                        borderRadius: '16px',
                                        padding: '2rem',
                                        borderLeft: `4px solid ${selectedSolution.iconColor}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.5rem'
                                    }}>
                                        <TrendingUp size={32} color={selectedSolution.iconColor} />
                                        <div style={{ fontSize: '1.35rem', fontWeight: '700', color: '#fff' }}>{item}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'integration' && (
                            <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                                <h3 style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Seamlessly Connects With</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {selectedSolution.integration.map((tool, idx) => (
                                        <div key={idx} style={{
                                            padding: '1rem 2rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '100px',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: '#ccc',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem'
                                        }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: selectedSolution.iconColor }} />
                                            {tool}
                                        </div>
                                    ))}
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
                            <p style={{ color: '#888', fontSize: '1rem' }}>
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
                                    fontSize: '1rem',
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
                                    fontSize: '1rem',
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
