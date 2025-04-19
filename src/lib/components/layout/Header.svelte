<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Logo from '$lib/components/common/Logo.svelte';

	function isActive(href: string) {
		return $page.url.pathname === href;
	}

	// Añadir state para manejar las estrellas y el menú móvil
	let stars = '★';
	let loading = true;
	let mobileMenuOpen = false;
	
	// Función para alternar el menú móvil
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

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
			<!-- Logo area - Left aligned -->
			<div class="flex items-center">
				<a href="/" class="flex items-center group">
					<Logo size={32} />
					<span class="ml-2 text-lg font-bold text-text transition-colors duration-200 group-hover:text-primary">MoneyT</span>
				</a>
				
				<!-- GitHub button - mejorado visualmente -->
				<a href="https://github.com/moneyt-io/app" target="_blank" rel="noopener noreferrer" 
				   class="ml-4 hidden md:flex items-center text-xs font-medium bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-all duration-200 hover:shadow-sm">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-text bi bi-github mr-1.5" viewBox="0 0 16 16">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
					</svg>
					<span class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="text-primary mr-1" viewBox="0 0 16 16">
							<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
						</svg>
						<span class="text-text">{loading ? '★' : stars}</span>
					</span>
				</a>
			</div>
			
			<!-- Main navigation - Right aligned -->
			<div class="flex items-center justify-end flex-grow">
				<!-- Navigation menu - Mejorado para desktop -->
				<div class="hidden lg:flex items-center space-x-4 mx-4">
					{#each [
						{ href: '/features', label: 'Features' },
						{ href: '/pricing', label: 'Pricing' },
						{ href: '/download', label: 'Download' },
						{ href: '/about', label: 'About' },
					] as { href, label }}
						<a 
							href={href} 
							class="px-3 py-2 rounded-md text-sm font-medium relative transition-colors duration-200 hover:text-primary"
							class:text-primary={isActive(href)}
							class:text-text={!isActive(href)}
						>
							{label}
							{#if isActive(href)}
								<span class="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"></span>
							{/if}
						</a>
					{/each}
				</div>
				
				<!-- Right side buttons - login and CTA -->
				<div class="flex items-center space-x-4">
					<a href="https://app.moneyt.io" class="hidden md:block text-sm font-medium text-text hover:text-primary transition-colors duration-200">
						Login
					</a>
					<!-- CTA button mejorado -->
					<a href="/" class="hidden md:block bg-primary text-white hover:bg-primary-dark text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
						Get Started
					</a>
					
					<!-- Mobile menu button - con funcionalidad -->
					<button 
						type="button" 
						on:click={toggleMobileMenu} 
						class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors duration-200" 
						aria-expanded={mobileMenuOpen}
					>
						<span class="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
						{#if mobileMenuOpen}
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{:else}
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						{/if}
					</button>
				</div>
			</div>
		</nav>
	</div>
	
	<!-- Mobile menu mejorado con transiciones -->
	<div 
		class="lg:hidden transition-all duration-300 ease-in-out overflow-hidden" 
		style="max-height: {mobileMenuOpen ? '300px' : '0px'}; opacity: {mobileMenuOpen ? '1' : '0'};"
	>
		<div class="px-4 pt-2 pb-3 space-y-1 bg-white shadow-inner border-t border-gray-100">
			{#each [
				{ href: '/features', label: 'Features' },
				{ href: '/pricing', label: 'Pricing' },
				{ href: '/download', label: 'Download' },
				{ href: '/about', label: 'About' },
			] as { href, label }}
				<a 
					href={href} 
					class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
					class:text-primary={isActive(href)}
					class:text-text={!isActive(href)}
					class:bg-gray-100={isActive(href)}
					on:click={() => mobileMenuOpen = false}
				>
					{label}
				</a>
			{/each}
			<!-- Añadimos Login y Get Started en el menú móvil -->
			<div class="pt-2 border-t border-gray-100">
				<a href="https://app.moneyt.io" class="block px-3 py-2 rounded-md text-base font-medium text-text hover:text-primary">
					Login
				</a>
				<a href="/" class="block px-3 py-2 mt-1 rounded-md text-base font-medium bg-primary text-white">
					Get Started
				</a>
			</div>
		</div>
	</div>
</header>
