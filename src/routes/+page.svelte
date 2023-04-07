<script lang="ts">
	import { directusClient } from '$lib/directus';

	const favorites = directusClient.items('favorites').readByQuery({
		limit: -1,
		filter: {
			status: {
				_eq: 'published'
			}
		}
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await favorites}
	<!-- Manage your loading state here -->
{:then value}
	<pre>{JSON.stringify(value, undefined, 2)}</pre>

	{#if value.data?.length == 0}
		<p>Il n'y a aucun contenu...</p>
	{/if}
{:catch error}
	<!-- If request has failed, {error} is accessible here -->
{/await}
