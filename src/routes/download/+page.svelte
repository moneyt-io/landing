<script lang="ts">
	import { onMount } from 'svelte';
	
	// Métricas ficticias para mostrar el éxito del producto
	const stats = {
		users: '0+',
		countries: '0+',
		transactions: '0M+',
		rating: '5'
	};
	
	// Datos sobre plataformas soportadas
	const platforms = {
		mobile: [
			{ name: 'iOS', version: '14.0 or later', icon: 'apple' },
			{ name: 'Android', version: '8.0 or later', icon: 'android' }
		],
		desktop: [
			{ name: 'Web App', version: 'All modern browsers', icon: 'globe' }
		]
	};
</script>

<svelte:head>
	<title>Download | App for Mobile and Web</title>
	<meta name="description" content="Download the MoneyT app for iOS, Android, or access our web app for complete control of your personal finances." />
</svelte:head>

<section class="bg-background py-16 md:py-24">
	<div class="container mx-auto px-4 text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-6 text-text">Download MoneyT</h1>
		<p class="text-xl text-text-light max-w-2xl mx-auto mb-12">
			Get started with MoneyT on your favorite platform and take control of your finances today.
		</p>
		
		<!-- Hero banner with device mockup -->
		<div class="relative max-w-5xl mx-auto mb-16 md:mb-24">
			<div class="bg-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
				<div class="grid md:grid-cols-2 gap-8 items-center">
					<div class="text-left">
						<h2 class="text-3xl font-bold text-text mb-4">Your finances, anywhere</h2>
						<p class="text-text-light mb-6">
							MoneyT syncs across all your devices, so you can manage your money wherever you are.
						</p>
						
						<!-- Mobile download buttons -->
						<div class="flex flex-wrap gap-4">
							<a href="#" class="inline-flex items-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-sm">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 384 512">
									<path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
								</svg>
								<div>
									<div class="text-xs">Download on the</div>
									<div class="text-sm font-semibold">App Store</div>
								</div>
							</a>
							
							<a href="https://play.google.com/store/apps/details?id=io.moneyt.app" class="inline-flex items-center bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-sm">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 512 512">
									<path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
								</svg>
								<div>
									<div class="text-xs">GET IT ON</div>
									<div class="text-sm font-semibold">Google Play</div>
								</div>
							</a>
						</div>
					</div>
					
					<!-- Device mockup -->
					<div class="relative h-96 flex justify-center">
						<div class="absolute transform -translate-x-1/2 -translate-y-1/4">
							<div class="w-56 h-96 bg-black rounded-3xl p-2 shadow-lg rotate-12 relative overflow-hidden">
								<div class="absolute inset-1 rounded-3xl bg-primary-dark overflow-hidden flex items-center justify-center">
									<span class="text-white font-semibold">APP SCREENSHOT</span>
								</div>
							</div>
						</div>
						<div class="absolute transform translate-x-8">
							<div class="w-56 h-96 bg-black rounded-3xl p-2 shadow-lg relative z-10 overflow-hidden">
								<div class="absolute inset-1 rounded-3xl bg-white overflow-hidden flex items-center justify-center">
									<div class="w-full h-full bg-gradient-to-br from-primary/20 via-white to-primary/20 flex flex-col items-center justify-center p-4">
										<div class="w-12 h-12 mb-2 rounded-xl bg-primary flex items-center justify-center">
											<span class="text-white font-bold">M</span>
										</div>
										<p class="font-semibold text-text">MoneyT App</p>
										<div class="mt-4 w-full h-4 bg-gray-200 rounded-full"></div>
										<div class="mt-2 w-full h-4 bg-gray-200 rounded-full"></div>
										<div class="mt-2 w-3/4 h-4 bg-gray-200 rounded-full"></div>
										
										<div class="mt-8 grid grid-cols-2 gap-2 w-full">
											<div class="h-16 bg-primary/10 rounded-lg"></div>
											<div class="h-16 bg-primary/10 rounded-lg"></div>
											<div class="h-16 bg-primary/10 rounded-lg"></div>
											<div class="h-16 bg-primary/10 rounded-lg"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
			{#each Object.entries(stats) as [key, value]}
				<div class="bg-white p-4 rounded-lg shadow-sm">
					<p class="text-3xl md:text-4xl font-bold text-primary">{value}</p>
					<p class="text-text-light capitalize">{key}</p>
				</div>
			{/each}
		</div>
		
		<!-- System Requirements -->
		<div class="max-w-4xl mx-auto mb-16">
			<h2 class="text-2xl md:text-3xl font-bold mb-8 text-text">Supported Platforms</h2>
			
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Mobile Platforms -->
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<h3 class="text-xl font-bold mb-4 text-text flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary" viewBox="0 0 24 24" fill="currentColor">
							<path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25M14.25 3l-4.5 18"></path>
						</svg>
						Mobile Apps
					</h3>
					
					<div class="space-y-4">
						{#each platforms.mobile as platform}
							<div class="flex items-start">
								<div class="bg-gray-100 rounded-full p-2 mr-4">
									{#if platform.icon === 'apple'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-text" viewBox="0 0 384 512">
											<path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
										</svg>
									{:else if platform.icon === 'android'}
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-text" viewBox="0 0 576 512">
											<path fill="currentColor" d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48l47.94-83a10 10 0 1 0-17.27-10.16l-48.54 84.11a301.25 301.25 0 0 0-246.56 0l-48.43-84.1a10 10 0 1 0-17.27 10.15l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55z"/>
										</svg>
									{/if}
								</div>
								<div>
									<h4 class="font-semibold text-text">{platform.name}</h4>
									<p class="text-text-light text-sm">{platform.version}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
				
				<!-- Web Platform -->
				<div class="bg-white p-6 rounded-lg shadow-sm">
					<h3 class="text-xl font-bold mb-4 text-text flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
						</svg>
						Web App
					</h3>
					
					<div class="space-y-4">
						<div class="flex items-start">
							<div class="bg-gray-100 rounded-full p-2 mr-4">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-text" viewBox="0 0 512 512">
									<path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"/>
								</svg>
							</div>
							<div>
								<h4 class="font-semibold text-text">Web Application</h4>
								<p class="text-text-light text-sm">Access from any browser at <a href="https://app.moneyt.io" class="text-primary hover:underline">app.moneyt.io</a></p>
							</div>
						</div>
						
						<div class="mt-4">
							<a href="https://app.moneyt.io" class="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-sm">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
								</svg>
								Launch Web App
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Call to Action -->
		<div class="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
			<h2 class="text-2xl md:text-3xl font-bold mb-4 text-text">Ready to take control of your finances?</h2>
			<p class="text-text-light mb-8 max-w-xl mx-auto">
				Download MoneyT today and join thousands of users who are already managing their money better.
			</p>
			
			<div class="flex flex-wrap justify-center gap-4">
				<a href="#" class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm">
					Download Now
				</a>
				<a href="/features" class="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
					Learn More
				</a>
			</div>
		</div>
	</div>
</section>
