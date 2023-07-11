<script lang="ts">
	import '../lib/theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { page } from '$app/stores';
	import {
		AppShell,
		AppBar,
		Drawer,
		Modal,
		LightSwitch,
		type ModalComponent,
		Toast
	} from '@skeletonlabs/skeleton';
	import Navigation from '$cpt/Navigation.svelte';
	import AddFavorite from '$src/lib/components/AddFavoriteButton.svelte';
	import FavoriteForm from '$cpt/FavoriteForm.svelte';
	import ContentTransition from '$cpt/ContentTransition.svelte';
	import { drawerOpen } from '$lib/functions/menu';
	import type { PageData } from './$types';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		AddFavoriteModal: { ref: FavoriteForm }
	};
	export let data: PageData;

	// $: ({ currentUser } = data);
</script>

<Modal
	width="w-modal-slim"
	components={modalComponentRegistry}
	buttonPositive="variant-filled-primary"
	buttonNeutral="variant-ghost-primary"
/>

<svelte:head>
	<title>StartFavs - Your startpage bookmark manager</title>
</svelte:head>

<Toast />

<Drawer>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<h2 class="p-4" tabindex="0">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell
	regionPage="relative"
	slotPageHeader="border-b border-surface-500/20"
	slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64 border-r border-surface-500/20"
>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-2" on:click={drawerOpen} title="Show menu">
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl tracking-wide">StartFavs</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<AddFavorite />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<ContentTransition pathname={data.pathName}>
		<!-- <pre>{JSON.stringify(data, undefined, 2)}</pre> -->
		<slot />
	</ContentTransition>
</AppShell>
