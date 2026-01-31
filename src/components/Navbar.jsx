import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Mail, ChevronDown, Menu, X, Sparkles, Box, Zap, Layers, FileText, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';
import { searchContent } from '../utils/searchIndex';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const closeTimeoutRef = useRef(null);
    const searchRef = useRef(null);

    const handleMouseEnter = (label) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 50); // Reduced to 50ms for snappier response
    };

    const handleLinkClick = () => {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim().length > 0) {
            const results = searchContent(query);
            setSearchResults(results);
            setShowSearchResults(true);
        } else {
            setSearchResults([]);
            setShowSearchResults(false);
        }
    };

    const handleSearchResultClick = (path) => {
        navigate(path);
        setSearchQuery('');
        setSearchResults([]);
        setShowSearchResults(false);
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
    };

    const handleSearchFocus = () => {
        if (searchQuery.trim().length > 0 && searchResults.length > 0) {
            setShowSearchResults(true);
        }
    };

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        {
            label: 'SERVICES',
            layout: 'complex',
            theme: 'pastel-strips',
            mainContent: [
                {
                    title: "AI for Work",
                    desc: "Search across silos. Automate workflows. Orchestrate AI agents.",
                    path: "/services/work"
                },
                {
                    title: "AI for Service",
                    desc: "Leverage Agentic capabilities to empower customers.",
                    path: "/services/service"
                },
                {
                    title: "AI for Enterprise",
                    desc: "Transform your entire organization with custom AI swarms.",
                    path: "/services/enterprise"
                }
            ],
            sidebar: {
                title: "TOP RESOURCES",
                resources: [
                    { title: "Scaling AI: Insights", type: "Guide" },
                    { title: "AI Use Cases Report", type: "Report" }
                ],
                quickLinks: ["About DREAMACTIC", "Customer Stories", "Partners", "Careers"]
            }
        },
        {
            label: 'PRODUCTS',
            layout: 'complex',
            theme: 'pastel-strips',
            mainContent: [
                {
                    title: "Core Platform",
                    desc: "The operating system for the agentic future. Build, deploy, and scale.",
                    path: "/products/platform"
                },
                {
                    title: "Enterprise Solutions",
                    desc: "Tailored agent swarms for mission-critical business functions.",
                    path: "/products/solutions"
                },
                {
                    title: "Agentic Solutions",
                    desc: "Pre-configured AI agent bundles for rapid deployment and ROI.",
                    path: "/products/agentic"
                }
            ],
            sidebar: {
                title: "WHAT'S NEW",
                resources: [
                    { title: "DREAMACTIC v2.0 Release", type: "Docs" },
                    { title: "Migration Guide", type: "Guide" }
                ],
                quickLinks: ["Pricing", "Integrations", "Security", "Roadmap"]
            }
        },
        {
            label: 'MORE',
            layout: 'complex',
            theme: 'pastel-strips',
            mainContent: [
                {
                    title: "Company",
                    desc: "About Us, Leadership, Customers, and Careers.",
                    path: "/about"
                },
                {
                    title: "Resources",
                    desc: "Resource Hub, Blog, Whitepapers, and Research.",
                    path: "/resources"
                },
                {
                    title: "Support",
                    desc: "Documentation, Community, and Help Center.",
                    path: "/support"
                }
            ],
            sidebar: {
                title: "UPCOMING EVENT",
                resources: [
                    { title: "AI Summit '25", type: "Event" },
                    { title: "Jan 15-17 | SF", type: "Date" }
                ],
                quickLinks: ["Contact Us", "Request Demo", "Legal", "Privacy"]
            }
        }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img
                        src="/assets/logo/191225_Logo_PreFIN_Am.png"
                        alt="DREAMACTIC Logo"
                        className="logo-image"
                    />
                </Link>

                {/* Navigation Items */}
                <ul className="navbar-menu">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="navbar-item"
                            onMouseEnter={() => (item.dropdown || item.layout || item.megaMenu) && handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Complex Striped Mega Menu Logic */}
                            {item.layout === 'complex' ? (
                                <>
                                    <span className="navbar-link">
                                        {item.label}
                                        <ChevronDown className="dropdown-icon" size={16} />
                                    </span>
                                    {activeDropdown === item.label && (
                                        <div className={`dropdown-menu mega-complex-container ${item.theme ? `theme-${item.theme}` : ''}`}>
                                            <div className="mega-strips-wrapper">
                                                {item.mainContent.map((row, rIdx) => (
                                                    <Link
                                                        key={rIdx}
                                                        to={row.path}
                                                        className={`mega-strip strip-${rIdx}`}
                                                        onClick={handleLinkClick}
                                                    >
                                                        <div className="strip-content">
                                                            <div className="strip-info">
                                                                <h4>{row.title}</h4>
                                                                <p>{row.desc}</p>
                                                            </div>
                                                            <div className="strip-chevron">→</div>
                                                        </div>
                                                    </Link>
                                                ))}
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
                                                                        <Link to={it.path} onClick={handleLinkClick}>{it.name}</Link>
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
                                        <div className="dropdown-menu mega-menu-container">
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
                    <div className="desktop-search" ref={searchRef}>
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
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onFocus={handleSearchFocus}
                            />
                        </div>
                        {showSearchResults && searchResults.length > 0 && (
                            <div className="search-results">
                                {searchResults.map((result) => {
                                    const Icon = {
                                        'Product': Box,
                                        'Service': Layers,
                                        'Page': FileText,
                                        'Feature': Zap
                                    }[result.category] || FileText;

                                    return (
                                        <div
                                            key={result.id}
                                            className="search-result-item"
                                            onClick={() => handleSearchResultClick(result.path)}
                                        >
                                            <div className="search-result-icon-wrapper">
                                                <Icon size={20} className={`search-result-icon icon-${result.category.toLowerCase()}`} />
                                            </div>
                                            <div className="search-result-content">
                                                <div className="search-result-header">
                                                    <span className="search-result-title">{result.title}</span>
                                                    <ArrowRight size={14} className="search-result-arrow" />
                                                </div>
                                                <p className="search-result-description">{result.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {showSearchResults && searchResults.length === 0 && searchQuery.trim().length > 0 && (
                            <div className="search-results">
                                <div className="search-no-results">
                                    No results found for "{searchQuery}"
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to="/showcase" className="showcase-button">
                        <Sparkles size={18} />
                        <span>Showcase</span>
                    </Link>
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
                    {/* Mobile Search - Integrated at top */}
                    <div className="mobile-search-wrapper">
                        <div className="mobile-search-bar">
                            <Search size={20} className="mobile-search-icon" />
                            <input
                                type="text"
                                placeholder="Search DREAMACTIC..."
                                className="mobile-search-input"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onFocus={handleSearchFocus}
                            />
                        </div>
                        {showSearchResults && searchResults.length > 0 && (
                            <div className="mobile-search-results">
                                {searchResults.map((result) => {
                                    const Icon = {
                                        'Product': Box,
                                        'Service': Layers,
                                        'Page': FileText,
                                        'Feature': Zap
                                    }[result.category] || FileText;

                                    return (
                                        <div
                                            key={result.id}
                                            className="search-result-item"
                                            onClick={() => handleSearchResultClick(result.path)}
                                        >
                                            <div className="search-result-icon-wrapper">
                                                <Icon size={18} className={`search-result-icon icon-${result.category.toLowerCase()}`} />
                                            </div>
                                            <div className="search-result-content">
                                                <div className="search-result-header">
                                                    <span className="search-result-title">{result.title}</span>
                                                </div>
                                                <p className="search-result-description">{result.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        {showSearchResults && searchResults.length === 0 && searchQuery.trim().length > 0 && (
                            <div className="mobile-search-results">
                                <div className="search-no-results">
                                    No results found for "{searchQuery}"
                                </div>
                            </div>
                        )}
                    </div>

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
                                    <div className={`mobile-dropdown ${activeDropdown === item.label ? 'open' : ''} ${item.theme ? `theme-${item.theme}` : ''}`}>

                                        {/* Logic for 'complex' (Services, Products) */}
                                        {item.layout === 'complex' && item.mainContent.map((row, rIdx) => (
                                            <div key={rIdx} className="mobile-group">
                                                <Link to={row.path} className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                                                    <span className="mobile-group-title">{row.title}</span>
                                                    <span className="mobile-group-desc">{row.desc}</span>
                                                </Link>
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
