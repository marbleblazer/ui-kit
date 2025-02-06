import { Resource } from 'i18next';

import uiKit from './ui-kit.json';

export type MergedResources = {
    [key in keyof typeof uiKitModule]: (typeof uiKitModule)[key]['en'];
};

export { uiKit as uiKitLocaleModule };

export const uiKitModule = {
    uiKit,
};

export const mergedResources: Record<string, Resource> = {
    ...uiKitModule,
};
