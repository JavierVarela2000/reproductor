import "clsx";
import { l as pop, p as push } from "../../chunks/index2.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { p as player } from "../../chunks/player.svelte.js";
import { a as auth } from "../../chunks/auth.svelte.js";
import "../../chunks/client.js";
function MusicPlayer($$payload, $$props) {
  push();
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  $$payload.out += `<div class="fixed bottom-0 left-0 flex w-full flex-col items-center bg-gray-800 p-4 text-white shadow-lg"><div class="flex items-center justify-center space-x-4"><button class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600">⏮</button> `;
  if (player.state.is_playing) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600">⏸</button>`;
  } else if (player.state.is_paused) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<button class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600">▶️</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button disabled class="btn btn-circle cursor-not-allowed bg-gray-500 text-white">▶️</button>`;
  }
  $$payload.out += `<!--]--> <button class="btn btn-circle bg-gray-700 text-white hover:bg-gray-600">⏭</button></div> <div class="mt-4 flex w-full max-w-4xl items-center justify-between"><span class="text-sm">`;
  if (player.current_time) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${escape_html(formatTime(player.current_time))}`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `00:00`;
  }
  $$payload.out += `<!--]--></span> `;
  if (player.state.is_playing || player.state.is_paused) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<input${attr("value", player.current_time)} type="range" id="barraProgreso" step="0.1" min="0"${attr("max", player.audio_player?.duration || 0)} class="mx-4 w-full">`;
  } else if (player.state.is_buffering) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<p class="mx-4 text-sm">Buffering...</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <span class="text-sm">`;
  if (player.current_track && player.current_track.duration) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${escape_html(formatTime(player.current_track.duration))}`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `00:00`;
  }
  $$payload.out += `<!--]--></span></div></div>`;
  pop();
}
function NavBar($$payload, $$props) {
  push();
  $$payload.out += `<nav class="h-[70px] bg-stone-400 shadow-md"><div class="container mx-auto flex items-center justify-between px-4 py-3"><a href="/" class="text-xl font-bold text-white">Reproductor</a> <div class="space-x-4"><a href="/" class="text-white hover:text-gray-200">Inicio</a> <a href="/about" class="text-white hover:text-gray-200">Acerca</a> <a href="/contact" class="text-white hover:text-gray-200">Contacto</a></div> `;
  if (auth.isAuthenticated) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="ml-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none">Cerrar Sesión</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></nav>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  NavBar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!----> `;
  MusicPlayer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
