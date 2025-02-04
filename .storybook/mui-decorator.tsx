import { StoryContext, StoryFn } from '@storybook/react';

import '@chirp/ui/styles/style.scss';
import { ThemeProvider } from '@chirp/ui/styles/theme/theme-provider';
import { CssBaseline } from '@mui/material';
import '../src/locales/i18n';

const MuiDecorator = (StoryComponent: StoryFn, context: StoryContext) => {
    const theme = context.parameters.theme || context.globals.theme;
    return (
        <ThemeProvider mode={theme}>
            <CssBaseline />
            {StoryComponent(context.args, context)}
        </ThemeProvider>
    );
};

export default MuiDecorator;
