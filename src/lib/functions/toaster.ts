import { toastStore } from '@skeletonlabs/skeleton';

export const onError = () => {
    toastStore.trigger({
        message: `Something wrong happened...`,
        background: 'variant-filled-error'
    });
};