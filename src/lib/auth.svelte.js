import { browser } from '$app/environment';
/**
 * Tipo de dato para representar un usuario autenticado.
 * @typedef {Object} User
 * @property {number} id - ID del usuario.
 * @property {string} username - Nombre de usuario.
 * @property {string} email - Correo electrónico.
 * @property {string} firstName - Nombre del usuario.
 * @property {string} lastName - Apellido del usuario.
 * @property {string} gender - Género del usuario.
 * @property {string} image - URL de la imagen del usuario.
 */

class Auth {
	/** @type {User | null} */
	#user = null;
	/** @type {string | null} */
	#accessToken = null;
	/** @type {string | null} */
	#refreshToken = null;
	/** @type {boolean} */
	isAuthenticated = $state(false);

	constructor() {
		// Cargar datos de autenticación desde localStorage si estamos en el navegador
		if (browser) {
			const storedData = localStorage.getItem('authData');
			if (storedData) {
				try {
					const { user, accessToken, refreshToken } = JSON.parse(storedData);
					this.#user = user;
					this.#accessToken = accessToken;
					this.#refreshToken = refreshToken;
					this.isAuthenticated = true;
				} catch (error) {
					console.error('Error al cargar los datos de autenticación desde localStorage:', error);
				}
			}
		}
	}

	/**
	 * Realiza el inicio de sesión con el servicio de autenticación.
	 * @param {string} username - El nombre de usuario.
	 * @param {string} password - La contraseña del usuario.
	 * @returns {Promise<void>}
	 */
	async login(username, password) {
		try {
			const response = await fetch('https://dummyjson.com/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password, expiresInMins: 30 })
			});

			if (!response.ok) {
				throw new Error('Error en la autenticación. Verifica tus credenciales.');
			}

			const data = await response.json();

			// Almacena los datos del usuario y los tokens
			this.#accessToken = data.accessToken;
			this.#refreshToken = data.refreshToken;
			this.#user = {
				id: data.id,
				username: data.username,
				email: data.email,
				firstName: data.firstName,
				lastName: data.lastName,
				gender: data.gender,
				image: data.image
			};
			this.isAuthenticated = true;

			// Guardar datos de autenticación en localStorage si estamos en el navegador
			if (browser) {
				localStorage.setItem(
					'authData',
					JSON.stringify({
						user: this.#user,
						accessToken: this.#accessToken,
						refreshToken: this.#refreshToken
					})
				);
			}
		} catch (error) {
			console.error('Error en el inicio de sesión:', error);
			throw error;
		}
	}

	/**
	 * Cierra la sesión del usuario.
	 */
	logout() {
		this.#user = null;
		this.#accessToken = null;
		this.#refreshToken = null;
		this.isAuthenticated = false;

		// Eliminar datos de autenticación del localStorage si estamos en el navegador
		if (browser) {
			localStorage.removeItem('authData');
		}
	}

	/**
	 * Obtiene la información del usuario autenticado.
	 * @returns {User | null} Información del usuario o `null` si no está autenticado.
	 */
	getUser() {
		return this.#user;
	}

	/**
	 * Obtiene el token de acceso actual.
	 * @returns {string | null} El token de acceso o `null` si no está autenticado.
	 */
	getAccessToken() {
		return this.#accessToken;
	}

	/**
	 * Obtiene el token de actualización actual.
	 * @returns {string | null} El token de actualización o `null` si no está autenticado.
	 */
	getRefreshToken() {
		return this.#refreshToken;
	}
}

export const auth = new Auth();
