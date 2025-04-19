<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from 'svelte';
    
    // Ajuste más sutil del margen superior
    onMount(() => {
        const errorSection = document.getElementById('error-section');
        if (errorSection) {
            // Reducido a un valor más razonable
            const headerHeight = 20; 
            errorSection.style.marginTop = `${headerHeight + 20}px`; // Mucho menos espacio adicional
        }
    });
</script>

<svelte:head>
    <title>Page Not Found | MoneyT</title>
    <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
</svelte:head>

<!-- Espaciado más equilibrado -->
<section id="error-section" class="bg-background py-12 mt-16 flex flex-col items-center justify-center min-h-[75vh]">
    <div class="container mx-auto px-4 text-center">
        <!-- Error visual -->
        <div class="inline-flex items-center justify-center p-6 bg-primary/10 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
        </div>
        
        <!-- Error code -->
        <h1 class="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
        
        <!-- Error message -->
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-text">Page Not Found</h2>
        
        <!-- Explanation -->
        <p class="text-lg text-text-light max-w-lg mx-auto mb-8">
            {#if $page.error?.message}
                {$page.error.message}
            {:else}
                Oops! The page you're looking for doesn't exist or has been moved.
            {/if}
        </p>
        
        <!-- Navigation options -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
            <a href="/" class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm">
                Go to Home Page
            </a>
            <a href="/features" class="border border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Explore Features
            </a>
        </div>
        
        <!-- Error details (if in development) -->
        {#if import.meta.env.DEV && $page.error && 'stack' in ($page.error as Error)}
            <div class="mt-8 p-4 bg-gray-100 rounded-lg text-left">
                <details>
                    <summary class="cursor-pointer text-text-light font-medium">Error Details (Development Only)</summary>
                    <pre class="mt-2 p-4 bg-gray-900 text-white rounded overflow-x-auto text-sm">{($page.error as any).stack}</pre>
                </details>
            </div>
        {/if}
    </div>
</section>

<style>
    /* Ensure this section has proper spacing and isn't affected by other layout elements */
    :global(body) {
        overflow-x: hidden;
    }
    
    section {
        position: relative;
        z-index: 10; /* Ensure proper stacking context */
    }
</style>
