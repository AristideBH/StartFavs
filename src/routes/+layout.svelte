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
	import { drawerOpen } from '$lib/functions/menu';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		AddFavoriteModal: { ref: FavoriteForm }
	};
	$: classesSlot = $page.url.pathname === '/' ? '' : '';
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
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<AppShell
	regionPage="relative"
	slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64"
	slotPageFooter="py-2 px-4 dark:bg-surface-800 bg-surface-100"
>
	<svelte:fragment slot="header">
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

	<div class="container mx-auto w-full {classesSlot} px-4 py-6 flex flex-col gap-4">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
