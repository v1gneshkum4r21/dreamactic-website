// Centralized search index for the DREAMACTIC website
export const searchIndex = [
    // Products
    {
        id: 'product-platform',
        title: 'Platform',
        category: 'Product',
        description: 'Enterprise-grade agentic AI infrastructure. Build, deploy, and scale autonomous AI agents.',
        keywords: ['platform', 'infrastructure', 'ai', 'agents', 'enterprise', 'orchestration', 'swarm', 'deployment'],
        path: '/products/platform'
    },
    {
        id: 'product-agentic',
        title: 'Agentic',
        category: 'Product',
        description: 'Pre-built autonomous AI agents for sales, research, and operations. Deploy intelligent agents instantly.',
        keywords: ['agentic', 'agents', 'autonomous', 'sdr', 'sales', 'research', 'alpha seeker', 'pre-built'],
        path: '/products/agentic'
    },
    {
        id: 'product-solutions',
        title: 'Solutions',
        category: 'Product',
        description: 'End-to-end AI solutions for enterprise workflows. Transform your business with intelligent automation.',
        keywords: ['solutions', 'enterprise', 'workflows', 'automation', 'ai solutions', 'business'],
        path: '/products/solutions'
    },

    // Services
    {
        id: 'service-work',
        title: 'Work',
        category: 'Service',
        description: 'Custom AI agent development and integration services. Build tailored solutions for your business.',
        keywords: ['work', 'custom', 'development', 'integration', 'consulting', 'services', 'tailored'],
        path: '/services/work'
    },
    {
        id: 'service-enterprise',
        title: 'Enterprise',
        category: 'Service',
        description: 'Enterprise-grade AI solutions with dedicated support. Scale your AI operations with confidence.',
        keywords: ['enterprise', 'support', 'dedicated', 'scale', 'operations', 'business', 'corporate'],
        path: '/services/enterprise'
    },
    {
        id: 'service-page',
        title: 'Services Overview',
        category: 'Service',
        description: 'Explore our comprehensive AI services and solutions. From consulting to implementation.',
        keywords: ['services', 'overview', 'consulting', 'implementation', 'ai services'],
        path: '/services'
    },

    // Info Pages
    {
        id: 'page-about',
        title: 'About',
        category: 'Page',
        description: 'Learn about DREAMACTIC and our mission to revolutionize AI agent technology.',
        keywords: ['about', 'company', 'mission', 'team', 'dreamactic', 'vision'],
        path: '/about'
    },
    {
        id: 'page-resources',
        title: 'Resources',
        category: 'Page',
        description: 'Documentation, guides, and learning materials for AI agents and automation.',
        keywords: ['resources', 'documentation', 'guides', 'learning', 'tutorials', 'help'],
        path: '/resources'
    },
    {
        id: 'page-support',
        title: 'Support',
        category: 'Page',
        description: 'Get help and support for DREAMACTIC products and services.',
        keywords: ['support', 'help', 'contact', 'assistance', 'customer service'],
        path: '/support'
    },
    {
        id: 'page-showcase',
        title: 'Showcase',
        category: 'Page',
        description: 'See DREAMACTIC AI agents in action. Explore demos and use cases.',
        keywords: ['showcase', 'demo', 'examples', 'use cases', 'demonstrations'],
        path: '/showcase'
    },

    // Platform Features
    {
        id: 'feature-orchestration',
        title: 'Orchestration',
        category: 'Feature',
        description: 'Global Swarm Logic - Coordinate thousands of autonomous agents in real-time.',
        keywords: ['orchestration', 'swarm', 'coordination', 'agents', 'real-time', 'platform'],
        path: '/products/platform'
    },
    {
        id: 'feature-deployment',
        title: 'Deployment',
        category: 'Feature',
        description: 'One-Click Agent Deployment - Launch agents instantly across cloud infrastructure.',
        keywords: ['deployment', 'cloud', 'launch', 'infrastructure', 'one-click', 'platform'],
        path: '/products/platform'
    },
    {
        id: 'feature-monitoring',
        title: 'Monitoring',
        category: 'Feature',
        description: 'Real-Time Agent Monitoring - Track performance, health, and metrics of all agents.',
        keywords: ['monitoring', 'tracking', 'performance', 'metrics', 'analytics', 'platform'],
        path: '/products/platform'
    },

    // Agentic Agents
    {
        id: 'agent-sdr',
        title: 'SDR-X',
        category: 'Feature',
        description: 'Autonomous Sales Development Representative - Automate outreach, qualification, and follow-ups.',
        keywords: ['sdr', 'sales', 'outreach', 'automation', 'lead generation', 'agentic'],
        path: '/products/agentic'
    },
    {
        id: 'agent-alpha',
        title: 'Alpha Seeker',
        category: 'Feature',
        description: 'Market Research Agent - Discover trends, analyze competitors, and identify opportunities.',
        keywords: ['alpha', 'research', 'market analysis', 'trends', 'competitors', 'agentic'],
        path: '/products/agentic'
    },
    {
        id: 'agent-ops',
        title: 'Ops Commander',
        category: 'Feature',
        description: 'Operations Automation Agent - Streamline workflows and optimize business processes.',
        keywords: ['operations', 'automation', 'workflows', 'optimization', 'efficiency', 'agentic'],
        path: '/products/agentic'
    }
];

/**
 * Search function that filters the index based on query
 * @param {string} query - Search query
 * @returns {Array} - Array of matching results
 */
export const searchContent = (query) => {
    if (!query || query.trim().length === 0) {
        return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    const results = [];

    searchIndex.forEach(item => {
        let score = 0;

        // Exact title match (highest priority)
        if (item.title.toLowerCase() === normalizedQuery) {
            score += 100;
        }
        // Title starts with query
        else if (item.title.toLowerCase().startsWith(normalizedQuery)) {
            score += 50;
        }
        // Title contains query
        else if (item.title.toLowerCase().includes(normalizedQuery)) {
            score += 30;
        }

        // Description match
        if (item.description.toLowerCase().includes(normalizedQuery)) {
            score += 20;
        }

        // Keywords match
        const keywordMatch = item.keywords.some(keyword =>
            keyword.toLowerCase().includes(normalizedQuery)
        );
        if (keywordMatch) {
            score += 15;
        }

        // Category match
        if (item.category.toLowerCase().includes(normalizedQuery)) {
            score += 10;
        }

        if (score > 0) {
            results.push({ ...item, score });
        }
    });

    // Sort by score (highest first) and return top 8 results
    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, 8);
};
