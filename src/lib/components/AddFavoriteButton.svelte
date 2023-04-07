<script lang="ts">
	import { modalStore, toastStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	const d: ModalSettings = {
		type: 'component',
		component: 'AddFavoriteModal',
		title: 'Add a new favorite',
		response: (r: any) => {
			if (r) {
				console.log('response:', r);
				toastStore.trigger({
					message: `Successfully added ${r.title}`,
					background: 'variant-filled-success',
					action: {
						label: 'Open',
						response: () => alert('Hello, Skeleton')
					},
					timeout: 2500
				});
			}
		}
	};

	const handleModalOpen = () => modalStore.trigger(d);
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
