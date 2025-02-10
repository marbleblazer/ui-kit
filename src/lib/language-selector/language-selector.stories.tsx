import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector } from '@chirp/ui/lib';
import i18n, { languages } from '@chirp/ui/locales/i18n';
import { changeLanguage } from 'i18next';

const meta: Meta<typeof LanguageSelector> = {
    title: 'UI/LanguageSelector',
    component: LanguageSelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LanguageSelector>;

export const Default: Story = {
    render: () => {
        return (
            <>
                <LanguageSelector
                    currentLanguage={i18n.language}
                    languages={languages}
                    onChangeLanguage={changeLanguage}
                />
            </>
        );
    },
};
