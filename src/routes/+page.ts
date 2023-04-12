import type { PageLoad } from './$types';
import { directusClient } from '$lib/directus';

export const load = (async () => {
    const favorites = await directusClient.items('favorites').readByQuery({
        limit: -1,
        filter: {
            status: {
                _eq: 'published'
            }
        }
    });
    return { favorites };
}) satisfies PageLoad;