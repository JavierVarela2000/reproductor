<script>
	import { auth } from '$lib/auth.svelte';
</script>

<nav class="h-[70px] bg-stone-400 shadow-md">
	<div class="container mx-auto flex items-center justify-between px-4 py-3">
		<!-- Logo or Title -->
		<a href="/" class="text-xl font-bold text-white">Reproductor</a>

		<!-- Logout Button -->
		{#if auth.isAuthenticated}
			<button
				onclick={() => auth.logout()}
				class="ml-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
			>
				Cerrar Sesión
			</button>
		{/if}
	</div>
</nav>
