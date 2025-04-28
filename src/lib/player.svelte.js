import './types.js';

class Player {
	/**
	 * @type {Playlist | null}
	 */
	current_playlist = $state(null);

	/**
	 * @type {Track | null}
	 */
	current_track = $state(null);

	/**
	 * @type {PlayerState}
	 */
	state = $state({
		is_playing: false,
		is_paused: false,
		is_buffering: false,
		is_seeking: false,
		is_ended: false
	});

	/**
	 * @type {HTMLAudioElement }
	 */
	audio_player;

	/**
	 * En minutos
	 * @type {number | null}
	 */
	current_time = $state(null);

	constructor(audio_player = null) {
		if (audio_player) {
			this.audio_player = audio_player;
		} else {
			if (typeof window === 'undefined')
				console.warn(
					'El entorno no tiene acceso a window. El reproductor de audio no se inicializará.'
				);

			this.audio_player = new Audio();
			this.audio_player.volume = 0.5;
		}

		this.audio_player.addEventListener('timeupdate', () => {
			if (!this.state.is_seeking) {
				this.current_time = this.audio_player.currentTime;
			}
		});

		this.audio_player.addEventListener('loadedmetadata', () => {
			this.state = {
				is_buffering: true,
				is_playing: false,
				is_paused: false,
				is_seeking: false,
				is_ended: false
			};
		});

		// Definir la función como una propiedad para poder removerla después
		this.handleProgress = () => {
			const buffered = this.audio_player.buffered;
			const duration = this.audio_player.duration;

			if (buffered.length > 0 && duration > 0) {
				const bufferedEnd = buffered.end(buffered.length - 1);
				const bufferedPercentage = (bufferedEnd / duration) * 100;

				// Reproducir automáticamente si se ha cargado al menos el 20% del audio
				if (bufferedPercentage >= 5 && !this.state.is_playing) {
					this.play();
				}
				// Actualizar current_buffered solo si no está completamente cargado
				if (bufferedPercentage < 100) {
					this.current_buffered = bufferedPercentage;
				} else {
					this.state.is_buffering = false;
					// Remover el listener correctamente
					this.audio_player.removeEventListener('progress', this.handleProgress);
				}
			}
		};
		this.audio_player.addEventListener('progress', this.handleProgress);
	}

	/**
	 * Reproduce la canción actual.
	 * * @param {Track } track - La pista a reproducir. Si no se proporciona, se reproduce la pista actual.
	 */
	play_track(track) {
		this.current_track = track;
		this.audio_player.src = track.url;
		this.audio_player.load();
		this.play();
	}

	play() {
		if (!this.current_track) {
			console.error('No hay pista actual para reproducir.');

			return;
		}
		this.audio_player.play().then(() => {
			this.state = {
				...this.state,
				is_playing: true,
				is_paused: false,
				is_seeking: false
			};
		});
	}

	/**
	 * Pausa la reproducción actual.
	 */
	pause() {
		this.audio_player.pause();

		this.state = {
			...this.state,
			is_playing: false,
			is_paused: true
		};
	}

	next() {
		if (!this.current_playlist) {
			console.error('No hay lista de reproducción actual.');
			return;
		}
		if (this.current_playlist.tracks.length === 0) {
			console.warn('No hay pistas en la lista de reproducción.');
			return;
		}
		const currentIndex = this.current_playlist.tracks.findIndex(
			(track) => track === this.current_track
		);
		const nextIndex = (currentIndex + 1) % this.current_playlist.tracks.length;
		this.play_track(this.current_playlist.tracks[nextIndex]);
	}

	prev() {
		if (!this.audio_player) {
			console.error('El reproductor de audio no está disponible.');
			return;
		}
		if (!this.current_playlist) {
			console.error('No hay lista de reproducción actual.');
			return;
		}
		if (this.current_playlist.tracks.length === 0) {
			console.warn('No hay pistas en la lista de reproducción.');
			return;
		}
		const currentIndex = this.current_playlist.tracks.findIndex(
			(track) => track === this.current_track
		);
		const prevIndex =
			(currentIndex - 1 + this.current_playlist.tracks.length) %
			this.current_playlist.tracks.length;
		this.play_track(this.current_playlist.tracks[prevIndex]);
	}

	/**
	 * Cambia el tiempo actual de la canción.
	 * @param {number} newTime
	 */
	seek(newTime) {
		this.current_time = newTime;
		this.audio_player.currentTime = this.current_time;
	}
}

export const player = new Player();
