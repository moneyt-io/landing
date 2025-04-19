<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    // Estado del formulario de suscripción
    export let email = '';
    export let isSubmitting = false;
    export let subscribeStatus = {
        success: false,
        error: false,
        message: ''
    };
    
    // Función para manejar el envío del formulario con Formspree
    async function handleSubmit() {
        // Validación básica
        if (!email || !email.includes('@') || email.trim() === '') {
            subscribeStatus = {
                success: false,
                error: true,
                message: 'Please enter a valid email address.'
            };
            return;
        }
        
        isSubmitting = true;
        subscribeStatus = {
            success: false,
            error: false,
            message: ''
        };
        
        try {
            // Envío real a Formspree
            const response = await fetch('https://formspree.io/f/xldjqbvb', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    formType: 'newsletter-subscription'
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Éxito
                subscribeStatus = {
                    success: true,
                    error: false,
                    message: 'Thanks for subscribing!'
                };
                
                // Resetear el formulario
                email = '';
                dispatch('success');
            } else {
                throw new Error(data.error || 'Subscription failed. Please try again.');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            subscribeStatus = {
                success: false,
                error: true,
                message: error instanceof Error ? error.message : 'Subscription failed. Please try again.'
            };
            dispatch('error', { message: subscribeStatus.message });
        } finally {
            isSubmitting = false;
        }
    }
</script>

<!-- Primero el formulario -->
<form class="mt-4 sm:flex" on:submit|preventDefault={handleSubmit}>
    <div class="relative rounded-md shadow-sm w-full">
        <input 
            type="email" 
            name="email"
            bind:value={email}
            placeholder="Email address" 
            class="w-full px-4 py-3 bg-gray-700/50 backdrop-blur border border-gray-700 rounded-l-md focus:ring-1 focus:ring-primary focus:border-primary text-white placeholder-gray-500 text-sm"
            required 
        />
    </div>
    <button 
        type="submit" 
        disabled={isSubmitting}
        class="mt-3 sm:mt-0 w-full sm:w-auto flex-shrink-0 bg-primary text-white hover:bg-primary-dark px-4 py-3 rounded-r-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-footer"
    >
        {#if isSubmitting}
            <span class="flex items-center">
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
            </span>
        {:else}
            Subscribe
        {/if}
    </button>
    
    <!-- Campo honeypot anti-spam (invisible) -->
    <div class="hidden">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
    </div>
</form>

<!-- Luego los mensajes de estado (después del formulario) -->
{#if subscribeStatus.success}
    <div class="mt-3 bg-green-800/30 border border-green-700 p-3 rounded-md">
        <p class="text-sm text-green-300">{subscribeStatus.message}</p>
    </div>
{:else if subscribeStatus.error}
    <div class="mt-3 bg-red-800/30 border border-red-700 p-3 rounded-md">
        <p class="text-sm text-red-300">{subscribeStatus.message}</p>
    </div>
{/if}
