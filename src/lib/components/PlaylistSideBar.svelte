<script lang="ts">
	let { selected_playlist }: { selected_playlist: Playlist | null } = $props();
	import { player } from '$lib/player.svelte';
</script>

{#snippet current_track_play_btn(track: Track)}
	{#if player.current_track?.id !== track.id}
		<button
			onclick={() => {
				player.play_track(track);
				player.current_playlist = selected_playlist;
			}}
			class="btn btn-sm btn-primary"
		>
			▶️
		</button>
	{:else if player.state.is_playing}
		<button onclick={() => player.pause()} class="btn btn-sm btn-secondary"> ⏸ </button>
	{:else if player.state.is_paused}
		<button onclick={() => player.play()} class="btn btn-sm btn-primary"> ▶️ </button>
	{:else}
		<button disabled class="btn btn-sm btn-disabled"> ▶️ </button>
	{/if}
{/snippet}

<div class="min-h-7 w-full rounded-lg bg-gray-100 p-4 shadow-md">
	{#if selected_playlist}
		<h2 class="mb-4 text-lg font-bold text-gray-800">{selected_playlist.name}</h2>
		<ul class="space-y-2">
			{#each selected_playlist.tracks as track}
				<li
					class="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm hover:bg-gray-50"
				>
					<span class="text-gray-700">{track.title} - {track.author}</span>
					{@render current_track_play_btn(track)}
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-gray-500">Selecciona una playlist para ver las canciones.</p>
	{/if}
</div>
