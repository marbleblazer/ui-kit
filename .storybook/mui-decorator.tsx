import { ThemeProvider } from '@mui/material';
import { StoryContext, StoryFn } from '@storybook/react';
import { getTheme } from '@styles/theme/index';

import '@styles/style.scss';

const MuiDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
    const theme = context.parameters.theme || context.globals.theme;
    return (
        <ThemeProvider theme={getTheme(theme)}>
            <StoryComponent />
        </ThemeProvider>
    );
};

export default MuiDecorator;
