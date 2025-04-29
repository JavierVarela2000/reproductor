<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import { auth } from '$lib/auth.svelte';
	import '$lib/types.js';
	import '../app.css';
	import { goto } from '$app/navigation';
	import { player } from '$lib/player.svelte';

	let { children } = $props();

	$effect(() => {
		if (!auth.isAuthenticated) {
			player.reset();
			goto('/login');
		}
	});
</script>

<NavBar />
{@render children()}
