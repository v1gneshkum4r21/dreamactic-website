import { useEffect, useRef, useState } from 'react';
import './Showcase.css';
import { Play, Sparkles, Search } from 'lucide-react';

const SHOWCASE_ITEMS = [
    {
        id: 1,
        title: "Neural Synapse v2",
        category: "Agents",
        type: "image",
        imageUrl: "/assets/showcase/showcase_agent_01_1766071404689.png",
        desc: "High-fidelity visualization of cross-agent neural communication pathways."
    },
    {
        id: 2,
        title: "City Pulse AI",
        category: "Workflows",
        type: "image",
        imageUrl: "/assets/showcase/showcase_agent_02_1766071501626.png",
        desc: "Recursive architectural optimization workflow for autonomous urban hubs."
    },
    {
        id: 3,
        title: "Autonomous Swarm",
        category: "Agents",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Real-time trajectory calculation for a distributed agentic swarm."
    },
    {
        id: 4,
        title: "Quantum Dashboard",
        category: "Solutions",
        type: "image",
        imageUrl: "/assets/showcase/showcase_agent_04_1766071477728.png",
        desc: "Advanced multi-dimensional decision matrix visualization for enterprise AI."
    },
    {
        id: 5,
        title: "Hive Topology",
        category: "Solutions",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_03.mp4",
        desc: "Processing node interconnectivity during a high-load agentic reasoning task."
    },
    {
        id: 6,
        title: "Agentic Hive State",
        category: "Agents",
        type: "image",
        imageUrl: "/assets/showcase/showcase_agent_03_1766071451570.png",
        desc: "Collective intelligence mapping for autonomous enterprise resource management."
    },
    {
        id: 7,
        title: "Synaptic Tunnel",
        category: "Workflows",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Self-evolving data pipeline with predictive error-correction latency."
    },
    {
        id: 8,
        title: "Logic Weaver",
        category: "Workflows",
        type: "image",
        imageUrl: "/assets/showcase/showcase_agent_01_1766071404689.png",
        desc: "Autonomous reasoning chain visualization for complex multi-step workflows."
    },
    {
        id: 9,
        title: "Matrix Allocation",
        category: "Solutions",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_03.mp4",
        desc: "Dynamic resource re-routing during a global agentic deployment."
    },
    {
        id: 10,
        title: "Neural Flow",
        category: "Agents",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Visualizing the stream of conscious data between agent nodes."
    },
    {
        id: 11,
        title: "Robotic Precision",
        category: "Solutions",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_03.mp4",
        desc: "Agent-controlled precision manufacturing in low-light environments."
    },
    {
        id: 12,
        title: "Quantum Flux",
        category: "Solutions",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Quantum-accelerated AI state transitions."
    },
    {
        id: 13,
        title: "Vertical Circuitry",
        category: "Workflows",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_03.mp4",
        desc: "Portrait-oriented circuitry flow for mobile-first agent architectures."
    },
    {
        id: 14,
        title: "Data Rain",
        category: "Agents",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Vertical data ingestion stream."
    },
    {
        id: 15,
        title: "Monochrome Logic",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
        desc: "Crystalline thinking structures in high contrast."
    },
    {
        id: 16,
        title: "Spectral Analysis",
        category: "Workflows",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
        desc: "Visualizing the rainbow spectrum of agent output possibilities."
    },
    {
        id: 17,
        title: "Cyber Core",
        category: "Agents",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
        desc: "Deep-layer neural architecture for vertical scaling."
    },
    {
        id: 18,
        title: "Neon Pulse",
        category: "Solutions",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_03.mp4",
        desc: "High-speed transmission pipeline."
    },
    {
        id: 19,
        title: "Prism Flow",
        category: "Workflows",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000",
        desc: "Lightweight workflow optimization for rapid prototyping."
    },
    {
        id: 20,
        title: "Digital Horizon",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        desc: "Expanding the boundaries of enterprise AI integration."
    },
    {
        id: 21,
        title: "Neural Geometry",
        category: "Agents",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd486490e?auto=format&fit=crop&q=80&w=1000",
        desc: "Geometric representation of agentic decision patterns."
    },
    {
        id: 22,
        title: "Static Shift",
        category: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Real-time state transitions."
    },
    {
        id: 23,
        title: "Crystalline Thought",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=1000",
        desc: "Refractive intelligence models."
    },
    {
        id: 24,
        title: "Binary Echo",
        category: "Agents",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        desc: "Deep code analysis and self-healing agent logic."
    },
    {
        id: 25,
        title: "Flux Capacitor",
        category: "Workflows",
        type: "video",
        videoUrl: "/assets/showcase/tech_02.mp4",
        desc: "Slow-motion energy distribution within an AI core."
    },
    {
        id: 26,
        title: "Portrait Process",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=1000",
        desc: "Vertical solution mapping for technical vertical markets."
    },
    {
        id: 27,
        title: "Abstract Logic",
        category: "Agents",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
        desc: "Non-linear agent reasoning visualization."
    },
    {
        id: 28,
        title: "Data Pulse",
        category: "Workflows",
        type: "video",
        videoUrl: "/assets/showcase/tech_03.mp4",
        desc: "Rhythmic data transmission."
    },
    {
        id: 29,
        title: "Ether View",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1000",
        desc: "Cloud-native agentic monitoring dashboard concept."
    },
    {
        id: 30,
        title: "Shadow Grid",
        category: "Agents",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
        desc: "Dark-mode optimized agent control surface."
    },
    {
        id: 31,
        title: "Vertical Vanguard",
        category: "Workflows",
        type: "video",
        videoUrl: "/assets/showcase/tech_01.mp4",
        desc: "Precision workflow verticality."
    },
    {
        id: 32,
        title: "Coded Reality",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        desc: "Technical implementation of reality-scale AI solutions."
    },
    {
        id: 33,
        title: "System Synapse",
        category: "Agents",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
        desc: "Low-level system agent communication."
    },
    {
        id: 34,
        title: "Pulse Terminal",
        category: "Workflows",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_03.mp4",
        desc: "Visualizing the pulse of a living workflow."
    },
    {
        id: 35,
        title: "Infinite Intel",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
        desc: "Endless intelligence scaling for modern enterprises."
    },
    {
        id: 36,
        title: "Matrix Bloom",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1620641788821-78c443f0a0c3?auto=format&fit=crop&q=80&w=1000",
        desc: "Blooming data nodes in high contrast."
    },
    {
        id: 37,
        title: "Quantum Helix",
        category: "Agents",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Helical data structure visualization."
    },
    {
        id: 38,
        title: "Circuit Web",
        category: "Workflows",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        desc: "Interconnected agent nodes."
    },
    {
        id: 39,
        title: "Logic Core",
        category: "Agents",
        type: "video",
        videoUrl: "/assets/showcase/h_tech_02.mp4",
        desc: "Core logic processing visualization."
    },
    {
        id: 40,
        title: "Digital Pulse v2",
        category: "Solutions",
        type: "image",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        desc: "Global AI connectivity map."
    }
];

