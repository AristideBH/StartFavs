import type { LayoutServerLoad } from './$types';

export const load = (async ({ url }) => {
    return {
        pathName: url.pathname,
    };
}) satisfies LayoutServerLoad;