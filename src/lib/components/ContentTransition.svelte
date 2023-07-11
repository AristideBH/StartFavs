<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	export let trigger = '';

	let speed = 150;
	let distance = 15;
	$: classesSlot = $page.url.pathname === '/' ? '' : '';
</script>

{#key trigger}
	<div
		class="{classesSlot} flex flex-col gap-4 container mx-auto p-8 space-y-8"
		in:fly={{ duration: speed, delay: speed, y: distance }}
		out:fly={{ duration: speed, y: -distance }}
	>
		<slot />
	</div>
{/key}
