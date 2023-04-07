<script lang="ts">
	import { directusClient } from '$lib/directus';
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

<a href="https://{item.url}" target="_blank" class="">
	<div class="card card-hover p-4 w-full flex items-center">
		<span class="grow">{item.title}</span>
		<button class="btn variant-outline-primary" on:click|preventDefault={handleDelete}>
			<Icon icon="ic:baseline-delete-outline" />
		</button>
	</div>
</a>
