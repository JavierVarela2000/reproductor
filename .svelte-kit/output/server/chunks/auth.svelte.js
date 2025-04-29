import "clsx";
import { B as BROWSER } from "./false.js";
const browser = BROWSER;
class Auth {
  /** @type {User | null} */
  #user = null;
  /** @type {string | null} */
  #accessToken = null;
  /** @type {string | null} */
  #refreshToken = null;
  /** @type {boolean} */
  isAuthenticated = false;
  constructor() {
  }
  /**
   * Realiza el inicio de sesión con el servicio de autenticación.
   * @param {string} username - El nombre de usuario.
   * @param {string} password - La contraseña del usuario.
   * @returns {Promise<void>}
   */
  async login(username, password) {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, expiresInMins: 30 })
      });
      if (!response.ok) {
        throw new Error("Error en la autenticación. Verifica tus credenciales.");
      }
      const data = await response.json();
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
      if (browser) ;
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
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
const auth = new Auth();
export {
  auth as a
};
