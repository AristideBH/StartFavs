<script lang="ts">
	import type { PageData } from './$types';
	import FavoriteCard from '$cpt/FavoriteCard.svelte';
	import Masonry from '$cpt/Masonry.svelte';
	export let data: PageData;
</script>

<h1>Homepage</h1>

{#await data.favorites}
	<!-- Manage your loading state here -->
{:then value}
	{#if value.data}
		{#if value.data?.length < 1}
			<p>Il n'y a aucun contenu...</p>
		{:else}
			<Masonry items={value.data}>
				{#each value.data as item}
					<FavoriteCard {item} />
				{/each}
			</Masonry>
		{/if}
	{/if}
{:catch error}
	<!-- If request has failed, {error} is accessible here -->
{/await}
