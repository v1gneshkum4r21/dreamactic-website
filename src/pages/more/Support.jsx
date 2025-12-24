import React from 'react';
import { Radio } from 'lucide-react';

const Support = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#171717', color: '#fff', display: 'flex' }}>
            {/* Left Panel */}
            <div style={{ width: '50%', height: '100%', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)', borderRadius: '50%' }} />
                <div style={{ textAlign: 'center', zIndex: 10 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#000', color: '#fff', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '2rem' }}>
                        <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                        <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>SYSTEMS OPERATIONAL</span>
                    </div>
                    <h1 style={{ fontSize: '8rem', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.04em' }}>
                        WE'VE<br />GOT<br />YOU.
                    </h1>
                </div>
            </div>

            {/* Right Panel */}
            <div style={{ flex: 1, padding: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#171717' }}>
                <div style={{ marginBottom: 'auto', paddingTop: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Priority Support</h2>
                    <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '500px' }}>
                        Our dedicated support team works hand-in-hand with our AI agents to resolve your issues in record time.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
                    <div style={{ padding: '2rem', background: '#222', borderRadius: '12px', border: '1px solid #333', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <Radio size={24} color="#fff" />
                        <div>
                            <div style={{ fontWeight: '600', color: '#fff' }}>Live Chat</div>
                            <div style={{ color: '#666', fontSize: '0.9rem' }}>Wait time: ~2 mins</div>
                        </div>
                        <button style={{ marginLeft: 'auto', background: '#fff', color: '#000', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>Connect</button>
                    </div>

                    <div style={{ padding: '2rem', background: 'transparent', borderRadius: '12px', border: '1px solid #222', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #333' }} />
                        <div>
                            <div style={{ fontWeight: '600', color: '#fff' }}>Email Support</div>
                            <div style={{ color: '#666', fontSize: '0.9rem' }}>Response: ~4 hours</div>
                        </div>
                        <div style={{ marginLeft: 'auto', color: '#888', fontSize: '0.9rem' }}>support@dreamatic.ai</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
