import { DragIcon } from '@chirp/ui/assets/fleet-icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Stack, useTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Tooltip } from '../tooltip';
import { useTranslation } from 'react-i18next';

interface ISortableItemProps {
    id: string;
}

export const SortableItem: FC<PropsWithChildren<ISortableItemProps>> = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const { t } = useTranslation('uiKit');
    const theme = useTheme();

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Stack direction="row" alignItems="flex-end" gap={4} ref={setNodeRef} style={style}>
            <Box
                sx={{
                    '&:hover': {
                        svg: {
                            color: theme.palette.text.text4,
                        },
                    },
                }}
                {...attributes}
                {...listeners}
                style={{ cursor: 'grab', height: '40px' }}
            >
                <Tooltip title={t('Drag to reorder')}>
                    <DragIcon color={theme.palette.text.text8} />
                </Tooltip>
            </Box>
            {children}
        </Stack>
    );
};
