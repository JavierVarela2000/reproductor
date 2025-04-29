import { a as attr } from "../../../chunks/attributes.js";
import { l as pop, p as push } from "../../../chunks/index2.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let username = "emilys";
  let password = "emilyspass";
  $$payload.out += `<form class="mt-6 space-y-4"><div><label for="username" class="block text-sm font-medium text-gray-700">Usuario</label> <input id="username"${attr("value", username)} type="text" placeholder="Ingresa tu usuario" class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></div> <div><label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label> <input id="password"${attr("value", password)} type="password" placeholder="Ingresa tu contraseña" class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></div> <button name="login_btn" type="button" class="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">Iniciar Sesión</button></form>`;
  pop();
}
export {
  _page as default
};
