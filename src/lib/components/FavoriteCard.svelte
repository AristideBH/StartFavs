<script lang="ts">
	import { directusClient, getImageUrl } from '$lib/directus';
	import type { FavoritePost } from '$lib/types';
	import Icon from '@iconify/svelte';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { onError } from '../functions/toaster';

	export let item: FavoritePost;
	const favorites = directusClient.items('favorites');

	const handleDelete = async () => {
		console.log('delete');

		if (item.id) {
			await favorites
				.deleteOne(item.id)
				.then(() => onDeleteSuccess())
				.catch(() => onError());
		}
	};

	const onDeleteSuccess = () => {
		toastStore.trigger({
			message: `Bookmark successfully deleted`,
			background: 'variant-filled-success',
			timeout: 2500
		});
	};
</script>

<a href="https://{item.url}" target="_blank" class=" bg-surface-100-800-token clip-round">
	{#if item.thumbnail}
		<img src={getImageUrl(item.thumbnail)} alt="" class="p-4 bg-surface-100-800-token" />
	{/if}
	<div class=" p-4 w-full flex items-center rounded-none">
		<span class="grow">{item.title}</span>
		<button class="btn variant-outline-primary" on:click|preventDefault={handleDelete}>
			<Icon icon="ic:baseline-delete-outline" />
		</button>
	</div>
</a>
