<script lang="ts">
	// Datos de los planes basados en el manifesto
	const plans = [
		{
			name: "Free",
			price: "0",
			period: "",
			description: "Full mobile app access without additional services",
			highlighted: false,
			features: [
				{ text: "Income & Expense Tracking", included: true },
				{ text: "Chart of Accounts", included: true },
				{ text: "Multi-currency Support", included: true },
				{ text: "Budgeting Tools", included: true },
				{ text: "Mobile App Access", included: true },
				{ text: "Bank Synchronization", included: false },
				{ text: "Web App Access", included: false },
				{ text: "Voice Automations", included: false },
				{ text: "Predictive Analysis", included: false },
			],
			cta: "Start for Free",
			ctaColor: "border-primary text-primary hover:bg-primary/5"
		},
		{
			name: "Cloud",
			price: "15",
			period: "/month",
			description: "All features and services on both mobile and web",
			highlighted: true,
			features: [
				{ text: "Income & Expense Tracking", included: true },
				{ text: "Chart of Accounts", included: true },
				{ text: "Multi-currency Support", included: true },
				{ text: "Budgeting Tools", included: true },
				{ text: "Mobile App Access", included: true },
				{ text: "Bank Synchronization", included: true },
				{ text: "Web App Access", included: true },
				{ text: "Voice Automations", included: true },
				{ text: "Predictive Analysis", included: true },
			],
			cta: "Subscribe to Cloud",
			ctaColor: "bg-primary text-white hover:bg-primary-dark"
		},
		{
			name: "Dev",
			price: "150",
			period: "",
			description: "One-time payment, self-host your own backend",
			highlighted: false,
			features: [
				{ text: "Income & Expense Tracking", included: true },
				{ text: "Chart of Accounts", included: true },
				{ text: "Multi-currency Support", included: true },
				{ text: "Budgeting Tools", included: true },
				{ text: "Mobile App Access", included: true },
				{ text: "Bank Synchronization", included: true },
				{ text: "Web App Access", included: true },
				{ text: "Voice Automations", included: true },
				{ text: "Predictive Analysis", included: true },
				{ text: "Self-host Backend", included: true },
				{ text: "Full Source Code", included: true },
			],
			cta: "Get Dev Version",
			ctaColor: "border-primary text-primary hover:bg-primary/5"
		}
	];
	
	// Preguntas frecuentes sobre precios
	const faqs = [
		{
			question: "Do you offer regional pricing?",
			answer: "Yes, MoneyT implements a dynamic pricing model with discounts for users from different regions to facilitate global access to our services."
		},
		{
			question: "What's included in the Free plan?",
			answer: "The Free plan gives you full access to all core features in our mobile app, including income and expense tracking, budgeting tools, and multi-currency support."
		},
		{
			question: "Can I cancel my Cloud subscription anytime?",
			answer: "Yes, you can cancel your Cloud subscription at any time. You'll continue to have access until the end of your billing period."
		},
		{
			question: "What does the Dev version include?",
			answer: "The Dev version is a one-time payment of $150 that gives you access to set up your own backend and use our official store apps. It's perfect for developers who want more control."
		}
	];
</script>

<svelte:head>
    <title>MoneyT Pricing - Plans for Every Need</title>
    <meta name="description" content="Choose the right MoneyT plan for your financial management needs - Free, Cloud, or Dev with flexible pricing options." />
</svelte:head>