const MediaCard = ({ item }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (item.type === 'video' && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay might be blocked, handled by UI attributes
            });
        }
    }, [item.type]);

    return (
        <div className={`track-card ${item.type}`}>
            {item.type === 'video' ? (
                <div className="video-container">
                    <video
                        ref={videoRef}
                        src={item.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    />
                    <div className="video-badge">4K</div>
                </div>
            ) : (
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
            )}
            <div className="card-media-bg"></div>
            <div className="card-overlay">
                <div className="overlay-content">
                    <p>{item.category}</p>
                    <h3>{item.title}</h3>
                </div>
            </div>
        </div>
    );
};

const Showcase = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [shuffledItems, setShuffledItems] = useState([]);

    useEffect(() => {
        // Initial shuffle
        setShuffledItems([...SHOWCASE_ITEMS].sort(() => Math.random() - 0.5));

        // Lock global body scroll to ensure only the showcase container (or internal tracks) are focused
        document.body.classList.add('showcase-page-locked');
        return () => document.body.classList.remove('showcase-page-locked');
    }, []);

    // Partition items for tracks
    const columns = [[], [], [], []];
    shuffledItems.forEach((item, idx) => columns[idx % 4].push(item));

    const rows = [[], [], []];
    shuffledItems.forEach((item, idx) => rows[idx % 3].push(item));

    return (
        <div className={`showcase-page cinematic-mode ${isPaused ? 'is-paused' : ''}`}>
            <header className="showcase-header-simple">
                <div className="header-inner">
                    <h1 className="showcase-title">Showcase</h1>
                </div>
            </header>

            <main
                className="showcase-main-content"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="cinematic-viewport">
                    {/* Vertical Tracks (Desktop/Tablet) */}
                    <div className="vertical-grid-container">
                        {columns.map((col, idx) => (
                            <div key={idx} className={`vertical-track ${idx % 2 === 0 ? 'track-down' : 'track-up'}`}>
                                <div className="track-content">
                                    {col.map((item, iOffset) => (
                                        <MediaCard key={`col-${idx}-${item.id}-${iOffset}`} item={item} />
                                    ))}
                                    {/* Duplicate for infinite loop */}
                                    {col.map((item, iOffset) => (
                                        <MediaCard key={`col-dup-${idx}-${item.id}-${iOffset}`} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Horizontal Tracks (Mobile) */}
                    <div className="horizontal-grid-container">
                        {rows.map((row, idx) => (
                            <div key={idx} className={`horizontal-track ${idx % 2 === 0 ? 'track-left' : 'track-right'}`}>
                                <div className="horizontal-content">
                                    {row.map((item, iOffset) => (
                                        <MediaCard key={`row-${idx}-${item.id}-${iOffset}`} item={item} />
                                    ))}
                                    {/* Duplicate for infinite loop */}
                                    {row.map((item, iOffset) => (
                                        <MediaCard key={`row-dup-${idx}-${item.id}-${iOffset}`} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Showcase;
