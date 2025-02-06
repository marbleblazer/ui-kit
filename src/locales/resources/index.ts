import { Resource } from 'i18next';

import { languages } from '../languages';
import { MergedResources, mergedResources } from './merged-resourses';

const resources = Object.keys(languages).reduce((resource: Resource, lang: string) => {
    Object.keys(mergedResources).map((fileName) => {
        resource[lang] = {
            ...(resource[lang] ?? {}),
            [fileName]: mergedResources[fileName][lang],
        };
    });

    return resource;
}, {}) as Record<keyof typeof languages, MergedResources>;

export default resources;
