import type { ID } from '@directus/sdk';

type FavoritePost = {
    id?: ID;
    title: string;
    url: string,
    status: string
};

declare type MyCollections = {
    favorites: FavoritePost;
};

