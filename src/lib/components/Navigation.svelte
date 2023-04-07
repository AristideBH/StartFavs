<script lang="ts">
	import { page } from '$app/stores';
	import { drawerClose } from '$lib/functions/menu';

	const menuItems = [
		{ href: '/', text: 'Homepage', openInNewTab: false },
		{ href: '/about', text: 'About', openInNewTab: false },
		{ href: '/contact', text: 'Contact', openInNewTab: false }
	];
</script>

<nav class="list-nav p-4">
	<ul>
		{#each menuItems as { href, text }}
			<li>
				<a class:active={$page.url.pathname === href} {href} on:click={drawerClose}>
					{text}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	.active {
		@apply bg-primary-500 text-white;
	}
</style>
