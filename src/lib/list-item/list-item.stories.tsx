import { List, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, ListItem, Typography } from '@chirp/ui/lib';
import { PenIcon, TrashIcon } from '@chirp/ui/assets/fleet-icons';

const meta: Meta<typeof ListItem> = {
    title: 'UI/ListItem',
    component: ListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof List>;

export const BaseListItem: Story = {
    render: () => (
        <List sx={{ width: '500px' }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    title={`Title item ${value}`}
                    subTitle={`Subtitle item ${value}`}
                    key={value}
                    secondaryAction={
                        <Stack direction={'row'}>
                            <IconButton variant="gray" aria-label="comment">
                                <PenIcon />
                            </IconButton>
                            <IconButton variant="gray" aria-label="comment">
                                <TrashIcon />
                            </IconButton>
                        </Stack>
                    }
                />
            ))}
        </List>
    ),
};
export const CheckableBaseListItem: Story = {
    render: () => (
        <List sx={{ width: '500px' }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    checkboxProps={{ variant: 'check' }}
                    title={`Title item ${value}`}
                    subTitle={`Subtitle item ${value}`}
                    key={value}
                    secondaryAction={
                        <Stack direction={'row'}>
                            <IconButton variant="gray" aria-label="comment">
                                <PenIcon />
                            </IconButton>
                            <IconButton variant="gray" aria-label="comment">
                                <TrashIcon />
                            </IconButton>
                        </Stack>
                    }
                />
            ))}
        </List>
    ),
};
export const VisibleBaseListItem: Story = {
    render: () => (
        <List sx={{ width: '500px' }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    checkboxProps={{ variant: 'visible' }}
                    title={`Title item ${value}`}
                    subTitle={`Subtitle item ${value}`}
                    key={value}
                    secondaryAction={
                        <Stack direction={'row'}>
                            <IconButton variant="gray" aria-label="comment">
                                <PenIcon />
                            </IconButton>
                            <IconButton variant="gray" aria-label="comment">
                                <TrashIcon />
                            </IconButton>
                        </Stack>
                    }
                />
            ))}
        </List>
    ),
};

export const AccordionListItem: Story = {
    render: () => (
        <List sx={{ width: '500px' }}>
            {[1, 2, 3, 4, 5].map((value) => (
                <ListItem.Accordion
                    title={`Title item ${value}`}
                    key={value}
                    secondaryAction={
                        <Stack
                            sx={{
                                height: '100%',
                            }}
                        >
                            <Stack direction={'row'}>
                                <IconButton size="small" variant="gray" aria-label="comment">
                                    <PenIcon />
                                </IconButton>
                                <IconButton size="small" variant="gray" aria-label="comment">
                                    <TrashIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    }
                >
                    <Typography
                        variant="caption12"
                        sx={{
                            color: 'text.text4',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </ListItem.Accordion>
            ))}
        </List>
    ),
};

export const AccordionListItemCheckbox: Story = {
    render: () => (
        <List sx={{ width: '500px' }}>
            {[1, 2, 3, 4, 5].map((value) => (
                <ListItem.Accordion
                    title={`Title item ${value}`}
                    key={value}
                    checkboxProps={{ variant: 'check' }}
                    secondaryAction={
                        <Stack
                            sx={{
                                height: '100%',
                            }}
                        >
                            <Stack direction={'row'}>
                                <IconButton size="small" variant="gray" aria-label="comment">
                                    <PenIcon />
                                </IconButton>
                                <IconButton size="small" variant="gray" aria-label="comment">
                                    <TrashIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    }
                >
                    <Typography
                        variant="caption12"
                        sx={{
                            color: 'text.text4',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </ListItem.Accordion>
            ))}
        </List>
    ),
};

export const AccordionListItemVisible: Story = {
    render: () => (
        <List sx={{ width: '500px' }}>
            {[1, 2, 3, 4, 5].map((value) => (
                <ListItem.Accordion
                    title={`Title item ${value}`}
                    key={value}
                    checkboxProps={{ variant: 'visible' }}
                    secondaryAction={
                        <Stack
                            sx={{
                                height: '100%',
                            }}
                        >
                            <Stack direction="row" sx={{ color: 'red' }}>
                                <IconButton size="small" variant="gray" aria-label="comment">
                                    <PenIcon />
                                </IconButton>
                                <IconButton size="small" variant="gray" aria-label="comment">
                                    <TrashIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                    }
                >
                    <Typography
                        variant="caption12"
                        sx={{
                            color: 'text.text4',
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </ListItem.Accordion>
            ))}
        </List>
    ),
};
