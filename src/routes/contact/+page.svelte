<script lang="ts">
    import { onMount } from 'svelte';
    
    // Estado del formulario
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let isSubmitting = false;
    let submitStatus = {
        success: false,
        error: false,
        message: ''
    };
    
    // Opciones de asunto para el formulario
    const subjectOptions = [
        'General Inquiry',
        'Support Request',
        'Partnership Opportunity',
        'Feature Suggestion',
        'Bug Report',
        'Other'
    ];
    
    // Función para manejar el envío del formulario
    async function handleSubmit() {
        isSubmitting = true;
        submitStatus = {
            success: false,
            error: false,
            message: ''
        };
        
        // Simulación de envío de formulario (reemplazar con lógica real)
        try {
            // Aquí iría la integración con tu backend o servicio de correo
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Simulación de éxito
            submitStatus = {
                success: true,
                error: false,
                message: 'Your message has been sent! We\'ll get back to you soon.'
            };
            
            // Resetear el formulario después del éxito
            name = '';
            email = '';
            subject = '';
            message = '';
            
        } catch (error) {
            // Manejo de error
            submitStatus = {
                success: false,
                error: true,
                message: 'There was an error sending your message. Please try again later.'
            };
        } finally {
            isSubmitting = false;
        }
    }
    
    // FAQ para la sección de preguntas frecuentes
    const faqs = [
        {
            question: 'How can I get support for the app?',
            answer: 'For technical support, you can reach out to us through this contact form or email directly to support@moneyt.io. If you\'re using the Dev version, you can also open an issue on our GitHub repository.'
        },
        {
            question: 'I have a feature suggestion, where can I submit it?',
            answer: 'We welcome feature suggestions! You can submit them through this form, our Discord community, or as an issue/discussion on our GitHub repository.'
        },
        {
            question: 'Do you offer custom development services?',
            answer: 'For enterprise customers or special integration needs, we can discuss custom development services. Please contact us with details about your requirements.'
        }
    ];
</script>

<svelte:head>
    <title>Contact Us | MoneyT</title>
    <meta name="description" content="Get in touch with the MoneyT team for support, partnership inquiries, or any questions about our personal finance app." />
</svelte:head>

<section class="bg-background py-16 md:py-24">
    <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="max-w-3xl mx-auto text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-text">Get in Touch</h1>
            <p class="text-lg text-text-light">
                Have questions, feedback, or need assistance? We're here to help.
                Fill out the form below or use any of our contact channels.
            </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-5 gap-8">
                <!-- Contact Form - 3 columns wide -->
                <div class="md:col-span-3 bg-white p-8 rounded-xl shadow-sm">
                    {#if submitStatus.success}
                        <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-green-700">{submitStatus.message}</p>
                                </div>
                            </div>
                        </div>
                    {/if}
                    
                    {#if submitStatus.error}
                        <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-red-700">{submitStatus.message}</p>
                                </div>
                            </div>
                        </div>
                    {/if}
                    
                    <h2 class="text-2xl font-bold mb-6 text-text">Contact Form</h2>
                    
                    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Name field -->
                            <div>
                                <label for="name" class="block text-sm font-medium text-text-light mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    bind:value={name}
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            
                            <!-- Email field -->
                            <div>
                                <label for="email" class="block text-sm font-medium text-text-light mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    bind:value={email}
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                        </div>
                        
                        <!-- Subject field -->
                        <div>
                            <label for="subject" class="block text-sm font-medium text-text-light mb-1">Subject</label>
                            <select
                                id="subject"
                                bind:value={subject}
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                required
                            >
                                <option value="" disabled selected>Please select a subject</option>
                                {#each subjectOptions as option}
                                    <option value={option}>{option}</option>
                                {/each}
                            </select>
                        </div>
                        
                        <!-- Message field -->
                        <div>
                            <label for="message" class="block text-sm font-medium text-text-light mb-1">Message</label>
                            <textarea
                                id="message"
                                bind:value={message}
                                rows="5"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>
                        
                        <!-- Submit button -->
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                class="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                            >
                                {#if isSubmitting}
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                {:else}
                                    Send Message
                                {/if}
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Contact Info - 2 columns wide -->
                <div class="md:col-span-2 space-y-6">
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <h2 class="text-xl font-bold mb-4 text-text">Contact Information</h2>
                        
                        <ul class="space-y-4">
                            <li class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-text-light">Email</p>
                                    <a href="mailto:admin@moneyt.io" class="text-text hover:text-primary">admin@moneyt.io</a>
                                </div>
                            </li>
                            
                            <li class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-text-light">Response Time</p>
                                    <p class="text-text">Typically within 24-48 hours</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <h2 class="text-xl font-bold mb-4 text-text">Connect With Us</h2>
                        
                        <div class="flex flex-wrap gap-3">
                            <a href="https://github.com/moneyt-io" target="_blank" rel="noopener noreferrer" 
                               class="flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-primary/10 text-text hover:text-primary transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            
                            <a href="https://www.linkedin.com/company/moneyt-io" target="_blank" rel="noopener noreferrer" 
                               class="flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-primary/10 text-text hover:text-primary transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            
                            <a href="https://www.reddit.com/r/moneyt_io/" target="_blank" rel="noopener noreferrer" 
                               class="flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-primary/10 text-text hover:text-primary transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                                </svg>
                            </a>                         

                            <a href="https://discord.com/invite/zG4yNyym" target="_blank" rel="noopener noreferrer" 
                               class="flex items-center justify-center h-10 w-10 rounded bg-gray-100 hover:bg-primary/10 text-text hover:text-primary transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25-1.845-.275-3.68-.275-5.487 0-.164-.386-.406-.875-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- FAQ Section -->
        <div class="max-w-4xl mx-auto mt-20">
            <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center text-text">Frequently Asked Questions</h2>
            
            <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                {#each faqs as faq, i}
                    <div class="border-b border-gray-200 last:border-0">
                        <details class="group">
                            <summary class="flex justify-between items-center cursor-pointer p-6">
                                <h3 class="text-lg font-medium text-text">{faq.question}</h3>
                                <span class="text-primary ml-6 flex-shrink-0 transition-transform duration-200 group-open:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </summary>
                            <div class="p-6 pt-0">
                                <p class="text-text-light">{faq.answer}</p>
                            </div>
                        </details>
                    </div>
                {/each}
            </div>
        </div>
        
        <!-- Privacy Notice -->
        <div class="max-w-3xl mx-auto mt-12 text-center text-sm text-text-light">
            <p>
                By contacting us, you agree to our <a href="/privacy" class="text-primary hover:underline">Privacy Policy</a>. 
                We'll only use your information to respond to your inquiry.
            </p>
        </div>
    </div>
</section>
