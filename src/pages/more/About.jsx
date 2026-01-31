import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3);

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#171717', color: '#fff', display: 'flex' }}>
            {/* Left Panel - Editorial Title */}
            <div style={{ width: '40%', height: '100%', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1, mixBlendMode: 'multiply' }} />
                <h1 style={{ fontSize: '12rem', fontWeight: '900', transform: 'rotate(-90deg)', whiteSpace: 'nowrap', letterSpacing: '-0.05em', opacity: 0.1 }}>DREAMACTIC</h1>
                <div style={{ position: 'absolute', padding: '4rem' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.2em' }}>/// EST. 2024</div>
                    <h2 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: '0.9' }}>WE BUILD<br />THE NEXT<br />MIND.</h2>
                </div>
            </div>

            {/* Right Panel - Slide Container */}
            <div style={{ flex: 1, height: '100%', position: 'relative', background: '#171717' }}>

                {/* Navigation Arrows */}
                <div style={{ position: 'absolute', bottom: '4rem', right: '6rem', display: 'flex', gap: '1rem', zIndex: 20 }}>
                    <button onClick={prevSlide} disabled={currentSlide === 0} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer', opacity: currentSlide === 0 ? 0.3 : 1, transition: 'all 0.2s' }}>
                        <ArrowLeft color="#fff" size={24} />
                    </button>
                    <button onClick={nextSlide} disabled={currentSlide === 2} style={{ background: '#fff', border: 'none', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentSlide === 2 ? 'not-allowed' : 'pointer', opacity: currentSlide === 2 ? 0.3 : 1, transition: 'all 0.2s' }}>
                        <ArrowRight color="#000" size={24} />
                    </button>
                </div>

                {/* Slides */}
                <div style={{ height: '100%', padding: '0 6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    {/* Slide 1: Mission */}
                    {currentSlide === 0 && (
                        <div className="slide-fade-in" style={{ animation: 'fadeIn 0.5s ease' }}>
                            <div style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#666', marginBottom: '3rem', letterSpacing: '0.2em' }}>01 /// MISSION</div>
                            <p style={{ fontSize: '2.5rem', fontWeight: '300', lineHeight: '1.4', marginBottom: '4rem', color: '#ccc' }}>
                                <span style={{ color: '#fff', fontWeight: '600' }}>DREAMACTIC</span> is an artificial intelligence research and deployment company. Our mission is to ensure that agentic general intelligence benefits all of humanity.
                            </p>
                        </div>
                    )}

                    {/* Slide 2: Values */}
                    {currentSlide === 1 && (
                        <div className="slide-fade-in" style={{ animation: 'fadeIn 0.5s ease' }}>
                            <div style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#666', marginBottom: '3rem', letterSpacing: '0.2em' }}>02 /// CORE_VALUES</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                                {[
                                    { title: "Safe by Design", desc: "We prioritize safety research above product velocity. Our agents are constrained by unbreakable guardrails." },
                                    { title: "Maximum Agency", desc: "We believe in empowering AI to take action, not just generate text. True utility comes from doing." },
                                    { title: "Radical Transparency", desc: "Open methodologies and audit trails. Black boxes have no place in critical infrastructure." }
                                ].map((val, idx) => (
                                    <div key={idx} style={{ borderLeft: '2px solid #333', paddingLeft: '2rem' }}>
                                        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{val.title}</h3>
                                        <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: '600px', lineHeight: '1.5' }}>{val.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Slide 3: Leadership */}
                    {currentSlide === 2 && (
                        <div className="slide-fade-in" style={{ animation: 'fadeIn 0.5s ease' }}>
                            <div style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#666', marginBottom: '3rem', letterSpacing: '0.2em' }}>03 /// LEADERSHIP</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                {[
                                    { name: "Adrian V.", role: "CEO & Co-Founder", bio: "Ex-Google DeepMind. Leading the charge towards AGI." },
                                    { name: "Sarah L.", role: "CTO", bio: "Former Head of AI at Stripe. Architect of the Neural Core." },
                                    { name: "Marcus R.", role: "Chief Scientist", bio: "PhD Stanford. Pioneer in Reinforcement Learning." },
                                    { name: "Elena K.", role: "Head of Safety", bio: "Leading global AI safety initiatives and alignment theory." }
                                ].map((person, idx) => (
                                    <div key={idx} style={{ padding: '2rem', border: '1px solid #222', borderRadius: '12px', background: '#0a0a0a' }}>
                                        <div style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>{person.name}</div>
                                        <div style={{ color: '#a78bfa', fontFamily: 'monospace', marginBottom: '0.8rem', fontSize: '1rem' }}>{person.role}</div>
                                        <p style={{ color: '#666', lineHeight: '1.4', fontSize: '1rem' }}>{person.bio}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <style>
                        {`
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translateX(20px); }
                                to { opacity: 1; transform: translateX(0); }
                            }
                        `}
                    </style>
                </div>
            </div>
        </div>
    );
};

export default About;
