import React, { useState } from 'react';
import { Cpu, CreditCard, HelpCircle, Users, X, Send, Sparkles } from 'lucide-react';

const Support = () => {
    const [activeModal, setActiveModal] = useState(null);

    const categories = [
        {
            id: 'technical',
            icon: Cpu,
            title: "Technical Support",
            desc: "Bugs, API issues, and platform implementation.",
            accent: '#8b5cf6'
        },
        {
            id: 'billing',
            icon: CreditCard,
            title: "Account & Billing",
            desc: "Subscription management and payment queries.",
            accent: '#06b6d4'
        },
        {
            id: 'general',
            icon: HelpCircle,
            title: "General Inquiry",
            desc: "Partner opportunities and brand questions.",
            accent: '#10b981'
        },
        {
            id: 'community',
            icon: Users,
            title: "Community Help",
            desc: "Peer assistance via Discord and Forums.",
            accent: '#f59e0b'
        }
    ];

    const selectedCategory = activeModal ? categories.find(c => c.id === activeModal) : null;

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#171717', color: '#fff', display: 'flex' }}>
            {/* Left Panel - Editorial Style */}
            <div style={{ width: '40%', height: '100%', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.pexels.com/photos/7367/working-woman-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1, mixBlendMode: 'multiply' }} />
                <h1 style={{ fontSize: '10rem', fontWeight: '900', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', letterSpacing: '-0.05em', opacity: 0.1 }}>DREAMACTIC</h1>
                <div style={{ position: 'absolute', padding: '4rem', width: '100%', textAlign: 'left', top: '50%', transform: 'translateY(-50%)' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#000', color: '#fff', padding: '0.4rem 1rem', borderRadius: '50px', marginBottom: '1.5rem' }}>
                        <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em' }}>SYSTEMS OPERATIONAL</span>
                    </div>
                    <h2 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: '0.9', color: '#000' }}>
                        WE'VE<br />GOT<br />YOU.
                    </h2>
                </div>
            </div>

            {/* Right Panel - Category Selector */}
            <div style={{ flex: 1, padding: 'clamp(2rem, 6vw, 6rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#171717' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#fff' }}>Support Ecosystem</h2>
                    <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '500px' }}>
                        Choose a category to get specialized assistance from our technical and support teams.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {categories.map((cat, idx) => (
                        <div key={idx}
                            onClick={() => setActiveModal(cat.id)}
                            style={{
                                padding: '2rem',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.2rem',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.borderColor = `${cat.accent}30`;
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '14px',
                                background: `${cat.accent}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: cat.accent
                            }}>
                                <cat.icon size={26} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>{cat.title}</h3>
                                <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.4' }}>{cat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', padding: '1.5rem', borderRadius: '16px', border: '1px dashed #333', textAlign: 'center' }}>
                    <p style={{ color: '#666', fontSize: '1rem' }}>
                        Need urgent help? Reach us directly at <span style={{ color: '#fff', fontWeight: '600' }}>support@dreamactic.ai</span>
                    </p>
                </div>
            </div>

            {/* Support Modal */}
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
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    <div style={{
                        width: 'clamp(320px, 90%, 600px)',
                        background: '#0a0a0a',
                        border: `1px solid ${selectedCategory.accent}40`,
                        borderRadius: '24px',
                        padding: 'clamp(2rem, 4vw, 3.5rem)',
                        position: 'relative',
                        boxShadow: `0 25px 80px -20px ${selectedCategory.accent}30`,
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
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                            onMouseLeave={e => e.currentTarget.style.color = '#666'}
                        >
                            <X size={24} />
                        </button>

                        {/* Content Switcher */}
                        {activeModal === 'community' ? (
                            <>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: `${selectedCategory.accent}15`,
                                        padding: '0.4rem 1rem',
                                        borderRadius: '100px',
                                        color: selectedCategory.accent,
                                        fontSize: '0.8rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        letterSpacing: '0.05em'
                                    }}>
                                        <selectedCategory.icon size={14} /> {selectedCategory.title.toUpperCase()}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1rem' }}>
                                        Join the <span style={{ color: selectedCategory.accent }}>Ecosystem</span>
                                    </h2>
                                    <p style={{ color: '#888', fontSize: '1.1rem' }}>
                                        Get real-time help from the community and our open-source contributors.
                                    </p>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    {[
                                        { name: 'Discord', color: '#5865F2' },
                                        { name: 'Twitter', color: '#1DA1F2' },
                                        { name: 'GitHub', color: '#fff' },
                                        { name: 'Forum', color: '#10b981' },
                                        { name: 'LinkedIn', color: '#0077B5' },
                                        { name: 'WhatsApp', color: '#25D366' }
                                    ].map((social, i) => (
                                        <button key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            color: '#fff',
                                            fontSize: '0.9rem',
                                            fontWeight: '600'
                                        }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.borderColor = `${social.color}40`;
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                            }}
                                        >
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: social.color }} />
                                            {social.name}
                                        </button>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: `${selectedCategory.accent}15`,
                                        padding: '0.4rem 1rem',
                                        borderRadius: '100px',
                                        color: selectedCategory.accent,
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        letterSpacing: '0.05em'
                                    }}>
                                        <selectedCategory.icon size={14} /> {selectedCategory.title.toUpperCase()}
                                    </div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1rem' }}>
                                        Submit a <span style={{ color: selectedCategory.accent }}>Ticket</span>
                                    </h2>
                                    <p style={{ color: '#888', fontSize: '1.1rem' }}>
                                        Details help us resolve your {selectedCategory.id === 'technical' ? 'issue' : 'request'} faster.
                                    </p>
                                </div>

                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={e => e.preventDefault()}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            style={{
                                                flex: 1,
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem 1.2rem',
                                                borderRadius: '12px',
                                                color: '#fff',
                                                outline: 'none'
                                            }}
                                            onFocus={e => e.target.style.borderColor = selectedCategory.accent}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Work Email"
                                            style={{
                                                flex: 1,
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                padding: '1rem 1.2rem',
                                                borderRadius: '12px',
                                                color: '#fff',
                                                outline: 'none'
                                            }}
                                            onFocus={e => e.target.style.borderColor = selectedCategory.accent}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                        />
                                    </div>
                                    <textarea
                                        rows={4}
                                        placeholder={`How can we help with your ${selectedCategory.id === 'technical' ? 'technical issue' : 'request'}?`}
                                        style={{
                                            width: '100%',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '1rem 1.2rem',
                                            borderRadius: '12px',
                                            color: '#fff',
                                            outline: 'none',
                                            resize: 'none'
                                        }}
                                        onFocus={e => e.target.style.borderColor = selectedCategory.accent}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                    />
                                    <button style={{
                                        background: selectedCategory.accent,
                                        color: '#000',
                                        fontWeight: '800',
                                        padding: '1.25rem',
                                        borderRadius: '12px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        marginTop: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.75rem',
                                        transition: 'all 0.3s'
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = `0 10px 25px ${selectedCategory.accent}40`;
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <Send size={18} /> Send Support Ticket
                                    </button>
                                </form>
                            </>
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

export default Support;
