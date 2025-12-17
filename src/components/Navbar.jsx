import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, ChevronDown, Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';
import './Navbar.css';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const navItems = [
        {
            label: 'SERVICES',
            layout: 'complex',
            mainContent: [
                {
                    title: "AI for Work",
                    desc: "Search across silos. Automate workflows. Orchestrate AI agents.",
                    path: "/services/work",
                    columns: [
                        { title: "FEATURES", items: ["Enterprise Search", "Pre-Built AI Agents", "AI Agent Builder"] },
                        { title: "ACCELERATORS", items: ["HR", "IT", "Recruiting"] }
                    ]
                },
                {
                    title: "AI for Service",
                    desc: "Leverage Agentic capabilities to empower customers.",
                    path: "/services/service",
                    columns: [
                        { title: "FEATURES", items: ["AI Agents", "Agentic Contact Center", "Proactive Outreach"] },
                        { title: "ACCELERATORS", items: ["Retail", "Banking", "Healthcare"] }
                    ]
                }
            ],
            sidebar: {
                title: "TOP RESOURCES",
                resources: [
                    { title: "Scaling AI: Insights", type: "Guide" },
                    { title: "AI Use Cases Report", type: "Report" }
                ],
                quickLinks: ["About Dreamatic", "Customer Stories", "Partners", "Careers"]
            }
        },
        {
            label: 'PRODUCTS',
            layout: 'complex', // Upgrade to rich row-based layout
            mainContent: [
                {
                    title: "Core Platform",
                    desc: "The operating system for the agentic future. Build, deploy, and scale.",
                    path: "/products/platform",
                    columns: [
                        { title: "CAPABILITIES", items: ["AI Studio", "Orchestration Engine", "Knowledge Graph", "Guardrails"] },
                        { title: "DEVELOPER", items: ["API & SDKs", "CLI Tools", "Webhooks", "Playground"] }
                    ]
                },
                {
                    title: "Enterprise Solutions",
                    desc: "Tailored agent swarms for mission-critical business functions.",
                    path: "/products/solutions",
                    columns: [
                        { title: "BY INDUSTRY", items: ["Financial Services", "Healthcare", "Retail & E-commerce", "Manufacturing"] },
                        { title: "BY FUNCTION", items: ["Customer Experience", "HR & Talent", "IT Operations", "Sales Intelligence"] }
                    ]
                }
            ],
            sidebar: {
                title: "WHAT'S NEW",
                resources: [
                    { title: "Dreamatic v2.0 Release", type: "Docs" },
                    { title: "Migration Guide", type: "Guide" }
                ],
                quickLinks: ["Pricing", "Integrations", "Security", "Roadmap"]
            }
        },
        { label: 'SHOWCASE', path: '/showcase' },
        {
            label: 'MORE',
            layout: 'more-complex',
            columns: {
                lists: [
                    {
                        title: 'RESOURCES',
                        items: [
                            { name: 'Resource Hub', path: '/resources' },
                            { name: 'Blog', path: '/resources/blog' },
                            { name: 'Whitepapers', path: '/resources/whitepapers' },
                            { name: 'Webinars', path: '/resources/webinars' },
                            { name: 'AI Research', path: '/resources/research' }
                        ]
                    },
                    {
                        title: 'COMPANY',
                        items: [
                            { name: 'About Us', path: '/about' },
                            { name: 'Leadership', path: '/about/leadership' },
                            { name: 'Customers', path: '/about/customers' },
                            { name: 'Partners', path: '/about/partners' },
                            { name: 'Careers', path: '/about/careers' }
                        ]
                    },
                    {
                        title: 'SUPPORT',
                        items: [
                            { name: 'Documentation', path: '/support/docs' },
                            { name: 'Get Support', path: '/support' },
                            { name: 'Community', path: '/support/community' },
                            { name: 'Contact Us', path: '/contact' }
                        ]
                    }
                ],
                guides: {
                    title: 'AGENTIC AI GUIDES',
                    items: [
                        { title: 'Dreamatic Leader', desc: 'Top performer in AI Agents', color: 'bg-blue-500' },
                        { title: 'Generative AI 101', desc: 'The complete guide', color: 'bg-purple-500' },
                        { title: 'CXO Toolkit', desc: 'Strategy for success', color: 'bg-indigo-500' }
                    ]
                },
                sidebar: {
                    title: 'UPCOMING EVENT',
                    event: { title: 'AI SUMMIT \'25', date: 'JAN 15-17 | SF', desc: 'The future of Agentic AI' },
                    actions: [
                        { title: 'Talk to an expert', desc: 'Schedule a call', link: '/contact' },
                        { title: 'Request a Demo', desc: 'See it in action', link: '/demo' }
                    ]
                }
            }
        }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="logo-placeholder">LOGO</div>
                </Link>

                {/* Navigation Items */}
                <ul className="navbar-menu">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="navbar-item"
                            onMouseEnter={() => (item.dropdown || item.layout || item.megaMenu) && setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {/* Complex Mega Menu Logic */}
                            {item.layout === 'complex' ? (
                                <>
                                    <span className="navbar-link">
                                        {item.label}
                                        <ChevronDown className="dropdown-icon" size={16} />
                                    </span>
                                    {activeDropdown === item.label && (
                                        <div className="dropdown-menu mega-complex-container">
                                            <div className="complex-grid">
                                                {/* Main Content Rows */}
                                                <div className="complex-main">
                                                    {item.mainContent.map((row, rIdx) => (
                                                        <div key={rIdx} className="complex-row">
                                                            <div className="complex-row-header">
                                                                <h4>{row.title}</h4>
                                                                <p>{row.desc}</p>
                                                                <Link to={row.path} className="complex-cta">LEARN MORE</Link>
                                                            </div>
                                                            <div className="complex-row-columns">
                                                                {row.columns.map((col, cIdx) => (
                                                                    <div key={cIdx} className="complex-column">
                                                                        <h5>{col.title}</h5>
                                                                        <ul>
                                                                            {col.items.map((it, iIdx) => (
                                                                                <li key={iIdx}>{it}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Sidebar */}
                                                <div className="complex-sidebar">
                                                    <div className="sidebar-section">
                                                        <h4>{item.sidebar.title}</h4>
                                                        <div className="sidebar-cards">
                                                            {item.sidebar.resources.map((res, resIdx) => (
                                                                <div key={resIdx} className="sidebar-card">
                                                                    <div className="card-icon"></div>
                                                                    <span>{res.title}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-section">
                                                        <h4>QUICK LINKS</h4>
                                                        <ul className="quick-links">
                                                            {item.sidebar.quickLinks.map((link, lIdx) => (
                                                                <li key={lIdx}><a href="#">{link}</a></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : item.layout === 'more-complex' ? (
                                <>
                                    <span className="navbar-link">
                                        {item.label}
                                        <ChevronDown className="dropdown-icon" size={16} />
                                    </span>
                                    {activeDropdown === item.label && (
                                        <div className="dropdown-menu mega-more-container">
                                            <div className="more-grid">
                                                {/* Column 1: Lists */}
                                                <div className="more-lists-group">
                                                    {item.columns.lists.map((list, lIdx) => (
                                                        <div key={lIdx} className="more-list-section">
                                                            <h4>{list.title}</h4>
                                                            <ul>
                                                                {list.items.map((it, iIdx) => (
                                                                    <li key={iIdx}>
                                                                        <Link to={it.path}>{it.name}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Column 2: Guides */}
                                                <div className="more-guides-group">
                                                    <h4>{item.columns.guides.title}</h4>
                                                    <div className="guides-grid">
                                                        {item.columns.guides.items.map((guide, gIdx) => (
                                                            <div key={gIdx} className="guide-card">
                                                                <div className={`guide-icon ${guide.color}`}></div>
                                                                <div className="guide-content">
                                                                    <h5>{guide.title}</h5>
                                                                    <p>{guide.desc}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Column 3: Sidebar/Events */}
                                                <div className="more-sidebar-group">
                                                    <h4>{item.columns.sidebar.title}</h4>
                                                    <div className="event-card">
                                                        <div className="event-content">
                                                            <h5>{item.columns.sidebar.event.title}</h5>
                                                            <p className="event-date">{item.columns.sidebar.event.date}</p>
                                                            <p className="event-desc">{item.columns.sidebar.event.desc}</p>
                                                            <button className="event-btn">REGISTER</button>
                                                        </div>
                                                        <div className="event-bg"></div>
                                                    </div>

                                                    <div className="sidebar-actions">
                                                        {item.columns.sidebar.actions.map((act, aIdx) => (
                                                            <div key={aIdx} className="action-card">
                                                                <div className="action-text">
                                                                    <h5>{act.title}</h5>
                                                                    <p>{act.desc}</p>
                                                                </div>
                                                                <div className="action-arrow">→</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : item.megaMenu ? (
                                <>
                                    <span className="navbar-link">
                                        {item.label}
                                        <ChevronDown className="dropdown-icon" size={16} />
                                    </span>
                                    {activeDropdown === item.label && (
                                        <div className="dropdown-menu mega-menu-container"> {/* Re-using dropdown-menu class for base anims */}
                                            <div className="mega-menu-grid">
                                                {/* Left Side: Sections */}
                                                <div className="mega-sections-group">
                                                    {item.sections.map((section, sIdx) => (
                                                        <div key={sIdx} className="mega-section">
                                                            <h4 className="mega-section-title">{section.title}</h4>
                                                            <div className="mega-section-items">
                                                                {section.items.map((subItem, subIdx) => (
                                                                    <Link key={subIdx} to={subItem.path} className="mega-item-link">
                                                                        <div className="mega-link-content">
                                                                            <span className="mega-link-name">{subItem.name}</span>
                                                                            <span className="mega-link-desc">{subItem.desc}</span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Right Side: Featured */}
                                                {item.featured && (
                                                    <div className="mega-featured-group">
                                                        <h4 className="mega-section-title">{item.featured.title}</h4>
                                                        <div className="featured-card">
                                                            <div className="featured-content">
                                                                <h5>{item.featured.name}</h5>
                                                                <p>{item.featured.desc}</p>
                                                                <Link to={item.featured.path} className="featured-link">
                                                                    Learn More →
                                                                </Link>
                                                            </div>
                                                            <div className="featured-bg-glow"></div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : item.dropdown ? (
                                <>
                                    <span className="navbar-link">
                                        {item.label}
                                        <ChevronDown className="dropdown-icon" size={16} />
                                    </span>
                                    {activeDropdown === item.label && (
                                        <div className="dropdown-menu simple-dropdown">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.path}
                                                    className="dropdown-item"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link to={item.path} className="navbar-link">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right Side Actions */}
                <div className="navbar-actions">
                    <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
                        <button
                            className="search-toggle"
                            aria-label="Search"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search size={22} color="white" strokeWidth={2.5} />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                        />
                    </div>
                    <button
                        className="contact-button"
                        onClick={() => setIsContactOpen(true)}
                    >
                        <Mail size={18} />
                        <span>Contact Us</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    {navItems.map((item, index) => (
                        <div key={index} className="mobile-nav-item">
                            {(item.dropdown || item.layout || item.megaMenu) ? (
                                <div className="mobile-dropdown-container">
                                    <button
                                        className={`mobile-nav-link ${activeDropdown === item.label ? 'active' : ''}`}
                                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={16}
                                            className={`dropdown-arrow ${activeDropdown === item.label ? 'rotated' : ''}`}
                                        />
                                    </button>
                                    <div className={`mobile-dropdown ${activeDropdown === item.label ? 'open' : ''}`}>

                                        {/* Logic for 'complex' (Services, Products) */}
                                        {item.layout === 'complex' && item.mainContent.map((row, rIdx) => (
                                            <div key={rIdx} className="mobile-group">
                                                <span className="mobile-group-title">{row.title}</span>
                                                {row.columns.map((col, cIdx) => (
                                                    <div key={cIdx} className="mobile-subgroup">
                                                        {col.items.map((it, iIdx) => (
                                                            <Link key={iIdx} to={row.path} className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                                                                {it}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}

                                        {/* Logic for 'more-complex' (More) */}
                                        {item.layout === 'more-complex' && (
                                            <>
                                                {item.columns.lists.map((list, lIdx) => (
                                                    <div key={lIdx} className="mobile-group">
                                                        <span className="mobile-group-title">{list.title}</span>
                                                        {list.items.map((it, iIdx) => (
                                                            <Link key={iIdx} to={it.path} className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                                                                {it.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                                <div className="mobile-group">
                                                    <span className="mobile-group-title">{item.columns.guides.title}</span>
                                                    {item.columns.guides.items.map((guide, gIdx) => (
                                                        <div key={gIdx} className="mobile-guide-item">{guide.title}</div>
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        {/* Logic for 'megaMenu' (Resources - old structure if any, or Showcases if converted) */}
                                        {item.megaMenu && !item.layout && item.sections?.map((section, sIdx) => (
                                            <div key={sIdx} className="mobile-group">
                                                <span className="mobile-group-title">{section.title}</span>
                                                {section.items.map((subItem, subIdx) => (
                                                    <Link key={subIdx} to={subItem.path} className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}

                                        {/* Simple Dropdown Fallback */}
                                        {item.dropdown && item.dropdown.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={subItem.path}
                                                className="mobile-dropdown-link"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}

                                    </div>
                                </div>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </nav>
    );
};

export default Navbar;
