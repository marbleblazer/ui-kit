import type { Meta, StoryObj } from '@storybook/react';
import { Button, ImagePreview } from '@chirp/ui/lib';
import { useRef, useState } from 'react';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof ImagePreview> = {
    title: 'UI/ImagePreview',
    component: ImagePreview,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImagePreview>;

export const Default: Story = {
    render: () => {
        const [loadedState, setLoadedState] = useState(false);

        return (
            <ImagePreview
                title="Photo"
                subTitle="Drag and drop or choose 
    a device photo"
                onLoad={() => setLoadedState(true)}
                previewUrl={loadedState ? 'https://chirpwireless.io/images/footer/tim-lg.png' : ''}
                onRemove={() => setLoadedState(false)}
            />
        );
    },
};

export const WithPreview: Story = {
    render: () => <ImagePreview onLoad={console.log} previewUrl="https://chirpwireless.io/images/footer/tim-lg.png" />,
};

export const WithDeleteIcon: Story = {
    render: () => <ImagePreview onRemove={() => null} previewUrl="https://chirpwireless.io/images/footer/tim-lg.png" />,
};

export const TriggerByButton: Story = {
    render: () => {
        const inputRef = useRef<HTMLInputElement>(null);

        return (
            <Stack>
                <ImagePreview
                    onRemove={() => null}
                    inputRef={inputRef}
                    onLoad={console.log}
                    previewUrl="https://chirpwireless.io/images/footer/tim-lg.png"
                />
                <Button onClick={() => (console.log(inputRef.current), inputRef.current?.click())}>on upload</Button>
            </Stack>
        );
    },
};