<section class="bg-background py-16 md:py-24">
	<div class="container mx-auto px-4">
		<!-- Header -->
		<div class="text-center max-w-3xl mx-auto mb-16">
			<h1 class="text-3xl md:text-5xl font-bold mb-6 text-text">Simple, Transparent Pricing</h1>
			<p class="text-lg text-text-light">
				Choose the plan that's right for your financial journey. No hidden fees, no surprises.
			</p>
		</div>
		
		<!-- Pricing Plans -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
			{#each plans as plan}
				<div class="flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg border {plan.highlighted ? 'border-primary shadow-md' : 'border-gray-300'}">
					<!-- Plan header -->
					<div class="px-6 pt-8 pb-6 {plan.highlighted ? 'bg-primary/10' : 'bg-white'}">
						<h3 class="text-2xl font-bold mb-1 text-text">{plan.name}</h3>
						<div class="flex items-baseline mt-4">
							<span class="text-4xl font-extrabold text-text">${plan.price}</span>
							<span class="text-lg ml-1 text-text-light">{plan.period}</span>
						</div>
						<p class="mt-2 text-sm text-text-light">{plan.description}</p>
					</div>
					
					<!-- Features list -->
					<div class="flex-grow px-6 py-4 bg-white border-t border-b border-gray-100">
						<ul class="space-y-3">
							{#each plan.features as feature}
								<li class="flex items-start">
									<span class="mr-2 text-lg {feature.included ? 'text-primary' : 'text-gray-300'}">
										{#if feature.included}
											<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
												<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
											</svg>
										{:else}
											<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
												<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
											</svg>
										{/if}
									</span>
									<span class="{feature.included ? 'text-text' : 'text-text-light'} text-sm">{feature.text}</span>
								</li>
							{/each}
						</ul>
					</div>
					
					<!-- CTA button -->
					<div class="px-6 py-6 bg-white">
						<button class="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-sm border {plan.ctaColor}">
							{plan.cta}
						</button>
					</div>
				</div>
			{/each}
		</div>
		
		<!-- Regional pricing info -->
		<div class="text-center bg-gray-100 rounded-xl p-8 max-w-3xl mx-auto mb-16">
			<div class="inline-block p-3 bg-primary/20 rounded-full mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<h3 class="text-xl font-bold mb-2 text-text">Dynamic Regional Pricing</h3>
			<p class="text-text-light">
				We believe everyone should have access to quality financial tools regardless of location. 
				Our pricing automatically adjusts based on your region's economy to ensure fair access.
			</p>
		</div>
		
		<!-- Comparison table (visible on larger screens) -->
		<div class="hidden lg:block max-w-5xl mx-auto mb-16">
			<h3 class="text-2xl font-bold mb-6 text-center text-text">Feature Comparison</h3>
			
			<div class="overflow-hidden border border-gray-300 rounded-xl">
				<table class="w-full">
					<thead>
						<tr class="bg-gray-100">
							<th class="py-4 px-6 text-left text-text">Feature</th>
							<th class="py-4 px-6 text-center text-text">Free</th>
							<th class="py-4 px-6 text-center text-primary font-bold">Cloud</th>
							<th class="py-4 px-6 text-center text-text">Dev</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-t border-gray-300">
							<td class="py-3 px-6 text-text">Mobile App Access</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
						</tr>
						<tr class="border-t border-gray-300 bg-gray-50">
							<td class="py-3 px-6 text-text">Core Financial Features</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
						</tr>
						<tr class="border-t border-gray-300">
							<td class="py-3 px-6 text-text">Multi-currency Support</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
						</tr>
						<tr class="border-t border-gray-300 bg-gray-50">
							<td class="py-3 px-6 text-text">Web App Access</td>
							<td class="py-3 px-6 text-center text-gray-400">✗</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
						</tr>
						<tr class="border-t border-gray-300">
							<td class="py-3 px-6 text-text">Bank Synchronization</td>
							<td class="py-3 px-6 text-center text-gray-400">✗</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
						</tr>
						<tr class="border-t border-gray-300 bg-gray-50">
							<td class="py-3 px-6 text-text">Predictive Analytics</td>
							<td class="py-3 px-6 text-center text-gray-400">✗</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
						</tr>
						<tr class="border-t border-gray-300">
							<td class="py-3 px-6 text-text">Self-hosted Backend</td>
							<td class="py-3 px-6 text-center text-gray-400">✗</td>
							<td class="py-3 px-6 text-center text-gray-400">✗</td>
							<td class="py-3 px-6 text-center text-primary">✓</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<!-- FAQ Section -->
		<div class="max-w-3xl mx-auto">
			<h3 class="text-2xl font-bold mb-8 text-center text-text">Frequently Asked Questions</h3>
			
			<div class="divide-y divide-gray-300">
				{#each faqs as faq, i}
					<div class="py-5">
						<h4 class="text-lg font-semibold text-text mb-2">{faq.question}</h4>
						<p class="text-text-light">{faq.answer}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	
	<!-- Final CTA -->
	<div class="bg-primary/10 py-16 mt-20">
		<div class="container mx-auto px-4 text-center">
			<h2 class="text-2xl md:text-3xl font-bold mb-4 text-text">Ready to get started?</h2>
			<p class="text-text-light mb-8 max-w-2xl mx-auto">
				Choose the plan that's right for you and start managing your finances with confidence.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/download" class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm">
					Download Now
				</a>
				<a href="/features" class="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
					Explore Features
				</a>
			</div>
		</div>
	</div>
</section>
