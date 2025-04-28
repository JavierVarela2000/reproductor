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
		>
			play
		</button>
	{:else if player.state.is_playing}
		<button onclick={() => player.pause()}>pause</button>
	{:else if player.state.is_paused}
		<button onclick={() => player.play()}>play</button>
	{:else}
		<button disabled>Play</button>
	{/if}
{/snippet}
<div class="min-h-7 bg-red-200">
	{#if selected_playlist}
		<ul>
			{#each selected_playlist.tracks as track}
				<li>
					<label for="">
						{track.title}
						{@render current_track_play_btn(track)}
					</label>
				</li>
			{/each}
		</ul>
	{/if}

	<button onclick={() => player.prev()}>prev</button>
	{#if player.state.is_playing}
		<button onclick={() => player.pause()}>pausa</button>
	{:else if player.state.is_paused}
		<button onclick={() => player.play()}>play</button>
	{:else}
		<button disabled>Play</button>
	{/if}

	<button onclick={() => player.next()}>next</button>
</div>
