<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	export let pathname = '';

	let speed = 150;
	let distance = 15;
	$: classesSlot = $page.url.pathname === '/' ? '' : '';
</script>

{#key pathname}
	<div
		class="container mx-auto w-full {classesSlot} px-4 py-6 flex flex-col gap-4"
		in:fly={{ duration: speed, delay: speed, y: distance }}
		out:fly={{ duration: speed, y: -distance }}
	>
		<slot />
	</div>
{/key}
