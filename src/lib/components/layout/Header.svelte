<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	function isActive(href: string) {
		return $page.url.pathname === href;
	}

	// Añadir state para manejar las estrellas
	let stars = '★'; // Valor por defecto hasta que cargue
	let loading = true;

	onMount(async () => {
		try {
			// Fetch a la API de GitHub para obtener el número de estrellas
			const response = await fetch('https://api.github.com/repos/moneyt-io/app');
			if (response.ok) {
				const data = await response.json();
				stars = data.stargazers_count.toString();
				loading = false;
			}
		} catch (error) {
			console.error('Error fetching GitHub stars:', error);
		}
	});
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
	<div class="container mx-auto px-4">
		<nav class="flex items-center justify-between h-16">
			<!-- Logo area -->
			<div class="flex items-center">
				<a href="/" class="text-xl font-bold text-neutral-900 flex items-center">
					<!-- Replace with actual logo -->
					<div class="text-primary font-bold mr-2">MoneyT</div>
				</a>
				
				<!-- GitHub button - updated to point to moneyt-io/app and show stars -->
				<a href="https://github.com/moneyt-io/app" target="_blank" rel="noopener noreferrer" 
				   class="ml-4 hidden md:flex items-center text-xs font-medium bg-neutral-100 hover:bg-neutral-200 px-3 py-1 rounded">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github mr-1.5" viewBox="0 0 16 16">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
					</svg>
					<span>OPEN SOURCE</span>
					<span class="ml-2 bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700 min-w-6 text-center">
						{#if loading}
							★
						{:else}
							{stars}
						{/if}
					</span>
				</a>
			</div>
			
			<!-- Main navigation - centered like netbird -->
			<div class="hidden lg:flex items-center space-x-1">
				<a href="/features" class="px-3 py-2 rounded-md text-sm font-medium" 
				   class:text-primary={isActive('/features')} 
				   class:text-neutral-700={!isActive('/features')}>
					Features
				</a>
				<a href="/pricing" class="px-3 py-2 rounded-md text-sm font-medium" 
				   class:text-primary={isActive('/pricing')} 
				   class:text-neutral-700={!isActive('/pricing')}>
					Pricing
				</a>
				<a href="/download" class="px-3 py-2 rounded-md text-sm font-medium" 
				   class:text-primary={isActive('/download')} 
				   class:text-neutral-700={!isActive('/download')}>
					Download
				</a>
				<a href="/community" class="px-3 py-2 rounded-md text-sm font-medium" 
				   class:text-primary={isActive('/community')} 
				   class:text-neutral-700={!isActive('/community')}>
					Community
				</a>
				<a href="/about" class="px-3 py-2 rounded-md text-sm font-medium" 
				   class:text-primary={isActive('/about')} 
				   class:text-neutral-700={!isActive('/about')}>
					About
				</a>
			</div>
			
			<!-- Right side buttons - login and CTA -->
			<div class="flex items-center">
				<a href="https://app.moneyt.io" class="hidden md:block text-sm font-medium text-neutral-700 hover:text-primary px-4 py-2">
					Login
				</a>
				<a href="/" class="hidden md:block bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2 rounded transition-colors">
					Get Started
				</a>
				
				<!-- Mobile menu button -->
				<button type="button" class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary focus:outline-none" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<!-- Icon for menu (you can use a hamburger icon) -->
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</nav>
	</div>
	
	<!-- Mobile menu, show/hide based on menu state (requires JavaScript) -->
	<div class="hidden lg:hidden">
		<div class="px-2 pt-2 pb-3 space-y-1">
			<a href="/features" class="block px-3 py-2 rounded-md text-base font-medium" class:text-primary={isActive('/features')} class:text-neutral-700={!isActive('/features')}>
				Features
			</a>
			<!-- ... other menu items ... -->
		</div>
	</div>
</header>
