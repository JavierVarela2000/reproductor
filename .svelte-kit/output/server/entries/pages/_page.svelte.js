import "clsx";
import { n as await_block, l as pop, p as push, q as ensure_array_like } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "../../chunks/player.svelte.js";
class DB {
  /**
   * @type {Playlist[]}
   */
  #playlists = [
    {
      id: 1,
      name: "Playlist 1",
      tracks: [
        {
          id: 1,
          author: "Men At Work",
          duration: 200.49,
          performer: "Men At Work",
          s3_artkey: "artkey1",
          s3_key: "key1",
          title: "Who Can It Be Now",
          url: "/mp3/who_can_it_be_now.mp3"
        },
        {
          id: 2,
          author: "Mac Miller",
          duration: 347.3,
          performer: "Mac Miller",
          s3_artkey: "artkey2",
          s3_key: "key2",
          title: "Self Care",
          url: "/mp3/mac_miller-self_care.mp3"
        },
        {
          id: 3,
          author: "Stromae & Pomme",
          duration: 168.96,
          performer: "Stromae & Pomme",
          s3_artkey: "artkey1231232",
          s3_key: "key321j12132k",
          title: "Ma Meilleure Ennemie",
          url: "/mp3/stromae_pomme_ma_meilleure_ennemie.mp3"
        }
      ]
    },
    {
      id: 2,
      name: "Playlist 2",
      tracks: [
        {
          id: 1,
          author: "Men At Work",
          duration: 200.49,
          performer: "Men At Work",
          s3_artkey: "artkey1",
          s3_key: "key1",
          title: "Who Can It Be Now",
          url: "/mp3/who_can_it_be_now.mp3"
        },
        {
          id: 3,
          author: "Stromae & Pomme",
          duration: 168.96,
          performer: "Stromae & Pomme",
          s3_artkey: "artkey1231232",
          s3_key: "key321j12132k",
          title: "Ma Meilleure Ennemie",
          url: "/mp3/stromae_pomme_ma_meilleure_ennemie.mp3"
        }
      ]
    }
  ];
  /**
   * Devuelve todas las playlists con solo id y nombre.
   * @returns {Promise<Playlist[]>} Lista de playlists con id y nombre.
   */
  async getAllPlaylists() {
    return new Promise((resolve) => {
      const playlists = this.#playlists.map(({ id, name }) => ({ id, name }));
      setTimeout(() => resolve(playlists), 500);
    });
  }
  /**
   * Devuelve todas las canciones de una playlist por su id.
   * @param {number} id - El id de la playlist.
   * @returns {Promise<Track[] | []>} Lista de canciones o null si no existe la playlist.
   */
  async getTracksByPlaylistId(id) {
    return new Promise((resolve) => {
      const playlist = this.#playlists.find((playlist2) => playlist2.id === id);
      resolve(playlist ? playlist.tracks : []);
    });
  }
}
const db = new DB();
function PlaylistsSideBar($$payload, $$props) {
  push();
  function playlist_card($$payload2, playlist) {
    $$payload2.out += `<div class="card bg-base-100 shadow-md"><div class="card-body"><h2 class="card-title">${escape_html(playlist.name)}</h2> `;
    if (playlist.tracks) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `${escape_html(playlist.tracks.length)} canciones`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="card-actions justify-end"><button class="btn btn-primary">Seleccionar</button></div></div></div>`;
  }
  $$payload.out += `<div class="inline-flex flex-col gap-4">`;
  await_block(
    $$payload,
    db.getAllPlaylists(),
    () => {
      $$payload.out += `loading playlists...`;
    },
    (playlists) => {
      const each_array = ensure_array_like(playlists);
      $$payload.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let playlist = each_array[$$index];
        playlist_card($$payload, playlist);
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!--]--></div>`;
  pop();
}
function PlaylistSideBar($$payload, $$props) {
  push();
  $$payload.out += `<div class="min-h-7 rounded-lg bg-gray-100 p-4 shadow-md">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="text-gray-500">Selecciona una playlist para ver las canciones.</p>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div>`;
  PlaylistsSideBar($$payload);
  $$payload.out += `<!----> `;
  PlaylistSideBar($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
