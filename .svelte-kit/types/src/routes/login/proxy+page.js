// @ts-nocheck
import { auth } from '$lib/auth.svelte.js';
import { redirect } from '@sveltejs/kit';
/** */
export function load() {
	if (auth.isAuthenticated) {
		return redirect(302, '/');
	}
}
