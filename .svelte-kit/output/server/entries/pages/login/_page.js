import { a as auth } from "../../../chunks/auth.svelte.js";
import { r as redirect } from "../../../chunks/index.js";
function load() {
  if (auth.isAuthenticated) {
    return redirect(302, "/");
  }
}
export {
  load
};
