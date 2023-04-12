<script lang="ts">
	import { page } from '$app/stores';
	import { drawerClose } from '$lib/functions/menu';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getImageUrl } from '$lib/directus';
	import type { UserType } from '@directus/sdk';

	const menuItems = [
		{ href: '/', text: 'Homepage', openInNewTab: false },
		{ href: '/about', text: 'About', openInNewTab: false },
		{ href: '/contact', text: 'Contact', openInNewTab: false }
	];
	export let user: UserType;
</script>

<header
	class="p-4 flex gap-4 items-center sticky top-0 bg-surface-200-900-token border-b border-surface-500/20"
>
	<Avatar
		background="bg-surface-500"
		border="border-4 border-surface-300-600-token"
		src={getImageUrl(user.avatar)}
	/>
	<p>{user.first_name} {user.last_name}</p>
</header>

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
