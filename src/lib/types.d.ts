import type { ID, UserItem, UserType, } from '@directus/sdk';


type FavoritePost = {
    id?: ID;
    title: string;
    url: string,
    status: string,
    thumbnail: string
};

type TestCollec = {
    id: ID,
    status: string,
    sort: string,
    title: string,
    blocks: JSON,

}

declare type MyCollections = {
    favorites: FavoritePost;
    test: TestCollec
};

