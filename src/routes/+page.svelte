<script lang="ts">
	import { db } from '$lib/db';
	import PlaylistsSideBar from '$lib/components/PlaylistsSideBar.svelte';
	import PlaylistSideBar from '$lib/components/PlaylistSideBar.svelte';
	let selected_playlist: Playlist | null = $state(null);
</script>

<div>
	<PlaylistsSideBar
		onSelectPlaylist={async (playlist: Playlist) => {
			const tracks = await db.getTracksByPlaylistId(playlist.id);

			selected_playlist = {
				...playlist,
				tracks: tracks
			};
		}}
	/>
	<PlaylistSideBar {selected_playlist} />
</div>
