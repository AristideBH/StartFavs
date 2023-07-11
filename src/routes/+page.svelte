<script lang="ts">
	import type { PageData } from './$types';
	import FavoriteCard from '$cpt/FavoriteCard.svelte';
	import Masonry from '$cpt/Masonry.svelte';
	export let data: PageData;

	$: ({ tests } = data);
</script>

<h1>Homepage</h1>

{#await tests}
	<p>loading</p>
{:then value}
	<!-- <pre>{JSON.stringify(value, undefined, 2)}</pre> -->
	{#if value.data}
		{#each value.data as item}
			<pre>{JSON.stringify(item, undefined, 2)}</pre>
			<!-- content here -->
		{/each}
	{/if}
{/await}
