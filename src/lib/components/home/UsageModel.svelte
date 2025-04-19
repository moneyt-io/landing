<script lang="ts">
    export let testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    export let statsVisualizations: Array<{
        label: string;
        value: string;
    }>;
</script>

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
                <!-- Flow line (desktop) - Corregida la posición para que atraviese el centro de los círculos -->
                <div class="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-300 z-0"></div>
                
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
                                "{testimonial.quote}"
                            </p>
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
                    
                    <div class="flex flex-col justify-center">
                        <h3 class="text-xl font-semibold mb-4 text-text">Real Financial Insights</h3>
                        <p class="text-text-light mb-6">
                            MoneyT goes beyond simple tracking to provide actionable insights about your spending patterns,
                            investment performance, and overall financial health.
                        </p>
                        
                        <!-- Stats visualization -->
                        <div class="space-y-4">
                            {#each statsVisualizations as stat}
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
