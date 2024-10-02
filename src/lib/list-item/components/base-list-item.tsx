import { ListItemProps as MUIListItemProps, Stack } from '@mui/material';
import { FC } from 'react';
import * as S from '../style';
import { Checkbox, IChecboxProps } from '../../checkbox';
import { Typography } from '../../typogrpahy';

interface IListItemProps extends MUIListItemProps {
    title: string;
    subTitle?: string;
    checkobxProps?: Omit<IChecboxProps, 'label'>; // if undefined - no checkbox
}

export const BaseListItem: FC<IListItemProps> = ({ title, subTitle, checkobxProps, ...props }) => {
    return (
        <S.ListItem {...props}>
            <Stack direction="row" alignItems="center">
                {checkobxProps ? (
                    <Checkbox
                        formControlLabelProps={{
                            sx: {
                                padding: 0,
                                height: '24px',
                                mr: 0,
                            },
                        }}
                        {...checkobxProps}
                    />
                ) : null}
                <Stack alignItems="center">
                    <Typography variant="body1" color="text.primary">
                        {title}
                    </Typography>
                    {subTitle && (
                        <Typography
                            variant="caption"
                            sx={{
                                color: 'text.quaternary',
                            }}
                        >
                            {subTitle}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </S.ListItem>
    );
};
