import type { PageLoad } from './$types';
import { directusClient } from '$lib/directus';

export const load = (async () => {
    const tests = await directusClient.items('Test').readByQuery({
        limit: -1,
    });
    // console.log(tests);

    return { tests };
}) satisfies PageLoad;