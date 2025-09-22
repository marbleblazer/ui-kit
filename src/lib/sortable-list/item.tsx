import { DragIcon } from '@chirp/ui/assets/fleet-icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Stack, useTheme } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { Tooltip } from '../tooltip';
import { useTranslation } from 'react-i18next';

interface ISortableItemProps {
    id: string;
    disabled?: boolean;
    footer?: ReactNode;
}

export const SortableItem: FC<PropsWithChildren<ISortableItemProps>> = ({ id, children, footer, disabled }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id, disabled });
    const { t } = useTranslation('uiKit');
    const theme = useTheme();

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Stack gap={2} ref={setNodeRef} style={style}>
            <Stack direction="row" alignItems="flex-end" gap={4}>
                <Box
                    sx={{
                        '&:hover': {
                            svg: {
                                color: disabled ? theme.palette.text.text8 : theme.palette.text.text4,
                                cursor: disabled ? 'not-allowed' : 'grab',
                            },
                        },
                    }}
                    {...attributes}
                    {...listeners}
                    style={{ cursor: 'grab', height: '40px' }}
                >
                    {disabled ? (
                        <DragIcon color={theme.palette.text.text8} />
                    ) : (
                        <Tooltip title={t('Drag to reorder')}>
                            <DragIcon color={theme.palette.text.text8} />
                        </Tooltip>
                    )}
                </Box>
                {children}
            </Stack>
            {footer}
        </Stack>
    );
};
