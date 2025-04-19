<script lang="ts">
    // Características agrupadas según el manifesto
    const featureGroups = [
        {
            title: "Financial Management",
            description: "Comprehensive tools for complete control of your personal finances",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>`,
            features: [
                { 
                    name: "Income & Expense Tracking", 
                    description: "Record and categorize all your financial transactions with precision" 
                },
                { 
                    name: "Chart of Accounts", 
                    description: "Professional accounting structure for organizing your finances" 
                },
                { 
                    name: "Budgeting Tools", 
                    description: "Set and track budgets to stay on top of your spending goals" 
                },
                { 
                    name: "Credit Cards", 
                    description: "Monitor balances, payments, and interest across all your cards" 
                },
                { 
                    name: "Loans", 
                    description: "Track loan payments, interest, and remaining balances" 
                },
                { 
                    name: "Multi-currency", 
                    description: "Handle transactions in multiple currencies with automatic conversion" 
                }
            ]
        },
        {
            title: "Advanced Features",
            description: "Specialized tools for sophisticated financial management",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>`,
            features: [
                { 
                    name: "Investments", 
                    description: "Track portfolio performance, dividends, and capital gains" 
                },
                { 
                    name: "Cryptoassets", 
                    description: "Monitor your cryptocurrency holdings with real-time valuations" 
                },
                { 
                    name: "Shared Expenses", 
                    description: "Split and manage expenses with family, roommates, or travel companions" 
                },
                { 
                    name: "Contacts", 
                    description: "Manage payees and recipients for smoother transaction recording" 
                },
                { 
                    name: "Transfers", 
                    description: "Move money between accounts with automatic double-entry accounting" 
                }
            ]
        },
        {
            title: "Integrations & Services",
            description: "Connected features that enhance your financial experience",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>`,
            features: [
                { 
                    name: "Bank Synchronization", 
                    description: "Automatically import transactions from your financial institutions" 
                },
                { 
                    name: "Smart Notifications", 
                    description: "Stay informed via push, email, or WhatsApp alerts" 
                },
                { 
                    name: "Voice Automations", 
                    description: "Record transactions and inquire about your finances using voice commands" 
                },
                { 
                    name: "Predictive Analysis", 
                    description: "AI-powered forecasting for expenses, income, and budget adherence" 
                },
                { 
                    name: "Collaborative Finances", 
                    description: "Share financial management with family members or business partners" 
                }
            ]
        }
    ];

    // Testimonials (placeholders)
    const testimonials = [
        {
            quote: "MoneyT transformed how I manage my personal finances. The combination of powerful features and intuitive design is unmatched.",
            author: "Sarah J.",
            role: "Small Business Owner"
        },
        {
            quote: "The multi-currency support is perfect for my international lifestyle. Finally, I can see my complete financial picture in one place.",
            author: "Miguel R.",
            role: "Digital Nomad"
        }
    ];
</script>

<svelte:head>
    <title>Features | Powerful Features</title>
    <meta name="description" content="Explore MoneyT's comprehensive financial management features, from expense tracking to investments, multi-currency support, and AI-powered analytics." />
</svelte:head>

<section class="bg-background pt-16 md:pt-24 pb-8">
    <div class="container mx-auto px-4">
        <!-- Hero section -->
        <div class="text-center max-w-4xl mx-auto mb-16">
            <div class="inline-block p-3 bg-primary/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-text">Powerful Features for Complete Financial Control</h1>
            <p class="text-lg text-text-light">
                MoneyT integrates advanced accounting processes into a simple, intuitive interface.
                Discover all the tools you need to manage your finances effectively.
            </p>
        </div>
        
        <!-- Feature highlight with screenshot -->
        <div class="bg-gray-100 rounded-2xl p-6 md:p-10 mb-24">
            <div class="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-text">Everything You Need in One Place</h2>
                    <p class="text-text-light mb-6">
                        From basic expense tracking to advanced investment analytics, 
                        MoneyT brings professional accounting tools to your personal finances.
                    </p>
                    
                    <ul class="space-y-3">
                        {#each ['Multi-currency Support', 'Double-entry Accounting', 'Bank Synchronization', 'Predictive Analytics'] as highlight}
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <span class="text-text">{highlight}</span>
                            </li>
                        {/each}
                    </ul>
                    
                    <div class="mt-8">
                        <a href="/download" class="inline-flex items-center text-white bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-sm">
                            Try It Free
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                
                <!-- App screenshot mockup -->
                <div class="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                        <div class="p-4 rounded-lg bg-white shadow-sm">
                            <div class="flex items-center justify-between mb-4">
                                <div class="font-bold text-text">Dashboard Overview</div>
                                <div class="text-primary font-bold">$16,429.58</div>
                            </div>
                            
                            <!-- Mock chart -->
                            <div class="space-y-2 mb-4">
                                <div class="flex items-center">
                                    <div class="w-full bg-gray-200 rounded-full h-2">
                                        <div class="bg-primary h-2 rounded-full" style="width: 70%"></div>
                                    </div>
                                    <span class="ml-2 text-sm text-text-light">Income</span>
                                </div>
                                <div class="flex items-center">
                                    <div class="w-full bg-gray-200 rounded-full h-2">
                                        <div class="bg-primary-dark h-2 rounded-full" style="width: 45%"></div>
                                    </div>
                                    <span class="ml-2 text-sm text-text-light">Expenses</span>
                                </div>
                            </div>
                            
                            <!-- Mock accounts -->
                            <div class="space-y-2">
                                {#each ['Checking Account', 'Savings Account', 'Investment Portfolio'] as account, i}
                                    <div class="flex items-center justify-between p-2 bg-gray-100 rounded">
                                        <span class="text-sm text-text">{account}</span>
                                        <span class="text-sm font-medium text-text">${(5000 * (3-i) + Math.random() * 1000).toFixed(2)}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Feature groups -->
        {#each featureGroups as group, index}
            <div class="mb-24">
                <div class="flex items-center mb-10">
                    <div class="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                        {@html group.icon}
                    </div>
                    <div>
                        <h2 class="text-2xl md:text-3xl font-bold text-text">{group.title}</h2>
                        <p class="text-text-light">{group.description}</p>
                    </div>
                </div>
                
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each group.features as feature}
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-300 hover:border-primary hover:shadow-md transition-all duration-200">
                            <h3 class="text-lg font-semibold mb-2 text-text">{feature.name}</h3>
                            <p class="text-text-light text-sm">{feature.description}</p>
                        </div>
                    {/each}
                </div>
                
                <!-- Alternating rows with image mockups -->
                {#if index % 2 === 0}
                    <div class="mt-12 bg-primary/5 rounded-xl p-6 overflow-hidden">
                        <div class="flex flex-col md:flex-row items-center">
                            <div class="w-full md:w-1/3 mb-6 md:mb-0">
                                <div class="bg-white p-4 rounded-lg shadow-sm transform rotate-1">
                                    <!-- Placeholder for feature illustration -->
                                    <div class="h-40 bg-gradient-to-r from-primary/20 to-primary/5 rounded flex items-center justify-center">
                                        <span class="text-primary font-medium">Feature Visualization</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-2/3 md:pl-10">
                                <h3 class="text-xl font-semibold mb-2 text-text">Seamless Experience Across Devices</h3>
                                <p class="text-text-light">
                                    Your data syncs automatically between the mobile app and web interface, 
                                    providing a consistent experience no matter which device you're using.
                                </p>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
        
        <!-- Testimonials -->
        <div class="bg-gray-100 rounded-2xl p-8 md:p-12 mb-24">
            <h2 class="text-2xl md:text-3xl font-bold mb-10 text-center text-text">What Our Users Say</h2>
            
            <div class="grid md:grid-cols-2 gap-8">
                {#each testimonials as testimonial}
                    <div class="bg-white p-6 rounded-xl shadow-sm relative">
                        <svg class="absolute text-primary/20 h-16 w-16 -top-4 -left-4 transform -rotate-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <div class="ml-6">
                            <p class="text-text mb-4 italic">{testimonial.quote}</p>
                            <div class="flex items-center">
                                <div class="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                    {testimonial.author[0]}
                                </div>
                                <div class="ml-3">
                                    <div class="font-medium text-text">{testimonial.author}</div>
                                    <div class="text-text-light text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        
        <!-- Call to action -->
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-text">Ready to take control of your finances?</h2>
            <p class="text-text-light mb-8">
                Start your financial journey with MoneyT's powerful and intuitive tools.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/download" class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm">
                    Download Now
                </a>
                <a href="/pricing" class="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                    View Pricing
                </a>
            </div>
        </div>
    </div>
</section>
