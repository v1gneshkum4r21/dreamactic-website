import React from 'react';
import { BookOpen, Code, Terminal, Users } from 'lucide-react';

const Resources = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#171717', color: '#fff', display: 'flex' }}>
            {/* Left Panel */}
            <div style={{ width: '40%', height: '100%', background: '#171717', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderRight: '1px solid #222' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />
                <h1 style={{ fontSize: '8rem', fontWeight: '900', lineHeight: '0.8', position: 'relative', zIndex: 10, padding: '4rem' }}>
                    KNOW<br /><span style={{ color: '#8b5cf6' }}>LEDGE</span><br />BASE
                </h1>
            </div>

            {/* Right Panel */}
            <div style={{ flex: 1, height: '100%', padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
                {[
                    { icon: BookOpen, title: "Documentation", desc: "Guides, tutorials, and API reference." },
                    { icon: Terminal, title: "CLI Tool", desc: "Command line interface for managing swarms." },
                    { icon: Code, title: "SDKs", desc: "Libraries for Python, Node, and Go." },
                    { icon: Users, title: "Community", desc: "Join our discord and forum." }
                ].map((item, idx) => (
                    <div key={idx} style={{
                        borderRight: idx % 2 === 0 ? '1px solid #222' : 'none',
                        borderBottom: idx < 2 ? '1px solid #222' : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '4rem',
                        transition: 'background 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#0a0a0a'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <item.icon size={40} color="#8b5cf6" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</h3>
                        <p style={{ color: '#666', fontSize: '1.1rem' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
