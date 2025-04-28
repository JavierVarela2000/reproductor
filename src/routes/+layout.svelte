<script>
	import MusicPlayer from '$lib/components/MusicPlayer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { auth } from '$lib/auth.svelte';
	import '$lib/types.js';
	import '../app.css';
	import { goto } from '$app/navigation';

	let { children } = $props();

	$effect(() => {
		if (!auth.isAuthenticated) {
			goto('/login');
		}
	});
</script>

<NavBar />
{@render children()}
<MusicPlayer />
