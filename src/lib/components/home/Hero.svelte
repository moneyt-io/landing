<script lang="ts">
    // Props opcionales que permitirían personalizar el hero si es necesario
    export let title = "Take Full <span class=\"text-primary\">Control</span> of Your Personal Finances";
    export let subtitle = "MoneyT integrates advanced accounting processes into a simple interface, designed for everyone who wants professional-grade financial tools without the complexity.";
</script>

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
                    {@html title}
                </h1>
                <p class="text-lg md:text-xl text-text-light mb-8">
                    {subtitle}
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
