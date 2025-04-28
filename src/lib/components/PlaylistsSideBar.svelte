<script lang="ts">
	import { db } from '$lib/db';
	let { onSelectPlaylist }: { onSelectPlaylist: (playlist: Playlist) => void } = $props();
</script>

{#snippet playlist_card(playlist: Playlist)}
	<div class="card bg-base-100 shadow-md">
		<div class="card-body">
			<h2 class="card-title">{playlist.name}</h2>
			{#if playlist.tracks}
				{playlist.tracks.length} canciones
			{/if}
			<div class="card-actions justify-end">
				<button class="btn btn-primary" onclick={() => onSelectPlaylist(playlist)}>
					Seleccionar
				</button>
			</div>
		</div>
	</div>
{/snippet}
<div class="inline-flex flex-col gap-4">
	{#await db.getAllPlaylists()}
		loading playlists...
	{:then playlists}
		{#each playlists as playlist}
			{@render playlist_card(playlist)}
		{/each}
	{/await}
</div>
