import { auth } from '$lib/auth.svelte.js';
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export function load() {
	if (auth.isAuthenticated) {
		return redirect(302, '/');
	}
}
