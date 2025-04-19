<script lang="ts">
    export let differentiators: Array<{
        title: string;
        description: string;
        icon: string;
        points: string[];
    }>;
</script>

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
