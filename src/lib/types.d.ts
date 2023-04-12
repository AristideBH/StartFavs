import type { ID, UserItem, UserType } from '@directus/sdk';


type FavoritePost = {
    id?: ID;
    title: string;
    url: string,
    status: string,
    thumbnail: string
};

declare type MyCollections = {
    favorites: FavoritePost;
};

