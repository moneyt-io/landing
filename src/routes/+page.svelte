<script lang="ts">
    import { onMount } from 'svelte';
    
    // Stats ficticios para la sección de estadísticas
    const stats = {
        users: '50,000+',
        countries: '120+',
        transactions: '1.2M+'
    };
    
    // Características destacadas para la sección principal
    const keyFeatures = [
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
    
    // Diferenciadores para la sección de ventajas competitivas
    const differentiators = [
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
    
    // Hitos del roadmap para la sección de desarrollo
    const roadmapHighlights = [
        { title: "Android App Launch", status: "completed" },
        { title: "Accounting Core", status: "in-progress" },
        { title: "Web Interface", status: "planned" },
        { title: "Open Banking Integration", status: "planned" }
    ];
    
    // Efecto para animaciones al hacer scroll
    let isVisible = false;
    
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        isVisible = true;
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const sections = document.querySelectorAll('.animate-on-scroll');
        sections.forEach(section => observer.observe(section));
        
        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    });
</script>

<svelte:head>
    <title>MoneyT | Advanced Personal Finance Management</title>
    <meta name="description" content="MoneyT integrates advanced accounting processes into a simple interface. Take full control of your personal finances with our powerful, intuitive platform." />
</svelte:head>

<!-- Hero Section: Reformulada para maximizar impacto -->
<section id="hero" class="relative bg-background overflow-hidden">
    <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="max-w-lg">
                <div class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary-dark font-medium mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Built in public • Open Source
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text">
                    Take Full <span class="text-primary">Control</span> of Your Personal Finances
                </h1>
                <p class="text-lg md:text-xl text-text-light mb-8">
                    MoneyT integrates advanced accounting processes into a simple interface, designed for everyone who wants professional-grade financial tools without the complexity.
                </p>
                
                <div class="flex flex-wrap gap-4">
                    <a href="/download" class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                        Get Started Free
                    </a>
                    <a href="/features" class="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                        Explore Features
                    </a>
                </div>
            </div>
            
            <!-- App mockup with interactive elements -->
            <div class="relative h-[500px] flex items-center justify-center">
                <div class="absolute h-[450px] w-[225px] bg-black rounded-[40px] p-3 shadow-xl transform rotate-12 translate-x-12">
                    <div class="h-full w-full bg-gray-100 rounded-[32px] overflow-hidden">
                        <!-- Placeholder for app screenshot #1 -->
                        <div class="h-full w-full bg-gradient-to-br from-primary/20 to-primary-dark/30 flex flex-col">
                            <div class="p-4 mt-10">
                                <div class="h-8 w-32 bg-white rounded-lg mb-4"></div>
                                <div class="h-20 w-full bg-white rounded-xl shadow-sm mb-4"></div>
                                <div class="h-16 w-full bg-white rounded-xl shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="relative h-[500px] w-[250px] bg-black rounded-[45px] p-3 shadow-2xl z-10">
                    <div class="absolute top-0 w-40 h-6 bg-black left-1/2 transform -translate-x-1/2 rounded-b-2xl z-10"></div>
                    <div class="h-full w-full bg-white rounded-[40px] overflow-hidden">
                        <div class="h-full w-full bg-gradient-to-br from-white to-primary/10 flex flex-col">
                            <!-- App header -->
                            <div class="bg-primary p-6">
                                <div class="flex justify-between items-center mb-4">
                                    <div class="text-white font-bold">MoneyT</div>
                                    <div class="h-8 w-8 bg-white/20 rounded-full"></div>
                                </div>
                                <div class="bg-white/10 p-4 rounded-lg">
                                    <div class="text-white text-sm mb-1">Total Balance</div>
                                    <div class="text-white text-2xl font-bold">$16,423.50</div>
                                </div>
                            </div>
                            
                            <!-- App content -->
                            <div class="p-4 flex-1">
                                <!-- Accounts section -->
                                <div class="mb-4">
                                    <div class="text-sm font-medium text-text mb-2">Accounts</div>
                                    <div class="space-y-2">
                                        <div class="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
                                            <div class="flex items-center">
                                                <div class="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-2">C</div>
                                                <div>Checking</div>
                                            </div>
                                            <div class="font-medium">$3,241.20</div>
                                        </div>
                                        <div class="bg-gray-100 p-3 rounded-lg flex justify-between items-center">
                                            <div class="flex items-center">
                                                <div class="h-8 w-8 bg-primary-dark/20 rounded-full flex items-center justify-center text-primary-dark font-bold mr-2">S</div>
                                                <div>Savings</div>
                                            </div>
                                            <div class="font-medium">$10,782.30</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Recent transactions -->
                                <div>
                                    <div class="text-sm font-medium text-text mb-2">Recent Transactions</div>
                                    <div class="space-y-2">
                                        {#each ['Groceries', 'Rent', 'Netflix'] as item, i}
                                            <div class="p-3 border-b border-gray-100 flex justify-between items-center">
                                                <div>{item}</div>
                                                <div class="text-text-light">-${(25 * (i + 1)).toFixed(2)}</div>
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="hidden md:flex justify-center mt-8">
            <a href="#advantages" class="animate-bounce text-text-light hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </div>
    </div>
</section>

<!-- Stats bar -->
<section class="bg-gray-100 py-8 border-y border-gray-300">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-around items-center text-center gap-8">
            {#each Object.entries(stats) as [key, value]}
                <div class="flex flex-col">
                    <span class="text-3xl font-bold text-primary">{value}</span>
                    <span class="text-text-light capitalize">{key}</span>
                </div>
            {/each}
            <div class="flex flex-col">
                <div class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-3xl font-bold text-primary">4.8</span>
                </div>
                <span class="text-text-light">User Rating</span>
            </div>
        </div>
    </div>
</section>

<!-- Competitive Advantages (New Section) -->
<section id="advantages" class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text">Not Just Another Finance App</h2>
            <p class="text-lg text-text-light">
                MoneyT combines the power of professional accounting tools with the simplicity of consumer apps,
                giving you unparalleled control over your financial life.
            </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mb-16">
            {#each differentiators as diff, i}
                <div class="bg-white rounded-2xl p-8 border shadow-sm {i === 1 ? 'border-primary' : 'border-gray-300'}">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-text">{diff.title}</h3>
                        <div class="text-3xl">{diff.icon}</div>
                    </div>
                    <p class="text-text-light mb-6">{diff.description}</p>
                    <ul class="space-y-3">
                        {#each diff.points as point}
                            <li class="flex items-center">
                                <div class={`w-5 h-5 rounded-full ${i === 1 ? 'bg-primary' : 'bg-gray-300'} text-white flex items-center justify-center mr-2`}>
                                    {i === 1 ? '✓' : '•'}
                                </div>
                                <span class={i === 1 ? 'text-text' : 'text-text-light'}>{point}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
        
        <!-- Visual comparison -->
        <div class="max-w-5xl mx-auto bg-gray-100 rounded-2xl p-6 md:p-10">
            <div class="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                    <h3 class="font-bold text-text mb-4">Without MoneyT</h3>
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="text-text-light">Manual entry of every transaction</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="text-text-light">Limited visibility across accounts</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">
                            <p class="text-text-light">Basic reporting without insights</p>
                        </div>
                        <div class="h-24 w-full bg-gray-300/50 rounded-lg flex items-center justify-center">
                            <span class="text-text-light">Generic visualization</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 class="font-bold text-primary mb-4">With MoneyT</h3>
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                            <p class="text-text">Automatic transaction import & categorization</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                            <p class="text-text">Complete financial picture across all accounts</p>
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary">
                            <p class="text-text">Rich analytics and predictive insights</p>
                        </div>
                        <div class="h-24 w-full bg-primary/10 rounded-lg flex items-center justify-center p-4">
                            <div class="w-full">
                                <div class="flex justify-between text-sm mb-1">
                                    <span class="text-text-light">Budget Usage</span>
                                    <span class="text-text">75%</span>
                                </div>
                                <div class="w-full h-2 bg-gray-200 rounded-full">
                                    <div class="h-2 bg-primary rounded-full" style="width:75%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Key Features Section -->
<section id="features" class="py-16 md:py-24 bg-gray-100">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text">Powerful Features Made Simple</h2>
            <p class="text-lg text-text-light">
                MoneyT brings professional-grade financial management tools to everyone,
                with an interface designed for simplicity and clarity.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
            {#each keyFeatures as feature}
                <div class="bg-white rounded-xl p-6 border border-gray-300 shadow-sm hover:border-primary hover:shadow-md transition-all duration-300">
                    <div class="text-primary mb-4">{@html feature.icon}</div>
                    <h3 class="text-xl font-semibold mb-3 text-text">{feature.title}</h3>
                    <p class="text-text-light">{feature.description}</p>
                </div>
            {/each}
        </div>
        
        <!-- Feature showcase -->
        <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-5 gap-6">
                <div class="md:col-span-2 flex flex-col justify-center">
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <h3 class="text-xl font-bold mb-4 text-text">Comprehensive Financial Tools</h3>
                        <p class="text-text-light mb-6">
                            From basic expense tracking to investment analysis and multi-currency management,
                            MoneyT grows with your financial needs.
                        </p>
                        <a href="/features" class="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                            Explore All Features
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                
                <!-- Feature visualization -->
                <div class="md:col-span-3 grid grid-cols-2 gap-4">
                    {#each ['Reports & Analytics', 'Investment Tracking', 'Budget Management', 'Automated Reconciliation'] as feature, i}
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-300 flex flex-col">
                            <div class="mb-3 h-24 bg-primary/10 rounded flex items-center justify-center">
                                <div class="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {#if i === 0}
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        {:else if i === 1}
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        {:else if i === 2}
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        {:else}
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        {/if}
                                    </svg>
                                </div>
                            </div>
                            <h4 class="text-lg font-medium text-text">{feature}</h4>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Usage Model (New Section) -->
<section id="usage-model" class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text">How MoneyT Works</h2>
            <p class="text-lg text-text-light">
                MoneyT simplifies financial management without sacrificing functionality,
                helping you make better decisions through a straightforward process.
            </p>
        </div>
        
        <!-- Process steps -->
        <div class="max-w-5xl mx-auto">
            <div class="relative">
                <!-- Flow line (desktop) -->
                <div class="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-300 z-0"></div>
                
                <!-- Flow steps -->
                <div class="grid md:grid-cols-4 gap-y-12 gap-x-4 relative z-10">
                    {#each ['Capture', 'Organize', 'Analyze', 'Decide'] as step, i}
                        <div class="flex flex-col items-center">
                            <div class="bg-white w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center mb-6 shadow-md">
                                <span class="text-xl font-bold text-primary">{i+1}</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-3 text-text text-center">{step}</h3>
                            <p class="text-text-light text-center">
                                {#if i === 0}
                                    Import transactions automatically or enter them manually
                                {:else if i === 1}
                                    Categorize and organize your financial data
                                {:else if i === 2}
                                    Get insights through reports and analytics
                                {:else}
                                    Make informed financial decisions
                                {/if}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
            
            <!-- Feature showcase with testimonial -->
            <div class="mt-20 bg-gray-100 rounded-2xl p-6 md:p-10">
                <div class="grid md:grid-cols-2 gap-10">
                    <div class="relative p-6 bg-white rounded-xl shadow-sm">
                        <svg class="absolute text-primary/10 h-32 w-32 -top-6 -left-6 transform -rotate-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <div class="ml-6 relative z-10">
                            <p class="text-text mb-6 italic">
                                "MoneyT transformed how I manage my personal finances. The combination of powerful features
                                and intuitive design is unlike anything I've used before."
                            </p>
                            <div class="flex items-center">
                                <div class="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    S
                                </div>
                                <div class="ml-3">
                                    <div class="font-medium text-text">Sarah J.</div>
                                    <div class="text-text-light text-sm">Small Business Owner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-col justify-center">
                        <h3 class="text-xl font-semibold mb-4 text-text">Real Financial Insights</h3>
                        <p class="text-text-light mb-6">
                            MoneyT goes beyond simple tracking to provide actionable insights about your spending patterns,
                            investment performance, and overall financial health.
                        </p>
                        
                        <!-- Stats visualization -->
                        <div class="space-y-4">
                            {#each [{label: 'Budget Utilization', value: '72%'}, {label: 'Savings Rate', value: '18%'}] as stat}
                                <div>
                                    <div class="flex justify-between text-sm mb-1">
                                        <span class="text-text-light">{stat.label}</span>
                                        <span class="text-text">{stat.value}</span>
                                    </div>
                                    <div class="w-full h-2 bg-gray-200 rounded-full">
                                        <div class="h-2 bg-primary rounded-full" style="width:{parseInt(stat.value)}%"></div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Simplified Pricing -->
<section id="pricing" class="py-16 md:py-24 bg-gray-100">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text">Simple, Transparent Pricing</h2>
            <p class="text-lg text-text-light">
                Choose the plan that's right for your financial journey. No hidden fees.
            </p>
        </div>
        
        <!-- Pricing cards -->
        <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Free Plan -->
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-1 text-text">Free</h3>
                        <div class="flex items-baseline mt-4 mb-4">
                            <span class="text-4xl font-extrabold text-text">$0</span>
                        </div>
                        <p class="text-text-light text-sm">Full mobile app access without additional services</p>
                    </div>
                    
                    <div class="border-t border-gray-100 p-6">
                        <ul class="space-y-3">
                            {#each ['Income & Expense Tracking', 'Chart of Accounts', 'Budgeting Tools'] as feature}
                                <li class="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-text-light text-sm">{feature}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    
                    <div class="p-6">
                        <a href="/download" class="block w-full py-3 px-6 rounded-lg font-semibold text-center border border-primary text-primary hover:bg-primary/5 transition-colors">
                            Start for Free
                        </a>
                    </div>
                </div>
                
                <!-- Cloud Plan -->
                <div class="bg-white rounded-2xl overflow-hidden border border-primary shadow-md hover:shadow-lg transition-all duration-300 transform md:-translate-y-4">
                    <div class="p-6 bg-primary/10">
                        <div class="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-primary text-white mb-2">POPULAR</div>
                        <h3 class="text-2xl font-bold mb-1 text-text">Cloud</h3>
                        <div class="flex items-baseline mt-4 mb-4">
                            <span class="text-4xl font-extrabold text-text">$15</span>
                            <span class="text-lg ml-1 text-text-light">/month</span>
                        </div>
                        <p class="text-text-light text-sm">All features and services on mobile and web</p>
                    </div>
                    
                    <div class="border-t border-gray-100 p-6">
                        <ul class="space-y-3">
                            {#each ['All Free Features', 'Web App Access', 'Bank Synchronization', 'Predictive Analytics'] as feature}
                                <li class="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-text text-sm">{feature}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    
                    <div class="p-6">
                        <a href="/pricing" class="block w-full py-3 px-6 rounded-lg font-semibold text-center bg-primary hover:bg-primary-dark text-white transition-colors shadow-sm">
                            Subscribe to Cloud
                        </a>
                    </div>
                </div>
                
                <!-- Dev Plan -->
                <div class="bg-white rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
                    <div class="p-6">
                        <h3 class="text-2xl font-bold mb-1 text-text">Dev</h3>
                        <div class="flex items-baseline mt-4 mb-4">
                            <span class="text-4xl font-extrabold text-text">$150</span>
                            <span class="text-lg ml-1 text-text-light">one-time</span>
                        </div>
                        <p class="text-text-light text-sm">Self-host your own backend, full access</p>
                    </div>
                    
                    <div class="border-t border-gray-100 p-6">
                        <ul class="space-y-3">
                            {#each ['All Cloud Features', 'Self-hosted Backend', 'Full Source Code', 'Lifetime Updates'] as feature}
                                <li class="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-text-light text-sm">{feature}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    
                    <div class="p-6">
                        <a href="/pricing" class="block w-full py-3 px-6 rounded-lg font-semibold text-center border border-primary text-primary hover:bg-primary/5 transition-colors">
                            Get Dev Version
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="mt-10 text-center">
                <p class="text-text-light">
                    <span class="inline-block p-1 bg-primary/10 rounded text-primary-dark text-sm font-medium">Dynamic Pricing</span>
                    Automatic regional discounts for fair global access.
                </p>
                <a href="/pricing" class="inline-block mt-4 text-primary hover:underline">View detailed plan comparison</a>
            </div>
        </div>
    </div>
</section>

<!-- Community & Open Source -->
<section id="community" class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text">Built in Public</h2>
            <p class="text-lg text-text-light">
                MoneyT is developed transparently, with open source code and community involvement at every step.
            </p>
        </div>
        
        <div class="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
            <!-- Community links -->
            <div class="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-300">
                <h3 class="text-xl font-semibold mb-6 text-text">Join Our Community</h3>
                
                <div class="space-y-4">
                    {#each [
                        {name: 'GitHub', url: 'https://github.com/moneyt-io', icon: 'github'},
                        {name: 'Discord', url: 'https://discord.com/invite/zG4yNyym', icon: 'discord'},
                        {name: 'Reddit', url: 'https://www.reddit.com/r/moneyt_io/', icon: 'reddit'},
                        {name: 'LinkedIn', url: 'https://www.linkedin.com/company/moneyt-io', icon: 'linkedin'}
                    ] as platform}
                        <a href={platform.url} target="_blank" rel="noopener noreferrer" 
                           class="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                                {#if platform.icon === 'github'}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                {:else if platform.icon === 'discord'}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25-1.845-.275-3.68-.275-5.487 0-.164-.386-.406-.875-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                                    </svg>
                                {:else if platform.icon === 'reddit'}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                                    </svg>
                                {:else}
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                {/if}
                            </div>
                            <span class="text-text">{platform.name}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-auto text-text-light" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    {/each}
                </div>
            </div>
            
            <!-- Development roadmap -->
            <div class="md:col-span-3 bg-white p-6 rounded-xl shadow-sm border border-gray-300">
                <h3 class="text-xl font-semibold mb-6 text-text">Project Roadmap</h3>
                
                <div class="space-y-6">
                    {#each roadmapHighlights as milestone}
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full border-4 flex-shrink-0
                                      {milestone.status === 'completed' ? 'bg-primary border-primary/30' : 
                                        milestone.status === 'in-progress' ? 'bg-primary/50 border-primary/20' : 'bg-gray-200 border-gray-100'}">
                            </div>
                            
                            <div class="ml-4 flex-grow">
                                <h4 class="font-medium text-text">{milestone.title}</h4>
                                <div class="mt-1">
                                    {#if milestone.status === 'completed'}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary-dark">
                                            Completed
                                        </span>
                                    {:else if milestone.status === 'in-progress'}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary-dark">
                                            In Progress
                                        </span>
                                    {:else}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                            Planned
                                        </span>
                                    {/if}
                                </div>
                            </div>
                            
                            <div class="h-1 flex-grow bg-gray-200">
                                <div class="h-1 bg-primary
                                          {milestone.status === 'completed' ? 'w-full' : 
                                            milestone.status === 'in-progress' ? 'w-1/2' : 'w-0'}">
                                </div>
                            </div>
                        </div>
                    {/each}
                    
                    <div class="mt-6 text-center">
                        <a href="https://github.com/moneyt-io" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                            See full roadmap on GitHub
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Final CTA -->
<section id="cta" class="bg-primary/10 py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text">Ready to transform your finances?</h2>
            <p class="text-lg text-text-light mb-10">
                Join thousands of users who have already discovered the power of professional financial 
                management made simple with MoneyT.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/download" class="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    Download Now
                </a>
                <a href="/features" class="bg-white border border-primary text-primary hover:bg-primary/5 px-10 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-sm">
                    Learn More
                </a>
            </div>
        </div>
    </div>
</section>
