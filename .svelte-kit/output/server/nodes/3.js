import * as universal from '../entries/pages/login/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/login/+page.js";
export const imports = ["_app/immutable/nodes/3.BCV9nsRI.js","_app/immutable/chunks/CYdGqeKC.js","_app/immutable/chunks/AkqJN3-E.js","_app/immutable/chunks/SOB-LvHO.js","_app/immutable/chunks/BBc-fys7.js","_app/immutable/chunks/C4tweBjP.js"];
export const stylesheets = [];
export const fonts = [];
