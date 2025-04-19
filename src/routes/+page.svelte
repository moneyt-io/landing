<script lang="ts">
    import { onMount } from 'svelte';
    
    // Importar componentes
    import Hero from '$lib/components/home/Hero.svelte';
    import StatsBar from '$lib/components/home/StatsBar.svelte';
    import Advantages from '$lib/components/home/Advantages.svelte';
    import Features from '$lib/components/home/Features.svelte';
    import UsageModel from '$lib/components/home/UsageModel.svelte';
    import PricingSummary from '$lib/components/home/PricingSummary.svelte';
    import Community from '$lib/components/home/Community.svelte';
    import CtaSection from '$lib/components/home/CtaSection.svelte';
    
    // Importar datos centralizados
    import * as homeContent from '$lib/data/homeContent';
    
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
    <title>MoneyT - Advanced Personal Finance Management</title>
    <meta name="description" content="MoneyT integrates advanced accounting processes into a simple interface. Take full control of your personal finances with our powerful, intuitive platform." />
</svelte:head>

<!-- Componentes de página principal -->
<Hero />
<StatsBar stats={homeContent.stats} />
<Advantages differentiators={homeContent.differentiators} />
<Features keyFeatures={homeContent.keyFeatures} />
<UsageModel testimonial={homeContent.testimonial} statsVisualizations={homeContent.statsVisualizations} />
<PricingSummary plans={homeContent.pricingPlans} />
<Community communityLinks={homeContent.communityLinks} roadmapHighlights={homeContent.roadmapHighlights} />
<CtaSection />
