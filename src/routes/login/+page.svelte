<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/auth.svelte';

	let username: string = $state('emilys'); //
	let password: string = $state('emilyspass'); //

	async function authenticate() {
		try {
			await auth.login(username, password);
			goto('/');
		} catch (error: any) {
			console.error('Error al autenticar:', error.message);
		}
	}
</script>

<form class="mt-6 space-y-4">
	<div>
		<label for="username" class="block text-sm font-medium text-gray-700">Usuario</label>
		<input
			id="username"
			bind:value={username}
			type="text"
			placeholder="Ingresa tu usuario"
			class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
	</div>
	<div>
		<label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
		<input
			id="password"
			bind:value={password}
			type="password"
			placeholder="Ingresa tu contraseña"
			class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
	</div>
	<button
		name="login_btn"
		type="button"
		onclick={authenticate}
		class="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
	>
		Iniciar Sesión
	</button>
</form>
