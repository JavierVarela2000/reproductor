import './types.js';

class DB {
	/**
	 * @type {Playlist[]}
	 */
	#playlists = [
		{
			id: 1,
			name: 'Playlist 1',
			tracks: [
				{
					id: 1,
					author: 'Men At Work',
					duration: 200.49,
					performer: 'Men At Work',
					s3_artkey: 'artkey1',
					s3_key: 'key1',
					title: 'Who Can It Be Now',
					url: '/mp3/who_can_it_be_now.mp3'
				},
				{
					id: 2,
					author: 'Mac Miller',
					duration: 347.3,
					performer: 'Mac Miller',
					s3_artkey: 'artkey2',
					s3_key: 'key2',
					title: 'Self Care',
					url: '/mp3/mac_miller-self_care.mp3'
				},
				{
					id: 3,
					author: 'Stromae & Pomme',
					duration: 168.96,
					performer: 'Stromae & Pomme',
					s3_artkey: 'artkey1231232',
					s3_key: 'key321j12132k',
					title: 'Ma Meilleure Ennemie',
					url: '/mp3/stromae_pomme_ma_meilleure_ennemie.mp3'
				}
			]
		},
		{
			id: 2,
			name: 'Playlist 2',
			tracks: [
				{
					id: 1,
					author: 'Men At Work',
					duration: 200.49,
					performer: 'Men At Work',
					s3_artkey: 'artkey1',
					s3_key: 'key1',
					title: 'Who Can It Be Now',
					url: '/mp3/who_can_it_be_now.mp3'
				},
				{
					id: 3,
					author: 'Stromae & Pomme',
					duration: 168.96,
					performer: 'Stromae & Pomme',
					s3_artkey: 'artkey1231232',
					s3_key: 'key321j12132k',
					title: 'Ma Meilleure Ennemie',
					url: '/mp3/stromae_pomme_ma_meilleure_ennemie.mp3'
				}
			]
		},
		{
			id: 3,
			name: 'Playlist 3',
			tracks: [
				{
					id: 1,
					author: 'Men At Work',
					duration: 200.49,
					performer: 'Men At Work',
					s3_artkey: 'artkey1',
					s3_key: 'key1',
					title: 'Who Can It Be Now',
					url: '/mp3/who_can_it_be_now.mp3'
				},
				{
					id: 4,
					author: 'Manu Chao',
					duration: 240.048,
					performer: 'Manu Chao',
					s3_artkey: 'artkey1',
					s3_key: 'key1',
					title: 'Me gustas Tu',
					url: '/mp3/manu_chao-me_gustas_tu.mp3'
				},
				{
					id: 5,
					author: 'Canserbero',
					duration: 240.048,
					performer: 'Canserbero',
					s3_artkey: 'artkey1',
					s3_key: 'key1',
					title: 'Querer Querernos',
					url: '/mp3/canserbero-querer_querernos.mp3'
				},
				{
					id: 6,
					author: 'Canserbero',
					duration: 240.048,
					performer: 'Canserbero',
					s3_artkey: 'artkey1',
					s3_key: 'key1',
					title: '¿Y La Felicidad Qué?',
					url: '/mp3/canserbero-y_la_felicidad_que.mp3'
				}
			]
		}
	];

	/**
	 * Devuelve todas las playlists con solo id y nombre.
	 * @returns {Promise<Playlist[]>} Lista de playlists con id y nombre.
	 */
	async getAllPlaylists() {
		// Simula un retraso como si fuera una llamada a una API
		return new Promise((resolve) => {
			const playlists = this.#playlists.map(({ id, name }) => ({ id, name }));
			// @ts-ignore
			setTimeout(() => resolve(playlists), 500);
		});
	}

	/**
	 * Devuelve todas las canciones de una playlist por su id.
	 * @param {number} id - El id de la playlist.
	 * @returns {Promise<Track[] | []>} Lista de canciones o null si no existe la playlist.
	 */
	async getTracksByPlaylistId(id) {
		// Simula un retraso como si fuera una llamada a una API
		return new Promise((resolve) => {
			const playlist = this.#playlists.find((playlist) => playlist.id === id);
			resolve(playlist ? playlist.tracks : []);
		});
	}
}

export const db = new DB();
