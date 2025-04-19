<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import Features from '$lib/sections/Features.svelte'; // Import Features
	import Pricing from '$lib/sections/Pricing.svelte';   // Import Pricing
	import About from '$lib/sections/About.svelte';     // Import About
	import Community from '$lib/sections/Community.svelte'; // Import Community
	import CtaFinal from '$lib/sections/CtaFinal.svelte';
</script>

<Hero />

<!-- Render Features -->
<Features />

<!-- Render Pricing -->
<Pricing />

<!-- Render About -->
<About />

<!-- Render Community -->
<Community />

<CtaFinal />
