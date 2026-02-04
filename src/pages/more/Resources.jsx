import React, { useState } from 'react';
import { BookOpen, Code, Terminal, Users, X, MessageSquare, Twitter, Github, Globe, Sparkles, Linkedin, Youtube, MessageCircle } from 'lucide-react';

// Custom Bluesky icon component
const BlueskyIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
);

const Resources = () => {
    const [activeModal, setActiveModal] = useState(null);

    const resourceItems = [
        { id: 'docs', icon: BookOpen, title: "Documentation", desc: "Guides, tutorials, and API reference.", accent: '#8b5cf6' },
        { id: 'cli', icon: Terminal, title: "CLI Tool", desc: "Command line interface for managing swarms.", accent: '#06b6d4' },
        { id: 'sdk', icon: Code, title: "SDKs", desc: "Libraries for Python, Node, and Go.", accent: '#10b981' },
        { id: 'community', icon: Users, title: "Community", desc: "Join our discord and forum.", accent: '#f59e0b' }
    ];

    const selectedResource = activeModal ? resourceItems.find(r => r.id === activeModal) : null;

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#171717', color: '#fff', display: 'flex' }}>
            {/* Left Panel - Editorial Style */}
            <div style={{ width: '40%', height: '100%', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1, mixBlendMode: 'multiply' }} />
                <h1 style={{ fontSize: '10rem', fontWeight: '900', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', letterSpacing: '-0.05em', opacity: 0.1 }}>DREAMACTIC</h1>
                <div style={{ position: 'absolute', padding: '4rem', width: '100%' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.2em' }}>/// KNOWLEDGE</div>
                    <h2 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: '0.9' }}>CORE<br />RESOURCES<br />& DOCS.</h2>
                </div>
            </div>

            {/* Right Panel */}
            <div style={{ flex: 1, height: '100%', padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
                {resourceItems.map((item, idx) => (
                    <div key={idx} style={{
                        borderRight: idx % 2 === 0 ? '1px solid #222' : 'none',
                        borderBottom: idx < 2 ? '1px solid #222' : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '4rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                        onClick={() => setActiveModal(item.id)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#0a0a0a';
                            e.currentTarget.style.boxShadow = `inset 0 0 100px ${item.accent}05`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <item.icon size={40} color={item.accent} style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</h3>
                        <p style={{ color: '#666', fontSize: '1.1rem' }}>{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Modal Layer */}
            {activeModal && (
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
                    animation: 'fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                    <div style={{
                        width: 'clamp(320px, 70vw, 900px)',
                        background: '#0a0a0a',
                        border: `1px solid ${selectedResource.accent}40`,
                        borderRadius: '24px',
                        padding: 'clamp(2rem, 4vw, 3.5rem)',
                        position: 'relative',
                        boxShadow: `0 25px 80px -20px ${selectedResource.accent}20`,
                    }}>
                        <button
                            onClick={() => setActiveModal(null)}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'transparent',
                                border: 'none',
                                color: '#666',
                                cursor: 'pointer',
                                transition: 'color 0.2s',
                                zIndex: 10
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = '#666'}
                        >
                            <X size={24} />
                        </button>

                        {/* Content Switcher */}
                        {activeModal === 'community' ? (
                            <>
                                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: `${selectedResource.accent}15`,
                                        padding: '0.4rem 1rem',
                                        borderRadius: '100px',
                                        color: selectedResource.accent,
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        letterSpacing: '0.05em'
                                    }}>
                                        <Sparkles size={14} /> JOIN THE ECOSYSTEM
                                    </div>
                                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1' }}>
                                        Connect with the<br /><span style={{ color: selectedResource.accent }}>Community</span>
                                    </h2>
                                    <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto' }}>
                                        Collaborate with engineers, researchers, and creators building the future of AGI.
                                    </p>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '12px 0.5rem', margin: '0 -0.5rem' }}>
                                    {[
                                        { icon: MessageSquare, name: 'Discord', detail: 'Join the discussion', color: '#5865F2' },
                                        { icon: Twitter, name: 'Twitter', detail: 'Latest updates', color: '#1DA1F2' },
                                        { icon: Github, name: 'GitHub', detail: 'Open source swarms', color: '#fff' },
                                        { icon: Globe, name: 'Forum', detail: 'Deep dives & RFCs', color: '#10b981' },
                                        { icon: Linkedin, name: 'LinkedIn', detail: 'Professional network', color: '#0077B5' },
                                        { icon: MessageCircle, name: 'WhatsApp', detail: 'Direct community', color: '#25D366' },
                                        { icon: Youtube, name: 'YouTube', detail: 'Video tutorials', color: '#FF0000' },
                                        { icon: BlueskyIcon, name: 'Bluesky', detail: 'Tech-forward social', color: '#0085ff' }
                                    ].map((social, i) => (
                                        <button key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.2rem',
                                            padding: '1.25rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '16px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            textAlign: 'left'
                                        }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.borderColor = `${social.color}40`;
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <div style={{
                                                width: '44px',
                                                height: '44px',
                                                borderRadius: '12px',
                                                background: `${social.color}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: social.color
                                            }}>
                                                <social.icon size={22} />
                                            </div>
                                            <div>
                                                <div style={{ color: '#fff', fontWeight: '700', fontSize: '1rem' }}>{social.name}</div>
                                                <div style={{ color: '#666', fontSize: '0.9rem' }}>{social.detail}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div style={{ textAlign: 'left' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: `${selectedResource.accent}15`,
                                    padding: '0.4rem 1rem',
                                    borderRadius: '100px',
                                    color: selectedResource.accent,
                                    fontSize: '0.85rem',
                                    fontWeight: '800',
                                    marginBottom: '1.5rem',
                                    letterSpacing: '0.1em'
                                }}>
                                    <selectedResource.icon size={14} /> EARLY ACCESS ONLY
                                </div>

                                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: '900', lineHeight: '0.95', marginBottom: '1.5rem' }}>
                                    {selectedResource.id === 'docs' ? 'KNOWLEDGE' : selectedResource.id === 'cli' ? 'TERMINAL' : 'CORE'} <br />
                                    <span style={{ color: selectedResource.accent }}>{selectedResource.title.toUpperCase()}</span>
                                </h2>

                                <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: '1.5', maxWidth: '500px', marginBottom: '2.5rem' }}>
                                    We're fine-tuning the {selectedResource.title} for maximum safety and performance. Request early access to start building with our alpha swarms.
                                </p>

                                {activeModal === 'cli' && (
                                    <div style={{
                                        background: '#000',
                                        borderRadius: '12px',
                                        padding: '1.5rem',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        fontFamily: 'monospace',
                                        fontSize: '1rem',
                                        color: selectedResource.accent,
                                        marginBottom: '2.5rem',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ opacity: 0.5, marginBottom: '0.5rem' }}>$ dreamactic install swarm-cli</div>
                                        <div style={{ opacity: 0.8 }}>{'>'} Initializing Neural Core...</div>
                                        <div style={{ opacity: 0.8 }}>{'>'} Connection Secured.</div>
                                        <div style={{ opacity: 0.3 }}>{"&gt;&gt;&gt;"} [Awaiting Alpha Key]</div>
                                    </div>
                                )}

                                {activeModal === 'sdk' && (
                                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
                                        {[
                                            { lang: 'Python', version: 'v3.10+' },
                                            { lang: 'Node.js', version: 'v18+' },
                                            { lang: 'Go', version: 'v1.21+' }
                                        ].map(l => (
                                            <div key={l.lang} style={{ borderLeft: `2px solid ${selectedResource.accent}40`, paddingLeft: '1rem' }}>
                                                <div style={{ color: '#fff', fontWeight: '800' }}>{l.lang}</div>
                                                <div style={{ color: '#555', fontSize: '0.9rem' }}>{l.version}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <form style={{ display: 'flex', gap: '1rem' }} onSubmit={e => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Enter work email for invite"
                                        style={{
                                            flex: 1,
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '1rem 1.5rem',
                                            borderRadius: '120px',
                                            color: '#fff',
                                            outline: 'none',
                                            fontSize: '1rem',
                                            transition: 'border-color 0.3s'
                                        }}
                                        onFocus={e => e.target.style.borderColor = selectedResource.accent}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                    <button style={{
                                        background: selectedResource.accent,
                                        color: '#000',
                                        fontWeight: '800',
                                        padding: '0 2rem',
                                        borderRadius: '100px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s'
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        JOIN WAITLIST
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    );
};

export default Resources;
