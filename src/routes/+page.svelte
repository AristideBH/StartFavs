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

{#await favorites}
	<!-- Manage your loading state here -->
{:then value}
	{#if value.data}
		{#if value.data?.length < 1}
			<p>Il n'y a aucun contenu...</p>
		{:else}
			<div class="grid grid-cols-auto-fit-300 gap-4">
				{#each value.data as article}
					<a href="https://{article.url}" target="_blank">
						<div class="card card-hover p-4">{article.title}</div>
					</a>
				{/each}
			</div>
		{/if}
	{/if}
{:catch error}
	<!-- If request has failed, {error} is accessible here -->
{/await}
