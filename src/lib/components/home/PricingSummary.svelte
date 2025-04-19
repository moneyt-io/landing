<script lang="ts">
    export let plans: Array<{
        name: string;
        price: string;
        period?: string;
        description: string;
        features: string[];
        cta: string;
        ctaLink: string;
        highlighted: boolean;
    }>;
</script>

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
                {#each plans as plan}
                    <div class="bg-white rounded-2xl overflow-hidden border {plan.highlighted ? 'border-primary shadow-md hover:shadow-lg transform md:-translate-y-4' : 'border-gray-300 shadow-sm hover:shadow-md'} transition-all duration-300">
                        <div class="p-6 {plan.highlighted ? 'bg-primary/10' : ''}">
                            {#if plan.highlighted}
                                <div class="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-primary text-white mb-2">POPULAR</div>
                            {/if}
                            <h3 class="text-2xl font-bold mb-1 text-text">{plan.name}</h3>
                            <div class="flex items-baseline mt-4 mb-4">
                                <span class="text-4xl font-extrabold text-text">${plan.price}</span>
                                {#if plan.period}
                                    <span class="text-lg ml-1 text-text-light">{plan.period}</span>
                                {/if}
                            </div>
                            <p class="text-text-light text-sm">{plan.description}</p>
                        </div>
                        
                        <div class="border-t border-gray-100 p-6">
                            <ul class="space-y-3">
                                {#each plan.features as feature}
                                    <li class="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="{plan.highlighted ? 'text-text' : 'text-text-light'} text-sm">{feature}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                        
                        <div class="p-6">
                            <a href={plan.ctaLink} class="block w-full py-3 px-6 rounded-lg font-semibold text-center {plan.highlighted ? 'bg-primary hover:bg-primary-dark text-white' : 'border border-primary text-primary hover:bg-primary/5'} transition-colors {plan.highlighted ? 'shadow-sm' : ''}">
                                {plan.cta}
                            </a>
                        </div>
                    </div>
                {/each}
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
