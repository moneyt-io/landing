<script lang="ts">
	import '../app.css'; // Asegurarse que esta línea esté presente
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
