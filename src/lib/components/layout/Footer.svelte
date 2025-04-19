<script lang="ts">
	import Logo from '$lib/components/common/Logo.svelte';
	const currentYear = new Date().getFullYear();
	
	let email = '';
	const handleSubmit = () => {
		if (email) {
			alert('Gracias por suscribirte!');
			email = '';
		}
	};
</script>

<footer class="bg-darkBg text-textLight pt-16 pb-8">
	<!-- Decorative top border -->
	<div class="h-1 bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30"></div>
	
	<!-- Main footer content -->
	<div class="container mx-auto px-6 py-16">
		<!-- Footer grid with improved layout -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
			<!-- Column 1: Company -->
			<div class="space-y-4">
				<h4 class="text-lightBg font-medium tracking-wide uppercase text-sm">Company</h4>
				<div class="w-10 h-0.5 bg-secondary rounded-full"></div>
				<ul class="mt-6 space-y-3">
					<li><a href="/about" class="text-textLight hover:text-primary-light transition-colors">About</a></li>
					<li><a href="#" class="text-textLight hover:text-primary-light transition-colors">Contact Us</a></li>
					<li><a href="#" class="text-textLight hover:text-primary-light transition-colors">Privacy</a></li>
				</ul>
			</div>
			
			<!-- Column 2: Resources -->
			<div class="space-y-4">
				<h4 class="text-lightBg font-medium tracking-wide uppercase text-sm">Resources</h4>
				<div class="w-10 h-0.5 bg-secondary rounded-full"></div>
				<ul class="mt-6 space-y-3">
					<li><a href="https://docs.moneyt.io" target="_blank" rel="noopener noreferrer" class="text-textLight hover:text-primary-light transition-colors">Documentation</a></li>
					<li><a href="/download" class="text-textLight hover:text-primary-light transition-colors">Downloads</a></li>
				</ul>
			</div>
			
			<!-- Column 3: Social Media -->
			<div class="space-y-4">
				<h4 class="text-lightBg font-medium tracking-wide uppercase text-sm">Connect</h4>
				<div class="w-10 h-0.5 bg-secondary rounded-full"></div>
				<div class="mt-6 flex flex-wrap gap-3">
					<a href="https://github.com/moneyt-io" target="_blank" rel="noopener noreferrer" 
					   class="flex items-center justify-center w-10 h-10 rounded-full bg-darkAccent hover:bg-secondary hover:text-darkBg transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
						</svg>
					</a>
					<a href="https://www.linkedin.com/company/moneyt-io" target="_blank" rel="noopener noreferrer"
					   class="flex items-center justify-center w-10 h-10 rounded-full bg-darkAccent hover:bg-secondary hover:text-darkBg transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
						</svg>
					</a>
					<a href="https://discord.com/invite/zG4yNyym" target="_blank" rel="noopener noreferrer"
					   class="flex items-center justify-center w-10 h-10 rounded-full bg-darkAccent hover:bg-secondary hover:text-darkBg transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25-1.845-.275-3.68-.275-5.487 0-.164-.386-.406-.875-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
						</svg>
					</a>
					<a href="https://www.reddit.com/r/moneyt_io/" target="_blank" rel="noopener noreferrer"
					   class="flex items-center justify-center w-10 h-10 rounded-full bg-darkAccent hover:bg-secondary hover:text-darkBg transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm6.744 9.333a.748.748 0 0 0-.744.667c0 1.724-2.618 3.131-6 3.131s-6-1.407-6-3.131a.748.748 0 0 0-.744-.667.75.75 0 0 0-.756.75c0 2.491 3.124 4.248 7.5 4.248s7.5-1.757 7.5-4.248a.75.75 0 0 0-.756-.75zM6.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
						</svg>
					</a>
				</div>
			</div>
			
			<!-- Column 4: Newsletter -->
			<div class="space-y-4">
				<h4 class="text-lightBg font-medium tracking-wide uppercase text-sm">Stay Updated</h4>
				<div class="w-10 h-0.5 bg-secondary rounded-full"></div>
				<p class="mt-6 text-sm text-textLight">Get notified about new features and updates.</p>
				
				<form class="mt-4 sm:flex" on:submit|preventDefault={handleSubmit}>
					<div class="relative rounded-md shadow-sm w-full">
						<input 
							type="email" 
							bind:value={email}
							placeholder="Email address" 
							class="w-full px-4 py-3 bg-darkAccent/50 backdrop-blur border border-darkAccent rounded-l-md focus:ring-1 focus:ring-secondary focus:border-secondary text-lightBg placeholder-textLight/50 text-sm"
							required 
						/>
					</div>
					<button 
						type="submit" 
						class="mt-3 sm:mt-0 w-full sm:w-auto flex-shrink-0 bg-secondary text-lightBg hover:bg-secondary/80 px-4 py-3 rounded-r-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-darkBg"
					>
						Subscribe
					</button>
				</form>
			</div>
		</div>
		
		<!-- Divider with subtle glow -->
		<div class="relative">
			<div class="absolute inset-0 flex items-center" aria-hidden="true">
				<div class="w-full border-t border-darkAccent"></div>
			</div>
			<div class="relative flex justify-center">
				<div class="bg-darkBg px-4">
					<div class="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center">
						<div class="h-2 w-2 rounded-full bg-secondary"></div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Footer bottom -->
		<div class="pt-8 flex flex-col md:flex-row justify-between items-center">
			<div class="flex items-center">
				<Logo size={24} />
				<span class="ml-2 font-medium text-lightBg">MoneyT</span>
			</div>
			<p class="text-sm text-textLight/70 mt-4 md:mt-0">Copyright © {currentYear} MONEYT, LLC. All Rights Reserved.</p>
		</div>
	</div>
</footer>
