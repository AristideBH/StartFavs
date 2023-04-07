<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Stores
	import { modalStore } from '@skeletonlabs/skeleton';

	// Form Data
	const formData = {
		title: '',
		url: ''
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-6 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'space-y-4 rounded-container-token';
	const cInput = 'input px-3 py-2 border border-surface-500/30';
</script>

<!-- @component This example creates a simple form modal. -->

<div class="modal-example-form {cBase}">
	<header class={cHeader}>{$modalStore[0]?.title ?? ''}</header>
	<article>{$modalStore[0]?.body ?? ''}</article>
	<!-- Enable for debugging: -->
	<!-- <pre>{JSON.stringify(formData, null, 2)}</pre> -->
	<form class="modal-form {cForm}">
		<label class="label">
			<span>Title</span>
			<input class={cInput} type="text" bind:value={formData.title} placeholder="Enter title..." />
		</label>
		<label class="label">
			<span>URL</span>
			<input class={cInput} type="tel" bind:value={formData.url} placeholder="Enter URL..." />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral} " on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Add</button>
    </footer>
</div>
