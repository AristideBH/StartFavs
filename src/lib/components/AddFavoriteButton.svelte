<script lang="ts">
	import { modalStore, toastStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { directusClient } from '$lib/directus';
	import type { FavoritePost } from '$lib/types';
	import Icon from '@iconify/svelte';
	import { onError } from '../functions/toaster';

	const d: ModalSettings = {
		type: 'component',
		component: 'AddFavoriteModal',
		title: 'Add a new favorite',
		response: (r: any) => {
			if (r) {
				handleAdd({
					title: r.title,
					url: r.url,
					status: 'published'
				})
					.then(() => onAddSuccess(r))
					.catch(() => onError());
			}
		}
	};

	const favorites = directusClient.items('favorites');
	const handleModalOpen = () => modalStore.trigger(d);

	const handleAdd = async (favorite: FavoritePost) => await favorites.createOne(favorite);

	const onAddSuccess = (r: any) => {
		toastStore.trigger({
			message: `Successfully added ${r.title}`,
			background: 'variant-filled-success',
			action: {
				label: 'Open',
				response: () => alert('Hello, Skeleton')
			},
			timeout: 2500
		});
	};
</script>

<button
	class="btn-icon variant-filled-primary"
	on:click={handleModalOpen}
	title="Add a new favorite"
>
	<span>
		<Icon icon="ic:twotone-bookmark-add" class="h-5 w-5" />
	</span>
</button>
