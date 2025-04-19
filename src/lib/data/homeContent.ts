// Datos centralizados para la página principal

export const stats = {
    users: '0+',
    countries: '0+',
    transactions: '0M+'
};

export const keyFeatures = [
    {
        title: "Complete Financial Management",
        description: "Track income, expenses, investments and more with professional-grade tools made simple",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>`
    },
    {
        title: "Multi-currency Support",
        description: "Manage finances across different currencies with automatic conversions and real-time rates",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>`
    },
    {
        title: "Bank Synchronization",
        description: "Connect to your financial institutions for automatic transaction imports and reconciliation",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>`
    }
];

export const differentiators = [
    {
        title: "Typical Finance App",
        description: "Basic tracking with limited categorization and analysis capabilities",
        icon: "🔄",
        points: ["Manual entry", "Limited insights", "Basic reports"]
    },
    {
        title: "MoneyT",
        description: "Professional accounting tools in an intuitive package",
        icon: "⚡",
        points: ["Double-entry system", "Predictive analytics", "Advanced reporting"]
    }
];

export const roadmapHighlights = [
    { title: "Android App Launch", status: "completed" },
    { title: "Accounting Core", status: "in-progress" },
    { title: "Web Interface", status: "planned" },
    { title: "Open Banking Integration", status: "planned" }
];

export const testimonial = {
    quote: "MoneyT transformed how I manage my personal finances. The combination of powerful features and intuitive design is unlike anything I've used before.",
    author: "Sarah J.",
    role: "Small Business Owner"
};

export const statsVisualizations = [
    {label: 'Budget Utilization', value: '72%'},
    {label: 'Savings Rate', value: '18%'}
];

export const communityLinks = [
    {name: 'GitHub', url: 'https://github.com/moneyt-io', icon: 'github'},
    {name: 'LinkedIn', url: 'https://www.linkedin.com/company/moneyt-io', icon: 'linkedin'},
    {name: 'Reddit', url: 'https://www.reddit.com/r/moneyt_io/', icon: 'reddit'},                        
    {name: 'Discord', url: 'https://discord.com/invite/zG4yNyym', icon: 'discord'}
];

export const pricingPlans = [
    {
        name: "Free",
        price: "0",
        description: "Full mobile app access without additional services",
        features: ['Income & Expense Tracking', 'Chart of Accounts', 'Budgeting Tools'],
        cta: "Start for Free",
        ctaLink: "/download",
        highlighted: false
    },
    {
        name: "Cloud",
        price: "15",
        period: "/month",
        description: "All features and services on mobile and web",
        features: ['All Free Features', 'Web App Access', 'Bank Synchronization', 'Predictive Analytics'],
        cta: "Subscribe to Cloud",
        ctaLink: "/pricing",
        highlighted: true
    },
    {
        name: "Dev",
        price: "150",
        period: "one-time",
        description: "Self-host your own backend, full access",
        features: ['All Cloud Features', 'Self-hosted Backend', 'Full Source Code', 'Lifetime Updates'],
        cta: "Get Dev Version",
        ctaLink: "/pricing",
        highlighted: false
    }
];
