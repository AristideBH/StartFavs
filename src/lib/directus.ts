import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
import { useDirectus, rest } from '@directus/sdk';

interface Test {
    id: string;
    status: string;
    sort: string;
    title: string;
    blocks: JSON;
}

interface Schema {
    Test: Test[];
}

const MAIL = import.meta.env.VITE_DIRECTUS_EMAIL;
const PASS = import.meta.env.VITE_DIRECTUS_PASSWORD;
const TOKEN = import.meta.env.VITE_DIRECTUS_TOKEN;

const client = useDirectus<Schema>(PUBLIC_DIRECTUS_URL).use(rest());

const getImageUrl = (id: string) => `${PUBLIC_DIRECTUS_URL}/assets/${id}`;

export { getImageUrl, client };


