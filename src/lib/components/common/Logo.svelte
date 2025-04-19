<script lang="ts">
    export let size = 40;
    export let className = "";
</script>

<svg 
    width={size} 
    height={size} 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class={className}
>
    <!-- Wallet background -->
    <rect x="30" y="50" width="140" height="120" rx="30" fill="white"/>
    
    <!-- Wallet outline -->
    <path d="M160 60C160 53.373 154.627 48 148 48H52C45.373 48 40 53.373 40 60V150C40 156.627 45.373 162 52 162H148C154.627 162 160 156.627 160 150V60Z" stroke="#0F172A" stroke-width="10" fill="none"/>
    
    <!-- Wallet clasp -->
    <path d="M160 90H140C133.373 90 128 95.373 128 102V108C128 114.627 133.373 120 140 120H160" stroke="#0F172A" stroke-width="10" fill="none"/>
    
    <!-- Wallet clasp detail -->
    <circle cx="140" cy="105" r="5" fill="#0F172A"/>
    
    <!-- Wallet clasp color -->
    <path d="M160 90H140C133.373 90 128 95.373 128 102V108C128 114.627 133.373 120 140 120H160V90Z" fill="#4AE3B5" fill-opacity="0.8"/>
    
    <!-- Bar graph -->
    <rect x="60" y="125" width="15" height="20" fill="#4AE3B5"/>
    <rect x="90" y="105" width="15" height="40" fill="#4AE3B5"/>
    <rect x="120" y="85" width="15" height="60" fill="#4AE3B5"/>
    
    <!-- Coin -->
    <circle cx="80" cy="60" r="22" fill="#4AE3B5" stroke="#0F172A" stroke-width="8"/>
    <path d="M80 48V72M74 54H86M74 66H86" stroke="#0F172A" stroke-width="4"/>
    
    <!-- Small dot -->
    <circle cx="140" cy="50" r="10" fill="#4AE3B5"/>
    <!-- Bottom dot -->
    <circle cx="100" cy="175" r="5" fill="#10795E"/>
</svg>
