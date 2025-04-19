<script lang="ts">
    import { onMount } from 'svelte';
    
    // Valores centrales de MoneyT extraídos del manifesto
    const coreValues = [
        {
            title: "Transparency",
            description: "We build in public, sharing our code and strategic decisions with our community.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>`
        },
        {
            title: "Privacy",
            description: "We safeguard our users' information, giving them complete control over their data.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>`
        },
        {
            title: "Accessibility",
            description: "We offer an intuitive experience backed by a dynamic pricing model, adapted to various global economies.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>`
        }
    ];
    
    // Hitos del proyecto (roadmap del manifesto)
    const milestones = [
        {
            date: "January 3, 2025",
            title: "Launch of Android App",
            status: "completed"
        },
        {
            date: "Q1 2025",
            title: "Implementation of the Accounting Core",
            status: "in-progress"
        },
        {
            date: "Q2 2025",
            title: "Development of Landing Page",
            status: "in-progress"
        },
        {
            date: "Q3 2025",
            title: "Development of Backend (Cloud & Self-hosted)",
            status: "planned"
        },
        {
            date: "Q4 2025",
            title: "Integration with Open Banking Platforms",
            status: "planned"
        }
    ];
</script>

<svelte:head>
    <title>About | Our Mission, Values & Story</title>
    <meta name="description" content="Learn about MoneyT's mission to simplify personal finance management through robust, intuitive, and accessible tools built in public." />
</svelte:head>

<section class="bg-background py-16 md:py-24">
    <div class="container mx-auto px-4">
        <!-- Hero section -->
        <div class="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <div class="inline-block p-3 bg-primary/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-3.6 5.7" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8a5 5 0 017.54.54l3.05 3.05A5 5 0 0120.05 21H16" />
                </svg>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-text">Our Mission: Simplify Your Finances</h1>
            <p class="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
                At MoneyT, we believe that personal finance management should be robust, intuitive, and accessible to everyone.
                Our vision is to eliminate financial complexity by offering advanced accounting tools in an automated, easy-to-use platform.
            </p>
        </div>
        
        <!-- Vision section with image -->
        <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-24">
            <div>
                <h2 class="text-3xl font-bold mb-6 text-text">Our Vision</h2>
                <p class="text-text-light mb-6">
                    We strive to create an environment where every user can make informed decisions, optimize their resources, 
                    and achieve greater economic stability through intuitive financial tools.
                </p>
                <p class="text-text-light">
                    Our platform integrates advanced accounting processes into a simple interface, 
                    designed to simplify and automate financial administration so you can focus on what matters most.
                </p>
                
                <div class="mt-8">
                    <a href="/features" class="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                        Discover Our Features
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <!-- Mockup/Visual representing financial management -->
            <div class="relative h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center p-8">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class="mb-2 text-primary font-bold">MoneyT</div>
                        <p class="text-text-light">Financial visualization mockup</p>
                        
                        <!-- Placeholder financial charts -->
                        <div class="mt-6 grid grid-cols-2 gap-4">
                            <div class="h-12 bg-primary/10 rounded flex items-center justify-center">
                                <div class="w-3/4 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <div class="h-12 bg-primary/10 rounded flex items-center justify-center">
                                <div class="w-1/2 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <div class="h-12 bg-primary/10 rounded flex items-center justify-center">
                                <div class="w-1/4 h-1.5 bg-primary rounded-full"></div>
                            </div>
                            <div class="h-12 bg-primary/10 rounded flex items-center justify-center">
                                <div class="w-2/3 h-1.5 bg-primary rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Core values section -->
        <div class="max-w-6xl mx-auto mb-24">
            <h2 class="text-3xl font-bold mb-12 text-center text-text">Our Core Values</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {#each coreValues as value}
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-300 hover:border-primary hover:shadow-md transition-all duration-200">
                        <div class="text-primary mb-4">{@html value.icon}</div>
                        <h3 class="text-xl font-semibold mb-3 text-text">{value.title}</h3>
                        <p class="text-text-light">{value.description}</p>
                    </div>
                {/each}
            </div>
        </div>
        
        <!-- Journey timeline section -->
        <div class="max-w-4xl mx-auto mb-24">
            <h2 class="text-3xl font-bold mb-12 text-center text-text">Our Journey</h2>
            
            <div class="relative">
                <!-- Timeline line -->
                <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
                
                <!-- Milestone items -->
                <div class="space-y-12">
                    {#each milestones as milestone, i}
                        <div class="relative flex items-center justify-between {i % 2 === 0 ? 'flex-row-reverse' : ''}">
                            <!-- Dot -->
                            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white
                                        {milestone.status === 'completed' ? 'bg-primary' : 
                                          milestone.status === 'in-progress' ? 'bg-primary/50' : 'bg-gray-300'}">
                            </div>
                            
                            <!-- Content -->
                            <div class="w-5/12"></div>
                            <div class="w-5/12 p-5 rounded-lg bg-white shadow-sm border border-gray-300">
                                <div class="text-sm text-text-light mb-1">{milestone.date}</div>
                                <h4 class="text-lg font-semibold text-text">{milestone.title}</h4>
                                <div class="mt-2">
                                    {#if milestone.status === 'completed'}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
                                            Completed
                                        </span>
                                    {:else if milestone.status === 'in-progress'}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary-dark">
                                            In Progress
                                        </span>
                                    {:else}
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                                            Planned
                                        </span>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        
        <!-- Open source & community section -->
        <div class="bg-primary/10 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 class="text-2xl md:text-3xl font-bold mb-6 text-text">Built in Public</h2>
                    <p class="text-text-light mb-6">
                        At MoneyT, we adopt a "build in public" approach, meaning our development is transparent 
                        and open to collaboration. We believe in the power of community-driven innovation.
                    </p>
                    
                    <div class="flex flex-wrap gap-4">
                        <a href="https://github.com/moneyt-io" target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center bg-white hover:bg-gray-50 px-4 py-2 rounded-lg shadow-sm transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Contribute on GitHub
                        </a>
                        <a href="https://discord.com/invite/zG4yNyym" target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center bg-white hover:bg-gray-50 px-4 py-2 rounded-lg shadow-sm transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25-1.845-.275-3.68-.275-5.487 0-.164-.386-.406-.875-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                            </svg>
                            Join Our Discord
                        </a>
                    </div>
                </div>
                
                <!-- Community stats visualization -->
                <div class="bg-white rounded-xl p-6 shadow-sm">
                    <h3 class="text-lg font-semibold mb-4 text-text">Join Our Community</h3>
                    
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <div class="w-1/3 font-medium text-text">GitHub</div>
                            <div class="w-2/3">
                                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full bg-primary rounded-full" style="width: 65%"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="w-1/3 font-medium text-text">Discord</div>
                            <div class="w-2/3">
                                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full bg-primary rounded-full" style="width: 40%"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="w-1/3 font-medium text-text">Reddit</div>
                            <div class="w-2/3">
                                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div class="h-full bg-primary rounded-full" style="width: 25%"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center mt-6">
                            <a href="https://github.com/moneyt-io" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                                See our progress on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Final CTA -->
        <div class="max-w-4xl mx-auto text-center mt-24">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 text-text">Ready to join our mission?</h2>
            <p class="text-text-light mb-8 max-w-2xl mx-auto">
                Download MoneyT today and start your journey toward financial clarity and control.
            </p>
            <a href="/download" class="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm">
                Download Now
            </a>
        </div>
    </div>
</section>
