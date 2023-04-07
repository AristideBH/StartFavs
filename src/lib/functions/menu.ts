import { drawerStore } from '@skeletonlabs/skeleton';

const drawerOpen = (): void => {
    drawerStore.open({
        width: 'max-w-sm w-full'
    });
}
const drawerClose = (): void => {
    drawerStore.close();
}

export { drawerOpen, drawerClose }