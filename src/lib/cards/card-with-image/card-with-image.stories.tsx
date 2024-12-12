import type { Meta, StoryObj } from '@storybook/react';
import { CardWithImage } from '.';

const meta: Meta<typeof CardWithImage> = {
    title: 'UI/Cards/CardWithImage',
    component: CardWithImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardWithImage>;

export const Default: Story = {
    render: () => {
        return (
            <CardWithImage
                title="James Henry"
                subTitle="Driver"
                containerSx={{ width: '363px', height: '200px', gap: '16px' }}
                image="https://chirpwireless.io/images/footer/tim-lg.png"
            />
        );
    },
};
