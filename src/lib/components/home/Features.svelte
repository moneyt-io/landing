<script lang="ts">
    export let keyFeatures: Array<{
        title: string;
        description: string;
        icon: string;
    }>;
</script>

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
