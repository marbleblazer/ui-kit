import { StoryContext, StoryFn } from '@storybook/react';

import '@chirp/ui/styles/style.scss';
import { ThemeProvider } from '@chirp/ui/styles/theme/theme-provider';

const MuiDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
    const theme = context.parameters.theme || context.globals.theme;
    return (
        <ThemeProvider mode={theme}>
            <StoryComponent />
        </ThemeProvider>
    );
};

export default MuiDecorator;
