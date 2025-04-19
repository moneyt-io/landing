<script lang="ts">
    export let title = "Ready to transform your finances?";
    export let subtitle = "Join thousands of users who have already discovered the power of professional financial management made simple with MoneyT.";
</script>

<section id="cta" class="bg-primary/10 py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text">{title}</h2>
            <p class="text-lg text-text-light mb-10">
                {subtitle}
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
