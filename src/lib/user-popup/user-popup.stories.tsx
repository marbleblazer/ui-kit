import type { Meta, StoryObj } from '@storybook/react';
import { UserPopup } from '@chirp/ui/lib';
import i18n, { languages } from '@chirp/ui/locales/i18n';
import { changeLanguage } from 'i18next';

const meta: Meta<typeof UserPopup> = {
    title: 'UI/UserPopup',
    component: UserPopup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserPopup>;

export const Default: Story = {
    render: () => {
        return (
            <UserPopup
                name="test@mail.ru"
                languageSelectorProps={{
                    currentLanguage: i18n.language,
                    languages: languages,
                    onChangeLanguage: changeLanguage,
                }}
            />
        );
    },
};
