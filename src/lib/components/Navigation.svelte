<script lang="ts">
	import { drawerClose } from '$lib/functions/menu';

	const menuItems = [
		{ url: '/', text: 'Homepage', openInNewTab: false },
		{ url: '/about', text: 'About', openInNewTab: false },
		{ url: '/', text: 'Contact', openInNewTab: false }
	];
</script>

<nav class="list-nav p-4">
	<ul>
		{#each menuItems as item}
			<li>
				<a href={item.url} on:click={drawerClose}> {item.text} </a>
			</li>
		{/each}
	</ul>
</nav>
