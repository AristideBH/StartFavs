import type { LayoutLoad } from './$types';
// import { directusClient } from '$lib/directus';

import { client } from '$src/lib/directus';
import { readItems } from '@directus/sdk';

export const load = (async ({ url }) => {
    // cornst currentUser = await directusClient.users.me.read();
    const result = await client.request(readItems('Test'));
    return {
        // currentUser,
        result,
        pathName: url.pathname
    };
}) satisfies LayoutLoad;