import type { Preview } from '@storybook/react';
import MuiDecorator from './mui-decorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'light',
                    value: '#F9F9F9',
                },
                {
                    name: 'dark',
                    value: '#101010',
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [MuiDecorator],
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'dark',
        toolbar: {
            // The icon for the toolbar item
            icon: 'circlehollow',
            // Array of options
            items: [
                { value: 'light', icon: 'circlehollow', title: 'light' },
                { value: 'dark', icon: 'circle', title: 'dark' },
            ],
            // Property that specifies if the name of the item will be displayed
            showName: true,
        },
    },
};

export default preview;
