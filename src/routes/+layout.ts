import type { LayoutLoad } from './$types';
import { directusClient } from '$lib/directus';

export const load = (async ({ url }) => {
    const currentUser = await directusClient.users.me.read();
    return {
        currentUser,
        pathName: url.pathname
    };
}) satisfies LayoutLoad;