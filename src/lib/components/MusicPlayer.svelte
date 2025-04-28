<script lang="ts">
	import { player } from '$lib/player.svelte';

	// Función para manejar el evento de arrastre
	const handleSeek = (event: Event) => {
		const newTime = parseFloat((event.target as HTMLInputElement).value);
		player.seek(newTime); // Llama a la función seek del reproductor
	};

	// Pausa el reproductor al hacer clic en el control deslizante
	const handleMouseDown = () => {
		if (player.state.is_playing) {
			player.pause();
		}
	};

	// Reanuda la reproducción al soltar el mouse
	const handleMouseUp = () => {
		player.play();
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};
</script>

<div
	class="fixed bottom-0 left-0 flex w-full flex-col items-center bg-gray-800 p-4 text-white shadow-lg"
>
	<!-- Contenedor de botones -->
	<div class="flex items-center justify-center space-x-4">
		<!-- Botón anterior -->
		<button
			onclick={() => player.prev()}
			class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600"
		>
			⏮
		</button>

		<!-- Botón play/pausa -->
		{#if player.state.is_playing}
			<button
				onclick={() => player.pause()}
				class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600"
			>
				⏸
			</button>
		{:else if player.state.is_paused}
			<button
				onclick={() => player.play()}
				class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600"
			>
				▶️
			</button>
		{:else}
			<button disabled class="btn btn-circle cursor-not-allowed bg-gray-500 text-white">
				▶️
			</button>
		{/if}

		<!-- Botón siguiente -->
		<button
			onclick={() => player.next()}
			class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600"
		>
			⏭
		</button>
	</div>

	<!-- Barra de progreso e información -->
	<div class="mt-4 flex w-full max-w-4xl items-center justify-between">
		<!-- Información del tiempo actual -->
		<span class="text-sm">
			{#if player.current_time}
				{formatTime(player.current_time)}
			{:else}
				00:00
			{/if}
		</span>

		<!-- Barra de progreso -->
		{#if player.state.is_playing || player.state.is_paused}
			<input
				oninput={handleSeek}
				onmousedown={handleMouseDown}
				onmouseup={handleMouseUp}
				bind:value={player.current_time}
				type="range"
				id="barraProgreso"
				step="0.1"
				min="0"
				max={player.audio_player?.duration || 0}
				class="mx-4 w-full"
			/>
		{:else if player.state.is_buffering}
			<p class="mx-4 text-sm">Buffering...</p>
		{/if}

		<!-- Duración total en minutos -->
		<span class="text-sm">
			{#if player.current_track && player.current_track.duration}
				{formatTime(player.current_track.duration)}
			{:else}
				00:00
			{/if}
		</span>
	</div>
</div>
